"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface YearSelectProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  years?: string[];
}

export default function YearSelect({
  selectedYear,
  onYearChange,
  years = ["2024", "2025", "2026"],
}: YearSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2.5 bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-600 pl-3.5 pr-8 py-1.5 rounded-lg outline-none cursor-pointer focus:border-brand select-none min-w-[85px] transition-all relative"
      >
        <span>{selectedYear}</span>
        <span className="absolute inset-y-0 right-2.5 flex items-center pointer-events-none text-slate-500">
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {/* Options List */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-full min-w-[90px] bg-white border border-slate-100 rounded-xl shadow-lg py-1.5 z-20 animate-in fade-in slide-in-from-top-1 duration-150">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                onYearChange(year);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer
                ${selectedYear === year ? "text-brand bg-brand/5" : "text-slate-600"}
              `}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
