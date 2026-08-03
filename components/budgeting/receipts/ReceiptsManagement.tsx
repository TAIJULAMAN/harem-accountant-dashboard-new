import React from "react";
import ReceiptsKPICards from "./ReceiptsKPICards";
import ReceiptsTable from "./ReceiptsTable";
import ReceiptDetailView from "./ReceiptDetailView";
import ReceiptsFilters from "./ReceiptsFilters";
import { useReceiptsManagement } from "./hooks/useReceiptsManagement";
import CustomExportButton from "@/components/customComponent/CustomExportButton";

export default function ReceiptsManagement() {
  const {
    activeView,
    selectedReceipt,
    selectedDate,
    setSelectedDate,
    selectedEmployee,
    setSelectedEmployee,
    selectedService,
    setSelectedService,
    selectedMethod,
    setSelectedMethod,
    searchQuery,
    setSearchQuery,
    handleViewReceipt,
    handleBackToList,
    filteredReceipts,
  } = useReceiptsManagement();

  if (activeView === "detail" && selectedReceipt) {
    return (
      <ReceiptDetailView receipt={selectedReceipt} onBack={handleBackToList} />
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight text-left">
            Receipts
          </h1>
          <CustomExportButton label="Export Receipts" />
        </div>
        <div className="border-t border-slate-50 pt-5">
          <ReceiptsFilters
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      <ReceiptsKPICards />
      <ReceiptsTable
        receipts={filteredReceipts}
        onViewReceipt={handleViewReceipt}
      />
    </div>
  );
}
