"use client";

import React, { useEffect } from "react";
import { Check } from "lucide-react";

interface InviteSalonSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Success!",
  message = "The action was completed successfully.",
  buttonText = "Ok, close",
}: InviteSalonSuccessModalProps) {
  // Prevent background scrolling when modal is open
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-[24px] p-10 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-[#EBFAF0] rounded-full flex items-center justify-center mb-6">
          <Check size={48} className="text-[#36C76C]" strokeWidth={3} />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-400 mb-8 whitespace-pre-wrap">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-[#635BFF] hover:bg-[#524BFF] text-white px-8 py-3 rounded-xl font-medium transition-colors w-40 whitespace-nowrap"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
