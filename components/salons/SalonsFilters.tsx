"use client";

import React from "react";
import CustomSelect from "../customComponent/CustomSelect";
import CustomSearch from "../customComponent/CustomSearch";

interface SalonsFiltersProps {
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  sourceFilter: string;
  setSourceFilter: (val: string) => void;
  paymentFilter: string;
  setPaymentFilter: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function SalonsFilters({
  statusFilter,
  setStatusFilter,
  sourceFilter,
  setSourceFilter,
  paymentFilter,
  setPaymentFilter,
  searchQuery,
  setSearchQuery,
}: SalonsFiltersProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-end gap-4 sm:gap-6 w-full xl:w-auto">
        {/* Status Filter */}
        <div className="w-full sm:w-48">
          <CustomSelect
            label="Status"
            value={statusFilter}
            options={["All", "Connected", "Pending", "Disconnected"]}
            onChange={setStatusFilter}
          />
        </div>

        {/* Sources Filter */}
        <div className="w-full sm:w-48">
          <CustomSelect
            label="Sources"
            value={sourceFilter}
            options={["All", "Invited by Me", "Others"]}
            onChange={setSourceFilter}
          />
        </div>

        {/* Payments Filter */}
        <div className="w-full sm:w-48">
          <CustomSelect
            label="Payments"
            value={paymentFilter}
            options={["All Payments", "Paid", "Pending", "Overdue"]}
            onChange={setPaymentFilter}
          />
        </div>
      </div>

      {/* Search */}
      <div className="w-full xl:w-64">
        <CustomSearch
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
