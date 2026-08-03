"use client";

import React from "react";
import Image from "next/image";
import { latestTransactionsData } from "./data";

export default function LatestTransactions() {
  const currentData = latestTransactionsData.slice(0, 5);

  const getMacroCategoryBadge = (category: string) => {
    switch (category) {
      case "Internet":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100/50";
      case "HR":
        return "bg-violet-50 text-violet-600 border border-violet-100/50";
      case "Consumables":
        return "bg-sky-50 text-sky-600 border border-sky-100/50";
      case "Products":
        return "bg-indigo-50 text-indigo-600 border border-indigo-100/50";
      case "Taxes":
        return "bg-pink-50 text-pink-600 border border-pink-100/50";
      case "Services":
        return "bg-amber-50 text-amber-600 border border-amber-100/50";
      case "Utilities":
        return "bg-slate-50 text-slate-600 border border-slate-100";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-100";
    }
  };

  const getPaymentMethodBadge = (method: string) => {
    switch (method) {
      case "Cash":
        return "bg-[#ebfbee] text-[#2f9e44] border border-[#c3fae8]/50";
      default:
        return "bg-[#e8f4fd] text-[#1971c2] border border-[#d0ebff]/50";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden flex flex-col">
      {/* Title */}
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-semibold text-slate-800 tracking-tight">
          Latest Transactions
        </h3>
      </div>

      {/* Table Container with horizontal scrolling responsiveness */}
      <div className="overflow-x-auto min-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Salon
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Macro-categories
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Category
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Cost
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Supplier
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Payment method
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentData.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                {/* Date */}
                <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                  {tx.date}
                </td>

                {/* Salon */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={tx.salon.avatar}
                      alt={tx.salon.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-xl object-cover shadow-sm bg-slate-50 shrink-0"
                    />
                    <span className="text-xs font-extrabold text-slate-700">
                      {tx.salon.name}
                    </span>
                  </div>
                </td>

                {/* Macro Category */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg ${getMacroCategoryBadge(
                      tx.macroCategory,
                    )}`}
                  >
                    {tx.macroCategory}
                  </span>
                </td>

                {/* Category */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-[10px] font-extrabold bg-[#e6fcf5] text-kpi-teal-text border border-[#c3fae8]/50 px-2.5 py-1 rounded-lg">
                    {tx.category}
                  </span>
                </td>

                {/* Cost */}
                <td className="px-6 py-4 text-xs font-black text-slate-800 whitespace-nowrap">
                  {tx.cost}
                </td>

                {/* Supplier */}
                <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">
                  {tx.supplier}
                </td>

                {/* Payment Method */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg border ${getPaymentMethodBadge(
                      tx.paymentMethod,
                    )}`}
                  >
                    {tx.paymentMethod === "Terminal"
                      ? "Credit Card"
                      : tx.paymentMethod}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
