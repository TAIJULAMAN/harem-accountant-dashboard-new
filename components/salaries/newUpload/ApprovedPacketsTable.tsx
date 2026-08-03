import React from "react";
import Image from "next/image";
import { ExtractedSalary } from "./data";

interface ApprovedPacketsTableProps {
  paginatedSalaries: ExtractedSalary[];
}

export default function ApprovedPacketsTable({
  paginatedSalaries,
}: ApprovedPacketsTableProps) {
  return (
    <div className="overflow-x-auto px-6">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead>
          <tr className="bg-[#f5f6ff] text-slate-700 text-sm font-bold border-b border-slate-100 uppercase tracking-wider">
            <th className="py-4 px-6 text-xs">Employee Name</th>
            <th className="py-4 px-4 text-xs">Period</th>
            <th className="py-4 px-4 text-xs">Deductions</th>
            <th className="py-4 px-4 text-xs">Gross</th>
            <th className="py-4 px-4 text-xs">Net</th>
            <th className="py-4 px-4 text-xs">TRF This Year</th>
            <th className="py-4 px-6 text-xs">TRF al 31/12/xx (€)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
          {paginatedSalaries.map((emp) => (
            <tr
              key={emp.id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  {emp.avatar ? (
                    <div className="h-8 w-8 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                      <Image
                        width={40}
                        height={40}
                        src={emp.avatar}
                        alt={emp.employeeName}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold">AR</span>
                    </div>
                  )}
                  <span className="font-bold text-slate-800">
                    {emp.employeeName}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-slate-500 font-medium">
                {emp.period}
              </td>
              <td className="py-4 px-4">
                <span className="bg-rose-50 text-rose-500 font-bold px-3 py-1 rounded-full text-[10px]">
                  € {emp.deemed.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-[10px]">
                  € {emp.grossSalary.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="bg-[#ecfdf5] text-emerald-600 font-bold px-3 py-1 rounded-full text-[10px]">
                  € {emp.netSalary.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="bg-[#eef2ff] text-indigo-600 font-bold px-3 py-1 rounded-full text-[10px]">
                  € {emp.trfThisYear.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full text-[10px]">
                  € {emp.trfPrevYears.toLocaleString()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
