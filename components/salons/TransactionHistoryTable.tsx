import React from "react";
import Image from "next/image";
import { TransactionData } from "./revenueData";

interface TransactionHistoryTableProps {
  data: TransactionData[];
}

export default function TransactionHistoryTable({
  data,
}: TransactionHistoryTableProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        Transaction History
      </h3>
      <div className="overflow-x-auto border border-slate-100 rounded-xl bg-white">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-[#F8F9FA] border-b border-slate-100">
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Date
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Salon
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Gross Amount
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Your Share (30%)
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Lifetime
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${
                  index === data.length - 1 ? "border-none" : ""
                }`}
              >
                {/* Date */}
                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                  {item.date}
                </td>

                {/* Salon */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative rounded-xl shrink-0 overflow-hidden w-10 h-10 shadow-sm opacity-90">
                      <Image
                        width={40}
                        height={40}
                        src={item.avatarImage}
                        alt={item.salonName}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {item.salonName}
                      </h3>
                      <p className="text-xs text-slate-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                {/* Gross Amount */}
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">
                    {item.grossAmount}
                  </span>
                </td>

                {/* Your Share */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-[#22C55E]">
                    {item.share}
                  </span>
                </td>

                {/* Lifetime */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#635BFF]">
                    {item.lifetime}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium
                    ${
                      item.status === "Expected"
                        ? "bg-[#E0E0FF] text-[#635BFF]"
                        : "bg-[#E8F8EE] text-[#22C55E]"
                    }
                  `}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Note */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {item.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
