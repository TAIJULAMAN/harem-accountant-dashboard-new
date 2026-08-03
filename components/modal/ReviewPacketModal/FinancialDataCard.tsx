import React from "react";
import CustomInput from "../../customComponent/CustomInput";
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
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-50 pb-2">
        Financial Data
      </h4>

      <div className="space-y-4">
        {/* Gross Amount */}
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Gross Amount (€)
            </label>
            <span className="text-[11px] font-bold text-[#f59e0b]">75%</span>
          </div>
          <CustomInput
            type="number"
            required
            value={editingPacket.grossSalary.toString()}
            onChange={(val) =>
              setEditingPacket({
                ...editingPacket,
                grossSalary: parseFloat(val) || 0,
              })
            }
          />
        </div>

        {/* Deductions */}
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Deductions (€)
            </label>
            <span className="text-[11px] font-bold text-[#10b981]">90%</span>
          </div>
          <CustomInput
            type="number"
            required
            value={editingPacket.deemed.toString()}
            onChange={(val) =>
              setEditingPacket({
                ...editingPacket,
                deemed: parseFloat(val) || 0,
              })
            }
          />
        </div>

        {/* Net Amount */}
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Net Amount (€)
            </label>
            <span className="text-[11px] font-bold text-[#10b981]">99%</span>
          </div>
          <CustomInput
            type="number"
            required
            value={editingPacket.netSalary.toString()}
            onChange={(val) =>
              setEditingPacket({
                ...editingPacket,
                netSalary: parseFloat(val) || 0,
              })
            }
          />
        </div>

        {/* TFR Monthly */}
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              TFR Monthly (€)
            </label>
            <span className="text-[11px] font-bold text-[#ef4444]">10%</span>
          </div>
          <CustomInput
            value={editingPacket.tfrMonthly || ""}
            onChange={(val) =>
              setEditingPacket({
                ...editingPacket,
                tfrMonthly: val,
              })
            }
          />
        </div>

        {/* TFR This Year */}
        <div className="space-y-1">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              TFR This Year (€)
            </label>
            <span className="text-[11px] font-bold text-[#f59e0b]">71%</span>
          </div>
          <CustomInput
            type="number"
            required
            value={editingPacket.trfThisYear.toString()}
            onChange={(val) =>
              setEditingPacket({
                ...editingPacket,
                trfThisYear: parseFloat(val) || 0,
              })
            }
          />
        </div>

        {/* Bottom Split: TRF al 31/12/xx and Total TFR Amount */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
                TRF al 31/12/xx (€)
              </label>
              <span className="text-[11px] font-bold text-[#f59e0b] shrink-0 ml-1">
                72%
              </span>
            </div>
            <CustomInput
              type="number"
              required
              value={editingPacket.trfPrevYears.toString()}
              onChange={(val) =>
                setEditingPacket({
                  ...editingPacket,
                  trfPrevYears: parseInt(val, 10) || 0,
                })
              }
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 truncate">
              Total TFR Amount
            </label>
            <CustomInput
              required
              value={editingPacket.totalTfrAmount || "31/12/2024"}
              onChange={(val) =>
                setEditingPacket({
                  ...editingPacket,
                  totalTfrAmount: val,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
