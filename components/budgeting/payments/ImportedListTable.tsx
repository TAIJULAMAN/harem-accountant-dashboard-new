"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Check, X } from "lucide-react";
import Pagination from "@/components/customComponent/Pagination";

interface Props {
  data: any[];
  onDataChange: (newData: any[]) => void;
}

const CustomCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <div
    onClick={onChange}
    className={`w-5 h-5 rounded-[6px] flex items-center justify-center cursor-pointer transition-all duration-200 ${
      checked
        ? "bg-[#5c60f5] shadow-sm"
        : "bg-white border-2 border-slate-200 hover:border-[#5c60f5]"
    }`}
  >
    {checked && <Check size={14} className="text-white" strokeWidth={3} />}
  </div>
);

export default function ImportedListTable({ data, onDataChange }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSelectedIds([]);
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const toggleSelectAll = () => {
    if (
      selectedIds.length === paginatedData.length &&
      paginatedData.length > 0
    ) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedData.map((p) => p.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleApprove = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    onDataChange(newData);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleReject = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    onDataChange(newData);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleMassApproval = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    onDataChange(newData);
    setSelectedIds([]);
  };

  const handleMassReapproval = () => {
    alert("Mass Reapproval triggered on " + selectedIds.length + " items.");
    setSelectedIds([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
      {/* Table Header Area */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">
          Imported List{" "}
          <span className="text-slate-400 font-medium ml-2">
            ({data.length})
          </span>
        </h3>
        <div className="flex gap-3">
          <button
            onClick={handleMassReapproval}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 rounded-lg bg-pink-50 text-[#ff4d79] text-xs font-bold hover:bg-pink-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mass Reapproval
          </button>
          <button
            onClick={handleMassApproval}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 rounded-lg bg-[#00d6c9] text-white text-xs font-bold shadow-sm hover:bg-[#00bfae] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mass Approval
          </button>
        </div>
      </div>

      <div className="overflow-x-auto min-h-[250px]">
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-48 text-slate-400 text-sm font-medium">
            No items to display.
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-100">
                <th className="px-6 py-4 w-12">
                  <CustomCheckbox
                    checked={
                      selectedIds.length === paginatedData.length &&
                      paginatedData.length > 0
                    }
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  id
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  receipt_number
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  client_ref
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  total
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  vat
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  discount
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700">
                  payment_method
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-700 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <CustomCheckbox
                      checked={selectedIds.includes(payment.id)}
                      onChange={() => toggleSelect(payment.id)}
                    />
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-[#5c60f5]">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    {payment.receiptNumber}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    {payment.clientRef}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    € {payment.total}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    € {payment.vat}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    € {payment.discount}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-700">
                    {payment.paymentMethod}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleReject(payment.id)}
                        className="h-7 w-7 rounded bg-pink-50 text-[#ff4d79] flex items-center justify-center hover:bg-[#ff4d79] hover:text-white transition-colors cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                      <button
                        onClick={() => handleApprove(payment.id)}
                        className="h-7 w-7 rounded bg-emerald-50 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
                      >
                        <Check size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
