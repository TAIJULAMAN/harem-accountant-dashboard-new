"use client";

import React, { useState } from "react";
import Image from "next/image";
import { activitiesData } from "@/components/dashboard/recentActivity/data";

interface RecentActivityProps {
  selectedSalon: string;
}

export default function RecentActivity({ selectedSalon }: RecentActivityProps) {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "High" | "Medium" | "Low"
  >("All");

  const filteredActivities = activitiesData.filter((activity) => {
    const salonMatch =
      selectedSalon === "All Salons" || activity.salon === selectedSalon;
    const priorityMatch =
      activeFilter === "All" || activity.priority === activeFilter;
    return salonMatch && priorityMatch;
  });

  const priorityStyles = {
    High: "bg-[#ff4b81] text-white",
    Medium: "bg-[#fcc419] text-white",
    Low: "bg-[#20c997] text-white",
  };

  const filters: ("All" | "High" | "Medium" | "Low")[] = [
    "All",
    "High",
    "Medium",
    "Low",
  ];

  return (
    <div className="flex flex-col h-full rounded-xl border border-slate-100 bg-white p-5 sm:p-7.5 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
          Recent Activity
        </h3>

        {/* Filters */}
        <div className="flex gap-1.5 flex-wrap">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  rounded-lg px-3.5 sm:px-4 py-1.5 text-xs font-semibold transition-all duration-200 border cursor-pointer
                  ${
                    isActive
                      ? "border-brand text-brand bg-brand/5"
                      : "border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto space-y-4.5 pr-1">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col sm:flex-row gap-4 rounded-xl p-4 sm:p-5 shadow-sm border border-slate-100"
            >
              {/* Left Side: Avatar + Details */}
              <div className="flex gap-4 flex-1 min-w-0">
                {/* Image Avatar */}
                <div className="h-11 w-11 sm:h-12.5 sm:w-12.5 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={activity.avatarImg}
                    alt={activity.salon}
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 leading-snug">
                    {activity.title}
                  </h4>
                  <p className="text-xs font-semibold text-brand mt-0.5">
                    {activity.salon}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    {activity.reason}
                  </p>

                  {/* Inline Date & Priority for mobile screens */}
                  <div className="flex items-center gap-2 mt-2.5 sm:hidden">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${priorityStyles[activity.priority]}`}
                    >
                      {activity.priority}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-400">
                      {activity.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Date & Priority for larger screens */}
              <div className="hidden sm:flex flex-col items-end justify-between shrink-0">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityStyles[activity.priority]}`}
                >
                  {activity.priority}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 mt-2">
                  {activity.date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm font-semibold text-slate-400">
              No activities found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
