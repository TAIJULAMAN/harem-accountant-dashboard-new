"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { dailySpendingTrendsDataByFilter } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type TooltipItem,
  type ScriptableContext,
  type ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function DailySpendingTrendsChart() {
  const [filter, setFilter] = useState("Daily");
  const activeData = dailySpendingTrendsDataByFilter[filter as keyof typeof dailySpendingTrendsDataByFilter] || dailySpendingTrendsDataByFilter.Daily;
  
  const chartData = {
    labels: activeData.labels,
    datasets: [
      {
        label: "Total Spending",
        data: activeData.values,
        backgroundColor: (context: ScriptableContext<"bar">) => {
          // Highlight Wednesday (index 3) if Daily, else highlight the last bar
          const highlightIdx = filter === "Daily" ? 3 : activeData.values.length - 1;
          return context.dataIndex === highlightIdx ? "#5c60f5" : "#e0e7ff";
        },
        borderRadius: 5,
        borderSkipped: false,
        maxBarThickness: filter === "Monthly" ? 18 : 32,
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
          callback: (value: string | number) => {
            if (Number(value) === 0) return "€ 0";
            return `€ ${Number(value) / 1000}k`;
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#94a3b8",
        titleFont: { size: 10, weight: 700 },
        bodyColor: "#ffffff",
        bodyFont: { size: 11, weight: 800 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (context: TooltipItem<"bar">[]) => {
            const idx = context[0].dataIndex;
            return activeData.labels[idx];
          },
          label: (context: TooltipItem<"bar">) => {
            const val = context.raw as number;
            return `Total Spending: €${val.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm w-full h-[360px] justify-between gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Daily Spending Trends</h3>
        <CustomSelect value={filter} onChange={setFilter} options={["Daily", "Weekly", "Monthly"]} />
      </div>
      {/* Fixed height w-full container ensures Chart.js canvas calculates sizes correctly & remains responsive */}
      <div className="h-[260px] sm:h-[280px] w-full min-w-0">
        <Bar key={filter} data={chartData} options={options} />
      </div>
    </div>
  );
}
