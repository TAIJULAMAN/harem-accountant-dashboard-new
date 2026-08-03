"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { TooltipItem } from "chart.js";
import CustomSelect from "@/components/customComponent/CustomSelect";
import { getContractsData } from "./data";

export default function ContractsDistributionChart() {
  const [filter, setFilter] = useState("Daily");

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        filter: (tooltipItem: TooltipItem<"bar">) => tooltipItem.datasetIndex === 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: {
            size: 10,
            family: "Inter, sans-serif",
          },
          color: "#94a3b8",
          padding: 10,
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
            family: "Inter, sans-serif",
          },
          color: "#94a3b8",
          padding: 15,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-4 sm:p-6 flex flex-col h-[380px] sm:h-[460px]">
      <div className="flex flex-row items-center justify-between mb-4 sm:mb-8 gap-2">
        <h2 className="text-[13px] sm:text-[14px] font-bold text-slate-700 truncate">
          Contracts Distribution
        </h2>
        <div className="w-[120px] sm:w-[130px] shrink-0">
          <CustomSelect
            value={filter}
            options={["Daily", "Weekly", "Monthly"]}
            onChange={setFilter}
          />
        </div>
      </div>
      <div className="flex-1 relative pb-2 px-1 sm:px-6 min-h-0">
        <Bar data={getContractsData(filter)} options={barOptions} />
      </div>
    </div>
  );
}
