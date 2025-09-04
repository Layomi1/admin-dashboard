import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Add = (props: Props) => {
  const [formData, setFormData] = useState<
    Record<string, string | number | boolean>
  >({
    id: Date.now(),
    lastName: "",
    firstName: "",
    email: "",
    createdAt: "",
    phone: "",
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData: Record<string, string | number | boolean>) => {
      const res = await fetch(`http://localhost:8800/api/${props.slug}s`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to create");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${props.slug}s`] });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newData = {
      ...formData,
      id: Date.now(),
    };

    mutation.mutate(newData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`all${props.slug}s`] });
        props.setOpen(false);
      },
    });
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          x
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => {
              let inputType = "text";
              if (column.type === "number") inputType = "number";
              if (column.type === "boolean") inputType = "checkbox";

              return (
                <div className="item" key={column.field}>
                  <label htmlFor={column.field}>{column.field}</label>
                  <input
                    name={column.field}
                    type={inputType}
                    placeholder={column.field}
                    value={
                      inputType === "checkbox"
                        ? undefined
                        : (formData[column.field] as
                            | string
                            | number
                            | undefined) ?? ""
                    }
                    checked={
                      inputType === "checkbox"
                        ? Boolean(formData[column.field])
                        : undefined
                    }
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
