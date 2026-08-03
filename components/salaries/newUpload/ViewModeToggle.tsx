import React from "react";
import { List as ListIcon, LayoutGrid } from "lucide-react";

interface ViewModeToggleProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export default function ViewModeToggle({
  viewMode,
  setViewMode,
}: ViewModeToggleProps) {
  return (
    <div className="flex items-center bg-slate-50 rounded-xl p-0.5 border border-slate-100">
      <button
        onClick={() => setViewMode("list")}
        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
          viewMode === "list"
            ? "bg-white text-brand shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        <ListIcon size={16} />
      </button>
      <button
        onClick={() => setViewMode("grid")}
        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
          viewMode === "grid"
            ? "bg-white text-brand shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        <LayoutGrid size={16} />
      </button>
    </div>
  );
}
