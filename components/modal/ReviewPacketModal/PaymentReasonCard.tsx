import React from "react";
import CustomInput from "../../customComponent/CustomInput";
import { ExtractedSalary } from "@/components/salaries/newUpload/data";

interface PaymentReasonCardProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary) => void;
}

export default function PaymentReasonCard({
  editingPacket,
  setEditingPacket,
}: PaymentReasonCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-50 pb-2">
        Payment Reason
      </h4>

      <div className="space-y-1">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Payment Reason
        </label>
        <CustomInput
          required
          value={editingPacket.causale}
          onChange={(val) =>
            setEditingPacket({
              ...editingPacket,
              causale: val,
            })
          }
        />
      </div>

      {/* Suggestions */}
      <div className="space-y-2 pt-2">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Suggestions
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "July 2025 Salary",
            "TFR",
            "July 2025 Salary + TRF",
            "Thirteenth Month Pay",
            "Fourteenth Month Pay",
          ].map((suggestion) => {
            const isActive = editingPacket.causale === suggestion;
            return (
              <button
                key={suggestion}
                type="button"
                onClick={() =>
                  setEditingPacket({
                    ...editingPacket,
                    causale: suggestion,
                  })
                }
                className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand/10 border-brand text-brand shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {suggestion}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
