"use client";
import React from "react";
import { AlertCircle } from "lucide-react";

interface BudgetExceededModalProps {
  isOpen: boolean;
  macroCategory: string;
  amountExceeded: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function BudgetExceededModal({
  isOpen,
  macroCategory,
  amountExceeded,
  onClose,
  onConfirm,
}: BudgetExceededModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[20px] shadow-2xl border border-slate-100 w-full max-w-[420px] overflow-hidden p-6 animate-in zoom-in-95 duration-200 flex flex-col items-center text-center gap-5">
        
        {/* Red warning icon */}
        <div className="h-16 w-16 rounded-full bg-[#fff0f6] flex items-center justify-center text-kpi-pink-text shrink-0 mt-3 animate-bounce">
          <AlertCircle size={32} className="text-kpi-pink-text" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-slate-800">Budget exceeded!</h3>
          <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-[280px]">
            Adding this expense will increase the &quot;{macroCategory}&quot; category budget by {amountExceeded}.
          </p>
          <p className="text-xs font-bold text-slate-400">Do you still want to continue?</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full mt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 bg-[#5c60f5] hover:bg-[#4d51e5] text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            Save Expense
          </button>
        </div>
      </div>
    </div>
  );
}
