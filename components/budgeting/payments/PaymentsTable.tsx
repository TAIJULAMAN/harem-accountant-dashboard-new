"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoreVertical, Eye, RotateCcw, Printer } from "lucide-react";
import { mockPayments } from "./data";
import Pagination from "@/components/customComponent/Pagination";
import RefundModal from "./RefundModal";

interface PaymentsTableProps {
  activeMethod: string;
  activeStatus: string;
  activeReceipt: string;
}

export default function PaymentsTable({
  activeMethod,
  activeStatus,
  activeReceipt,
}: PaymentsTableProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [refundModalPaymentId, setRefundModalPaymentId] = useState<
    string | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevFilters, setPrevFilters] = useState({
    activeMethod,
    activeStatus,
    activeReceipt,
  });
  const numItemsPerPage = 5;

  // Reset to first page when filters change
  if (
    activeMethod !== prevFilters.activeMethod ||
    activeStatus !== prevFilters.activeStatus ||
    activeReceipt !== prevFilters.activeReceipt
  ) {
    setPrevFilters({ activeMethod, activeStatus, activeReceipt });
    setCurrentPage(1);
  }

  // Filter Data
  const filteredPayments = mockPayments.filter((payment) => {
    if (activeMethod !== "All" && payment.method !== activeMethod) return false;
    if (activeStatus !== "All" && payment.status !== activeStatus) return false;
    if (activeReceipt !== "All" && payment.receiptIssue !== activeReceipt)
      return false;
    return true;
  });

  const totalItems = filteredPayments.length;
  const totalPages = Math.ceil(totalItems / numItemsPerPage);
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (safeCurrentPage - 1) * numItemsPerPage;
  const currentItems = filteredPayments.slice(
    startIndex,
    startIndex + numItemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setOpenDropdownId(null);
  };

  const selectedPaymentForRefund = mockPayments.find(
    (p) => p.id === refundModalPaymentId,
  );

  const getMethodBadge = (method: string) => {
    switch (method) {
      case "Cash":
        return "bg-emerald-50 text-emerald-500";
      case "Card Terminal":
        return "bg-cyan-50 text-cyan-500";
      case "Gift Card":
        return "bg-purple-50 text-purple-500";
      case "Online Payment":
        return "bg-yellow-50 text-yellow-500";
      default:
        return "bg-slate-50 text-slate-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Fully Paid":
        return "bg-emerald-500 text-white";
      case "Half Paid":
        return "bg-yellow-400 text-white";
      case "Not Paid":
        return "bg-[#ff4d79] text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const getReceiptBadge = (receipt: string) => {
    switch (receipt) {
      case "Completed":
        return "border border-emerald-400 text-emerald-500 bg-emerald-50/50";
      case "Half Printed":
        return "border border-yellow-400 text-yellow-500 bg-yellow-50/50";
      case "Not Issued":
        return "border border-[#ff4d79] text-[#ff4d79] bg-[#ff4d79]/10";
      default:
        return "border border-slate-300 text-slate-500";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto min-h-[300px]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-700 w-16">
                ID
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Payment Date
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Client
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Team Member
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Salon
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Method
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700">
                Receipt Issue
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-700 w-16 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentItems.map((payment) => (
              <tr
                key={payment.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-4 text-xs font-semibold text-[#5c60f5]">
                  {payment.id}
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                  {payment.paymentDate}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-slate-800">
                    {payment.client.name}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400">
                    {payment.client.email}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs font-bold text-slate-800">
                    {payment.teamMember.name}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400">
                    {payment.teamMember.email}
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-600">
                  {payment.salon}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getMethodBadge(payment.method)}`}
                  >
                    {payment.method}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusBadge(payment.status)}`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getReceiptBadge(payment.receiptIssue)}`}
                  >
                    {payment.receiptIssue}
                  </span>
                </td>
                <td className="px-6 py-4 text-center relative">
                  <button
                    onClick={() =>
                      setOpenDropdownId(
                        openDropdownId === payment.id ? null : payment.id,
                      )
                    }
                    className="p-1.5 text-slate-400 hover:text-[#5c60f5] hover:bg-[#f3effe] rounded-lg transition-colors"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdownId === payment.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenDropdownId(null)}
                      ></div>
                      <div className="absolute right-8 top-10 w-36 bg-white rounded-xl shadow-lg border border-slate-100 z-20 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-100 text-left">
                        <Link
                          href="/budgeting/payments/sale"
                          className="w-full px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#5c60f5] hover:bg-[#f3effe] flex items-center gap-2 transition-colors"
                        >
                          <Eye size={14} /> View Details
                        </Link>
                        <button
                          onClick={() => {
                            setRefundModalPaymentId(payment.id);
                            setOpenDropdownId(null);
                          }}
                          className="w-full px-4 py-2 text-xs font-semibold text-slate-600 hover:text-yellow-500 hover:bg-yellow-50 flex items-center gap-2 transition-colors"
                        >
                          <RotateCcw size={14} /> Refund
                        </button>
                        <Link 
                          href="/budgeting/receipts/view"
                          className="w-full px-4 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 flex items-center gap-2 transition-colors"
                        >
                          <Printer size={14} /> Print Receipt
                        </Link>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={numItemsPerPage}
        itemsName="payments"
        onPageChange={handlePageChange}
      />
      <RefundModal
        isOpen={!!refundModalPaymentId}
        onClose={() => setRefundModalPaymentId(null)}
        paymentId={selectedPaymentForRefund?.id || ""}
        paymentDate={selectedPaymentForRefund?.paymentDate || ""}
        paymentMethod={selectedPaymentForRefund?.method || "Cash"}
        maxAmount={170}
      />
    </div>
  );
}
