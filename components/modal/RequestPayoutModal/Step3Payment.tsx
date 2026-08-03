import React, { useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import CustomAlert from "../../customComponent/CustomAlert";
import CustomInput from "../../customComponent/CustomInput";
import CustomCheckbox from "../../customComponent/CustomCheckbox";

interface Step3PaymentProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3Payment({
  nextStep,
  prevStep,
}: Step3PaymentProps) {
  const [saveData, setSaveData] = useState(true);
  return (
    <div className="space-y-6">
      <CustomAlert
        icon={AlertCircle}
        iconColor="#EAB308"
        bgColor="#FFFDF0"
        borderColor="#FDE047"
        textColor="#1E293B"
      >
        <span className="font-bold">Please note</span> — The bank account holder
        must match the profile owner exactly:{" "}
        <span className="font-bold">Mario Accountant Srl</span>
      </CustomAlert>

      <div>
        <CustomInput
          label="IBAN *"
          value="IT60X0542811101000000123456"
          onChange={() => {}}
        />
      </div>

      <div>
        <CustomInput
          label="Bank Transfer Holder *"
          value="Mario Accountant S.r.l."
          onChange={() => {}}
        />
        <p className="text-sm text-[#22C55E] font-medium flex items-center gap-1 mt-2">
          <span className="w-4 h-4 rounded-full border border-[#22C55E] flex items-center justify-center">
            <Check size={10} />
          </span>
          Valid holder
        </p>
      </div>

      <CustomCheckbox
        checked={saveData}
        onChange={setSaveData}
        containerClassName="flex items-center gap-2 cursor-pointer"
        label={<span className="text-sm text-slate-700">Save this data for future payouts</span>}
      />

      <div className="flex justify-end mt-8 gap-3">
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
  );
}
