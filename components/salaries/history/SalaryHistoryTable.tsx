"use client";

import React, { useState } from "react";
import Pagination from "@/components/customComponent/Pagination";
import CustomExportButton from "@/components/customComponent/CustomExportButton";
import CustomSearch from "@/components/customComponent/CustomSearch";
import CustomSelect from "@/components/customComponent/CustomSelect";
import ExportModal from "@/components/modal/ExportModal";
import { salaryHistoryData } from "./data";
import SalaryHistoryList from "./SalaryHistoryList";

export default function SalaryHistoryTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tabs = ["All", "Approved", "Declined", "Cancelled"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const filteredData = salaryHistoryData.filter((item) => {
    const matchesTab = activeTab === "All" || item.status === activeTab;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Salary History
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <CustomSearch
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full sm:w-64"
            />
            <div className="w-full sm:w-40">
              <CustomSelect
                value={activeTab}
                options={tabs}
                onChange={handleTabChange}
              />
            </div>
            <CustomExportButton
              label="Export Data"
              variant="outline"
              onClick={() => setIsExportOpen(true)}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <SalaryHistoryList paginatedData={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        itemsName="salaries"
        onPageChange={setCurrentPage}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        title="Salary History"
      />
    </div>
  );
}
