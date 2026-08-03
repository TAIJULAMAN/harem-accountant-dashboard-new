import React, { useState } from "react";
import CustomCheckbox from "../../customComponent/CustomCheckbox";

interface Step4SummaryProps {
  onSuccess: () => void;
  onClose: () => void;
}

export default function Step4Summary({ onSuccess, onClose }: Step4SummaryProps) {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="space-y-6">
      <div className="bg-[#F8F9FA] rounded-xl border border-slate-100 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-800">Amount</span>
          <span className="text-xl font-semibold text-[#635BFF]">€ 1,000</span>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Invoice Number</span>
            <span className="text-sm font-medium text-slate-700">Lorem</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Invoice Date</span>
            <span className="text-sm font-medium text-slate-700">2025-02-03</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">File</span>
            <span className="text-sm font-medium text-slate-700">
              Untitled document (4).pdf
            </span>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">IBAN</span>
            <span className="text-sm font-medium text-slate-700">
              IT60X0542811101000000123456
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Owner</span>
            <span className="text-sm font-medium text-slate-700">
              Mario Accountant S.r.l.
            </span>
          </div>
        </div>
      </div>

      <CustomCheckbox
        checked={confirm}
        onChange={setConfirm}
        containerClassName="flex items-start gap-2 cursor-pointer"
        label={<span className="text-sm text-slate-700">
          I confirm that the invoice corresponds to the requested amount and that
          the data is correct.
        </span>}
      />

      <div className="flex justify-end mt-8 gap-3">
        <button
          onClick={() => {
            onSuccess();
            onClose();
          }}
          className="px-6 py-2 bg-[#635BFF] hover:bg-[#5249ea] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Send Request
        </button>
      </div>
    </div>
  );
}
