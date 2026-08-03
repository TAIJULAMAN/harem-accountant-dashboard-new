"use client";

import React from "react";
import { useSalon } from "@/context/SalonContext";
import KPICards from "@/components/dashboard/kpiCards/KPICards";
import RecentActivity from "@/components/dashboard/recentActivity/RecentActivity";
import SalonOverview from "@/components/dashboard/salonOverview/SalonOverview";
import Charts from "@/components/dashboard/charts/Charts";
import DashboardHeader from "@/components/customComponent/PageHeader";

export default function DashboardPage() {
  const { selectedSalon } = useSalon();

  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <DashboardHeader
        title="Dashboard"
        description="Overview of your financial approvals, budgets, and compliance warnings."
      />
      <KPICards selectedSalon={selectedSalon} />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-6 h-[500px]">
          <RecentActivity selectedSalon={selectedSalon} />
        </div>
        <div className="xl:col-span-6 h-[500px]">
          <SalonOverview />
        </div>
      </div>
      <Charts selectedSalon={selectedSalon} />
    </main>
  );
}
