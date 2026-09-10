"use client";

import React from "react";
import CustomSwitch from "@/components/customComponent/CustomSwitch";
import SubmitButton from "@/components/customComponent/SubmitButton";
import { SecuritySettingsListProps } from "./types";

export default function SecuritySettingsList({
  twoFactorEnabled,
  onToggle2FA,
  onTriggerModal,
}: SecuritySettingsListProps) {
  return (
    <div className="lg:col-span-8 bg-white rounded-lg border border-[#E2E8F0] shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <div>
            <p className="font-bold text-[#1E293B]">Two-factor Authentication</p>
            <p className="text-sm text-[#94A3B8] mt-1">Mandatory 2FA for all super admin accounts</p>
          </div>
          <CustomSwitch
            checked={twoFactorEnabled}
            onChange={onToggle2FA}
          />
        </div>
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <div>
            <p className="font-bold text-[#1E293B]">Password</p>
            <p className="text-xl leading-none text-[#1E293B] mt-1 tracking-[0.2em]">••••••••••••</p>
          </div>
          <SubmitButton
            onClick={() => onTriggerModal("password")}
            className="px-4 py-1.5"
          >
            Change
          </SubmitButton>
        </div>
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <div>
            <p className="font-bold text-[#1E293B]">Recovery email</p>
            <p className="text-sm text-[#94A3B8] mt-1">test@test.com</p>
          </div>
          <SubmitButton
            onClick={() => onTriggerModal("email")}
            className="px-4 py-1.5"
          >
            Setup
          </SubmitButton>
        </div>
        <div className="flex items-center justify-between p-6">
          <div>
            <p className="font-bold text-[#1E293B]">Recovery phone number</p>
            <p className="text-sm text-[#94A3B8] mt-1">3482938493</p>
          </div>
          <SubmitButton
            onClick={() => onTriggerModal("phone")}
            className="px-4 py-1.5"
          >
            Edit
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
