"use client";

import React, { useState } from "react";
import Pagination from "@/components/customComponent/Pagination";
import CustomSearch from "@/components/customComponent/CustomSearch";
import CustomSelect from "@/components/customComponent/CustomSelect";
import { pendingSalariesData, PendingSalaryRecord } from "./data";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import SuccessModal from "../../modal/SuccessModal";
import SalaryDetailsModal from "./SalaryDetailsModal";
import PendingSalariesTable from "./PendingSalariesTable";

export default function PendingDeclinedTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [, setIsStatusOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [modalType, setModalType] = useState<
    "details" | "delete" | "success" | null
  >(null);
  const [selectedRecord, setSelectedRecord] =
    useState<PendingSalaryRecord | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  const tabs = ["All", "Pending", "Declined"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setOpenDropdownId(null);
    setIsStatusOpen(false);
  };

  const filteredData = pendingSalariesData.filter((item) => {
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
        <div className="space-y-4 flex flex-col sm:flex-row md:flex-row justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold text-slate-800">
            Pending & Declined Salaries
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32">
              <CustomSelect
                value={activeTab}
                options={tabs}
                onChange={handleTabChange}
              />
            </div>
            <CustomSearch
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full sm:w-64"
            />
          </div>
        </div>

        <PendingSalariesTable
          paginatedData={paginatedData}
          openDropdownId={openDropdownId}
          setOpenDropdownId={setOpenDropdownId}
          setSelectedRecord={setSelectedRecord}
          setModalType={setModalType}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        itemsName="salaries"
        onPageChange={setCurrentPage}
      />

      {/* Modals Overlay */}
      {modalType && modalType !== "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
          {modalType === "details" && selectedRecord && (
            <SalaryDetailsModal
              record={selectedRecord}
              onClose={() => setModalType(null)}
            />
          )}
          {modalType === "delete" && (
            <DeleteConfirmationModal
              onClose={() => setModalType(null)}
              onConfirm={() => setModalType("success")}
            />
          )}
        </div>
      )}
      <SuccessModal
        isOpen={modalType === "success"}
        onClose={() => setModalType(null)}
      />
    </div>
  );
}
