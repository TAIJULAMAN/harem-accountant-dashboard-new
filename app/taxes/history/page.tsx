import React from "react";
import TaxHistory from "@/components/taxes/history/TaxHistory";

export default function TaxHistoryPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <TaxHistory />
    </main>
  );
}
