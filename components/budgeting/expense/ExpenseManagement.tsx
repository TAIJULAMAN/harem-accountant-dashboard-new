"use client";

import React from "react";
import { List, LayoutGrid } from "lucide-react";
import ExpenseGrid from "./ExpenseGrid";
import ExpenseList from "./ExpenseList";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseAttachmentView from "./ExpenseAttachmentView";
import AddExpenseModal from "./AddExpenseModal";
import BudgetExceededModal from "./BudgetExceededModal";
import AttachmentModal from "./AttachmentModal";
import ViewExpenseModal from "./ViewExpenseModal";
import CustomSearch from "@/components/customComponent/CustomSearch";
import { useExpenseManagement } from "./hooks/useExpenseManagement";

export default function ExpenseManagement() {
  const {
    viewType,
    setViewType,
    searchQuery,
    setSearchQuery,
    selectedDate,
    setSelectedDate,
    selectedSalon,
    setSelectedSalon,
    selectedMacroCategory,
    setSelectedMacroCategory,
    selectedCategory,
    setSelectedCategory,
    selectedSupplier,
    setSelectedSupplier,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    isAddOpen,
    setIsAddOpen,
    isExceededOpen,
    setIsExceededOpen,
    isAttachOpen,
    setIsAttachOpen,
    setActiveTxId,
    pendingExpense,
    setPendingExpense,
    isViewOpen,
    setIsViewOpen,
    activeViewTx,
    setActiveViewTx,
    viewingAttachmentTx,
    setViewingAttachmentTx,
    filteredExpenses,
    handleView,
    handleEdit,
    handleAttachOpen,
    handleAttachSave,
    handleViewAttachment,
    handleDownloadAttachment,
    handleDelete,
    handleAddSave,
    handleConfirmExceeded,
  } = useExpenseManagement();

  if (viewingAttachmentTx) {
    return (
      <ExpenseAttachmentView
        attachmentTx={viewingAttachmentTx}
        onClose={() => setViewingAttachmentTx(null)}
        onDownload={handleDownloadAttachment}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <ExpenseHeader onAddExpense={() => setIsAddOpen(true)} />
        <ExpenseFilters
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedSalon={selectedSalon}
          setSelectedSalon={setSelectedSalon}
          selectedMacroCategory={selectedMacroCategory}
          setSelectedMacroCategory={setSelectedMacroCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSupplier={selectedSupplier}
          setSelectedSupplier={setSelectedSupplier}
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />
      </div>

      {/* Row 3: Search Bar and List/Grid View toggles */}
      <div className="flex items-center justify-between gap-4 bg-white p-5 rounded-xl shadow-sm">
        {/* Search */}
        <CustomSearch
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full max-w-[280px]"
        />

        {/* Toggle buttons */}
        <div className="flex items-center border border-slate-200 bg-white rounded-xl p-0.5 shadow-sm">
          <button
            onClick={() => setViewType("list")}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
              viewType === "list"
                ? "bg-[#f0f2ff] text-[#5c60f5]"
                : "text-slate-400 hover:text-slate-600"
            }`}
            title="List view"
          >
            <List size={16} />
          </button>
          <button
            onClick={() => setViewType("grid")}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
              viewType === "grid"
                ? "bg-[#f0f2ff] text-[#5c60f5]"
                : "text-slate-400 hover:text-slate-600"
            }`}
            title="Card grid view"
          >
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>

      {/* Main View Container */}
      <div className="w-full">
        {filteredExpenses.length > 0 ? (
          viewType === "list" ? (
            <ExpenseList
              expenses={filteredExpenses}
              onView={handleView}
              onEdit={handleEdit}
              onAttach={handleAttachOpen}
              onViewAttachment={handleViewAttachment}
              onDownloadAttachment={handleDownloadAttachment}
              onDelete={handleDelete}
            />
          ) : (
            <ExpenseGrid
              expenses={filteredExpenses}
              onView={handleView}
              onEdit={handleEdit}
              onAttach={handleAttachOpen}
              onViewAttachment={handleViewAttachment}
              onDownloadAttachment={handleDownloadAttachment}
              onDelete={handleDelete}
            />
          )
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400 text-xs font-bold shadow-sm">
            No matching expenses found for the selected filter parameters.
          </div>
        )}
      </div>

      {/* Modals mount point */}
      <AddExpenseModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={handleAddSave}
      />

      {isExceededOpen && pendingExpense && (
        <BudgetExceededModal
          isOpen={isExceededOpen}
          macroCategory={pendingExpense.macroCategory}
          amountExceeded={`€${(pendingExpense.cost - 5000).toLocaleString()}`}
          onClose={() => {
            setIsExceededOpen(false);
            setPendingExpense(null);
          }}
          onConfirm={handleConfirmExceeded}
        />
      )}

      {isAttachOpen && (
        <AttachmentModal
          isOpen={isAttachOpen}
          attachmentName={null}
          onClose={() => {
            setIsAttachOpen(false);
            setActiveTxId(null);
          }}
          onAttach={handleAttachSave}
        />
      )}

      <ViewExpenseModal
        isOpen={isViewOpen}
        expense={activeViewTx}
        onClose={() => {
          setIsViewOpen(false);
          setActiveViewTx(null);
        }}
        onViewAttachment={() => {
          if (activeViewTx) {
            handleViewAttachment(activeViewTx.id);
            setIsViewOpen(false);
            setActiveViewTx(null);
          }
        }}
        onDownloadAttachment={() => {
          if (activeViewTx) {
            handleDownloadAttachment(activeViewTx.id);
          }
        }}
      />
    </div>
  );
}
