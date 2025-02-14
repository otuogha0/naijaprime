"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartFakeData } from "@/constants";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 10,
          boxHeight: 10,
          color: "#9d9c9d",
          font: {
            family: "Arial",
            weight: "bold" as const,
            size: 14,
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <>
      <div className="w-[33rem] h-[14rem]">
        <Pie options={options} data={pieChartFakeData} />
      </div>
    </>
  );
};
