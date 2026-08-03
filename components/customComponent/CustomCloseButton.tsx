import React from "react";
import { X } from "lucide-react";

interface CustomCloseButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CustomCloseButton({
  onClick,
  className = "absolute top-6 right-6 text-slate-500 hover:text-slate-800 transition-colors",
}: CustomCloseButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      <X size={20} />
    </button>
  );
}
