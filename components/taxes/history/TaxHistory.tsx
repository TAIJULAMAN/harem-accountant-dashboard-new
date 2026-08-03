"use client";

import React, { useState } from "react";
import Image from "next/image";
import { taxHistoryData, TaxHistoryStatus } from "./data";
import ExportModal from "@/components/modal/ExportModal";
import Pagination from "@/components/customComponent/Pagination";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomSearch from "@/components/customComponent/CustomSearch";
import CustomExportButton from "@/components/customComponent/CustomExportButton";

export default function TaxHistory() {
  const [activeTab, setActiveTab] = useState<"All" | TaxHistoryStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = taxHistoryData.filter((item) => {
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
    <div className="flex flex-col space-y-6 pb-10">
      {/* Top Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight shrink-0">
          Tax History
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
          <div className="w-full sm:w-40">
            <CustomSelect
              value={activeTab}
              options={["All", "Approved", "Declined", "Cancelled"]}
              onChange={(val) => setActiveTab(val as "All" | TaxHistoryStatus)}
            />
          </div>

          <CustomSearch
            value={searchQuery}
            onChange={setSearchQuery}
            className="w-full sm:w-64"
          />

          <CustomExportButton
            label="Export Report"
            variant="solid"
            onClick={() => setIsExportModalOpen(true)}
            className="whitespace-nowrap shrink-0"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#f8f9ff] border-b border-slate-100">
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
                  Tax Type
                </th>
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
                  Salon
                </th>
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
                  Period
                </th>
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
                  Amount
                </th>
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
                  Paid Date
                </th>
                <th className="px-6 py-5 text-left text-[14px] font-bold text-slate-700">
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
                    <div className="flex items-center gap-4">
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.salon}
                          width={40}
                          height={40}
                          className="rounded-xl shadow-sm shrink-0 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 shadow-sm shrink-0"></div>
                      )}
                      <span className="text-[14px] font-medium text-slate-500">
                        {item.salon}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[14px] font-medium text-slate-500">
                      {item.period}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex px-3 py-1.5 rounded-[6px] bg-indigo-100/60 text-indigo-500 text-[12px] font-bold tracking-wide">
                      {item.amount}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[14px] font-medium text-slate-500">
                      {item.paidDate}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide ${
                        item.status === "Approved"
                          ? "bg-[#e5fcf1] text-[#34d399]"
                          : item.status === "Declined"
                            ? "bg-rose-50 text-rose-400"
                            : "bg-slate-100 text-slate-500"
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

        {/* Pagination Footer */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Tax History"
      />
    </div>
  );
}
