import React from "react";
import Image from "next/image";
import { ExtractedSalary } from "../salaries/newUpload/data";

interface DocumentPreviewProps {
  zoom: number;
  docPage: number;
  editingPacket: ExtractedSalary;
}

export default function DocumentPreview({
  zoom,
  docPage,
  editingPacket,
}: DocumentPreviewProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 flex justify-center items-start">
      <div
        className="bg-white rounded-2xl shadow-md border border-slate-200/65 p-8 flex flex-col justify-between text-left transition-all origin-top w-full animate-in fade-in zoom-in-95 duration-200"
        style={{
          transform: `scale(${zoom / 120})`,
          maxWidth: "420px",
          minHeight: "560px",
        }}
      >
        <div>
          {/* Doc Header */}
          <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
            <div>
              <h5 className="font-extrabold text-slate-800 text-sm tracking-tight">
                Busta Paga / Pay Slip
              </h5>
              <span className="text-[9px] font-semibold text-slate-400">
                Page {docPage} of 8
              </span>
            </div>
            {/* Your logo */}
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={140}
              height={40}
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* Doc Content */}
          <div className="space-y-4.5 mt-2">
            <div className="space-y-0.5 border-b border-slate-50 pb-2">
              <h6 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight">
                Employee Details
              </h6>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div>
                  <p className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">Name</p>
                  <p className="text-[9px] font-bold text-slate-700">{editingPacket.employeeName}</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">Tax Code / CF</p>
                  <p className="text-[9px] font-bold text-slate-700">{editingPacket.cf || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-0.5 border-b border-slate-50 pb-2">
              <h6 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight">
                Period & Reason
              </h6>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div>
                  <p className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">Period</p>
                  <p className="text-[9px] font-bold text-slate-700">{editingPacket.period}</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">Reason</p>
                  <p className="text-[9px] font-bold text-slate-700">{editingPacket.causale}</p>
                </div>
              </div>
            </div>

            <div className="space-y-0.5 border-b border-slate-50 pb-2">
              <h6 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight">
                Financial Data
              </h6>
              <div className="space-y-2 mt-1">
                <div className="flex justify-between items-center">
                  <p className="text-[9px] font-semibold text-slate-500">Gross Salary</p>
                  <p className="text-[9px] font-bold text-slate-700">€ {editingPacket.grossSalary.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[9px] font-semibold text-slate-500">Deductions (Deemed)</p>
                  <p className="text-[9px] font-bold text-rose-500">- € {editingPacket.deemed.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-50">
                  <p className="text-[9px] font-bold text-slate-700">Net Salary</p>
                  <p className="text-[10px] font-extrabold text-emerald-600">€ {editingPacket.netSalary.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="space-y-0.5">
              <h6 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight">
                TFR (Trattamento di Fine Rapporto)
              </h6>
              <div className="space-y-1.5 mt-1">
                <div className="flex justify-between items-center">
                  <p className="text-[8px] font-semibold text-slate-500">TFR Monthly</p>
                  <p className="text-[8px] font-bold text-slate-700">{editingPacket.tfrMonthly || "0.00"}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[8px] font-semibold text-slate-500">TFR This Year</p>
                  <p className="text-[8px] font-bold text-slate-700">€ {editingPacket.trfThisYear.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[8px] font-semibold text-slate-500">TFR Previous Years</p>
                  <p className="text-[8px] font-bold text-slate-700">€ {editingPacket.trfPrevYears.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-50">
                  <p className="text-[9px] font-bold text-slate-700">Total TFR Amount ({editingPacket.totalTfrAmount || "Current"})</p>
                  <p className="text-[9px] font-extrabold text-slate-800">€ {(editingPacket.trfThisYear + editingPacket.trfPrevYears).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doc Footer */}
        <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[9px] font-semibold text-slate-400 mt-6">
          <span>Generated by Harem Accountant</span>
          <span>CONFIDENTIAL</span>
        </div>
      </div>
    </div>
  );
}
