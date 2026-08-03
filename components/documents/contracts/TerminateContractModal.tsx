"use client";

import React, { useEffect, useState } from "react";
import CustomDatePicker from "@/components/customComponent/CustomDatePicker";
import CustomTextarea from "@/components/customComponent/CustomTextarea";
import CancelButton from "@/components/customComponent/CancelButton";

interface TerminateContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function TerminateContractModal({
  isOpen,
  onClose,
  onConfirm,
}: TerminateContractModalProps) {
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [removeAccessDate, setRemoveAccessDate] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (endDate && reason && removeAccessDate) {
      onConfirm();
      onClose();
      setEndDate("");
      setReason("");
      setRemoveAccessDate("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      <div className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2">
          Terminate Contract
        </h3>
        <p className="text-xs text-slate-500 font-medium mb-6">
          Are you sure you want to terminate this contract?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CustomDatePicker
            label="End Date *"
            value={endDate}
            onChange={setEndDate}
            placeholder="Enter end date"
            required
          />
          <CustomTextarea
            label="Reason *"
            value={reason}
            onChange={setReason}
            placeholder="Enter reason"
            required
            rows={4}
          />
          <CustomDatePicker
            label="Remove Access To The Platform On *"
            value={removeAccessDate}
            onChange={setRemoveAccessDate}
            placeholder="Select date"
            required
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#ffe4e6] hover:bg-rose-200 text-[#e11d48] text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              Terminate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
