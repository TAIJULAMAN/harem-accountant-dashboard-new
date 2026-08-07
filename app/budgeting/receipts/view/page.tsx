"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ReceiptDetailView from "@/components/budgeting/receipts/ReceiptDetailView";
import { mockReceipts } from "@/components/budgeting/receipts/data";

export default function ViewReceiptPage() {
  const router = useRouter();
  
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <ReceiptDetailView receipt={mockReceipts[0]} onBack={() => router.back()} />
    </main>
  );
}
