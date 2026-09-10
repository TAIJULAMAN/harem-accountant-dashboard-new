import React from "react";
import { FileText } from "lucide-react";
import { ExtractedSalary } from "@/components/salaries/newUpload/data";
import { formatPeriodToItalian } from "../EditCausaleModal";

interface PaymentReasonCardProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary) => void;
}

export default function PaymentReasonCard({
  editingPacket,
  setEditingPacket,
}: PaymentReasonCardProps) {
  const italianPeriod = formatPeriodToItalian(editingPacket.period);
  const suggestions = [
    `Stipendio ${italianPeriod}`,
    "TFR",
    `Stipendio ${italianPeriod} + TFR`,
    "Tredicesima",
    "Quattordicesima",
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
      {/* Section Header with Icon */}
      <div className="flex items-center gap-2 text-slate-800 font-bold text-sm border-b border-slate-100 pb-3">
        <FileText size={16} className="text-slate-500 shrink-0" />
        <span>Causale Pagamento</span>
      </div>

      <div className="space-y-3.5">
        {/* Payment Reason Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            Payment Reason
          </label>
          <input
            type="text"
            value={editingPacket.causale || ""}
            onChange={(e) =>
              setEditingPacket({
                ...editingPacket,
                causale: e.target.value,
              })
            }
            placeholder="Payment Reason"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* Suggestions */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2">
            Suggestions:
          </label>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => {
              const isActive =
                editingPacket.causale?.trim().toLowerCase() ===
                suggestion.toLowerCase();
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
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand/10 border-brand text-brand shadow-xs"
                      : "bg-slate-100/80 hover:bg-slate-200/80 border-slate-200/60 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {suggestion}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
