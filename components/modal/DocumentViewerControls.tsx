import React from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

interface DocumentViewerControlsProps {
  docPage: number;
  setDocPage: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  totalPages?: number;
}

export default function DocumentViewerControls({
  docPage,
  setDocPage,
  zoom,
  setZoom,
  totalPages = 9,
}: DocumentViewerControlsProps) {
  return (
    <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-200/80 bg-white">
      {/* Page Navigation: < 1/9 > */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setDocPage((prev) => Math.max(1, prev - 1))}
          disabled={docPage <= 1}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          aria-label="Previous Page"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-bold text-slate-700 min-w-[42px] text-center select-none tracking-wide">
          {docPage}/{totalPages}
        </span>
        <button
          type="button"
          onClick={() => setDocPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={docPage >= totalPages}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          aria-label="Next Page"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Zoom Controls: - 120% + */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.max(50, prev - 10))}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Zoom Out"
        >
          <Minus size={15} />
        </button>
        <span className="text-xs font-bold text-slate-700 min-w-[48px] text-center select-none">
          {zoom}%
        </span>
        <button
          type="button"
          onClick={() => setZoom((prev) => Math.min(200, prev + 10))}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Zoom In"
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}
