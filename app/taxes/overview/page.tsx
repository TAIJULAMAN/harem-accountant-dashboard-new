"use client";

import React from "react";
import PageHeader from "@/components/customComponent/PageHeader";
import TaxesKPICards from "@/components/taxes/overview/TaxesKPICards/TaxesKPICards";
import TaxesCharts from "@/components/taxes/overview/TaxesCharts/TaxesCharts";

export default function TaxesOverviewPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader title="Taxes & Compliance Overview" />
      <TaxesKPICards />
      <TaxesCharts />
    </main>
  );
}
