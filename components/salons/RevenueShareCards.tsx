import React from "react";
import {
  CircleDollarSign,
  CalendarDays,
  LineChart,
  Wallet,
} from "lucide-react";
import { revenueCardsData } from "./revenueData";

const iconMap = {
  success: CircleDollarSign,
  primary: CalendarDays,
  danger: LineChart,
  warning: Wallet,
};

const styleMap = {
  success: {
    bg: "bg-[#E8FAF0]",
    iconBg: "bg-[#22C55E]",
    iconText: "text-white",
  },
  primary: {
    bg: "bg-[#F3F0FF]",
    iconBg: "bg-[#635BFF]",
    iconText: "text-white",
  },
  danger: {
    bg: "bg-[#FFF0F3]",
    iconBg: "bg-[#F43F5E]",
    iconText: "text-white",
  },
  warning: {
    bg: "bg-[#FFFBEB]",
    iconBg: "bg-[#EAB308]",
    iconText: "text-white",
  },
};

export default function RevenueShareCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {revenueCardsData.map((card, index) => {
        const Icon = iconMap[card.type];
        const styles = styleMap[card.type];

        return (
          <div
            key={index}
            className={`${styles.bg} rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.iconBg} ${styles.iconText} shadow-sm`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-slate-700">
                {card.title}
              </h3>
            </div>

            <div className="text-2xl font-bold text-slate-800 mb-1">
              € {card.amount.toLocaleString()}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
