import React from "react";
import { ExtractedSalary } from "./data";

interface ExtractStatusBannerProps {
  totalCount: number;
  salaries: ExtractedSalary[];
}

export default function ExtractStatusBanner({
  totalCount,
  salaries,
}: ExtractStatusBannerProps) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-emerald-50 border border-emerald-300 shadow-sm">
      <div className="flex flex-col text-left">
        <p className="text-sm font-extrabold text-emerald-300 leading-tight">
          {totalCount} salary packets extracted from {totalCount} pages
        </p>
        <p className="text-xs text-slate-500 font-medium mt-1">
          Review and approve each packet before finalizing
        </p>
      </div>
      <div className="text-right shrink-0">
        <span className="text-lg font-black text-slate-800 block leading-none">
          {salaries.filter((s) => s.status === "Approved").length}/{totalCount}
        </span>
        <span className="text-[10px] font-semibold text-slate-400 block mt-1 uppercase tracking-wider">
          Approved
        </span>
      </div>
    </div>
  );
}
