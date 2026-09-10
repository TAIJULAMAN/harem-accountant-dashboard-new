"use client";

import { Smartphone, Laptop, MoreVertical } from "lucide-react";
import SubmitButton from "../customComponent/SubmitButton";
import { SecurityDevicesListProps } from "./types";
import { DEMO_DEVICES } from "./data";

export default function SecurityDevicesList({ onTriggerModal }: SecurityDevicesListProps) {
  return (
    <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col">
      <h2 className="text-lg font-bold text-[#1E293B] mb-2">Devices</h2>
      <p className="text-sm text-[#94A3B8] mb-6">View and manage all devices currently logged into your account. Sign out of any sessions you do not recognize.</p>

      <SubmitButton
        onClick={() => onTriggerModal("signout")}
        className="w-full py-2 mb-6"
      >
        Sign out from all devices
      </SubmitButton>

      <div className="space-y-6">
        {DEMO_DEVICES.map((device, index) => (
          <div
            key={device.id}
            className={`flex items-center gap-4 ${
              index !== DEMO_DEVICES.length - 1 ? "border-b border-[#E2E8F0] pb-6" : ""
            }`}
          >
            <div className="text-[#64748B]">
              {device.type === "smartphone" ? (
                <Smartphone className="w-5 h-5" />
              ) : (
                <Laptop className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#1E293B] text-sm">{device.name}</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">{device.location}, {device.date}</p>
            </div>
            <button
              onClick={() => onTriggerModal("signout_device")}
              className="p-1 text-[#94A3B8] hover:bg-[#F1F5F9] rounded transition-colors cursor-pointer"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
