"use client";

import React from "react";
import { useSalon } from "@/context/SalonContext";
import PageHeader from "@/components/customComponent/PageHeader";
import SalariesCharts from "@/components/salaries/overview/SalariesCharts/SalariesCharts";
import SalariesKPICards from "@/components/salaries/overview/salariesKPICards/SalariesKPICards";
import RecentlyDeclinedSalaries from "@/components/salaries/overview/recentlyDeclinedSalaries/RecentlyDeclinedSalaries";

export default function SalariesOverviewPage() {
  const { selectedSalon } = useSalon();
  void selectedSalon;

  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader
        title="Salaries Overview"
        description="Overview of your financial approvals, budgets, and compliance warnings."
      />
      <SalariesKPICards />
      <RecentlyDeclinedSalaries />
      <SalariesCharts />
    </main>
  );
}
