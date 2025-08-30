import "./single.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: Object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };

  activities?: {
    time: string;
    text: string;
  }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="top-info">
            {props.img && <img src={props.img} alt={props.title} />}

            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="item-title">{item[0]} </span>
                <span className="item-value">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          {props.chart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          {props.activities &&
            props.activities.map((activity) => (
              <li key={activity.text}>
                {" "}
                <div>
                  <p>{activity.text} </p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
