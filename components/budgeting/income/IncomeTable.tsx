"use client";

import React, { useState } from "react";
import { Calculator, FileText, CreditCard } from "lucide-react";
import Pagination from "@/components/customComponent/Pagination";
import {
  initialCashierClosures,
  initialLatestReceipts,
  initialPayments,
  CashierClosureRow,
} from "./data";

interface IncomeTableProps {
  selectedDate: string;
  selectedEmployee: string;
  selectedService: string;
  selectedPaymentMethod: string;
  onSelectClosure?: (closure: CashierClosureRow) => void;
}

export default function IncomeTable({
  selectedEmployee,
  selectedService,
  selectedPaymentMethod,
  onSelectClosure,
}: IncomeTableProps) {
  const [activeTab, setActiveTab] = useState<
    "closures" | "receipts" | "payments"
  >("closures");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Filter receipt rows dynamically (reusing filters)
  const filteredReceipts = initialLatestReceipts.filter((r) => {
    if (selectedEmployee !== "All" && r.teamMember.name !== selectedEmployee)
      return false;
    if (
      selectedService !== "All" &&
      !r.service.toLowerCase().includes(selectedService.toLowerCase())
    )
      return false;
    if (
      selectedPaymentMethod !== "All" &&
      r.paymentMethod !== selectedPaymentMethod
    )
      return false;
    return true;
  });

  const getPaginatedData = <T,>(data: T[]) => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  };

  const getStatusBadgeClass = (status: string) => {
    if (status === "Regular" || status === "Completed") {
      return "bg-emerald-50 text-emerald-600 border border-emerald-100/50";
    }
    return "bg-pink-50 text-pink-600 border border-pink-100/50";
  };

  const getPaymentMethodBadgeClass = (method: string) => {
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

  const getPaymentStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Fully Paid":
        return "bg-[#0ca678] text-white";
      case "Half Paid":
        return "bg-[#f59f00] text-white";
      case "Not Paid":
        return "bg-[#e64980] text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const renderTableContent = () => {
    switch (activeTab) {
      case "closures": {
        const paginated = getPaginatedData(initialCashierClosures);
        const totalPages =
          Math.ceil(initialCashierClosures.length / pageSize) || 1;

        return (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] border-b border-slate-100">
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Date
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Tax Closure
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Platform Receipts
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Difference
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginated.map((row) => (
                    <tr
                      key={row.id}
                      onClick={() => onSelectClosure?.(row)}
                      className="hover:bg-slate-50/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 text-xs font-black text-slate-800 whitespace-nowrap">
                        € {row.taxClosure}
                      </td>
                      <td className="px-6 py-4 text-xs font-black text-[#5c60f5] whitespace-nowrap">
                        € {row.platformReceipts}
                      </td>
                      <td
                        className={`px-6 py-4 text-xs font-bold whitespace-nowrap ${row.difference > 0 ? "text-pink-600" : "text-slate-500"}`}
                      >
                        {row.difference > 0
                          ? `+ € ${row.difference.toFixed(2)}`
                          : `€ ${row.difference}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg border ${getStatusBadgeClass(row.status)}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={initialCashierClosures.length}
              itemsPerPage={pageSize}
              itemsName="closures"
              onPageChange={setCurrentPage}
            />
          </div>
        );
      }
      case "receipts": {
        const paginated = getPaginatedData(filteredReceipts);
        const totalPages = Math.ceil(filteredReceipts.length / pageSize) || 1;

        return (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] border-b border-slate-100">
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      ID
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Date/Time
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Client
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Team Member
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Service
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Amount
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
                        <td className="px-6 py-4 text-xs font-extrabold text-[#5c60f5] whitespace-nowrap">
                          {row.id}
                        </td>
                        <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                          {row.dateTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-extrabold text-slate-700 leading-tight">
                              {row.client.name}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 mt-0.5">
                              {row.client.email}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-extrabold text-slate-700 leading-tight">
                              {row.teamMember.name}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 mt-0.5">
                              {row.teamMember.email}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">
                          {row.service}
                        </td>
                        <td className="px-6 py-4 text-xs font-black text-[#0ca678] whitespace-nowrap">
                          € {row.amount}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-12 text-center text-slate-400 text-xs font-bold"
                      >
                        No receipts match the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {filteredReceipts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredReceipts.length}
                itemsPerPage={pageSize}
                itemsName="receipts"
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        );
      }
      case "payments": {
        const paginated = getPaginatedData(initialPayments);
        const totalPages = Math.ceil(initialPayments.length / pageSize) || 1;

        return (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] border-b border-slate-100">
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      ID
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Payment Date
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Client
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Team Member
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Salon
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Method
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Status
                    </th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginated.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-xs font-extrabold text-[#5c60f5] whitespace-nowrap">
                        {row.id}
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {row.paymentDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-extrabold text-slate-700 leading-tight">
                            {row.client.name}
                          </span>
                          <span className="text-[9px] font-bold text-slate-400 mt-0.5">
                            {row.client.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-extrabold text-slate-700 leading-tight">
                            {row.teamMember.name}
                          </span>
                          <span className="text-[9px] font-bold text-slate-400 mt-0.5">
                            {row.teamMember.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">
                        {row.salon}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1 w-fit">
                          {row.methods.map((method, mIdx) => (
                            <span
                              key={mIdx}
                              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-lg border w-fit block ${getPaymentMethodBadgeClass(method)}`}
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-lg w-fit block ${getPaymentStatusBadgeClass(row.status)}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-black text-[#0ca678] whitespace-nowrap">
                        € {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={initialPayments.length}
              itemsPerPage={pageSize}
              itemsName="payments"
              onPageChange={setCurrentPage}
            />
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 flex flex-col overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-100 px-4 bg-white overflow-x-auto scrollbar-none whitespace-nowrap">
        <button
          onClick={() => {
            setActiveTab("closures");
            setCurrentPage(1);
          }}
          className={`flex items-center gap-2 px-5 py-4 text-xs font-extrabold border-b-2 transition-all cursor-pointer shrink-0 ${
            activeTab === "closures"
              ? "border-[#5c60f5] text-[#5c60f5]"
              : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <Calculator size={15} />
          <span>Cashier Closures</span>
        </button>

        <button
          onClick={() => {
            setActiveTab("receipts");
            setCurrentPage(1);
          }}
          className={`flex items-center gap-2 px-5 py-4 text-xs font-extrabold border-b-2 transition-all cursor-pointer shrink-0 ${
            activeTab === "receipts"
              ? "border-[#5c60f5] text-[#5c60f5]"
              : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <FileText size={15} />
          <span>Latest Receipts</span>
        </button>

        <button
          onClick={() => {
            setActiveTab("payments");
            setCurrentPage(1);
          }}
          className={`flex items-center gap-2 px-5 py-4 text-xs font-extrabold border-b-2 transition-all cursor-pointer shrink-0 ${
            activeTab === "payments"
              ? "border-[#5c60f5] text-[#5c60f5]"
              : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <CreditCard size={15} />
          <span>Payments</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="p-4 sm:p-6">{renderTableContent()}</div>
    </div>
  );
}
