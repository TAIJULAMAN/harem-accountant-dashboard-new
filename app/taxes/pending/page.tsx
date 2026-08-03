import React from "react";
import PendingDeclinedTaxes from "@/components/taxes/pending/PendingDeclinedTaxes";

export default function PendingDeclinedTaxesPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <PendingDeclinedTaxes />
    </main>
  );
}
