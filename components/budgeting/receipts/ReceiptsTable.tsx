import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, Download, Printer } from "lucide-react";
import Pagination from "@/components/customComponent/Pagination";
import { ReceiptItem } from "./data";

interface ReceiptsTableProps {
  receipts: ReceiptItem[];
  onViewReceipt: (receipt: ReceiptItem) => void;
}

export default function ReceiptsTable({
  receipts,
  onViewReceipt,
}: ReceiptsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [activeDropdownRowIdx, setActiveDropdownRowIdx] = useState<
    number | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdownRowIdx(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(receipts.length / pageSize) || 1;
  const paginated = receipts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const getMethodBadgeClass = (method: string) => {
    switch (method) {
      case "Cash":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100/50";
      case "Card Terminal":
        return "bg-cyan-50 text-cyan-600 border border-cyan-100/50";
      case "Gif Card":
        return "bg-indigo-50 text-indigo-600 border border-indigo-100/50";
      case "Online Payment":
        return "bg-amber-50 text-amber-600 border border-amber-100/50";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-100";
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Issued":
        return "bg-[#5c60f5] text-white";
      case "Draft":
        return "bg-[#f59f00] text-white";
      case "Canceled":
        return "bg-[#e64980] text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 space-y-6">
      <div className="overflow-x-auto rounded-xl ring-1 ring-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                ID
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Client
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Salon
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Ammount
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Method
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-5 text-xs font-semibold text-slate-700 whitespace-nowrap text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginated.length > 0 ? (
              paginated.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4 text-xs font-semibold text-[#5c60f5] whitespace-nowrap">
                    {row.id}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col text-left">
                      <span className="text-base font-semibold text-slate-700 leading-tight">
                        {row.client.name}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-400 mt-0.5">
                        {row.client.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                    {row.salon}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-800 whitespace-nowrap">
                    € {row.amount.toLocaleString("en-US")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1 w-fit">
                      {row.method.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className={`text-xs font-semibold px-2 py-0.5 rounded-lg border w-fit block ${getMethodBadgeClass(m)}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-lg w-fit block ${getStatusBadgeClass(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center relative">
                    <button
                      onClick={() =>
                        setActiveDropdownRowIdx((prev) =>
                          prev === idx ? null : idx,
                        )
                      }
                      className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {activeDropdownRowIdx === idx && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-12 top-6 z-10 w-40 bg-white border border-slate-100 rounded-xl shadow-lg p-1.5 flex flex-col animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        <button
                          onClick={() => {
                            setActiveDropdownRowIdx(null);
                            onViewReceipt(row);
                          }}
                          className="flex items-center gap-2 px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye size={14} className="text-[#5c60f5]" />
                          <span>View Receipt</span>
                        </button>
                        <button
                          onClick={() => setActiveDropdownRowIdx(null)}
                          className="flex items-center gap-2 px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand rounded-lg transition-colors cursor-pointer"
                        >
                          <Download size={14} className="text-slate-400" />
                          <span>Download</span>
                        </button>
                        <button
                          onClick={() => setActiveDropdownRowIdx(null)}
                          className="flex items-center gap-2 px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand rounded-lg transition-colors cursor-pointer"
                        >
                          <Printer size={14} className="text-slate-400" />
                          <span>Print Receipt</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-12 text-center text-slate-400 text-xs font-semibold"
                >
                  No receipts match the filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {receipts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={receipts.length}
          itemsPerPage={pageSize}
          itemsName="receipts"
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
