"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { declinedSalariesData } from "./data";

export default function RecentlyDeclinedSalaries() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
          Recently Declined Salaries
        </h3>
        <button className="border border-brand text-brand rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer">
          View All
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {declinedSalariesData.map((salary, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-slate-100 p-4 hover:border-slate-200/80 transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={salary.avatar}
                  alt={salary.name}
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  {salary.name}
                </h4>
                <p className="text-xs font-semibold text-brand/80 mt-0.5">
                  {salary.salon}
                </p>
                <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                  <AlertTriangle size={12} className="shrink-0" />
                  <span>Reason: {salary.reason}</span>
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-xs font-semibold text-slate-400">
                {salary.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
