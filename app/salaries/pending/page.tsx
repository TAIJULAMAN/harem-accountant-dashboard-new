import React from "react";
import PageHeader from "@/components/customComponent/PageHeader";
import PendingDeclinedTable from "@/components/salaries/pending/PendingDeclinedTable";

export default function PendingDeclinedSalariesPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader
        title="Pending & Declined Salaries"
        description="Review salaries that require your approval or have been declined."
      />
      <PendingDeclinedTable />
    </main>
  );
}
