"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SubmitButton from "@/components/customComponent/SubmitButton";
import { ProfileDetailsProps } from "./types";
import { DEMO_PROFILE } from "./data";

export default function ProfileDetails({ onEditProfile, profile = DEMO_PROFILE }: ProfileDetailsProps) {
  const [avatarSrc, setAvatarSrc] = useState(profile?.avatarUrl || "/avatar/avatar1.png");

  useEffect(() => {
    setAvatarSrc(profile?.avatarUrl || "/avatar/avatar1.png");
  }, [profile?.avatarUrl]);

  return (
    <div className="bg-white p-8 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row gap-8 items-start relative">
      <div className="absolute top-8 right-8 flex flex-col sm:flex-row gap-3">
        <SubmitButton
          onClick={onEditProfile}
        >
          Edit Profile
        </SubmitButton>
      </div>

      <div className="flex flex-col items-center gap-4 mt-16 md:mt-0">
        <div className="w-16 h-16 rounded-full shadow-md relative">
          <Image
            width={128}
            height={128}
            src={avatarSrc}
            alt={profile?.name || "Profile"}
            onError={() => setAvatarSrc("/avatar/avatar1.png")}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 space-y-6 pt-2 w-full">
        <div>
          <h2 className="text-2xl font-bold text-[#1E293B]">{profile.name}</h2>
          <p className="text-[#64748B] font-medium mt-1">Store: {profile.store}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-6 border-t border-[#E2E8F0]">
          <div>
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">Email Address</p>
            <p className="text-[#1E293B] font-medium">{profile.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">Phone Number</p>
            <p className="text-[#1E293B] font-medium">{profile.phone}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">Store Address</p>
            <p className="text-[#1E293B] font-medium">{profile.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
