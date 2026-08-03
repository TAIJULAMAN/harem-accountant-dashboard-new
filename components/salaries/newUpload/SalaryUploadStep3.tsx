import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { ExtractedSalary } from "./data";
import Pagination from "@/components/customComponent/Pagination";
import SalarySummaryCard from "./SalarySummaryCard";
import ApprovedPacketsTable from "./ApprovedPacketsTable";

interface SalaryUploadStep3Props {
  salaries: ExtractedSalary[];
  setStep: (step: 1 | 2 | 3 | 4) => void;
  handleSubmitSalaries: () => void;
  isSubmitting: boolean;
}

export default function SalaryUploadStep3({
  salaries,
  setStep,
  handleSubmitSalaries,
  isSubmitting,
}: SalaryUploadStep3Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(salaries.length / itemsPerPage) || 1;
  const paginatedSalaries = salaries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-6">
      <SalarySummaryCard salaries={salaries} />

      {/* Approved Packets Card */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden text-left">
        <div className="p-6 pb-2">
          <h3 className="font-semibold text-slate-800 text-xl">
            Approved Packets
          </h3>
        </div>

        <ApprovedPacketsTable paginatedSalaries={paginatedSalaries} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={salaries.length}
          itemsPerPage={itemsPerPage}
          itemsName="salaries"
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setStep(2)}
            className="border border-brand text-brand hover:bg-brand/5 bg-white rounded-xl text-xs font-bold px-5 py-3 cursor-pointer"
          >
            Back to Review
          </button>
          <button
            onClick={() => {
              const dataStr =
                "data:text/json;charset=utf-8," +
                encodeURIComponent(JSON.stringify(salaries, null, 2));
              const downloadAnchor = document.createElement("a");
              downloadAnchor.setAttribute("href", dataStr);
              downloadAnchor.setAttribute("download", "salaries.json");
              document.body.appendChild(downloadAnchor);
              downloadAnchor.click();
              downloadAnchor.remove();
            }}
            className="bg-[#eef2ff] text-brand hover:bg-[#e0e7ff] rounded-xl text-xs font-bold px-5 py-3 cursor-pointer"
          >
            Export as JSON
          </button>
        </div>

        <button
          onClick={handleSubmitSalaries}
          disabled={isSubmitting}
          className="bg-brand hover:bg-brand-dark text-white rounded-xl text-xs font-bold px-6 py-3.5 cursor-pointer shadow-md shadow-brand/10 flex items-center justify-center gap-1.5"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send to Owner to Approval</span>
          )}
        </button>
      </div>
    </div>
  );
}
