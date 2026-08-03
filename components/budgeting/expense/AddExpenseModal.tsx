"use client";
import React, { useState } from "react";
import { X, Calendar, UploadCloud } from "lucide-react";
import { NewExpenseInput } from "./data";

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: NewExpenseInput) => void;
}

export default function AddExpenseModal({ isOpen, onClose, onSave }: AddExpenseModalProps) {
  const [cost, setCost] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [macroCategory, setMacroCategory] = useState("");
  const [category, setCategory] = useState("");
  const [warranty, setWarranty] = useState("None");
  const [location, setLocation] = useState("");
  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cost || !paymentMethod || !date || !macroCategory || !category) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    onSave({
      cost: parseFloat(cost),
      paymentMethod,
      date: `${date} ${time || "12:00"}`,
      macroCategory,
      category,
      warranty,
      location,
      payee,
      note,
      hasAttachment: !!attachedFile,
      attachmentName: attachedFile || undefined,
    });
  };

  const handleFileChange = () => {
    // Mock file attachment
    setAttachedFile("uploaded_receipt.pdf");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-[20px] shadow-2xl border border-slate-100 w-full max-w-[620px] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h3 className="text-base font-extrabold text-slate-800">Add Expense</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto scrollbar-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Cost */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Cost *</label>
              <input
                type="number"
                step="0.01"
                placeholder="Enter cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors"
                required
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Payment Method *</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold bg-white focus:outline-none focus:border-brand transition-colors cursor-pointer"
                required
              >
                <option value="" disabled>Select method</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Online Payment">Online Payment</option>
                <option value="Terminal">Terminal</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Date *</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  required
                />
                <Calendar size={15} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Time *</label>
              <input
                type="text"
                placeholder="Enter time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            {/* Macro-categories */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Macro-categories *</label>
              <select
                value={macroCategory}
                onChange={(e) => setMacroCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold bg-white focus:outline-none focus:border-brand transition-colors cursor-pointer"
                required
              >
                <option value="" disabled>Select macro categories</option>
                <option value="Internet">Internet</option>
                <option value="HR">HR</option>
                <option value="Consumables">Consumables</option>
                <option value="Products">Products</option>
                <option value="Taxes">Taxes</option>
                <option value="Services">Services</option>
                <option value="Utilities">Utilities</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold bg-white focus:outline-none focus:border-brand transition-colors cursor-pointer"
                required
              >
                <option value="" disabled>Select category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
                <option value="Category 4">Category 4</option>
                <option value="Category 5">Category 5</option>
              </select>
            </div>

            {/* Warranty */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Warranty *</label>
              <select
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold bg-white focus:outline-none focus:border-brand transition-colors cursor-pointer"
              >
                <option value="None">None</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Location *</label>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>

          {/* Payee */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Payee *</label>
            <input
              type="text"
              placeholder="Enter payee"
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors"
            />
          </div>

          {/* Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Note</label>
            <textarea
              placeholder="Add a note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand transition-colors resize-none"
            />
          </div>

          {/* Drag & Drop attachment */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Attach receipts/invoices</label>
            <div
              onClick={handleFileChange}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-[#fbfbfe] rounded-2xl cursor-pointer transition-all gap-2 group"
            >
              <div className="h-11 w-11 rounded-full bg-[#f0f2ff] flex items-center justify-center text-brand shrink-0 group-hover:scale-105 transition-transform">
                <UploadCloud size={20} />
              </div>
              <span className="text-xs font-bold text-[#5c60f5] group-hover:text-[#4a4ed8] transition-colors">
                {attachedFile ? attachedFile : "Drop here or click to browse"}
              </span>
            </div>
          </div>

          {/* Footer Submit */}
          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="bg-[#5c60f5] hover:bg-[#4d51e5] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
