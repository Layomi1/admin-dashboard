import { Link } from "react-router-dom";
import "./chart-box.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartBoxProps = {
  title: string;
  icon: string;
  number: number | string;
  color: string;
  percentage: number;
  dataKey: string;
  chartData: Object[];
};

const ChartBox = ({
  icon,
  title,
  number,
  percentage,
  color,
  chartData,
  dataKey,
}: ChartBoxProps) => {
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color: color }}>
          View all{" "}
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className=" percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
