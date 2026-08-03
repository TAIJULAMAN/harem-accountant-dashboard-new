import React from "react";
import CustomDatePicker from "@/components/customComponent/CustomDatePicker";
import CustomSelect from "@/components/customComponent/CustomSelect";
import {
  salonOptions,
  macroCategoryOptions,
  categoryOptions,
  supplierOptions,
  paymentMethodOptions,
} from "./data";

interface ExpenseFiltersProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedSalon: string;
  setSelectedSalon: (val: string) => void;
  selectedMacroCategory: string;
  setSelectedMacroCategory: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedSupplier: string;
  setSelectedSupplier: (val: string) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (val: string) => void;
}

export default function ExpenseFilters({
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
}: ExpenseFiltersProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-slate-50 pt-5">
      {/* Date Filter */}
      <CustomDatePicker
        label="Date"
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select Date"
      />

      {/* Salons Dropdown */}
      <CustomSelect
        label="Salons"
        value={selectedSalon}
        options={salonOptions.map((o) => (o === "All" ? "All Salons" : o))}
        onChange={setSelectedSalon}
        placeholder="All Salons"
      />

      {/* Macro-categories */}
      <CustomSelect
        label="Macro-categories"
        value={selectedMacroCategory}
        options={macroCategoryOptions.map((o) =>
          o === "All" ? "All Categories" : o,
        )}
        onChange={setSelectedMacroCategory}
        placeholder="All Categories"
      />

      {/* Category */}
      <CustomSelect
        label="Category"
        value={selectedCategory}
        options={categoryOptions.map((o) =>
          o === "All" ? "All Subcategories" : o,
        )}
        onChange={setSelectedCategory}
        placeholder="All Subcategories"
      />

      {/* Supplier */}
      <CustomSelect
        label="Supplier"
        value={selectedSupplier}
        options={supplierOptions.map((o) =>
          o === "All" ? "All Suppliers" : o,
        )}
        onChange={setSelectedSupplier}
        placeholder="All Suppliers"
      />

      {/* Payment Method */}
      <CustomSelect
        label="Payment Method"
        value={selectedPaymentMethod}
        options={paymentMethodOptions.map((o) =>
          o === "All" ? "All Methods" : o,
        )}
        onChange={setSelectedPaymentMethod}
        placeholder="All Methods"
      />
    </div>
  );
}
