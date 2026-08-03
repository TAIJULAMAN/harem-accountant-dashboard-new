"use client";

import React from "react";
import { Search } from "lucide-react";

interface CustomSearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomSearch({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}: CustomSearchProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={16} className="text-slate-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder-slate-400 text-slate-700 bg-white"
      />
    </div>
  );
}
