import React from "react";
import { Info } from "lucide-react";
import CustomInput from "../../customComponent/CustomInput";
import CustomAlert from "../../customComponent/CustomAlert";

interface Step1AmountProps {
  nextStep: () => void;
}

export default function Step1Amount({ nextStep }: Step1AmountProps) {
  return (
    <div className="space-y-6">
      <div>
        <CustomInput
          label="Amount (€)"
          value=""
          onChange={() => {}}
        />
        <p className="text-sm text-slate-400 mt-2">
          Available balance{" "}
          <span className="text-[#22C55E] font-medium">€1,500</span>
        </p>
      </div>

      <CustomAlert icon={Info}>
        Tip — You can request an amount equal to or less than your
        available balance. You will need to upload an invoice for the
        requested amount.
      </CustomAlert>

      <div className="flex justify-end mt-8">
        <button
          onClick={nextStep}
          className="w-full sm:w-auto px-6 py-2 bg-[#635BFF] hover:bg-[#5249ea] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
