import React from "react";

export default function SizingInfoBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-1.5 shadow-sm">
        PDF only
      </span>
      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-1.5 shadow-sm">
        Max 50MB
      </span>
      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-1.5 shadow-sm">
        Multiple employees supported
      </span>
    </div>
  );
}
