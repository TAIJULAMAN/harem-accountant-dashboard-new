import React from "react";
import Image from "next/image";

interface SalaryUploadStepsProps {
  step: number;
  onChangeStep?: (step: 1 | 2 | 3) => void;
  hasData?: boolean;
}

export default function SalaryUploadSteps({
  step,
  onChangeStep,
  hasData = false,
}: SalaryUploadStepsProps) {
  if (step >= 4) return null;

  const steps = [
    {
      number: 1,
      title: "Upload PDF",
      description: "Upload pay slip files",
      icon: "/icons/uploadPdf.svg",
    },
    {
      number: 2,
      title: "Extract & Review",
      description: "Auto-extract and verify data",
      icon: "/icons/ExtractReview.svg",
    },
    {
      number: 3,
      title: "Finalize",
      description: "Confirm and submit",
      icon: "/icons/Finalize.svg",
    },
  ];

  const isClickable = (targetStep: number) => {
    if (!onChangeStep) return false;
    if (targetStep === 1) return true;
    if (targetStep === 2) return hasData || step >= 2;
    if (targetStep === 3) return hasData && step >= 2;
    return false;
  };

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4.5 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => {
          const active = step === s.number;
          const clickable = isClickable(s.number);

          return (
            <button
              key={s.number}
              disabled={!clickable}
              onClick={() => clickable && onChangeStep?.(s.number as 1 | 2 | 3)}
              className={`flex items-center gap-3.5 px-4.5 py-3.5 rounded-2xl border text-left transition-all duration-200 ${
                active
                  ? "bg-brand/10 border-brand/20 text-brand"
                  : clickable
                    ? "bg-white border-slate-100 hover:border-brand/20 hover:bg-slate-50/30 text-slate-600 cursor-pointer"
                    : "bg-slate-50/50 border-slate-100/50 text-slate-400 cursor-not-allowed"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  active
                    ? "bg-brand text-white"
                    : clickable
                      ? "bg-slate-100 text-slate-600"
                      : "bg-slate-200/60 text-slate-400"
                }`}
              >
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={24}
                  height={24}
                  className={active ? "brightness-0 invert" : "brightness-0"}
                />
              </div>
              <div className="text-left min-w-0">
                <p
                  className={`text-base font-semibold leading-tight truncate ${
                    active
                      ? "text-slate-800"
                      : clickable
                        ? "text-slate-700 hover:text-brand"
                        : "text-slate-400"
                  }`}
                >
                  {s.title}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5 leading-none truncate">
                  {s.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
