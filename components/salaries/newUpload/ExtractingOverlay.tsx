import React from "react";

export default function ExtractingOverlay() {
  return (
    <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] rounded-xl flex flex-col items-center justify-center z-20">
      <div className="flex flex-col items-center">
        <div className="h-14 w-14 rounded-full border-4 border-slate-100 border-t-brand animate-spin mb-4.5"></div>
        <h4 className="font-bold text-slate-800 text-base">
          Extracting Payroll Data...
        </h4>
        <p className="text-xs text-slate-400 font-semibold mt-1">
          Analyzing pay slips and mapping employee contracts
        </p>
      </div>
    </div>
  );
}
