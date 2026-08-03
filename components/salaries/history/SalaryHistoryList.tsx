import React from "react";
import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";
import { SalaryHistoryRecord } from "./data";

interface SalaryHistoryListProps {
  paginatedData: SalaryHistoryRecord[];
}

export default function SalaryHistoryList({
  paginatedData,
}: SalaryHistoryListProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-brand/10 text-slate-700 text-sm font-bold border-b border-slate-100">
              <th className="py-4 px-4">Team Member</th>
              <th className="py-4 px-4">Salon</th>
              <th className="py-4 px-4">Period</th>
              <th className="py-4 px-4">Gross</th>
              <th className="py-4 px-4">Net Amount</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Approved</th>
              <th className="py-4 px-4">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <Image
                        src={row.avatar}
                        alt={row.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-sm">
                        {row.name}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {row.empId}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm font-medium text-slate-500">
                  {row.salon}
                </td>
                <td className="py-4 px-4 text-sm font-medium text-slate-500">
                  {row.period}
                </td>
                <td className="py-4 px-4">
                  <span className="bg-indigo-50 text-[#5c7cfa] px-3 py-1.5 rounded-lg text-xs font-bold inline-block">
                    €{" "}
                    {row.gross.toLocaleString("en-IE", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="bg-emerald-50 text-emerald-500 px-3 py-1.5 rounded-lg text-xs font-bold inline-block">
                    €{" "}
                    {row.net.toLocaleString("en-IE", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </td>
                <td className="py-4 px-4">
                  {row.status === "Declined" ? (
                    <span className="bg-red-50 text-red-400 px-3 py-1.5 rounded-lg text-xs font-bold inline-block">
                      Declined
                    </span>
                  ) : row.status === "Approved" ? (
                    <span className="bg-emerald-50 text-emerald-500 px-3 py-1.5 rounded-lg text-xs font-bold inline-block">
                      Approved
                    </span>
                  ) : (
                    <span className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-bold inline-block">
                      {row.status}
                    </span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {row.approvedDate ? (
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-700">
                        {row.approvedDate}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        by {row.approvedBy}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 font-bold">-</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {row.paymentDate ? (
                    <div className="flex items-center gap-1.5">
                      {row.paymentStatus === "pending" ? (
                        <Clock size={16} className="text-red-400 shrink-0" />
                      ) : (
                        <CheckCircle2
                          size={16}
                          className="text-emerald-500 shrink-0"
                        />
                      )}
                      <span className="text-sm font-medium text-slate-700">
                        {row.paymentDate}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 font-bold">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
