"use client";

import React, { useState } from "react";
import PayoutsSummaryCard from "./PayoutsSummaryCard";
import PayoutsTable from "./PayoutsTable";
import { payoutsData } from "./payoutsData";
import RequestPayoutModal from "../modal/RequestPayoutModal/RequestPayoutModal";
import SuccessModal from "../modal/SuccessModal";

export default function PayoutsTab() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 animate-in fade-in duration-300">
      <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6">
        Payouts
      </h2>

      <PayoutsSummaryCard onRequestPayout={() => setIsRequestModalOpen(true)} />

      <PayoutsTable data={payoutsData} />

      <RequestPayoutModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSuccess={() => setIsSuccessModalOpen(true)}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="Request sent successfully."
        buttonText="Go to payouts"
      />
    </div>
  );
}
