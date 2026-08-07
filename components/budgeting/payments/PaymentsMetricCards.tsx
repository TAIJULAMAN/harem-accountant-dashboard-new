import React from "react";
import { metricCards as cards } from "./data";

export default function PaymentsMetricCards() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`${card.bgColor} rounded-xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${card.iconBgColor} text-white w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm`}>
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold text-slate-700">{card.title}</span>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-semibold text-slate-800">{card.value}</div>
              <p className="text-sm font-semibold text-slate-500">
                {card.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
