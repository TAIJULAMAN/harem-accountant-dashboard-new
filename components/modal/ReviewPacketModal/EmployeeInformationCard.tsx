import React from "react";
import CustomInput from "../../customComponent/CustomInput";
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

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-50 pb-2">
        Employee Information
      </h4>

      <div className="space-y-1">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          First Name
        </label>
        <CustomInput
          required
          value={getFirstAndLastName(editingPacket.employeeName).first}
          onChange={(val) => {
            const { last } = getFirstAndLastName(editingPacket.employeeName);
            setEditingPacket({
              ...editingPacket,
              employeeName: `${val} ${last}`.trim(),
            });
          }}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Last Name
        </label>
        <CustomInput
          required
          value={getFirstAndLastName(editingPacket.employeeName).last}
          onChange={(val) => {
            const { first } = getFirstAndLastName(editingPacket.employeeName);
            setEditingPacket({
              ...editingPacket,
              employeeName: `${first} ${val}`.trim(),
            });
          }}
        />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center mb-1">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Tax Code
          </label>
          <span className="text-[11px] font-bold text-emerald-500">
            {editingPacket.confidence}%
          </span>
        </div>
        <CustomInput
          required
          value={editingPacket.cf}
          onChange={(val) =>
            setEditingPacket({
              ...editingPacket,
              cf: val.toUpperCase(),
            })
          }
        />
        <span className="block text-[10px] text-slate-400 font-medium mt-1">
          Optional - For reference
        </span>
      </div>
    </div>
  );
}
