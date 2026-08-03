"use client";

import React from "react";
import { useSalon } from "@/context/SalonContext";
import BudgetingOverview from "@/components/budgeting/overview/BudgetingOverview";

export default function BudgetingOverviewPage() {
  const { selectedSalon } = useSalon();
  void selectedSalon;

  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <BudgetingOverview />
    </main>
  );
}
