"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import SaleBasicDetails from "./SaleBasicDetails";
import SaleActivityTimeline from "./SaleActivityTimeline";
import SaleDetails from "./SaleDetails";
import SaleRefundDetails from "./SaleRefundDetails";
import SalePrintReceiptModal from "./SalePrintReceiptModal";

interface ViewSalePageProps {
  saleId: string;
}

export default function ViewSalePage({ saleId }: ViewSalePageProps) {
  const [printModalState, setPrintModalState] = useState<
    "closed" | "not_received" | "received"
  >("closed");
  const [isOnlineReceiptPrinted, setIsOnlineReceiptPrinted] = useState(false);

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between border border-slate-100">
        <Link
          href="/budgeting/payments"
          className="flex items-center gap-2 text-lg font-semibold text-slate-800 hover:text-[#5c60f5] transition-colors"
        >
          <ChevronLeft size={20} />
          View Sale
        </Link>
        <div className="flex items-center gap-1 bg-[#f3effe] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5c60f5]">
          <Home size={12} />
          <span className="text-slate-400 mx-1">/</span>
          <span>Payments</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <SaleBasicDetails saleId={saleId} />
        <SaleActivityTimeline />
      </div>
      <SaleDetails
        saleId={saleId}
        isOnlineReceiptPrinted={isOnlineReceiptPrinted}
        setPrintModalState={setPrintModalState}
      />
      <SaleRefundDetails />
      <SalePrintReceiptModal
        printModalState={printModalState}
        setPrintModalState={setPrintModalState}
        setIsOnlineReceiptPrinted={setIsOnlineReceiptPrinted}
      />
    </div>
  );
}
