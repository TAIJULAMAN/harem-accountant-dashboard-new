import React from "react";
import CustomSelect from "../customComponent/CustomSelect";

interface RevenueShareFiltersProps {
  period: string;
  setPeriod: (val: string) => void;
  salonFilter: string;
  setSalonFilter: (val: string) => void;
}

export default function RevenueShareFilters({
  period,
  setPeriod,
  salonFilter,
  setSalonFilter,
}: RevenueShareFiltersProps) {
  const periodOptions = [
    "This Month",
    "Last Month",
    "Last 3 Months",
    "This Year",
  ];

  const salonOptions = [
    "All Salons",
    "Beauty Wellness Center",
    "Bella Vista Salon",
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
      <div className="w-full sm:w-48">
        <CustomSelect
          label="Period"
          value={period}
          options={periodOptions}
          onChange={setPeriod}
        />
      </div>

      <div className="w-full sm:w-60">
        <CustomSelect
          label="Salon"
          value={salonFilter}
          options={salonOptions}
          onChange={setSalonFilter}
        />
      </div>
    </div>
  );
}
