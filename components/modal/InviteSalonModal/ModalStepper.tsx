import React from "react";

interface ModalStepperProps {
  currentStep: number;
}

export default function ModalStepper({ currentStep }: ModalStepperProps) {
  const steps = [
    { num: 1, label: "Salon Information" },
    { num: 2, label: "Owner Contacts" },
    { num: 3, label: "Plan Preference (Optional)" },
  ];

  return (
    <div className="flex items-start justify-between mb-8 max-w-[440px] mx-auto w-full relative">
      {steps.map((step, index) => {
        const isActive = currentStep === step.num;
        const isCompleted = currentStep > step.num;
        return (
          <div key={step.num} className="flex flex-col items-center relative z-10 flex-1">
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-4 left-[50%] w-full h-px bg-slate-300 -z-10" />
            )}
            
            {/* Step Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors mb-2
                ${
                  isActive || isCompleted
                    ? "bg-[#635BFF] text-white"
                    : "bg-slate-500 text-white"
                }
              `}
            >
              {step.num}
            </div>
            {/* Step Label */}
            <span
              className={`hidden sm:block text-[13px] text-center leading-tight mt-1 px-2 text-[#A7AAB7] font-medium`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
