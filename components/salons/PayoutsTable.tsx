import React, { useState } from "react";
import { Eye } from "lucide-react";
import ViewPayoutModal from "../modal/ViewPayoutModal/ViewPayoutModal";
import { PayoutData } from "./payoutsData";
import Pagination from "../../components/customComponent/Pagination";

interface PayoutsTableProps {
  data: PayoutData[];
}

export default function PayoutsTable({ data }: PayoutsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedPayout, setSelectedPayout] = useState<PayoutData | null>(null);

  const handleOpenViewModal = (item: PayoutData) => {
    setSelectedPayout(item);
    setIsViewModalOpen(true);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto border border-slate-100 rounded-xl bg-white">
      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="bg-[#F8F9FA] border-b border-slate-100">
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Request History</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Amount</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Invoice No.</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Payment Date</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Note</th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${
                index === paginatedData.length - 1 ? "border-none" : ""
              }`}
            >
              {/* Request History */}
              <td className="px-6 py-4 text-sm font-medium text-slate-700">
                {item.requestDate}
              </td>

              {/* Amount */}
              <td className="px-6 py-4">
                <span className="inline-flex px-2 py-1 rounded-lg text-xs font-semibold bg-[#EBFAF0] text-[#36C76C]">
                  {item.amount}
                </span>
              </td>

              {/* Invoice No. */}
              <td className="px-6 py-4 text-sm text-slate-600">
                {item.invoiceNo}
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                  ${
                    item.status === "Paid"
                      ? "bg-[#E8F8EE] text-[#22C55E]"
                      : "bg-[#FFF7E3] text-[#FFB020]"
                  }
                `}
                >
                  {item.status}
                </span>
              </td>

              {/* Payment Date */}
              <td className="px-6 py-4 text-sm text-slate-500">
                {item.paymentDate}
              </td>

              {/* Note */}
              <td className="px-6 py-4 text-sm text-slate-500">
                {item.note}
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => handleOpenViewModal(item)}
                    className="w-8 h-8 rounded-lg bg-[#F4F4FD] text-[#635BFF] hover:bg-[#635BFF] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Eye size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
        />
      )}

      <ViewPayoutModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        payoutData={selectedPayout}
      />
    </div>
  );
}
