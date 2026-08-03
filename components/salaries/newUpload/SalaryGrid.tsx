import React from "react";
import Image from "next/image";
import { Check, Link as LinkIcon, AlertTriangle, Eye, CheckCircle2 } from "lucide-react";
import { ExtractedSalary } from "./data";

interface SalaryGridProps {
  salaries: ExtractedSalary[];
  selectedIds: string[];
  toggleSelect: (id: string) => void;
  setEditingPacket: (packet: ExtractedSalary | null) => void;
  approvePacket: (id: string) => void;
}

export default function SalaryGrid({
  salaries,
  selectedIds,
  toggleSelect,
  setEditingPacket,
  approvePacket,
}: SalaryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {salaries.map((packet) => {
        const isSelected = selectedIds.includes(packet.id);
        const isApproved = packet.status === "Approved";

        return (
          <div
            key={packet.id}
            className={`group rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 text-left flex flex-col justify-between ${
              isSelected
                ? "border-brand ring-2 ring-brand/10 bg-brand/[0.005]"
                : "border-slate-100 hover:border-slate-200 hover:shadow-md"
            }`}
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-start justify-between gap-2.5">
                <div className="flex items-center gap-3 min-w-0">
                  <label className="relative flex items-center justify-center shrink-0 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(packet.id)}
                      className="sr-only"
                    />
                    <div
                      className={`h-4.5 w-4.5 rounded-[5px] flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-brand text-white border-brand"
                          : "border border-slate-300 bg-white hover:border-slate-400"
                      }`}
                    >
                      {isSelected && (
                        <Check size={10} strokeWidth={4} className="text-white" />
                      )}
                    </div>
                  </label>
                  {packet.avatar && (
                    <div className="h-9 w-9 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                      <Image
                        width={40}
                        height={40}
                        src={packet.avatar}
                        alt={packet.employeeName}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-bold text-slate-800 text-[14px] leading-tight truncate">
                      {packet.employeeName}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                      1 page • {packet.period}
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                    isApproved
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {packet.status}
                </span>
              </div>

              {/* Packet details list */}
              <div className="mt-4.5 divide-y divide-slate-50 border-t border-b border-slate-50 py-1">
                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Period</span>
                  <span className="text-slate-700 font-bold">{packet.period}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Causale</span>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditingPacket(packet);
                    }}
                    className="text-brand font-bold hover:underline flex items-center gap-1 min-w-0"
                  >
                    <span className="truncate max-w-[120px]">{packet.causale}</span>
                    <LinkIcon size={10} className="shrink-0" />
                  </a>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Net</span>
                  <span className="bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-lg text-[11px]">
                    € {packet.netSalary.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Deemed</span>
                  <span className="bg-rose-50 text-rose-500 font-bold px-2 py-0.5 rounded-lg text-[11px]">
                    € {packet.deemed.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Gross</span>
                  <span className="bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-lg text-[11px]">
                    € {packet.grossSalary.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">TRF This Year</span>
                  <span className="text-slate-700 font-bold">
                    € {packet.trfThisYear.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">TRF al 31/12/24</span>
                  <span className="text-slate-700 font-bold">
                    € {packet.trfPrevYears.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 text-xs">
                  <span className="text-slate-400 font-medium">CF</span>
                  <span className="text-slate-800 font-bold tracking-wider font-mono">
                    {packet.cf}
                  </span>
                </div>
              </div>

              {/* Mapping Confidence Status */}
              <div className="mt-3.5 flex items-center justify-between border-b border-slate-50 pb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-500 font-bold">
                  <AlertTriangle size={13} className="shrink-0" />
                  <span>Medium ({packet.confidence}%)</span>
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  {packet.mapped ? "Mapped" : "Unmapped"}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[9px] text-slate-400 font-medium">
                Vendor: {packet.vendor}
              </p>

              <div className="flex items-center gap-2.5 mt-3.5 pt-3.5 border-t border-slate-100">
                <button
                  onClick={() => setEditingPacket(packet)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#5c60f5]/10 text-brand hover:bg-[#5c60f5]/20 font-bold text-xs py-2.5 transition-colors cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Review</span>
                </button>
                <button
                  onClick={() => approvePacket(packet.id)}
                  disabled={isApproved}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl font-bold text-xs py-2.5 transition-colors cursor-pointer ${
                    isApproved
                      ? "bg-emerald-500/10 text-emerald-500 cursor-default"
                      : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                  }`}
                >
                  <CheckCircle2 size={13} />
                  <span>{isApproved ? "Approved" : "Approve"}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
