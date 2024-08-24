import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Chart from "react-apexcharts";

const accuracyData = [
  {
    title: "Model A",
    value: 80, // Accuracy percentage
    color: "#FF4560", // Color for the chart
  },
  {
    title: "Model B",
    value: 70,
    color: "#00E396",
  },
  {
    title: "Model C",
    value: 90,
    color: "#008FFB",
  },
  {
    title: "Model D",
    value: 85,
    color: "#FEB019",
  },
  {
    title: "Model E",
    value: 75,
    color: "#FF66C4",
  },
];

const Feeds = () => {
  const [selectedModel, setSelectedModel] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const filterData = () => {
    if (selectedModel === "All") {
      return accuracyData;
    }
    return accuracyData.filter(data => data.title === selectedModel);
  };

  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: filterData().map(data => data.title),
    colors: filterData().map(data => data.color),
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = filterData().map(data => data.value);

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Model Accuracy</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Accuracy distribution of different models
        </CardSubtitle>

        {/* Dropdown for selecting models */}
        <div className="mb-3">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              {selectedModel === "All" ? "Show All Models" : selectedModel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedModel("All")}>Show All Models</DropdownItem>
              {accuracyData.map((model, index) => (
                <DropdownItem key={index} onClick={() => setSelectedModel(model.title)}>
                  {model.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="mt-4">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="pie"
            width="100%"
            height="373"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Feeds;
