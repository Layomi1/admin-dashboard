import "./bar-chart-box.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type BarChartProps = {
  title: string;
  dataKey: string;
  chartData: Object[];
  color: string;
};

const BarChartBox = ({ title, dataKey, chartData, color }: BarChartProps) => {
  return (
    <div className="bar-chart-box">
      <h1 className="title">{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
