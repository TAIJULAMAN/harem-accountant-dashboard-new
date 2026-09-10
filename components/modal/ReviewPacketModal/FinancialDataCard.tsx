import React from "react";
import { DollarSign } from "lucide-react";
import { ExtractedSalary } from "@/components/salaries/newUpload/data";

interface FinancialDataCardProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary) => void;
}

export default function FinancialDataCard({
  editingPacket,
  setEditingPacket,
}: FinancialDataCardProps) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
      {/* Section Header with Icon */}
      <div className="flex items-center gap-2 text-slate-800 font-bold text-sm border-b border-slate-100 pb-3">
        <DollarSign size={16} className="text-slate-500 shrink-0" />
        <span>Financial Data</span>
      </div>

      <div className="space-y-3.5">
        {/* Gross Amount */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              Gross Amount (€)
            </label>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              76%
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            value={editingPacket.grossSalary ?? ""}
            onChange={(e) => {
              const gross = parseFloat(e.target.value) || 0;
              setEditingPacket({
                ...editingPacket,
                grossSalary: gross,
                netSalary: parseFloat(
                  Math.max(0, gross - (editingPacket.deemed || 0)).toFixed(2),
                ),
              });
            }}
            placeholder="0.00"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* Ritenute (€) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              Ritenute (€)
            </label>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
              83%
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            value={editingPacket.deemed ?? ""}
            onChange={(e) => {
              const ritenute = parseFloat(e.target.value) || 0;
              setEditingPacket({
                ...editingPacket,
                deemed: ritenute,
                netSalary: parseFloat(
                  Math.max(0, (editingPacket.grossSalary || 0) - ritenute).toFixed(
                    2,
                  ),
                ),
              });
            }}
            placeholder="0.00"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* Net Amount */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              Net Amount (€)
            </label>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
              99%
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            value={editingPacket.netSalary ?? ""}
            onChange={(e) =>
              setEditingPacket({
                ...editingPacket,
                netSalary: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="0.00"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* TFR Monthly */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              TFR Monthly (€)
            </label>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              71%
            </span>
          </div>
          <input
            type="text"
            value={editingPacket.tfrMonthly || ""}
            onChange={(e) =>
              setEditingPacket({
                ...editingPacket,
                tfrMonthly: e.target.value,
              })
            }
            placeholder="0.00"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* TFR This Year */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              TFR This Year (€)
            </label>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              71%
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            value={editingPacket.trfThisYear ?? ""}
            onChange={(e) =>
              setEditingPacket({
                ...editingPacket,
                trfThisYear: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="0.00"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
          />
        </div>

        {/* Bottom Split: TRF al 31/12/xx and Total TFR Amount */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-500 truncate">
                TRF al 31/12 (€)
              </label>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200/60 shrink-0 ml-1">
                72%
              </span>
            </div>
            <input
              type="number"
              step="1"
              value={editingPacket.trfPrevYears ?? ""}
              onChange={(e) =>
                setEditingPacket({
                  ...editingPacket,
                  trfPrevYears: parseInt(e.target.value, 10) || 0,
                })
              }
              placeholder="0"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 truncate">
              Total TFR Date/Ref
            </label>
            <input
              type="text"
              value={editingPacket.totalTfrAmount || "31/12/2024"}
              onChange={(e) =>
                setEditingPacket({
                  ...editingPacket,
                  totalTfrAmount: e.target.value,
                })
              }
              placeholder="31/12/2024"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
