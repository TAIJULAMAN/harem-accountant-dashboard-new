import React from "react";
import { Check, X } from "lucide-react";
import { ImportedPaymentItem } from "./data";

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

interface Props {
  paginatedData: ImportedPaymentItem[];
  selectedIds: string[];
  toggleSelectAll: () => void;
  toggleSelect: (id: string) => void;
  handleReject: (id: string) => void;
  handleApprove: (id: string) => void;
}

export default function ImportedListTableContent({
  paginatedData,
  selectedIds,
  toggleSelectAll,
  toggleSelect,
  handleReject,
  handleApprove,
}: Props) {
  return (
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
          <th className="px-6 py-4 text-xs font-bold text-slate-700">id</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">receipt_number</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">date</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">client_ref</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">total</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">vat</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">discount</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700">payment_method</th>
          <th className="px-6 py-4 text-xs font-bold text-slate-700 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {paginatedData.map((payment) => (
          <tr key={payment.id} className="hover:bg-slate-50/50 transition-colors">
            <td className="px-6 py-4">
              <CustomCheckbox
                checked={selectedIds.includes(payment.id)}
                onChange={() => toggleSelect(payment.id)}
              />
            </td>
            <td className="px-6 py-4 text-xs font-semibold text-[#5c60f5]">{payment.id}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">{payment.receiptNumber}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">{payment.date}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">{payment.clientRef}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">€ {payment.total}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">€ {payment.vat}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">€ {payment.discount}</td>
            <td className="px-6 py-4 text-xs font-semibold text-slate-700">{payment.paymentMethod}</td>
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
  );
}
