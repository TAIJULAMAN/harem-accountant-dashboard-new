import React from "react";

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
}

export default function CustomSwitch({
  checked,
  onChange,
  activeColor = "bg-[#5c60f5]",
  inactiveColor = "bg-[#e2e8f0]",
}: CustomSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-11 h-[24px] rounded-[8px] flex items-center p-[2px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c60f5]/50 ${
        checked ? activeColor : inactiveColor
      }`}
    >
      <div
        className={`w-[20px] h-[20px] rounded-[6px] bg-white shadow-sm transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-[20px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
