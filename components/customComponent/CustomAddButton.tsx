"use client";

import React from "react";
import { Plus } from "lucide-react";

interface CustomAddButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function CustomAddButton({
  label,
  onClick,
  disabled,
}: CustomAddButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Plus size={16} />
      <span>{label}</span>
    </button>
  );
}
