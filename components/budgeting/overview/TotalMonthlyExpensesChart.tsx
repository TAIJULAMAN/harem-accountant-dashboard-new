"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArrowUpRight } from "lucide-react";
import { totalMonthlyExpensesData } from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  type TooltipItem,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip);

export function TotalMonthlyExpensesChart() {
  const chartData = {
    labels: totalMonthlyExpensesData.labels,
    datasets: [
      {
        data: totalMonthlyExpensesData.values,
        backgroundColor: totalMonthlyExpensesData.colors,
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) => ` €${(context.raw as number).toLocaleString()}`,
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm h-full justify-between gap-4">
      {/* Title */}
      <h3 className="text-sm font-bold text-slate-800 tracking-tight">Total Monthly Expenses</h3>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-2 flex-1 w-full">
        {/* Info Column */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left w-full">
          <span className="text-2xl sm:text-3xl font-black text-slate-800">€ 23,850</span>
          <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] font-bold text-kpi-teal-text mt-1.5">
            <ArrowUpRight size={14} />
            <span>+12.5%</span>
            <span className="text-slate-400 font-medium">(last month)</span>
          </div>
        </div>

        {/* Chart Column */}
        <div className="h-[140px] w-[140px] relative shrink-0">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>

      {/* Legends Wrap */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 border-t border-slate-50 pt-4">
        {totalMonthlyExpensesData.labels.map((label, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{ backgroundColor: totalMonthlyExpensesData.colors[idx] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
