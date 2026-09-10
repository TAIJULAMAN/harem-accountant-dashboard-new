"use client";

import React, { useState } from "react";
import CustomInput from "@/components/customComponent/CustomInput";
import SubmitButton from "@/components/customComponent/SubmitButton";
import CancelButton from "@/components/customComponent/CancelButton";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { BaseModalProps } from "./types";

export default function SetupRecoveryEmail({ isOpen, onClose }: BaseModalProps) {
  const [email, setEmail] = useState("test@test.com");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl border border-[#E2E8F0] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <h3 className="text-lg font-bold text-[#1E293B]">Setup Recovery Email</h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">Configure your backup recovery email address</p>
          </div>
          <CustomCloseButton onClick={onClose} className="p-1.5 text-[#94A3B8] hover:bg-[#E2E8F0] rounded-lg transition-colors cursor-pointer" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-5">
            <p className="text-sm text-[#64748B]">
              Enter a secure email address we can use to help you recover your account if you lose access.
            </p>
            <CustomInput
              label="Recovery Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-6 border-t border-[#E2E8F0] bg-[#F8FAFC]">
            <CancelButton onClick={onClose} />
            <SubmitButton type="submit">Save Changes</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
