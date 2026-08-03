"use client";

import React from "react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function SubmitButton({
  children = "Submit",
  className = "",
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`rounded-lg bg-brand px-6 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
