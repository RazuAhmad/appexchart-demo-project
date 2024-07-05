"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

function PieChartDemo() {
  const [series] = React.useState([5, 12, 30, 22, 18, 8, 5]);
  const [options] = React.useState({
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Tiada Sijil/Pendidikan Formal",
      "UPSR",
      "SPM",
      "Sijil/Diploma",
      "Sarjana Muda (Degree)",
      "Sarjana (Master)",
      "Sarjana Kedoktoran (PHD)",
    ],

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
            showForSingleSeries: false,
          },
        },
      },
    ],
    dataLabels: {
      legend: {
        show: false,
      },
    },
    colors: [
      "#9B631D",
      "#FFD100",
      "#85837A",
      "#E56E07",
      "#F94301",
      "#682E19",
      "#E8E8E8",
    ],
  });

  return (
    <div className="flex-1 mb-12">
      <h1 className="text-gray-500 underline font-bold text-xl mb-2">
        TARAF PENDIDIKAN
      </h1>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={480}
        height={500}
      />
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-yellow-300"></div>
          <label htmlFor="bawah">Bawah 20 tahun</label>
        </div>

        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-orange-500"></div>
          <label htmlFor="bawah">31-40 Tahun</label>
        </div>

        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-orange-950"></div>
          <label htmlFor="bawah">51-60 tahun</label>
        </div>

        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-black"></div>
          <label htmlFor="bawah">21-30 Tahun</label>
        </div>

        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-slate-400"></div>
          <label htmlFor="bawah">41-50 Tahun</label>
        </div>

        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 bg-gray-500"></div>
          <label htmlFor="bawah">61 Tahun dan Keatas</label>
        </div>
      </div>
    </div>
  );
}

export default PieChartDemo;
