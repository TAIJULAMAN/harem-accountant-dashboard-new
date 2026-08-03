import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { PendingSalaryRecord } from "./data";
import PendingSalariesActionDropdown from "./PendingSalariesActionDropdown";

interface PendingSalariesTableProps {
  paginatedData: PendingSalaryRecord[];
  openDropdownId: string | null;
  setOpenDropdownId: (id: string | null) => void;
  setSelectedRecord: (record: PendingSalaryRecord | null) => void;
  setModalType: (type: "details" | "delete" | "success" | null) => void;
}

export default function PendingSalariesTable({
  paginatedData,
  openDropdownId,
  setOpenDropdownId,
  setSelectedRecord,
  setModalType,
}: PendingSalariesTableProps) {
  return (
    <div className="overflow-x-auto min-h-[400px]">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead>
          <tr className="bg-[#f8f9fc] border-y border-slate-100">
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Team Member
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Salon
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Period
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Gross
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Net Amount
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Status
            </th>
            <th className="py-4 px-4 text-xs font-bold text-slate-600">
              Uploaded
            </th>
            <th className="py-4 px-5 text-xs font-bold text-slate-600 rounded-tr-xl text-center">
              Actions
            </th>
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
                  <Image
                    src={row.avatar}
                    alt={row.name}
                    width={36}
                    height={36}
                    className="rounded-full bg-slate-100 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-slate-800">
                      {row.name}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      Uploaded by: {row.uploadedBy}
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={row.salonLogo}
                    alt={row.salon}
                    width={36}
                    height={36}
                    className="rounded-lg object-cover"
                  />
                  <span className="text-[13px] font-medium text-slate-600">
                    {row.salon}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-[13px] font-medium text-slate-600">
                  {row.period}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2.5 py-1 rounded-md bg-indigo-50 text-[#5c7cfa] text-xs font-bold">
                  €
                  {row.gross.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-500 text-xs font-bold">
                  €
                  {row.net.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-bold capitalize ${
                    row.status === "Declined"
                      ? "bg-red-50 text-red-500"
                      : "bg-amber-50 text-amber-500"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="text-[13px] font-medium text-slate-600">
                  {row.uploadedDate}
                </span>
              </td>
              <td className="py-4 px-5 text-center relative">
                <button
                  onClick={() =>
                    setOpenDropdownId(
                      openDropdownId === row.id ? null : row.id,
                    )
                  }
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <MoreVertical size={18} />
                </button>

                {/* Actions Dropdown */}
                {openDropdownId === row.id && (
                  <PendingSalariesActionDropdown
                    row={row}
                    setSelectedRecord={setSelectedRecord}
                    setModalType={setModalType}
                    setOpenDropdownId={setOpenDropdownId}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
