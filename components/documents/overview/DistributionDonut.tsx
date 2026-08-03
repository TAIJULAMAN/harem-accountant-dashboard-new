"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import CustomSelect from "@/components/customComponent/CustomSelect";

interface DistributionDonutProps {
  title: string;
  data: ChartData<"doughnut">;
  options: ChartOptions<"doughnut">;
  filter: string;
  setFilter: (val: string) => void;
}

export default function DistributionDonut({
  title,
  data,
  options,
  filter,
  setFilter,
}: DistributionDonutProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-4 sm:p-6 flex flex-col h-[380px] sm:h-[420px] w-full">
      <div className="flex flex-row items-center justify-between mb-4 sm:mb-8 gap-2">
        <h2 className="text-[13px] sm:text-[14px] font-bold text-slate-700 truncate">
          {title}
        </h2>
        <div className="w-[120px] sm:w-[130px] shrink-0">
          <CustomSelect
            value={filter}
            options={["Daily", "Weekly", "Monthly"]}
            onChange={setFilter}
          />
        </div>
      </div>
      <div className="flex-1 relative pb-2 sm:pb-6 px-1 sm:px-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
