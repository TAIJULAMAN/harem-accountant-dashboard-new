import React from "react";
import { Crown } from "lucide-react";
import { type SalonInfo } from "../../salons/data";

interface SubscriptionGridProps {
  salon: SalonInfo;
}

export default function SubscriptionGrid({ salon }: SubscriptionGridProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-800 mb-4">
        Subscription
      </h4>
      <div className="grid grid-cols-3 gap-y-6">
        <div>
          <p className="text-xs text-slate-400 mb-2">Plan</p>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
            ${salon.plan === "Premium" ? "bg-[#D2F4F2] text-[#29343D]" : ""}
            ${salon.plan === "Enterprise" ? "bg-brand text-white" : ""}
            ${salon.plan === "Basic" ? "bg-[#DAD8FF] text-[#29343D]" : ""}
          `}
          >
            {salon.plan === "Enterprise" && (
              <Crown size={12} className="mr-1" />
            )}
            {salon.plan}
          </span>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-2">Billing</p>
          <p className="text-sm font-medium text-slate-800">
            {salon.planPrice.split(" • ")[0] || "Annual"}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-2 opacity-0">Price</p>
          <p className="text-sm font-medium text-[#36C76C]">
            {salon.planPrice.split(" • ")[1] || "€2,000.00 /year"}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-2">Payment Status</p>
          <span
            className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium
            ${salon.paymentStatus === "In order" ? "bg-[#EBFAF0] text-[#36C76C]" : "bg-[#FDE7E9] text-[#E63946]"}
          `}
          >
            {salon.paymentStatus}
          </span>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-2">Next Renewal</p>
          <p className="text-sm font-semibold text-slate-800">
            {salon.nextRenewal}
          </p>
        </div>
      </div>
    </div>
  );
}
