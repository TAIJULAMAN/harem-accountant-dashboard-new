import React from "react";

export default function VATSummaryCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        VAT Summary
      </h3>
      <div className="overflow-x-auto rounded-xl ring-1 ring-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-700">Rate</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-right">Taxable</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-right">IvA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 text-xs font-semibold text-slate-700">0%</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-700 text-right">€ 0</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-700 text-right">€ 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
