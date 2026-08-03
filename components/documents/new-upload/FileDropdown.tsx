"use client";

import React from "react";
import { Edit2, Download, Move, Users, Trash2, ExternalLink } from "lucide-react";

interface FileDropdownProps {
  onRename: () => void;
  onDownload: () => void;
  onMove: () => void;
  onPublish: () => void;
  onManagePermission: () => void;
  onDelete: () => void;
  alignLeft?: boolean;
}

export default function FileDropdown({
  onRename,
  onDownload,
  onMove,
  onPublish,
  onManagePermission,
  onDelete,
  alignLeft = false,
}: FileDropdownProps) {
  return (
    <div
      className={`absolute w-48 bg-white border border-slate-100 rounded-2xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-100 ${
        alignLeft ? "right-6 top-12 text-left" : "right-4 bottom-14"
      }`}
    >
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
        onClick={onPublish}
        className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
      >
        <ExternalLink size={12} className="text-[#d946ef]" /> Publish post
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
