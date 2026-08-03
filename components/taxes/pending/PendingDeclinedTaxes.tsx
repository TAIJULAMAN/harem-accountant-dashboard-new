"use client";

import React, { useState } from "react";
import Image from "next/image";
import { pendingTaxesData, TaxStatus } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import Pagination from "@/components/customComponent/Pagination";
import CustomSearch from "@/components/customComponent/CustomSearch";

export default function PendingDeclinedTaxes() {
  const [activeTab, setActiveTab] = useState<"All" | TaxStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredData = pendingTaxesData.filter((item) => {
    const matchesTab = activeTab === "All" || item.status === activeTab;
    const matchesSearch =
      item.taxType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.salon.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col space-y-6">
      {/* Top Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight shrink-0">
          Pending & Declined Taxes
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
          <div className="w-full sm:w-40">
            <CustomSelect
              value={activeTab}
              options={["All", "Pending", "Declined"]}
              onChange={(val) => setActiveTab(val as "All" | TaxStatus)}
            />
          </div>

          <div className="w-full sm:w-64">
            <CustomSearch
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100">
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Tax Type
                </th>
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Salon
                </th>
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Period
                </th>
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Due Date
                </th>
                <th className="px-6 py-4 text-left text-[13px] font-bold text-slate-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <span className="text-[13px] font-bold text-slate-700">
                      {item.taxType}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.salon}
                          width={32}
                          height={32}
                          className="rounded-lg shadow-sm shrink-0 object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 shadow-sm shrink-0"></div>
                      )}
                      <span className="text-[13px] font-medium text-slate-500">
                        {item.salon}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[13px] font-medium text-slate-500">
                      {item.period}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex px-3 py-1 rounded-[6px] bg-indigo-100/50 text-indigo-500 text-[11px] font-bold tracking-wide">
                      {item.amount}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[13px] font-medium text-slate-500">
                      {item.dueDate}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        item.status === "Declined"
                          ? "bg-rose-50 text-rose-400"
                          : "bg-amber-50 text-amber-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-sm text-slate-500 font-medium"
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
