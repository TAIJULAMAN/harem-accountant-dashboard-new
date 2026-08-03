import React from "react";
import CustomInput from "../../customComponent/CustomInput";

interface OwnerContactsStepProps {
  ownerName: string;
  setOwnerName: (value: string) => void;
  ownerEmail: string;
  setOwnerEmail: (value: string) => void;
}

export default function OwnerContactsStep({
  ownerName,
  setOwnerName,
  ownerEmail,
  setOwnerEmail,
}: OwnerContactsStepProps) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Owner Name
          </label>
          <CustomInput
            value={ownerName}
            onChange={setOwnerName}
            placeholder="Enter owner's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Owner Email *
          </label>
          <CustomInput
            value={ownerEmail}
            onChange={setOwnerEmail}
            placeholder="Enter owner's email"
          />
        </div>
      </div>
    </div>
  );
}
