"use client";

import React from "react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  dateOptions,
  employeeOptions,
  servicesOptions,
  paymentMethodOptions,
} from "./data";

interface IncomeFiltersProps {
  selectedDate: string;
  setSelectedDate: (val: string) => void;
  selectedEmployee: string;
  setSelectedEmployee: (val: string) => void;
  selectedService: string;
  setSelectedService: (val: string) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (val: string) => void;
}

export default function IncomeFilters({
  selectedDate,
  setSelectedDate,
  selectedEmployee,
  setSelectedEmployee,
  selectedService,
  setSelectedService,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}: IncomeFiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-50 pt-5">
      {/* Date Selector */}
      <CustomSelect
        label="Date"
        value={selectedDate}
        options={dateOptions}
        onChange={setSelectedDate}
        placeholder="All"
      />

      {/* Employee Selector */}
      <CustomSelect
        label="Employee"
        value={selectedEmployee}
        options={employeeOptions}
        onChange={setSelectedEmployee}
        placeholder="All"
      />

      {/* Services Selector */}
      <CustomSelect
        label="Services"
        value={selectedService}
        options={servicesOptions}
        onChange={setSelectedService}
        placeholder="All"
      />

      {/* Payment Method Selector */}
      <CustomSelect
        label="Payment Method"
        value={selectedPaymentMethod}
        options={paymentMethodOptions}
        onChange={setSelectedPaymentMethod}
        placeholder="All"
      />
    </div>
  );
}
