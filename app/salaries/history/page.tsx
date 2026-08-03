"use client";

import React from "react";
import PageHeader from "@/components/customComponent/PageHeader";
import SalaryHistoryTable from "@/components/salaries/history/SalaryHistoryTable";

export default function SalaryHistoryPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader
        title="Salaries History"
        description="View and filter historical salary approvals and declines."
      />
      <SalaryHistoryTable />
    </main>
  );
}
