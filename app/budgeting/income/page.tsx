"use client";

import IncomeManagement from "@/components/budgeting/income/IncomeManagement";

export default function IncomePage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <IncomeManagement />
    </main>
  );
}
