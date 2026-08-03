import React, { useState } from "react";
import CustomCloseButton from "../../customComponent/CustomCloseButton";
import Step1Amount from "./Step1Amount";
import Step2Upload from "./Step2Upload";
import Step3Payment from "./Step3Payment";
import Step4Summary from "./Step4Summary";
import BillingDetailsModal from "../BillingDetailsModal";

interface RequestPayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RequestPayoutModal({
  isOpen,
  onClose,
  onSuccess,
}: RequestPayoutModalProps) {
  const [step, setStep] = useState(1);
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const steps = [
    "Amount to Withdraw",
    "Upload Invoice",
    "Payment Data",
    "Request Summary",
  ];

  return (
    <>
      <BillingDetailsModal 
        isOpen={isBillingModalOpen}
        onClose={() => setIsBillingModalOpen(false)}
      />

      {!isBillingModalOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800">
            Request Payout
          </h2>
          <CustomCloseButton onClick={onClose} />
        </div>

        <div className="p-4 sm:p-8 overflow-y-auto">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-4 left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 -z-10" />
            {steps.map((label, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
                    step >= i + 1
                      ? "bg-[#635BFF] text-white"
                      : "bg-slate-500 text-white"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden sm:block text-sm text-center ${
                    step >= i + 1
                      ? "text-slate-400 font-medium"
                      : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {step === 1 && <Step1Amount nextStep={nextStep} />}
          {step === 2 && <Step2Upload nextStep={nextStep} prevStep={prevStep} onOpenBillingModal={() => setIsBillingModalOpen(true)} />}
          {step === 3 && <Step3Payment nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <Step4Summary onSuccess={onSuccess} onClose={onClose} />}
        </div>
      </div>
        </>
      )}
    </>
  );
}
