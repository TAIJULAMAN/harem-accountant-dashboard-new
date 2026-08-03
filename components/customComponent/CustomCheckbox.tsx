"use client";

import React from "react";
import { Check } from "lucide-react";

interface CustomCheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  className?: string;
  containerClassName?: string;
  label?: React.ReactNode;
}

export default function CustomCheckbox({
  id,
  checked,
  onChange,
  className = "w-5 h-5 rounded-[6px] flex flex-shrink-0 items-center justify-center transition-colors",
  containerClassName = "flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer",
  label,
}: CustomCheckboxProps) {
  return (
    <label className={containerClassName}>
      <div className="relative mt-0.5 flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute opacity-0 w-full h-full cursor-pointer z-10"
        />
        <div 
          className={`${className} ${
            checked 
              ? "bg-[#635BFF] border border-[#635BFF]" 
              : "bg-white border-2 border-slate-300"
          }`}
        >
          {checked && <Check size={14} strokeWidth={3} className="text-white" />}
        </div>
      </div>
      {label && (
        <span className="text-xs text-slate-600 leading-tight">{label}</span>
      )}
    </label>
  );
}
