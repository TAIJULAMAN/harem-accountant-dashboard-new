"use client";

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { expensesMacroCategoriesDataByFilter } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  type TooltipItem,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip);

export function ExpensesMacroCategoriesChart() {
  const [filter, setFilter] = useState("Daily");
  const activeData = expensesMacroCategoriesDataByFilter[filter as keyof typeof expensesMacroCategoriesDataByFilter] || expensesMacroCategoriesDataByFilter.Daily;

  const chartData = {
    labels: activeData.labels,
    datasets: [
      {
        data: activeData.values,
        backgroundColor: activeData.colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) => ` €${(context.raw as number).toLocaleString()}`,
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm h-[320px] justify-between gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Expenses per Macro-categories</h3>
        <CustomSelect value={filter} onChange={setFilter} options={["Daily", "Weekly", "Monthly"]} />
      </div>
      <div className="h-[140px] w-full relative flex items-center justify-center">
        <div className="h-[140px] w-[140px]">
          <Doughnut key={filter} data={chartData} options={options} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 border-t border-slate-50 pt-3">
        {activeData.labels.map((label, idx) => (
          <div key={idx} className="flex items-center gap-1 text-[9px] font-bold text-slate-500">
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{ backgroundColor: activeData.colors[idx] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
