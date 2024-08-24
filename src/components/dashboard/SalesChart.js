import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const ReturnRatesChart = () => {
  const chartOptions = {
    series: [
      {
        name: "Tops",
        data: [0, 10, 15, 12, 20, 18, 25, 22],
      },
      {
        name: "Bottoms",
        data: [0, 5, 20, 25, 15, 22, 30, 27],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
      yaxis: {
        title: {
          text: "Return Rate (%)",
        },
      },
      tooltip: {
        x: {
          format: "MMM",
        },
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Return Rates Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Monthly Return Rates Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartOptions.options}
          series={chartOptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default ReturnRatesChart;
