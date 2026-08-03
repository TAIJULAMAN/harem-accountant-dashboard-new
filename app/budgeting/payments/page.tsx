import React from "react";
import PaymentsOverview from "@/components/budgeting/payments/PaymentsOverview";

export default function PaymentsPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <div className="">
        <PaymentsOverview />
      </div>
    </main>
  );
}
