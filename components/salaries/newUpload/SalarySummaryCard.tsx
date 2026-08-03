import React from "react";
import { ExtractedSalary } from "./data";

interface SalarySummaryCardProps {
  salaries: ExtractedSalary[];
}

export default function SalarySummaryCard({
  salaries,
}: SalarySummaryCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm text-left">
      <h3 className="font-semibold text-slate-800 text-xl mb-5">Summary</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            File
          </span>
          <span className="text-xs font-semibold text-slate-700 mt-1.5">
            document.pdf
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Total Packets
          </span>
          <div className="mt-1 flex items-center">
            <span className="bg-brand/10 text-brand text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {salaries.length}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Approved
          </span>
          <div className="mt-1 flex items-center">
            <span className="bg-[#ecfdf5] text-emerald-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {salaries.filter((s) => s.status === "Approved").length}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Needs Review
          </span>
          <div className="mt-1 flex items-center">
            <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {salaries.filter((s) => s.status === "Review").length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
