"use client";

import React from "react";

interface CustomTextareaProps {
  id?: string;
  label?: string;
  sublabel?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

export default function CustomTextarea({
  id,
  label,
  sublabel,
  value,
  onChange,
  placeholder,
  rows = 5,
  required,
}: CustomTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">
          {label}
          {sublabel && (
            <span className="text-slate-400 font-normal"> {sublabel}</span>
          )}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
      />
    </div>
  );
}