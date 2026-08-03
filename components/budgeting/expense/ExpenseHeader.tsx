import React from "react";
import { Plus } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";

interface ExpenseHeaderProps {
  onAddExpense: () => void;
}

export default function ExpenseHeader({ onAddExpense }: ExpenseHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
          Expense Management
        </h2>
        <p className="text-xs font-semibold text-slate-400 mt-1">
          Manage and track salon expense registers
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex-1 sm:flex-none">
          <CustomSelect
            value="Export Report"
            options={["Download PDF Report", "Download CSV Spreadsheet"]}
            onChange={(val) => {
              if (val === "Download PDF Report") {
                // Handle PDF Download
              } else if (val === "Download CSV Spreadsheet") {
                // Handle CSV Download
              }
            }}
          />
        </div>

        {/* Add Expense button */}
        <button
          onClick={onAddExpense}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#5c60f5] hover:bg-[#4d51e5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-md transition-all cursor-pointer"
        >
          <Plus size={15} />
          <span>Add Expense</span>
        </button>
      </div>
    </div>
  );
}
