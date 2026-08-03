import React from "react";
import CustomInput from "../../customComponent/CustomInput";
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
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex justify-between items-center border-b border-slate-50 pb-2">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Pay Period
        </h4>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center mb-1">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Period (MM/YYYY)
          </label>
          <span className="text-[11px] font-bold text-emerald-500">80%</span>
        </div>
        <CustomInput
          required
          value={editingPacket.period}
          onChange={(val) =>
            setEditingPacket({
              ...editingPacket,
              period: val,
            })
          }
        />
      </div>
    </div>
  );
}
