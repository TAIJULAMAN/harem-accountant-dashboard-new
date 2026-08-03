"use client";

import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import {
  trendsData,
  employeePerformanceData,
  requestedServicesData,
  revenueDistributionData,
} from "./data";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// Center text plugin for Donut Charts
const centerTextPlugin = {
  id: "centerTextIncome",
  beforeDraw(chart: any) {
    if (chart.config.type !== "doughnut") return;
    const { ctx, data } = chart;
    const centerText = data.datasets[0].centerText;
    if (centerText) {
      ctx.save();
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Top row label
      ctx.font = "bold 9px Inter, sans-serif";
      ctx.fillStyle = "#94a3b8"; // slate-400
      ctx.fillText(centerText.label, x, y - 8);

      // Bottom row value
      ctx.font = "black 14px Inter, sans-serif";
      ctx.fillStyle = "#1e293b"; // slate-800
      ctx.fillText(centerText.value, x, y + 8);
      
      ctx.restore();
    }
  },
};

ChartJS.register(centerTextPlugin);

interface ChartProps {
  filter: string;
}

// 1. Last 7 Days Trends Chart (Line Chart)
export function Last7DaysTrendsChart({ filter }: ChartProps) {
  const chartData = {
    labels: trendsData.labels,
    datasets: [
      {
        label: "Revenue",
        data: trendsData.values,
        borderColor: "#10b981", // green/cyan
        backgroundColor: "rgba(16, 185, 129, 0.05)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#10b981",
        pointBorderWidth: 2,
        pointRadius: (context: any) => (context.dataIndex === 6 ? 6 : 0), // Highlight July
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
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
        grid: { color: "#f8fafc" },
        border: { display: false },
        ticks: {
          color: "#94a3b8",
          font: { size: 9, weight: 700 },
          callback: (value: any) => {
            if (value === 0) return "€ 0";
            return `€ ${value / 1000}k`;
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#94a3b8",
        titleFont: { size: 9, weight: 700 },
        bodyColor: "#ffffff",
        bodyFont: { size: 10, weight: 800 },
        padding: 8,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          title: (context: any) => {
            const idx = context[0].dataIndex;
            return `Jul 2025`; // Match tooltip on screenshot
          },
          label: (context: any) => {
            return `Total: € 3.5K`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="text-left">
        <h3 className="text-sm font-black text-slate-800">Last 7 Days Trends</h3>
        <span className="text-[10px] font-bold text-slate-400">Last 12 Months</span>
      </div>
      <div className="h-64 relative w-full">
        {/* Static Tooltip matching screenshot exactly */}
        <div className="absolute left-[53%] sm:left-[54%] top-[34%] sm:top-[38%] bg-[#1e293b] text-white rounded-lg px-2.5 py-1.5 shadow-lg pointer-events-none select-none z-10 flex flex-col gap-0.5 text-left text-[9px] font-bold">
          <span className="text-[#94a3b8]">Jul 2025</span>
          <span className="flex items-center gap-1 font-extrabold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            Total: € 3.5K
          </span>
        </div>
        <Line key={filter} data={chartData} options={options as any} />
      </div>
    </div>
  );
}

// 2. Employee Performance Chart (Bar Chart)
export function EmployeePerformanceChart({ filter }: ChartProps) {
  const chartData = {
    labels: employeePerformanceData.labels,
    datasets: [
      {
        label: "Performance",
        data: employeePerformanceData.values,
        backgroundColor: "#5c60f5", // blue/purple
        borderRadius: 5,
        borderSkipped: false,
        maxBarThickness: 16,
      },
    ],
  };

  const options = {
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
        min: 0,
        max: 400,
        grid: { color: "#f8fafc" },
        border: { display: false },
        ticks: {
          stepSize: 100,
          color: "#94a3b8",
          font: { size: 9, weight: 700 },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#94a3b8",
        titleFont: { size: 9, weight: 700 },
        bodyColor: "#ffffff",
        bodyFont: { size: 10, weight: 800 },
        padding: 8,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="text-left">
        <h3 className="text-sm font-black text-slate-800">Employee Performance</h3>
        <span className="text-[10px] font-bold text-slate-400">Total accounted orders</span>
      </div>
      <div className="h-64 relative w-full">
        <Bar key={filter} data={chartData} options={options as any} />
      </div>
    </div>
  );
}

// 3. Most Requested Services Chart (Doughnut Chart)
export function MostRequestedServicesChart({ filter }: ChartProps) {
  const chartData = {
    labels: requestedServicesData.labels,
    datasets: [
      {
        data: requestedServicesData.values,
        backgroundColor: requestedServicesData.colors,
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        padding: 8,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="text-left">
        <h3 className="text-sm font-black text-slate-800">Most Requested Services</h3>
        <span className="text-[10px] font-bold text-slate-400">Total bookings split</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
        <div className="h-44 w-44 relative shrink-0">
          <Doughnut key={filter} data={chartData} options={options} />
        </div>
        {/* Multicolored legends underneath or alongside */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-left w-full max-w-[240px]">
          {requestedServicesData.labels.map((lbl, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: requestedServicesData.colors[idx] }}
              />
              <span className="text-[10px] font-extrabold text-slate-600 truncate">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. Revenue Distribution Chart (Doughnut Chart)
export function RevenueDistributionChart({ filter }: ChartProps) {
  const chartData = {
    labels: revenueDistributionData.labels,
    datasets: [
      {
        data: revenueDistributionData.values,
        backgroundColor: revenueDistributionData.colors,
        borderWidth: 0,
        cutout: "75%",
        centerText: {
          label: "Total",
          value: "€ 0", // Match screenshot's € 0
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        padding: 8,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="text-left">
        <h3 className="text-sm font-black text-slate-800">Revenue Distribution</h3>
        <span className="text-[10px] font-bold text-slate-400">Split by type</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
        <div className="h-44 w-44 relative shrink-0">
          <Doughnut key={filter} data={chartData} options={options} />
        </div>
        {/* Legends */}
        <div className="flex flex-col gap-2.5 text-left w-full max-w-[200px]">
          {revenueDistributionData.labels.map((lbl, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: revenueDistributionData.colors[idx] }}
              />
              <span className="text-[10px] font-extrabold text-slate-600 truncate">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
