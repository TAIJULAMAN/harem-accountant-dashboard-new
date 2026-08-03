"use client";

import React from "react";
import { Download } from "lucide-react";

interface CustomExportButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "outline" | "solid";
}

export default function CustomExportButton({
  label = "Export",
  onClick,
  disabled,
  className = "",
  variant = "outline",
}: CustomExportButtonProps) {
  const baseClasses =
    "flex items-center gap-1.5 transition-all shadow-sm cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed justify-center";

  const variantClasses = {
    outline:
      "border border-brand bg-white text-brand text-xs font-semibold px-3 py-1.5 hover:bg-brand/5",
    solid:
      "bg-[#5c7cfa] hover:bg-[#4b6bfb] text-white text-xs font-bold px-5 py-2.5 shadow-[#5c7cfa]/20",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <Download size={variant === "outline" ? 12 : 16} />
      <span>{label}</span>
    </button>
  );
}
