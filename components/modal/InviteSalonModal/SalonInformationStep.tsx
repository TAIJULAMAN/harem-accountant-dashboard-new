import React from "react";
import CustomInput from "../../customComponent/CustomInput";

interface SalonInformationStepProps {
  companyName: string;
  setCompanyName: (value: string) => void;
  commercialName: string;
  setCommercialName: (value: string) => void;
  vatNumber: string;
  setVatNumber: (value: string) => void;
}

export default function SalonInformationStep({
  companyName,
  setCompanyName,
  commercialName,
  setCommercialName,
  vatNumber,
  setVatNumber,
}: SalonInformationStepProps) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Company Name *
          </label>
          <CustomInput
            value={companyName}
            onChange={setCompanyName}
            placeholder="Enter company's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Commercial Name *
          </label>
          <CustomInput
            value={commercialName}
            onChange={setCommercialName}
            placeholder="Enter commercial's name"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1.5">
          VAT Number
        </label>
        <CustomInput
          value={vatNumber}
          onChange={setVatNumber}
          placeholder="Enter VAT Number"
        />
      </div>
    </div>
  );
}
