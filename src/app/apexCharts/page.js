"use client";

import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";
import { monthsArray, chartSaleData } from "../constants/page";
const App = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        // height: 500,
      },
      xaxis: {
        categories: monthsArray,
        style: {
          colors: [
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
            "#3366CC",
          ],
        },
      },
      yaxis: { show: false },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false,
          },
          columnWidth: 60, // Adjust the width as needed
          borderRadius: 10,
        },
      },
      grid: {
        borderColor: "#CCCCCC", // Set the border color to gray or any color you prefer
        strokeDashArray: 4, // Optional: Add a dashed appearance
      },
      colors: [
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
        "#DF7C82",
      ],
    },
    series: [
      {
        name: "series-1",
        data: chartSaleData,
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <Card bordered>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="1000"
          />
        </Card>
      </div>
    </div>
  );
};

export default App;
