"use client";

import React, { useState } from "react";
import CustomInput from "@/components/customComponent/CustomInput";
import SubmitButton from "@/components/customComponent/SubmitButton";
import CancelButton from "@/components/customComponent/CancelButton";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { BaseModalProps } from "./types";

export default function ChangePassword({ isOpen, onClose }: BaseModalProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            <h3 className="text-lg font-bold text-[#1E293B]">Change Password</h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">To change your password please confirm here</p>
          </div>
          <CustomCloseButton onClick={onClose} className="p-1.5 text-[#94A3B8] hover:bg-[#E2E8F0] rounded-lg transition-colors cursor-pointer" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-5">
            <CustomInput
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={setCurrentPassword}
              placeholder="••••••••••••"
              required
            />
            <CustomInput
              label="New Password"
              type="password"
              value={newPassword}
              onChange={setNewPassword}
              placeholder="••••••••••••"
              required
            />
            <CustomInput
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="••••••••••••"
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
