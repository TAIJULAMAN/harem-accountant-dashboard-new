"use client";

import React, { useState, useMemo } from "react";
import Pagination from "@/components/customComponent/Pagination";
import ImportedListHeader from "./ImportedListHeader";
import ImportedListTableContent from "./ImportedListTableContent";
import { ImportedPaymentItem } from "./data";

interface Props {
  data: ImportedPaymentItem[];
  onDataChange: (newData: ImportedPaymentItem[]) => void;
}

export default function ImportedListTable({ data, onDataChange }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevData, setPrevData] = useState(data);

  if (data !== prevData) {
    setPrevData(data);
    setSelectedIds([]);
    setCurrentPage(1);
  }

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const toggleSelectAll = () => {
    if (
      selectedIds.length === paginatedData.length &&
      paginatedData.length > 0
    ) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedData.map((p) => p.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleApprove = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    onDataChange(newData);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleReject = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    onDataChange(newData);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleMassApproval = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    onDataChange(newData);
    setSelectedIds([]);
  };

  const handleMassReapproval = () => {
    alert("Mass Reapproval triggered on " + selectedIds.length + " items.");
    setSelectedIds([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
      <ImportedListHeader
        dataLength={data.length}
        selectedCount={selectedIds.length}
        onMassReapproval={handleMassReapproval}
        onMassApproval={handleMassApproval}
      />

      <div className="overflow-x-auto min-h-[250px]">
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-48 text-slate-400 text-sm font-medium">
            No items to display.
          </div>
        ) : (
          <ImportedListTableContent
            paginatedData={paginatedData}
            selectedIds={selectedIds}
            toggleSelectAll={toggleSelectAll}
            toggleSelect={toggleSelect}
            handleReject={handleReject}
            handleApprove={handleApprove}
          />
        )}
      </div>

      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
