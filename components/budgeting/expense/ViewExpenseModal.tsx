"use client";
import React from "react";
import { Eye, Download, FileText } from "lucide-react";
import Image from "next/image";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { ExpenseTransaction } from "./data";

interface ViewExpenseModalProps {
  isOpen: boolean;
  expense: ExpenseTransaction | null;
  onClose: () => void;
  onViewAttachment: () => void;
  onDownloadAttachment: () => void;
}

export default function ViewExpenseModal({
  isOpen,
  expense,
  onClose,
  onViewAttachment,
  onDownloadAttachment,
}: ViewExpenseModalProps) {
  if (!isOpen || !expense) return null;

  const getMacroCategoryBadge = (macro: string) => {
    switch (macro) {
      case "Internet":
        return "bg-[#ebfbee] text-[#2f9e44]";
      case "HR":
        return "bg-[#eef2ff] text-[#4f46e5]";
      case "Consumables":
        return "bg-[#e0f2fe] text-[#0369a1]";
      case "Products":
        return "bg-[#f3e8ff] text-[#7e22ce]";
      case "Taxes":
        return "bg-[#fff0f6] text-[#e64980]";
      case "Services":
        return "bg-[#fffbeb] text-[#d97706]";
      case "Utilities":
        return "bg-[#f1f5f9] text-[#334155]";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getPaymentMethodBadge = (method: string) => {
    switch (method) {
      case "Cash":
        return "bg-[#e6fcf5] text-[#0ca678]";
      case "Credit Card":
      case "Terminal":
        return "bg-[#e7f5ff] text-[#228be6]";
      case "Online Payment":
      case "Online":
        return "bg-[#fff9db] text-[#f59f00]";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-[20px] shadow-2xl border border-slate-100 w-full max-w-[520px] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">View Expense</h3>
          <CustomCloseButton
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all cursor-pointer"
          />
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-none text-left">
          {/* Top Info Row */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">
              {expense.date}
            </span>
            <span className="bg-slate-50 text-slate-800 px-3 py-2 rounded-lg text-xs font-semibold shadow-sm">
              €{" "}
              {expense.cost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          {/* Salon Details */}
          <div>
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Salon
            </label>
            <div className="flex items-center gap-3">
              <Image
                src={expense.salon.avatar}
                alt={expense.salon.name}
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl object-cover shadow-sm bg-slate-50 shrink-0"
              />
              <span className="text-lg font-semibold text-slate-700">
                {expense.salon.name}
              </span>
            </div>
          </div>

          {/* Category Rows */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-slate-50 pt-5">
            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Macro-category
              </label>
              <span
                className={`text-xs font-extrabold px-3 py-1.5 rounded-lg ${getMacroCategoryBadge(expense.macroCategory)}`}
              >
                {expense.macroCategory}
              </span>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Category
              </label>
              <span className="text-xs font-extrabold px-3 py-1.5 rounded-lg bg-[#e6fcf5] text-[#0ca678]">
                {expense.category}
              </span>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Payment Method
              </label>
              <span
                className={`text-xs font-extrabold px-3 py-1.5 rounded-lg ${getPaymentMethodBadge(expense.paymentMethod)}`}
              >
                {expense.paymentMethod}
              </span>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Supplier
              </label>
              <span className="text-xs font-semibold text-slate-700">
                {expense.supplier}
              </span>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Warranty
              </label>
              <span className="text-xs font-semibold text-slate-700">None</span>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Location
              </label>
              <span className="text-xs font-semibold text-slate-700">
                Lorem
              </span>
            </div>
          </div>

          {/* Payee */}
          <div className="border-t border-slate-50 pt-5">
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Payee
            </label>
            <span className="text-xs font-semibold text-slate-700">
              Lorem Ipsum
            </span>
          </div>

          {/* Note */}
          <div className="border-t border-slate-50 pt-5">
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Note
            </label>
            <p className="text-xs font-semibold text-slate-700 leading-relaxed">
              {expense.note || "N/A"}
            </p>
          </div>

          {/* Attachments card block */}
          <div className="border-t border-slate-50 pt-5 space-y-2.5">
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Attach receipts/invoices
            </label>
            {expense.hasAttachment ? (
              <div className="flex items-center justify-between p-4 border border-slate-100 bg-[#fbfbfe] rounded-2xl gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-[#f0f2ff] flex items-center justify-center text-[#5c60f5] shrink-0 shadow-sm border border-indigo-50/50">
                    <FileText size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-extrabold text-[#5c60f5] truncate">
                      {expense.attachmentName || "originalname.pdf"}
                    </span>
                    <span className="block text-[10px] font-semibold text-slate-400 mt-0.5">
                      4.2 MB
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={onViewAttachment}
                    className="h-8 w-8 rounded-lg bg-[#f0f2ff] hover:bg-[#e6e8ff] text-[#5c60f5] flex items-center justify-center transition-colors cursor-pointer"
                    title="View file"
                  >
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={onDownloadAttachment}
                    className="h-8 w-8 rounded-lg bg-[#f0f2ff] hover:bg-[#e6e8ff] text-[#5c60f5] flex items-center justify-center transition-colors cursor-pointer"
                    title="Download file"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-xs font-semibold text-slate-400 py-2">
                No attachments uploaded for this expense.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
