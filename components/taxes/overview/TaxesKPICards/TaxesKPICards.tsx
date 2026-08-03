"use client";

import React from "react";
import { getTaxesMetrics, taxesKPICardsConfig } from "./data";

export default function TaxesKPICards() {
  const metrics = getTaxesMetrics();

  const formatValue = (key: string, value: number | string): string => {
    if (key === "totalPaid") {
      return `€ ${(value as number).toLocaleString()}`;
    }
    if (key === "avgApprovalTime") {
      return `${value} days`;
    }
    return value.toString();
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {taxesKPICardsConfig.map((card, idx) => {
        const rawValue = metrics[card.metricKey as keyof typeof metrics];
        const displayValue = formatValue(card.metricKey, rawValue);
        const Icon = card.icon;

        return (
          <div
            key={idx}
            className={`relative flex flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            style={{
              background: `linear-gradient(180deg, ${card.gradientColor}21 0%, ${card.gradientColor}08 100%)`,
            }}
          >
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm ${card.iconBg}`}
              >
                <Icon className="text-white h-5 w-5" />
              </div>
              <span className="text-[13px] font-bold text-slate-700 tracking-tight leading-snug">
                {card.title}
              </span>
            </div>

            {/* Content: Value + Stats */}
            <div className="mt-8">
              <h3 className="text-[38px] font-bold tracking-tight text-slate-800 leading-none">
                {displayValue}
              </h3>

              <div className="mt-4 flex flex-col gap-0.5">
                <span className="text-[12px] font-bold text-slate-800">
                  {card.subtext}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
