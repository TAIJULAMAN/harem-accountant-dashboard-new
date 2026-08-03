"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { expensesSupplierDataByFilter } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function ExpensesSupplierChart() {
  const [filter, setFilter] = useState("Daily");
  const activeData = expensesSupplierDataByFilter[filter as keyof typeof expensesSupplierDataByFilter] || expensesSupplierDataByFilter.Daily;

  const chartData = {
    labels: activeData.labels,
    datasets: [
      {
        data: activeData.values,
        backgroundColor: "#5c60f5",
        borderRadius: 5,
        maxBarThickness: 28,
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
          font: { size: 10, weight: 700 },
        },
      },
      y: {
        grid: { color: "#f8fafc" },
        border: { display: false },
        ticks: {
          color: "#94a3b8",
          font: { size: 10, weight: 700 },
          callback: (value: string | number) => `€ ${Number(value) / 1000}k`,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm h-[340px] justify-between gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Expenses per Supplier</h3>
        <CustomSelect value={filter} onChange={setFilter} options={["Daily", "Weekly", "Monthly"]} />
      </div>
      <div className="h-[240px] sm:h-[260px] w-full min-w-0">
        <Bar key={filter} data={chartData} options={options} />
      </div>
    </div>
  );
}
