"use client";

import React, { useState, useEffect } from "react";
import SalonInformationStep from "./SalonInformationStep";
import OwnerContactsStep from "./OwnerContactsStep";
import PlanPreferenceStep from "./PlanPreferenceStep";
import FooterActions from "./FooterActions";
import ModalStepper from "./ModalStepper";
import CustomCloseButton from "../../customComponent/CustomCloseButton";

interface InviteSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function InviteSalonModal({
  isOpen,
  onClose,
  onSuccess,
}: InviteSalonModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isRelegationExpanded, setIsRelegationExpanded] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [suggestedPlan, setSuggestedPlan] = useState("No preference");
  const [hasConsent, setHasConsent] = useState(false);

  const resetState = () => {
    setCurrentStep(1);
    setCompanyName("");
    setCommercialName("");
    setVatNumber("");
    setOwnerName("");
    setOwnerEmail("");
    setSuggestedPlan("No preference");
    setHasConsent(false);
    setIsRelegationExpanded(true);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSend = () => {
    resetState();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[24px] p-5 sm:p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <CustomCloseButton onClick={handleClose} />

        <ModalStepper currentStep={currentStep} />

        <div className="min-h-[220px]">
          {currentStep === 1 && (
            <SalonInformationStep
              companyName={companyName}
              setCompanyName={setCompanyName}
              commercialName={commercialName}
              setCommercialName={setCommercialName}
              vatNumber={vatNumber}
              setVatNumber={setVatNumber}
            />
          )}

          {currentStep === 2 && (
            <OwnerContactsStep
              ownerName={ownerName}
              setOwnerName={setOwnerName}
              ownerEmail={ownerEmail}
              setOwnerEmail={setOwnerEmail}
            />
          )}

          {currentStep === 3 && (
            <PlanPreferenceStep
              suggestedPlan={suggestedPlan}
              setSuggestedPlan={setSuggestedPlan}
              isRelegationExpanded={isRelegationExpanded}
              setIsRelegationExpanded={setIsRelegationExpanded}
              hasConsent={hasConsent}
              setHasConsent={setHasConsent}
            />
          )}
        </div>
        <FooterActions
          currentStep={currentStep}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSend={handleSend}
          hasConsent={hasConsent}
        />
      </div>
    </div>
  );
}
