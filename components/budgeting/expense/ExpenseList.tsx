"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MoreVertical,
  Eye,
  Pencil,
  Paperclip,
  FileText,
  Download,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Pagination from "@/components/customComponent/Pagination";
import { ExpenseTransaction } from "./data";

interface ExpenseListProps {
  expenses: ExpenseTransaction[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onAttach: (id: string) => void;
  onViewAttachment: (id: string) => void;
  onDownloadAttachment: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ExpenseList({
  expenses,
  onView,
  onEdit,
  onAttach,
  onViewAttachment,
  onDownloadAttachment,
  onDelete,
}: ExpenseListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLTableCellElement>(null);
  const pageSize = 5;

  const totalItems = expenses.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const paginatedData = expenses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getMacroCategoryBadge = (macro: string) => {
    switch (macro) {
      case "Internet":
        return "bg-[#ebfbee] text-[#2f9e44]";
      case "HR":
        return "bg-[#eef2ff] text-[#4f46e5]";
      case "Consumables":
        return "bg-[#e0f2fe] text-[#0369a1]";
      case "Products":
        return "bg-[#f3e8ff] text-[#7e22ce]";
      case "Taxes":
        return "bg-[#fff0f6] text-[#e64980]";
      case "Services":
        return "bg-[#fffbeb] text-[#d97706]";
      case "Utilities":
        return "bg-[#f1f5f9] text-[#334155]";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getPaymentMethodBadge = (method: string) => {
    switch (method) {
      case "Cash":
        return "bg-[#e6fcf5] text-[#0ca678] border-[#c3fae8]";
      case "Credit Card":
      case "Terminal":
        return "bg-[#e7f5ff] text-[#228be6] border-[#d0ebff]";
      case "Online Payment":
      case "Online":
        return "bg-[#fff9db] text-[#f59f00] border-[#fff3bf]";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden flex flex-col">
      {/* Table scroll box */}
      <div className="overflow-x-auto min-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Salon
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Macro-categories
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Category
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Cost
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Supplier
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                Payment method
              </th>
              <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedData.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                {/* Date */}
                <td className="px-6 py-4 text-xs font-semibold text-slate-500 whitespace-nowrap">
                  {tx.date}
                </td>

                {/* Salon */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={tx.salon.avatar}
                      alt={tx.salon.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-xl object-cover shadow-sm bg-slate-50 shrink-0"
                    />
                    <span className="text-xs font-extrabold text-slate-700">
                      {tx.salon.name}
                    </span>
                  </div>
                </td>

                {/* Macro Category */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg ${getMacroCategoryBadge(tx.macroCategory)}`}
                  >
                    {tx.macroCategory}
                  </span>
                </td>

                {/* Category */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-[#e6fcf5] text-[#0ca678]">
                    {tx.category}
                  </span>
                </td>

                {/* Cost */}
                <td className="px-6 py-4 text-xs font-extrabold text-slate-800 whitespace-nowrap">
                  €{" "}
                  {tx.cost.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>

                {/* Supplier */}
                <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">
                  {tx.supplier}
                </td>

                {/* Payment Method */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg border ${getPaymentMethodBadge(tx.paymentMethod)}`}
                  >
                    {tx.paymentMethod}
                  </span>
                </td>

                {/* Actions */}
                <td
                  className="px-6 py-4 text-right whitespace-nowrap relative"
                  ref={activeMenuId === tx.id ? dropdownRef : null}
                >
                  <button
                    onClick={() =>
                      setActiveMenuId(activeMenuId === tx.id ? null : tx.id)
                    }
                    className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {activeMenuId === tx.id && (
                    <div className="absolute right-6 z-20 mt-1 w-48 bg-white rounded-xl shadow-xl ring-1 ring-slate-100 py-1.5 animate-in fade-in slide-in-from-top-2 text-left">
                      <button
                        onClick={() => {
                          onView(tx.id);
                          setActiveMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Eye size={14} className="text-slate-400" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => {
                          onEdit(tx.id);
                          setActiveMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Pencil size={14} className="text-slate-400" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          onAttach(tx.id);
                          setActiveMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Paperclip size={14} className="text-slate-400" />
                        <span>Attach receipts/invoices</span>
                      </button>
                      {tx.hasAttachment && (
                        <>
                          <button
                            onClick={() => {
                              onViewAttachment(tx.id);
                              setActiveMenuId(null);
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <FileText size={14} className="text-slate-400" />
                            <span>View Attachment</span>
                          </button>
                          <button
                            onClick={() => {
                              onDownloadAttachment(tx.id);
                              setActiveMenuId(null);
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <Download size={14} className="text-slate-400" />
                            <span>Download Attachment</span>
                          </button>
                        </>
                      )}
                      <div className="border-t border-slate-50 my-1" />
                      <button
                        onClick={() => {
                          onDelete(tx.id);
                          setActiveMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-status-high-text hover:bg-red-50 font-extrabold transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Trash2 size={14} className="text-status-high-text" />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={pageSize}
        itemsName="transactions"
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
