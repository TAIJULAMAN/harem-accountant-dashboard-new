import React from "react";
import { FileText, Calendar, CalendarX } from "lucide-react";
import { metricData } from "./data";

export default function ContractMetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Active Contracts */}
      <div className="bg-gradient-to-b from-[#22c55e]/[0.13] to-[#22c55e]/[0.03] rounded-2xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#22c55e] text-white w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm">
            <FileText size={18} strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-semibold text-slate-700">Active Contracts</span>
        </div>
        <div className="text-[32px] font-bold text-slate-800">{metricData.activeContracts}</div>
      </div>

      {/* Expiring Soon */}
      <div className="bg-gradient-to-b from-[#F8C209]/[0.13] to-[#F8C209]/[0.03] rounded-2xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#F8C209] text-white w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm">
            <Calendar size={18} strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-semibold text-slate-700">Expiring Soon</span>
        </div>
        <div className="text-[32px] font-bold text-slate-800">{metricData.expiringSoon}</div>
      </div>

      {/* Expired */}
      <div className="bg-gradient-to-b from-[#f43f5e]/[0.13] to-[#f43f5e]/[0.03] rounded-2xl p-5 shadow-sm ring-1 ring-slate-100/50 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f43f5e] text-white w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm">
            <CalendarX size={18} strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-semibold text-slate-700">Expired</span>
        </div>
        <div className="text-[32px] font-bold text-slate-800">{metricData.expired}</div>
      </div>
    </div>
  );
}
