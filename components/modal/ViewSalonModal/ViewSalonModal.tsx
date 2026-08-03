"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { type SalonInfo } from "../../salons/data";
import { TrendingUp } from "lucide-react";
import CustomCloseButton from "../../customComponent/CustomCloseButton";
import CustomAlert from "../../customComponent/CustomAlert";
import SubmitButton from "../../customComponent/SubmitButton";
import CompanyInformation from "./CompanyInformation";
import OwnerContacts from "./OwnerContacts";
import SubscriptionGrid from "./SubscriptionGrid";
import SecondarySubscriptionInfo from "./SecondarySubscriptionInfo";

interface ViewSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  salon: SalonInfo | null;
}

export default function ViewSalonModal({
  isOpen,
  onClose,
  salon,
}: ViewSalonModalProps) {
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

  if (!isOpen || !salon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl h-[90vh] bg-white rounded-[24px] shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-between px-8 py-6 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800">View Salon</h2>
          <CustomCloseButton
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 transition-colors"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 mt-5">
          <div className="flex items-center gap-4 mb-2">
            {salon.avatarImage ? (
              <div className="relative w-12 h-12 rounded-xl shrink-0 overflow-hidden shadow-sm">
                <Image
                  src={salon.avatarImage}
                  alt={salon.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`w-12 h-12 rounded-xl shrink-0 bg-gradient-to-tr ${salon.avatarGradient} flex items-center justify-center text-white font-bold text-lg shadow-sm`}
              />
            )}
            <h3 className="text-lg font-medium text-slate-800">{salon.name}</h3>
          </div>

          <CustomAlert icon={TrendingUp}>
            Salon Referred by You — You are earning 30% on this salon!
          </CustomAlert>

          <CompanyInformation salon={salon} />

          <div className="h-px bg-slate-100 my-6" />

          <OwnerContacts salon={salon} />

          <div className="h-px bg-slate-100 my-6" />

          <SubscriptionGrid salon={salon} />

          <div className="h-px bg-slate-100 my-6" />

          <SecondarySubscriptionInfo />

          {/* Footer block */}
          <div className="mt-8 bg-[#F8F9FA] rounded-2xl p-5">
            <p className="text-xs text-slate-500 mb-1">Connected by</p>
            <p className="text-sm font-semibold text-slate-800">
              January 9, 2024
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-end px-8 py-5 border-t border-slate-100 bg-white">
          <SubmitButton>Open Salon Dashboard</SubmitButton>
        </div>
      </div>
    </div>
  );
}
