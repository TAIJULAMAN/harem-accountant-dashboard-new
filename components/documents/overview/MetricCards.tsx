import React from "react";
import { statCards } from "./data";

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card, idx) => (
        <div
          key={idx}
          className={`${card.bgColor} rounded-2xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`${card.iconBgColor} ${card.iconColor} w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm`}>
              <card.icon size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-semibold text-slate-700">{card.title}</span>
          </div>
          <div className="text-[32px] font-bold text-slate-800 mb-5">{card.value}</div>
          <div>
            <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2 rounded-lg text-[11px] font-bold tracking-wide transition-colors cursor-pointer shadow-sm">
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
