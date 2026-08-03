"use client";

import React from "react";
import { ChevronLeft, Download } from "lucide-react";

interface ReceiptDetailHeaderProps {
  onBack: () => void;
}

export default function ReceiptDetailHeader({ onBack }: ReceiptDetailHeaderProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-left">
        <button
          onClick={onBack}
          className="p-2 transition-colors cursor-pointer text-slate-500"
        >
          <ChevronLeft size={32} />
        </button>
        <div>
          <h2 className="text-base font-semibold text-slate-800 tracking-tight flex items-center gap-2">
            Service Receipt
          </h2>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Italian Fiscal Invoice
          </p>
        </div>
      </div>

      <button className="flex items-center gap-2 bg-[#eef2ff] text-[#6366f1] text-[13px] font-medium px-4 py-2.5 rounded-xl hover:bg-[#e0e7ff] transition-colors cursor-pointer w-fit">
        <Download size={16} strokeWidth={2} />
        <span>Download PDF</span>
      </button>
    </div>
  );
}
