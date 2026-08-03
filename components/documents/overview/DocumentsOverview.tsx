"use client";

import React, { useState } from "react";
import { getDocTypeData, getNoticesData } from "./data";
import MetricCards from "./MetricCards";
import DistributionDonut from "./DistributionDonut";
import ContractsDistributionChart from "./ContractsDistributionChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  TooltipItem,
  Plugin,
  ChartDataset,
} from "chart.js";

interface CustomDoughnutDataset extends ChartDataset<"doughnut"> {
  centerText?: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  beforeDraw(chart) {
    if ((chart.config as unknown as { type: string }).type !== "doughnut") return;
    const { ctx, data } = chart;
    const dataset = data.datasets[0] as CustomDoughnutDataset;
    const text = dataset.centerText;
    if (text) {
      ctx.save();
      const metaData = chart.getDatasetMeta(0).data[0] as ArcElement;
      const x = metaData.x;
      const y = metaData.y;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "500 24px Inter, sans-serif";
      ctx.fillStyle = "#334155";
      ctx.fillText(text, x, y);
      ctx.restore();
    }
  },
};

ChartJS.register(centerTextPlugin);

export default function DocumentsOverview() {
  const [docTypeFilter, setDocTypeFilter] = useState("Daily");
  const [noticesFilter, setNoticesFilter] = useState("Daily");

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "start" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 24,
          boxWidth: 6,
          boxHeight: 6,
          font: {
            size: 11,
            family: "Inter, sans-serif",
            weight: 500,
          },
          color: "#64748b",
        },
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) =>
            ` ${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          Documents Overview
        </h1>
      </div>
      <MetricCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DistributionDonut
          title="Document Type Distribution"
          data={getDocTypeData(docTypeFilter)}
          options={doughnutOptions}
          filter={docTypeFilter}
          setFilter={setDocTypeFilter}
        />
        <DistributionDonut
          title="Employee Notices Distribution"
          data={getNoticesData(noticesFilter)}
          options={doughnutOptions}
          filter={noticesFilter}
          setFilter={setNoticesFilter}
        />
      </div>
      <ContractsDistributionChart />
    </div>
  );
}
