import React from "react";
import { Calendar } from "lucide-react";
import { ExtractedSalary } from "@/components/salaries/newUpload/data";

interface PayPeriodCardProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary) => void;
}

export default function PayPeriodCard({
  editingPacket,
  setEditingPacket,
}: PayPeriodCardProps) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
      {/* Section Header with Icon */}
      <div className="flex items-center gap-2 text-slate-800 font-bold text-sm border-b border-slate-100 pb-3">
        <Calendar size={16} className="text-slate-500 shrink-0" />
        <span>Pay Period</span>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-semibold text-slate-500">
            Period (MM/YYYY)
          </label>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
            83%
          </span>
        </div>
        <input
          type="text"
          value={editingPacket.period || ""}
          onChange={(e) =>
            setEditingPacket({
              ...editingPacket,
              period: e.target.value,
            })
          }
          placeholder="MM/YYYY"
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
        />
      </div>
    </div>
  );
}
