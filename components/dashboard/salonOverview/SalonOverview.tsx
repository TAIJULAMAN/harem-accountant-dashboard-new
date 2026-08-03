"use client";

import React from "react";
import { Store } from "lucide-react";
import { salonsData } from "@/components/dashboard/salonOverview/data";

export default function SalonOverview() {
  return (
    <div className="flex flex-col h-full rounded-xl border border-slate-100 bg-white p-5 sm:p-7.5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
          Salon Overview
        </h3>
        <button className="border border-brand text-brand hover:bg-brand hover:text-white rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer">
          View All
        </button>
      </div>

      {/* Salons List */}
      <div className="flex-1 space-y-4.5 overflow-y-auto pr-1">
        {salonsData.map((salon, index) => {
          const isOverBudget = salon.status === "Over Budget";

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[18px] border border-slate-100 p-4 bg-white hover:border-slate-200/80 transition-all duration-200"
            >
              {/* Left Side: Store Icon & Name, plus Mobile Status Badge */}
              <div className="flex items-center justify-between sm:justify-start gap-3.5 w-full sm:w-auto">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${salon.iconBg} ${salon.iconColor}`}
                  >
                    <Store size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                    {salon.name}
                  </h4>
                </div>

                {/* Mobile Status Badge */}
                <div className="sm:hidden">
                  <span
                    className={`
                      inline-block rounded-full px-2 py-1 text-xs font-semibold text-center
                      ${
                        isOverBudget
                          ? "bg-[#ffe8ec] text-[#ff4b72]"
                          : "bg-[#e2f9f0] text-[#20c997]"
                      }
                    `}
                  >
                    {salon.status}
                  </span>
                </div>
              </div>

              {/* Center & Right Sides: Columns & Badge */}
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 w-full sm:w-auto border-t border-slate-50 pt-3 sm:border-none sm:pt-0">
                {/* Column 1: Pending Salaries */}
                <div className="flex flex-col items-start sm:items-center min-w-0 sm:min-w-[76px] flex-1 sm:flex-none">
                  <span className="text-sm font-bold text-slate-800">
                    {salon.pendingSalaries}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 mt-1 whitespace-nowrap">
                    Pending Salaries
                  </span>
                </div>

                {/* Column 2: Pending Taxes */}
                <div className="flex flex-col items-start sm:items-center min-w-0 sm:min-w-[70px] flex-1 sm:flex-none">
                  <span className="text-sm font-bold text-slate-800">
                    {salon.pendingTaxes}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 mt-1 whitespace-nowrap">
                    Pending Taxes
                  </span>
                </div>

                {/* Desktop Status Badge */}
                <div className="hidden sm:block min-w-[90px] text-right">
                  <span
                    className={`
                      inline-block rounded-full px-3 py-1 text-[10px] font-bold text-center w-full
                      ${
                        isOverBudget
                          ? "bg-[#ffe8ec] text-[#ff4b72]"
                          : "bg-[#e2f9f0] text-[#20c997]"
                      }
                    `}
                  >
                    {salon.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
