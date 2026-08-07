"use client";

import React, { ReactNode } from "react";

interface CustomInputProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  icon?: ReactNode;
  readOnly?: boolean;
  error?: boolean;
}

export default function CustomInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  icon,
  readOnly,
  error,
}: CustomInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
            error
              ? "border-[#ff4d79] bg-white text-slate-700 focus:border-[#ff4d79] focus:ring-1 focus:ring-[#ff4d79]"
              : readOnly
              ? "border-slate-100 bg-slate-50/70 text-slate-400 cursor-default shadow-sm"
              : "border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:border-[#5c60f5] focus:ring-1 focus:ring-[#5c60f5] shadow-sm"
          } ${
            type === "date"
              ? "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              : ""
          } ${icon ? "pr-10" : ""}`}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}