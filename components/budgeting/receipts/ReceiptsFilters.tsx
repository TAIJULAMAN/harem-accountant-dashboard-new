"use client";

import React from "react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomSearch from "@/components/customComponent/CustomSearch";
import {
  filterDateOptions,
  filterEmployeeOptions,
  filterServiceOptions,
  filterMethodOptions,
} from "./data";

interface ReceiptsFiltersProps {
  selectedDate: string;
  setSelectedDate: (val: string) => void;
  selectedEmployee: string;
  setSelectedEmployee: (val: string) => void;
  selectedService: string;
  setSelectedService: (val: string) => void;
  selectedMethod: string;
  setSelectedMethod: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function ReceiptsFilters({
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
}: ReceiptsFiltersProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full xl:max-w-4xl">
        <CustomSelect
          label="Data Range"
          value={selectedDate}
          options={filterDateOptions}
          onChange={setSelectedDate}
        />
        <CustomSelect
          label="Employees"
          value={selectedEmployee}
          options={filterEmployeeOptions}
          onChange={setSelectedEmployee}
        />
        <CustomSelect
          label="Services"
          value={selectedService}
          options={filterServiceOptions}
          onChange={setSelectedService}
        />
        <CustomSelect
          label="Method"
          value={selectedMethod}
          options={filterMethodOptions}
          onChange={setSelectedMethod}
        />
      </div>
      <div className="w-full xl:max-w-xs flex flex-col justify-end h-full">
        <CustomSearch
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full"
        />
      </div>
    </div>
  );
}
