import React, { useState } from "react";
import { PermissionMember } from "./data";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import CustomSearch from "@/components/customComponent/CustomSearch";
import CustomSelect from "@/components/customComponent/CustomSelect";

interface ManagePermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetName: string;
  permissionMembers: PermissionMember[];
  setPermissionMembers: React.Dispatch<
    React.SetStateAction<PermissionMember[]>
  >;
  onSave: () => void;
}

export default function ManagePermissionsModal({
  isOpen,
  onClose,
  permissionMembers,
  setPermissionMembers,
  onSave,
}: ManagePermissionsModalProps) {
  const [, setActiveRoleSelect] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={() => {
          onClose();
          setActiveRoleSelect(null);
        }}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col gap-6 text-left">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">
            Manage Permissions
          </h3>
          <CustomCloseButton
            onClick={() => {
              onClose();
              setActiveRoleSelect(null);
            }}
            className="p-1 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-600">
            Add Member *
          </label>
          <CustomSearch
            value=""
            onChange={() => {}}
            placeholder="Search a member"
          />
        </div>

        <div className="space-y-4 flex-1">
          <h4 className="text-xs font-semibold text-slate-600">
            People with Access
          </h4>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
            {permissionMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${member.avatarBg} flex items-center justify-center text-lg shadow-sm border`}
                  >
                    {member.avatarEmoji}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-slate-800 leading-tight">
                      {member.name}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 leading-normal">
                      {member.email}
                    </span>
                  </div>
                </div>

                <div className="w-[140px]">
                  <CustomSelect
                    value={member.role}
                    options={["View Only", "Add Files", "Edit Content"]}
                    onChange={(roleOption) => {
                      setPermissionMembers((prev) =>
                        prev.map((m) =>
                          m.id === member.id
                            ? {
                                ...m,
                                role: roleOption as PermissionMember["role"],
                              }
                            : m,
                        ),
                      );
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end pt-4 mt-2 border-t border-slate-100">
          <button
            onClick={() => {
              setActiveRoleSelect(null);
              onSave();
            }}
            className="px-6 py-2.5 bg-[#5c59f0] hover:bg-[#4744db] text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
