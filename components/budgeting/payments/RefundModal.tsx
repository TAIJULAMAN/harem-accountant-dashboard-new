import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import CustomInput from "@/components/customComponent/CustomInput";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentId: string;
  paymentDate: string;
  paymentMethod: string;
  maxAmount?: number;
}

export default function RefundModal({
  isOpen,
  onClose,
  paymentId,
  paymentDate,
  paymentMethod,
  maxAmount = 170,
}: RefundModalProps) {
  const [amount, setAmount] = useState<string>(`€ ${maxAmount}`);
  const [refundGivenBy, setRefundGivenBy] = useState("Maria Rodriguez");
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  // Extract number from amount string
  const numAmount = parseFloat(amount.replace(/[^0-9.]/g, "")) || 0;
  const hasError = numAmount > maxAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[600px] p-8 animate-in fade-in zoom-in-95 duration-200">
        <CustomCloseButton
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
        />

        <h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2">
          Refund
        </h3>
        <p className="text-[13px] text-slate-500 mb-8 font-medium">
          ID: <span className="text-[#5c60f5]">{paymentId}</span> •{" "}
          {paymentDate}
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <CustomInput
              label="Same Payment Method *"
              value={paymentMethod}
              onChange={() => {}}
              readOnly
            />
            <div>
              <CustomInput
                label={`Refund Amount (Max € ${maxAmount}) *`}
                value={amount}
                onChange={setAmount}
                error={hasError}
              />
              {hasError && (
                <p className="flex items-center gap-1.5 mt-2 text-[11px] text-[#ff4d79] font-medium">
                  <AlertCircle size={12} strokeWidth={2} /> The value exceeds
                  the maximum
                </p>
              )}
            </div>
          </div>

          <CustomSelect
            label={`${paymentMethod === "Cash" ? "Cash" : paymentMethod} Refund Given By *`}
            value={refundGivenBy}
            onChange={setRefundGivenBy}
            options={["Maria Rodriguez", "Jane Doe"]}
          />

          <CustomSelect
            label="Reason for Refund *"
            placeholder="Choose a reason for refund"
            value={reason || "Choose a reason for refund"}
            onChange={setReason}
            options={[
              "Client cancelled service related to payment",
              "Incorrect amount",
              "Duplicate transaction",
              "Client's request",
              "Other",
            ]}
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            disabled={hasError}
            onClick={() => {
              if (!hasError) {
                onClose();
              }
            }}
            className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
              hasError
                ? "bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-100"
                : "bg-[#6c72ff] text-white hover:bg-[#5a60eb] shadow-sm"
            }`}
          >
            Issue Refund
          </button>
        </div>
      </div>
    </div>
  );
}
