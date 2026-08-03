"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { Plugin } from "chart.js";

// Center text plugin for Donut Charts
export const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  beforeDraw(chart) {
    const { ctx, data } = chart;
    const dataset = data.datasets[0] as unknown as { centerText?: string };
    const text = dataset.centerText;
    if (text) {
      ctx.save();
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      ctx.font = "bold 13px Inter, sans-serif";
      ctx.fillStyle = "#1e293b"; // slate-800
      ctx.fillText(text, x, y);
      ctx.restore();
    }
  },
};

interface DropdownSelectorProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}

export function DropdownSelector({ value, onChange, options }: DropdownSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 border border-slate-200 bg-white text-slate-500 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span>{value}</span>
        <ChevronDown size={12} className="text-slate-400" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-28 bg-white rounded-lg shadow-xl ring-1 ring-slate-100 py-1 animate-in fade-in slide-in-from-top-1">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="w-full text-left px-3.5 py-1.5 text-xs text-slate-600 hover:bg-slate-50 font-semibold transition-colors cursor-pointer"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
