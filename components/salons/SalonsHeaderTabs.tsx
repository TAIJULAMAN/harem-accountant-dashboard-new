"use client";

import React from "react";
import {
  Store,
  Mail,
  LineChart,
  CircleDollarSign,
  Settings,
} from "lucide-react";

interface SalonsHeaderTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SalonsHeaderTabs({
  activeTab,
  setActiveTab,
}: SalonsHeaderTabsProps) {
  const tabs = [
    { name: "My Salons", icon: Store },
    { name: "Invitations Sent", icon: Mail },
    { name: "Revenue Share", icon: LineChart },
    { name: "Payouts", icon: CircleDollarSign },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-6 pt-5 pb-2">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight mb-5">
          Salons & Invitations
        </h1>
        <div className="flex items-center gap-4 sm:gap-8 border-b border-slate-100 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors relative cursor-pointer whitespace-nowrap
                  ${isActive ? "text-brand" : "text-slate-500 hover:text-slate-800"}`}
              >
                <Icon size={18} />
                <span>{tab.name}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
