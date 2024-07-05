"use client";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function LineChartDemo() {
  const [series] = useState([
    {
      name: "Jumlah Orang",
      data: [0, 6000, 12000, 13000, 14000, 16000, 0],
    },
  ]);
  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      stacked: true,
    },
    colors: ["#A12F06", "#A12F06", "#A12F06", "#A12F06", "#A12F06"], // Example colors
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: [
        "",
        "Kurang Dari RM1,500",
        "RM1,501 - RM3,000",
        "RM3,001 - RM5,000",
        "RM5,001-RM12,000",
        "RM12,001 Ke atas",
        "",
      ],
      title: {
        text: "Kategori Pendapatan",
        align: "left",
        style: {
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 18000,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: true,
            showForSingleSeries: true,
          },
        },
      },
    ],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
  });
  return (
    <div className="flex-1">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={550}
      />
    </div>
  );
}

export default LineChartDemo;
