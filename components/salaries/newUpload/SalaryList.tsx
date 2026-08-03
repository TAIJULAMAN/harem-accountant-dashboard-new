import React from "react";
import Image from "next/image";
import { Check, Edit2, Eye } from "lucide-react";
import { ExtractedSalary } from "./data";

interface SalaryListProps {
  salaries: ExtractedSalary[];
  selectedIds: string[];
  toggleSelect: (id: string) => void;
  setEditingPacket: (packet: ExtractedSalary | null) => void;
  approvePacket: (id: string) => void;
}

export default function SalaryList({
  salaries,
  selectedIds,
  toggleSelect,
  setEditingPacket,
  approvePacket,
}: SalaryListProps) {
  return (
    <div className="flex flex-col gap-4">
      {salaries.map((packet) => {
        const isSelected = selectedIds.includes(packet.id);
        const isApproved = packet.status === "Approved";

        return (
          <div
            key={packet.id}
            className={`group rounded-lg border bg-white p-5 shadow-sm transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
              isSelected
                ? "border-brand ring-2 ring-brand/10 bg-brand/[0.005]"
                : "border-slate-100 hover:border-slate-200 hover:shadow-md"
            }`}
          >
            {/* 1. Checkbox + Avatar + Employee Details */}
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <label className="relative flex items-center justify-center shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(packet.id)}
                  className="sr-only"
                />
                <div
                  className={`h-5 w-5 rounded-[5px] flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-brand text-white border-brand"
                      : "border border-slate-300 bg-white hover:border-slate-400"
                  }`}
                >
                  {isSelected && (
                    <Check size={12} strokeWidth={4} className="text-white" />
                  )}
                </div>
              </label>
              {packet.avatar && (
                <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <Image
                    width={40}
                    height={40}
                    src={packet.avatar}
                    alt={packet.employeeName}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="min-w-0 text-left">
                <p className="font-semibold text-slate-800 text-sm leading-tight truncate">
                  {packet.employeeName}
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-brand/80">
                  <span>1 page • {packet.period}</span>
                  <button
                    onClick={() => setEditingPacket(packet)}
                    className="text-brand hover:text-brand-dark p-0.5 cursor-pointer rounded hover:bg-brand/5"
                    title="Edit Period"
                  >
                    <Edit2 size={12} />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                  CF:{" "}
                  <span className="font-mono font-bold text-slate-500 uppercase">
                    {packet.cf}
                  </span>
                </p>
              </div>
            </div>

            {/* 2. Columns Block (Gross, Net, TRF This Year, TRF Prev) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 flex-[2] min-w-0 text-left">
              {/* Gross Column */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Gross
                </span>
                <div className="mt-1.5">
                  <span className="inline-block bg-[#eef2ff] text-brand font-black px-3 py-1 rounded-full text-xs">
                    € {packet.grossSalary.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Net Column */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Net
                </span>
                <div className="mt-1.5">
                  <span className="inline-block bg-[#ecfdf5] text-emerald-600 font-black px-3 py-1 rounded-full text-xs">
                    € {packet.netSalary.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* TRF This Year Column */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  TRF This Year
                </span>
                <p className="mt-2 text-xs font-black text-slate-800">
                  € {packet.trfThisYear.toFixed(2)}
                </p>
              </div>

              {/* TRF al 31/12/24 Column */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  TRF al 31/12/24
                </span>
                <p className="mt-2 text-xs font-black text-slate-800">
                  € {packet.trfPrevYears.toLocaleString()}
                </p>
              </div>
            </div>

            {/* 3. Status/Confidence Column */}
            <div className="flex flex-col justify-center min-w-[150px] text-left lg:text-center items-start lg:items-center">
              <div className="flex flex-col gap-1 items-start lg:items-center">
                {isApproved ? (
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-lg">
                    Approved
                  </span>
                ) : (
                  <>
                    <span className="bg-yellow-50 text-yellow-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-lg">
                      Review
                    </span>
                    <span className="text-xs font-bold text-yellow-300 mt-0.5">
                      Medium ({packet.confidence}%)
                    </span>
                  </>
                )}
                <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
                  {packet.vendor}
                </span>
              </div>
            </div>

            {/* 4. Action Buttons Column */}
            <div className="flex flex-row lg:flex-col gap-2 min-w-[120px] justify-end lg:justify-center">
              <button
                onClick={() => setEditingPacket(packet)}
                className="flex-1 lg:flex-none flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-[#eef2ff] text-[#635BFF] text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Review</span>
                <Eye size={14} className="shrink-0" />
              </button>

              <button
                onClick={() => approvePacket(packet.id)}
                disabled={isApproved}
                className={`flex-1 lg:flex-none flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  isApproved
                    ? "bg-emerald-500/10 text-[#16CDC7] cursor-default"
                    : "bg-emerald-50 text-[#16CDC7] cursor-pointer"
                }`}
              >
                <span>{isApproved ? "Approved" : "Approve"}</span>
                <Check size={14} className="shrink-0" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
