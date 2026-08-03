import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage?: number;
  itemsName?: string;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage = 10,
  itemsName = "items",
  onPageChange,
}: PaginationProps) {
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const startItem =
    totalItems === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(safeCurrentPage * itemsPerPage, totalItems);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-t border-slate-100 bg-white">
      <div className="text-sm text-slate-500">
        Showing <span className="font-bold text-slate-800">{startItem}</span> to{" "}
        <span className="font-bold text-slate-800">{endItem}</span> of{" "}
        <span className="font-bold text-slate-800">{totalItems}</span>{" "}
        {itemsName}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1 || totalPages === 0}
          className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1 hidden sm:flex">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors cursor-pointer ${
                safeCurrentPage === page
                  ? "bg-[#5c7cfa] text-white font-bold shadow-sm"
                  : "border border-slate-200 text-slate-600 font-medium hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === totalPages || totalPages === 0}
          className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
