import React from "react";
import Image from "next/image";
import { X, AlertCircle } from "lucide-react";
import { PendingSalaryRecord } from "./data";
import CustomAlert from "@/components/customComponent/CustomAlert";

interface SalaryDetailsModalProps {
  record: PendingSalaryRecord;
  onClose: () => void;
}

export default function SalaryDetailsModal({
  record,
  onClose,
}: SalaryDetailsModalProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[17px] font-bold text-slate-800">Salary Details</h2>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="border border-slate-100 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={record.avatar}
            alt={record.name}
            width={48}
            height={48}
            className="rounded-xl object-cover bg-slate-50"
          />
          <div>
            <h3 className="text-sm font-bold text-slate-800">{record.name}</h3>
            <p className="text-[13px] font-medium text-slate-400">
              Beauty Wellness Center
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 mb-1">
              Period
            </p>
            <p className="text-[13px] font-bold text-slate-700">June 2025</p>
          </div>
          <div />
          <div>
            <p className="text-[11px] font-semibold text-slate-400 mb-2">
              Gross Amount
            </p>
            <span className="inline-flex px-3 py-1 rounded-md bg-indigo-50 text-[#5c7cfa] text-xs font-bold">
              € 4,200.00
            </span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 mb-2">
              Net Amount
            </p>
            <span className="inline-flex px-3 py-1 rounded-md bg-emerald-50 text-emerald-500 text-xs font-bold">
              € 3,200.00
            </span>
          </div>
        </div>
      </div>

      {record.status === "Declined" && (
        <div className="mb-6">
          <CustomAlert
            icon={AlertCircle}
            iconColor="#f87171"
            bgColor="#fef2f2"
            borderColor="#fca5a5"
            textColor="#f87171"
          >
            <p className="text-[13px] font-medium">
              Decline Reason — Incorrect gross amount calculation. Please verify
              the overtime hours.
            </p>
          </CustomAlert>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button className="px-5 py-2.5 rounded-xl bg-indigo-50 text-[#5c7cfa] text-[13px] font-bold hover:bg-indigo-100 transition-colors">
          Edit & Resubmit
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-[#5c7cfa] text-white text-[13px] font-bold shadow-md shadow-[#5c7cfa]/20 hover:bg-[#4b6bf5] transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
}
