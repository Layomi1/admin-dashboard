import BarChartBox from "../../components/bar-chart-box/Bar-chart-box";
import BigChartBox from "../../components/big-chart-box/Big-chart-box";
import ChartBox from "../../components/chart-box/Chart-box";
import PieChartBox from "../../components/pie-chart-box/Pie-chart-box";
import TopBox from "../../components/top-box/Top-box";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box-1">
        <TopBox />
      </div>
      <div className="box box-2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box-4">
        <PieChartBox />
      </div>
      <div className="box box-5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box-6">
        <ChartBox {...chartBoxConversion} />
      </div>

      <div className="box box-7">
        <BigChartBox />
      </div>
      <div className="box box-8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box-9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
