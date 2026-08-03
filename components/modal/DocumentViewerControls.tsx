import React from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

interface DocumentViewerControlsProps {
  docPage: number;
  setDocPage: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export default function DocumentViewerControls({
  docPage,
  setDocPage,
  zoom,
  setZoom,
}: DocumentViewerControlsProps) {
  return (
    <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-100 bg-white">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setDocPage((prev) => Math.max(1, prev - 1))}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-bold text-slate-600 w-12 text-center select-none">
          {docPage} / 8
        </span>
        <button
          type="button"
          onClick={() => setDocPage((prev) => Math.min(8, prev + 1))}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.max(50, prev - 10))}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
        >
          <Minus size={14} />
        </button>
        <span className="text-xs font-bold text-slate-600 w-12 text-center select-none">
          {zoom}%
        </span>
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.min(200, prev + 10))}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
