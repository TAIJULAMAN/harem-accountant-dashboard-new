import React from "react";
import { Wallet, BarChart3, FileText, Users } from "lucide-react";
import { receiptsKpis } from "./data";

export default function ReceiptsKPICards() {
  const cards = [
    {
      title: "Total",
      value: `€ ${receiptsKpis.total}`,
      icon: Wallet,
      bgColor: "bg-gradient-to-b from-[#ecfdf5] to-white",
      iconBgColor: "bg-[#22c55e]",
    },
    {
      title: "Media",
      value: `€ ${receiptsKpis.media}`,
      icon: BarChart3,
      bgColor: "bg-gradient-to-b from-[#eff6ff] to-white",
      iconBgColor: "bg-[#3b82f6]",
    },
    {
      title: "Receipts",
      value: String(receiptsKpis.receiptsCount),
      icon: FileText,
      bgColor: "bg-gradient-to-b from-[#f5f3ff] to-white",
      iconBgColor: "bg-[#8b5cf6]",
    },
    {
      title: "Unique Customers",
      value: String(receiptsKpis.uniqueCustomers),
      icon: Users,
      bgColor: "bg-gradient-to-b from-[#fffbf0] to-white",
      iconBgColor: "bg-[#facc15]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`${card.bgColor} rounded-2xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`${card.iconBgColor} text-white w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm`}
              >
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[13px] font-semibold text-slate-700">
                {card.title}
              </span>
            </div>
            <div className="text-xl font-semibold text-slate-800 mb-5">
              {card.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
