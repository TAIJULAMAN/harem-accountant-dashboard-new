"use client";

import React from "react";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  Euro,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { kpiCardsData } from "./data";

export default function BudgetingKPICards() {
  const getIcon = (type: string) => {
    switch (type) {
      case "purple":
        return <Wallet size={20} className="text-kpi-purple-text" />;
      case "pink":
        return <TrendingUp size={20} className="text-kpi-pink-text" />;
      case "teal":
        return <CreditCard size={20} className="text-kpi-teal-text" />;
      case "yellow":
        return <Euro size={20} className="text-kpi-yellow-text" />;
      default:
        return <Wallet size={20} className="text-brand" />;
    }
  };

  const getConfig = (type: string) => {
    switch (type) {
      case "purple":
        return { gradientColor: "#7048e8", iconBg: "bg-kpi-purple-icon-bg" };
      case "pink":
        return { gradientColor: "#e64980", iconBg: "bg-kpi-pink-icon-bg" };
      case "teal":
        return { gradientColor: "#0ca678", iconBg: "bg-kpi-teal-icon-bg" };
      case "yellow":
        return { gradientColor: "#d97706", iconBg: "bg-kpi-yellow-icon-bg" };
      default:
        return { gradientColor: "#5c60f5", iconBg: "bg-slate-100" };
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {kpiCardsData.map((card, idx) => {
        const config = getConfig(card.colorType);
        const isUp = card.trendType === "up";
        const isDown = card.trendType === "down";

        return (
          <div
            key={idx}
            className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{
              background: `linear-gradient(180deg, ${config.gradientColor}18 0%, ${config.gradientColor}04 100%)`,
            }}
          >
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm ${config.iconBg}`}
              >
                {getIcon(card.colorType)}
              </div>
              <span className="text-base font-semibold text-slate-700 tracking-tight leading-snug">
                {card.title}
              </span>
            </div>

            {/* Content: Value + Stats */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-800 leading-none">
                {card.value}
              </h3>

              <div className="mt-4 flex flex-col gap-0.5">
                {card.trendType !== "neutral" ? (
                  <>
                    <span className="text-xs font-semibold">
                      {isUp && (
                        <span className="flex items-center gap-0.5 text-kpi-teal-text">
                          <ArrowUpRight size={14} className="shrink-0" />
                          {card.trend}
                        </span>
                      )}
                      {isDown && (
                        <span className="flex items-center gap-0.5 text-status-high-text">
                          <ArrowDownRight size={14} className="shrink-0" />
                          {card.trend}
                        </span>
                      )}
                    </span>
                    {card.subtitle && (
                      <span className="text-[11px] font-semibold text-slate-400 mt-1">
                        {card.subtitle}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-xs font-semibold text-slate-500 truncate block">
                    {card.trend}
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
