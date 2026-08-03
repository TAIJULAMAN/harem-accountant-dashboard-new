"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label?: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function CustomSelect({
  label,
  value,
  options,
  onChange,
  placeholder,
}: CustomSelectProps) {
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

  const isPlaceholder = placeholder && value === placeholder;

  return (
    <div className="flex flex-col gap-2" ref={dropdownRef}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between bg-white border ${isOpen ? "border-indigo-500 ring-1 ring-indigo-500" : "border-slate-200"} rounded-lg px-4 py-2 text-sm ${isPlaceholder ? "text-slate-400" : "text-slate-700"} font-medium outline-none cursor-pointer transition-colors`}
        >
          <span>{value}</span>
          <ChevronDown
            size={18}
            className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl ring-1 ring-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
            {options.map((option, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 font-medium transition-colors cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
