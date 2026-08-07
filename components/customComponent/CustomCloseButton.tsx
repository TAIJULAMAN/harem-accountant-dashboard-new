import React from "react";
import { X } from "lucide-react";

interface CustomCloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function CustomCloseButton({
  onClick,
  className = "absolute top-6 right-6 text-slate-500 hover:text-slate-800 transition-colors",
  ariaLabel = "Close",
}: CustomCloseButtonProps) {
  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      <X size={20} />
    </button>
  );
}
