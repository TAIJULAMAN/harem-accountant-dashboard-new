import React from "react";

interface FooterActionsProps {
  currentStep: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSend: () => void;
  hasConsent: boolean;
}

export default function FooterActions({
  currentStep,
  handleBack,
  handleNext,
  handleSend,
  hasConsent,
}: FooterActionsProps) {
  return (
    <div className="mt-8 flex justify-end gap-3">
      {currentStep > 1 && (
        <button
          onClick={handleBack}
          className="px-6 py-2.5 rounded-xl border border-[#635BFF] text-[#635BFF] text-sm font-medium hover:bg-[#635BFF]/5 transition-colors"
        >
          Back
        </button>
      )}

      {currentStep < 3 ? (
        <button
          onClick={handleNext}
          className="px-6 py-2.5 rounded-xl bg-[#635BFF] text-white text-sm font-medium hover:bg-[#524BFF] transition-colors"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleSend}
          disabled={!hasConsent}
          className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            hasConsent
              ? "bg-[#635BFF] text-white hover:bg-[#524BFF]"
              : "bg-slate-300 text-white cursor-not-allowed"
          }`}
        >
          Send Invitation
        </button>
      )}
    </div>
  );
}
