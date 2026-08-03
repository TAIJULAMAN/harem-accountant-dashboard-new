import React, { useState } from "react";

import CustomFileUpload from "../../customComponent/CustomFileUpload";
import CustomInput from "../../customComponent/CustomInput";
import CustomDatePicker from "../../customComponent/CustomDatePicker";

interface Step2UploadProps {
  nextStep: () => void;
  prevStep: () => void;
  onOpenBillingModal: () => void;
}

export default function Step2Upload({ nextStep, prevStep, onOpenBillingModal }: Step2UploadProps) {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  return (
    <div className="space-y-6">
      <CustomFileUpload label="Invoice File (PDF) *" accept=".pdf" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CustomInput
          label="Invoice Number *"
          placeholder="Enter Invoice Number"
          value={invoiceNumber}
          onChange={setInvoiceNumber}
        />
        <CustomDatePicker
          label="Invoice Date *"
          placeholder="Enter Invoice Date"
          value={invoiceDate}
          onChange={setInvoiceDate}
        />
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={onOpenBillingModal}
          className="px-4 py-2 bg-[#E0E7FF] text-[#635BFF] hover:bg-[#D0D7F5] text-sm font-medium rounded-lg transition-colors"
        >
          Billing Details
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={prevStep}
            className="px-6 py-2 bg-white border border-[#635BFF]/30 text-[#635BFF] text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-[#635BFF] hover:bg-[#5249ea] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
