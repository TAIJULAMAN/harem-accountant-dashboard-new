import React from "react";
import ContractsOverview from "@/components/documents/contracts/ContractsOverview";

export default function ContractsPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <ContractsOverview />
    </main>
  );
}
