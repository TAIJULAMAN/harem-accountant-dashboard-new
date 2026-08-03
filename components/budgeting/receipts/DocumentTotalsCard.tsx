import React from "react";

export default function DocumentTotalsCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Document Totals
      </h3>
      <div className="divide-y divide-slate-100 space-y-3 pt-2">
        <div className="flex items-center justify-between pb-3">
          <span className="text-xs font-semibold text-slate-400">Total Taxable Amount</span>
          <span className="text-xs font-semibold text-slate-700">€ 170</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-xs font-semibold text-slate-400">Total VAT</span>
          <span className="text-xs font-semibold text-slate-700">€ 0</span>
        </div>
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs font-semibold text-slate-800">Document Total</span>
          <span className="text-xl font-semibold text-slate-800">€ 170</span>
        </div>
      </div>
    </div>
  );
}
