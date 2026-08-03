import React from "react";
import { LucideIcon } from "lucide-react";

interface CustomAlertProps {
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

export default function CustomAlert({
  icon: Icon,
  iconColor = "#635BFF",
  bgColor = "#F4F4FD",
  borderColor = "rgba(99, 91, 255, 0.3)",
  textColor = "#635BFF",
  children,
}: CustomAlertProps) {
  return (
    <div
      className="border rounded-xl p-4 flex gap-3"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <Icon size={20} style={{ color: iconColor }} className="shrink-0" />
      <div className="text-sm font-medium" style={{ color: textColor }}>
        {children}
      </div>
    </div>
  );
}
