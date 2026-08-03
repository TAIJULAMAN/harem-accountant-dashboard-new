"use client";

import React, { useState } from "react";
import RevenueShareCards from "./RevenueShareCards";
import RevenueShareFilters from "./RevenueShareFilters";
import BreakdownTable from "./BreakdownTable";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { breakdownData, transactionsData } from "./revenueData";

export default function RevenueShareTab() {
  const [period, setPeriod] = useState("This Month");
  const [salonFilter, setSalonFilter] = useState("All Salons");

  const filteredBreakdown = breakdownData;
  const filteredTransactions = transactionsData;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-in fade-in duration-300">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Revenue Share
      </h2>
      <RevenueShareCards />
      <RevenueShareFilters
        period={period}
        setPeriod={setPeriod}
        salonFilter={salonFilter}
        setSalonFilter={setSalonFilter}
      />

      <BreakdownTable data={filteredBreakdown} />

      <TransactionHistoryTable data={filteredTransactions} />
    </div>
  );
}
