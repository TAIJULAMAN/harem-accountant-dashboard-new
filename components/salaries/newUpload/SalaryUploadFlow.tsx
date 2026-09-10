"use client";

import React, { useState } from "react";
import { useSalon } from "@/context/SalonContext";
import { ExtractedSalary, mockSalaries } from "./data";
import SalaryUploadSteps from "./SalaryUploadSteps";
import SalaryUploadStep1 from "./SalaryUploadStep1";
import SalaryUploadStep2 from "./SalaryUploadStep2";
import SalaryUploadStep3 from "./SalaryUploadStep3";
import SuccessModal from "../../modal/SuccessModal";
import { useRouter } from "next/navigation";

export default function SalaryUploadFlow() {
  const router = useRouter();
  const { selectedSalon, setSelectedSalon } = useSalon();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isExtracting, setIsExtracting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setTermsAccepted] = useState(false);
  const [salaries, setSalaries] = useState<ExtractedSalary[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [uploadedPdfUrl, setUploadedPdfUrl] = useState<string | null>(null);

  const handleExtractData = () => {
    setIsExtracting(true);
    setTimeout(() => {
      setIsExtracting(false);
      setSalaries(mockSalaries);
      setStep(2);
    }, 1800);
  };

  const handleSubmitSalaries = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  const resetUploadFlow = () => {
    setSalaries([]);
    setTermsAccepted(false);
    setShowSuccessModal(false);
    setUploadedPdfUrl(null);
    setStep(1);
  };

  const handleSuccessClose = () => {
    resetUploadFlow();
    router.push("/salaries/history");
  };

  return (
    <div className="space-y-6">
      <SalaryUploadSteps
        step={step}
        onChangeStep={setStep}
        hasData={salaries.length > 0}
      />

      {step === 1 && (
        <SalaryUploadStep1
          selectedSalon={selectedSalon}
          setSelectedSalon={setSelectedSalon}
          isExtracting={isExtracting}
          onExtract={handleExtractData}
          onPdfUpload={(file) => {
            const url = URL.createObjectURL(file);
            setUploadedPdfUrl(url);
          }}
        />
      )}

      {step === 2 && (
        <SalaryUploadStep2
          selectedSalon={selectedSalon}
          salaries={salaries}
          setSalaries={setSalaries}
          setStep={setStep}
          uploadedPdfUrl={uploadedPdfUrl}
          setUploadedPdfUrl={setUploadedPdfUrl}
        />
      )}

      {step === 3 && (
        <SalaryUploadStep3
          salaries={salaries}
          setStep={setStep}
          handleSubmitSalaries={handleSubmitSalaries}
          isSubmitting={isSubmitting}
        />
      )}

      {/* Success Popup Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        title="Success!"
        message={`${salaries.length} salary packets sent to owner for approval!`}
        buttonText="Go to salaries"
      />
    </div>
  );
}
