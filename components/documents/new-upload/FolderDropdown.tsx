"use client";

import React from "react";
import { Edit2, Download, Move, Users, Trash2 } from "lucide-react";

interface FolderDropdownProps {
  onRename: () => void;
  onDownload: () => void;
  onMove: () => void;
  onManagePermission: () => void;
  onDelete: () => void;
}

export default function FolderDropdown({
  onRename,
  onDownload,
  onMove,
  onManagePermission,
  onDelete,
}: FolderDropdownProps) {
  return (
    <div className="absolute right-4 bottom-14 w-44 bg-white border border-slate-100 rounded-2xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-100">
      <button
        onClick={onRename}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
      >
        <Edit2 size={12} className="text-[#38bdf8]" /> Rename
      </button>
      <button
        onClick={onDownload}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
      >
        <Download size={12} className="text-[#22c55e]" /> Download
      </button>
      <button
        onClick={onMove}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
      >
        <Move size={12} className="text-[#6366f1]" /> Move
      </button>
      <button
        onClick={onManagePermission}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
      >
        <Users size={12} className="text-[#f97316]" /> Manage Permission
      </button>
      <button
        onClick={onDelete}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors cursor-pointer border-t border-slate-50"
      >
        <Trash2 size={12} className="text-[#f43f5e]" /> Delete
      </button>
    </div>
  );
}
