"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { salonExpensesDataByFilter } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type TooltipItem,
  type ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function SalonExpensesChart() {
  const [filter, setFilter] = useState("Daily");
  const activeData = salonExpensesDataByFilter[filter as keyof typeof salonExpensesDataByFilter] || salonExpensesDataByFilter.Daily;

  const chartData = {
    labels: activeData.labels,
    datasets: [
      {
        data: activeData.values,
        backgroundColor: "#5c60f5",
        borderRadius: 5,
        maxBarThickness: 20,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#94a3b8",
          font: { size: 9, weight: 700 },
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"bar">) => ` €${(context.raw as number).toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm h-[320px] justify-between gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Salon Expenses</h3>
        <CustomSelect value={filter} onChange={setFilter} options={["Daily", "Weekly", "Monthly"]} />
      </div>
      <div className="h-[220px] sm:h-[240px] w-full min-w-0">
        <Bar key={filter} data={chartData} options={options} />
      </div>
    </div>
  );
}
