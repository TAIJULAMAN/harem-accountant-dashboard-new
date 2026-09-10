"use client";

import React from "react";
import CancelButton from "@/components/customComponent/CancelButton";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { BaseModalProps } from "./types";

export default function SignOutDeviceModal({ isOpen, onClose }: BaseModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl border border-[#E2E8F0] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <h3 className="text-lg font-bold text-[#1E293B]">Sign Out Device</h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">Please confirm your sign out action</p>
          </div>
          <CustomCloseButton onClick={onClose} className="p-1.5 text-[#94A3B8] hover:bg-[#E2E8F0] rounded-lg transition-colors cursor-pointer" />
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[#64748B]">
            Are you sure you want to sign out from this specific device? Any unsaved work on that device may be lost.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#E2E8F0] bg-[#F8FAFC]">
          <CancelButton onClick={onClose} />
          <button
            onClick={handleConfirm}
            className="px-5 py-2 text-white text-sm font-semibold rounded-lg bg-[#FF4C6A] hover:bg-[#E4405F] shadow-sm shadow-[#FF4C6A]/30 transition-colors cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
