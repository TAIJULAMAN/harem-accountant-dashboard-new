"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ContractMetricCards from "./ContractMetricCards";
import ContractsTable from "./ContractsTable";

export default function ContractsOverview() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          Contracts Overview
        </h1>
        <Link
          href="/documents/contracts/new"
          className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm cursor-pointer"
        >
          <Plus size={16} strokeWidth={3} />
          <span>New Contract</span>
        </Link>
      </div>

      <ContractMetricCards />
      <ContractsTable />
    </div>
  );
}
