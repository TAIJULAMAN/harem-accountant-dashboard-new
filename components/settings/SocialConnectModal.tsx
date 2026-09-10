"use client";

import React from "react";
import CancelButton from "@/components/customComponent/CancelButton";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { SocialConnectModalProps } from "./types";

export default function SocialConnectModal({
  isOpen,
  platform,
  action,
  onClose,
  onConfirm,
}: SocialConnectModalProps) {
  if (!isOpen || !action) return null;

  const isConnecting = action === "connect";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl border border-[#E2E8F0] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <h3 className="text-lg font-bold text-[#1E293B]">
              {isConnecting ? `Connect ${platform}` : `Disconnect ${platform}`}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">Please confirm your action</p>
          </div>
          <CustomCloseButton onClick={onClose} className="p-1.5 text-[#94A3B8] hover:bg-[#E2E8F0] rounded-lg transition-colors cursor-pointer" />
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-[#64748B]">
            {isConnecting
              ? `Are you sure you want to connect your ${platform} account? This will allow the dashboard to post updates and sync analytics.`
              : `Are you sure you want to disconnect your ${platform} account? You will no longer be able to schedule posts or view metrics for this platform.`}
          </p>
        </div>
        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#E2E8F0] bg-[#F8FAFC]">
          <CancelButton onClick={onClose} />
          <button
            onClick={onConfirm}
            className={`px-5 py-2 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer ${isConnecting
                ? "bg-[#635BFF] hover:bg-[#534DFD] shadow-[#635BFF]/30"
                : "bg-[#FF4C6A] hover:bg-[#E4405F] shadow-[#FF4C6A]/30"
              }`}
          >
            {isConnecting ? "Confirm Connect" : "Confirm Disconnect"}
          </button>
        </div>
      </div>
    </div>
  );
}
