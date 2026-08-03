"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  TooltipItem,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CircleDollarSign, Briefcase, Percent } from "lucide-react";
import YearSelect from "@/components/customComponent/YearSelect";
import CustomExportButton from "@/components/customComponent/CustomExportButton";
import ExportModal from "@/components/modal/ExportModal";
import { averageReceiptTrendDataByYear } from "./data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function AverageReceiptTrendChart() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const activeData =
    averageReceiptTrendDataByYear[selectedYear] ||
    averageReceiptTrendDataByYear["2025"];

  const chartData = {
    labels: activeData.map((d) => d.month),
    datasets: [
      {
        label: "Revenue",
        data: activeData.map((d) => d.revenue),
        backgroundColor: "#22c55e",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Taxes",
        data: activeData.map((d) => d.taxes),
        backgroundColor: "#eab308",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
          font: { size: 12, weight: 500 },
        },
      },
      y: {
        grid: {
          color: "#f1f5f9",
        },
        border: {
          display: false,
          dash: [3, 3],
        },
        ticks: {
          color: "#94a3b8",
          font: { size: 12, weight: 500 },
          callback: function (value: string | number) {
            if (value === 0 || value === "0") return "€0";
            return `€${Number(value) / 1000}k`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#64748b",
        bodyColor: "#334155",
        borderColor: "#f1f5f9",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          title: (context: TooltipItem<"bar">[]) => {
            return `${context[0].label}, ${selectedYear}`;
          },
          label: (context: TooltipItem<"bar">) => {
            return `${context.dataset.label}: €${Number(context.raw).toLocaleString()}`;
          },
        },
      },
    },
  };

  const totalRevenue = activeData.reduce((sum, d) => sum + d.revenue, 0);
  const totalTaxes = activeData.reduce((sum, d) => sum + d.taxes, 0);
  const avgTaxPercent =
    totalRevenue > 0 ? Math.round((totalTaxes / totalRevenue) * 100) : 0;

  return (
    <div className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 mt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h3 className="text-base font-bold text-slate-800">
          Average Receipt Trend
        </h3>
        <div className="flex items-center gap-3">
          <YearSelect
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />
          <CustomExportButton
            label="Export Data"
            variant="outline"
            onClick={() => setIsExportModalOpen(true)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-8 mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
            <CircleDollarSign size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              € {totalRevenue.toLocaleString()}
            </h4>
            <span className="text-xs font-semibold text-slate-400">
              Revenue
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              € {totalTaxes.toLocaleString()}
            </h4>
            <span className="text-xs font-semibold text-slate-400">Taxes</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <Percent size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              {avgTaxPercent}%
            </h4>
            <span className="text-xs font-semibold text-slate-400">
              Avg. Tax %
            </span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <Bar data={chartData} options={options} />
      </div>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#22c55e]" />
          <span className="text-xs font-bold text-slate-500">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="text-xs font-bold text-slate-500">Taxes</span>
        </div>
      </div>

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title={`Average Receipt Trend Data - ${selectedYear}`}
      />
    </div>
  );
}
