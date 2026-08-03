import React from "react";
import Link from "next/link";

export default function PaymentsHeader() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h1 className="text-xl font-semibold text-slate-800 tracking-tight">Payments</h1>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <Link
          href="/budgeting/payments/import"
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-[#635BFF] text-[#635BFF] text-sm font-semibold hover:bg-[#f3effe] transition-colors text-center"
        >
          Import Receipts
        </Link>
        <Link 
          href="/budgeting/payments/automations"
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#e0e1fe] text-[#5c60f5] text-sm font-semibold hover:bg-[#5c60f5] hover:text-white transition-colors text-center"
        >
          Set Automations
        </Link>
      </div>
    </div>
  );
}
