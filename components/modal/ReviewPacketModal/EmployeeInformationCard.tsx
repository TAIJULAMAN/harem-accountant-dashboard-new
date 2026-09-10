import React from "react";
import { User } from "lucide-react";
import { ExtractedSalary } from "@/components/salaries/newUpload/data";

interface EmployeeInformationCardProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary) => void;
}

export default function EmployeeInformationCard({
  editingPacket,
  setEditingPacket,
}: EmployeeInformationCardProps) {
  const getFirstAndLastName = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0] || "";
    const last = parts.slice(1).join(" ") || "";
    return { first, last };
  };

  const { first, last } = getFirstAndLastName(editingPacket.employeeName);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
      {/* Section Header with Icon */}
      <div className="flex items-center gap-2 text-slate-800 font-bold text-sm border-b border-slate-100 pb-3">
        <User size={16} className="text-slate-500 shrink-0" />
        <span>Employee Information</span>
      </div>

      <div className="space-y-3.5">
        {/* First Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            First Name
          </label>
          <input
            type="text"
            value={first}
            onChange={(e) => {
              setEditingPacket({
                ...editingPacket,
                employeeName: `${e.target.value} ${last}`.trim(),
              });
            }}
            placeholder="First Name"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all uppercase"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            value={last}
            onChange={(e) => {
              setEditingPacket({
                ...editingPacket,
                employeeName: `${first} ${e.target.value}`.trim(),
              });
            }}
            placeholder="Last Name"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all uppercase"
          />
        </div>

        {/* Codice Fiscale (Optional for reference) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-500">
              Codice Fiscale (Optional for reference)
            </label>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
              {editingPacket.confidence ? `${editingPacket.confidence}%` : "55%"}
            </span>
          </div>
          <input
            type="text"
            value={editingPacket.cf || ""}
            onChange={(e) =>
              setEditingPacket({
                ...editingPacket,
                cf: e.target.value.toUpperCase(),
              })
            }
            placeholder="Codice Fiscale"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all tracking-wider uppercase"
          />
        </div>
      </div>
    </div>
  );
}
