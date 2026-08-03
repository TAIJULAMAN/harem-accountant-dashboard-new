"use client";

import React from "react";

interface CancelButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function CancelButton({ onClick, children = "Cancel" }: CancelButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-brand px-5 py-2 text-sm font-medium text-brand cursor-pointer hover:bg-brand/5 transition-colors"
    >
      {children}
    </button>
  );
}