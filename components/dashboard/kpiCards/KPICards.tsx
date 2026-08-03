"use client";

import React from "react";
import Image from "next/image";
import { kpiDataBySalon, defaultKpiData } from "./data";

interface KPICardsProps {
  selectedSalon: string;
}

export default function KPICards({ selectedSalon }: KPICardsProps) {
  const stats = kpiDataBySalon[selectedSalon] || defaultKpiData;

  const renderIcon = (
    type: "salaries" | "taxes" | "deadlines" | "warnings",
  ) => {
    switch (type) {
      case "salaries":
        return (
          <Image
            src="/icons/SalariesPendingApproval.svg"
            alt="Salaries Pending Approval"
            width={24}
            height={24}
          />
        );
      case "taxes":
        return (
          <Image
            src="/icons/TaxesPendingApproval.svg"
            alt="Taxes Pending Approval"
            width={24}
            height={24}
          />
        );
      case "deadlines":
        return (
          <Image
            src="/icons/UpcomingDeadlines.svg"
            alt="Upcoming Deadlines"
            width={24}
            height={24}
          />
        );
      case "warnings":
        return (
          <Image
            src="/icons/BudgetWarnings.svg"
            alt="Budget Warnings"
            width={24}
            height={24}
          />
        );
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => {
        return (
          <div
            key={idx}
            className={`
              relative flex flex-col justify-between overflow-hidden rounded-xl border p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md
              ${stat.bgClass}
            `}
          >
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden ${stat.iconBgClass} shadow-sm`}
              >
                {renderIcon(stat.iconType)}
              </div>
              <span className="text-lg font-semibold text-slate-700 tracking-tight leading-snug">
                {stat.title}
              </span>
            </div>

            {/* Content: Value + Stats info */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 leading-none">
                {stat.value}
              </h3>

              <div className="mt-4 flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-slate-800">
                  {stat.subtext}
                </span>
                {stat.change && (
                  <span className="text-xs font-semibold text-slate-400 mt-1">
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
