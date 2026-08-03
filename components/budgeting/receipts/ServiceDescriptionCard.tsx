import React from "react";

export default function ServiceDescriptionCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Service Description
      </h3>
      <div className="overflow-x-auto rounded-xl ring-1 ring-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-700">Name</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-center">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-right">Unit Price</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-center">VAT Rate</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 text-right">Total Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 text-xs font-semibold text-slate-700">Haircut</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">1</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-700 text-right">€ 246.08</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">22%</td>
              <td className="px-6 py-4 text-xs font-semibold text-slate-800 text-right">€ 246.08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
