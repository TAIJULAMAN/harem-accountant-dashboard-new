import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";
import { PendingSalaryRecord } from "./data";

interface PendingSalariesActionDropdownProps {
  row: PendingSalaryRecord;
  setSelectedRecord: (record: PendingSalaryRecord | null) => void;
  setModalType: (type: "details" | "delete" | "success" | null) => void;
  setOpenDropdownId: (id: string | null) => void;
}

export default function PendingSalariesActionDropdown({
  row,
  setSelectedRecord,
  setModalType,
  setOpenDropdownId,
}: PendingSalariesActionDropdownProps) {
  return (
    <div className="absolute right-8 top-10 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-10 animate-in fade-in zoom-in-95 duration-100">
      <button
        onClick={() => {
          setSelectedRecord(row);
          setModalType("details");
          setOpenDropdownId(null);
        }}
        className="w-full flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <Eye size={14} className="text-[#5c7cfa]" />
        View Details
      </button>
      <button className="w-full flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors">
        <Edit2 size={14} className="text-teal-500" />
        Edit
      </button>
      <button
        onClick={() => {
          setSelectedRecord(row);
          setModalType("delete");
          setOpenDropdownId(null);
        }}
        className="w-full flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-red-600 hover:bg-slate-50 transition-colors"
      >
        <Trash2 size={14} className="text-red-500" />
        Delete
      </button>
    </div>
  );
}
