"use client";

import ReceiptsManagement from "@/components/budgeting/receipts/ReceiptsManagement";

export default function ReceiptsPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <ReceiptsManagement />
    </main>
  );
}
