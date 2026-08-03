import React from "react";
import { CircleDollarSign } from "lucide-react";
import SubmitButton from "../customComponent/SubmitButton";

interface PayoutsSummaryCardProps {
  onRequestPayout: () => void;
}

export default function PayoutsSummaryCard({ onRequestPayout }: PayoutsSummaryCardProps) {
  return (
    <div className="bg-gradient-to-r from-[#16CDC7]/[0.13] to-[#16CDC7]/[0.03] border border-[#16CDC7]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#16CDC7] text-white shadow-sm shrink-0">
          <CircleDollarSign size={24} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-slate-600 mb-1">
            Withdrawable Balance
          </h3>
          <div className="text-xl font-semibold text-slate-800">€ 1,500</div>
        </div>
      </div>
      <div onClick={onRequestPayout} className="w-full sm:w-auto">
        <div className="w-full sm:w-auto [&>button]:w-full">
          <SubmitButton>
            Request Payout
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
