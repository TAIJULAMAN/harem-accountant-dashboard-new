"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import CustomInput from "../customComponent/CustomInput";
import CustomAlert from "../customComponent/CustomAlert";
import SubmitButton from "../customComponent/SubmitButton";

export default function SettingsTab() {
  const [iban, setIban] = useState("IT60X0542811101000000123456");
  const [bankHolder, setBankHolder] = useState("Mario Accountant S.r.l.");
  const [vatNumber, setVatNumber] = useState("IT12345678901");
  const [address, setAddress] = useState("Via Roma 123, 20100 Milano");

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <CustomAlert icon={AlertCircle}>
        Info — This information will be automatically used for all future payout requests. You can always change it when making a new request.
      </CustomAlert>

      {/* Bank Details Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
        <h2 className="text-sm font-bold text-slate-800 mb-6">Bank Details</h2>
        <div className="space-y-6">
          <div>
            <CustomInput label="IBAN *" value={iban} onChange={setIban} />
          </div>
          <div>
            <CustomInput
              label="Bank Transfer Holder *"
              value={bankHolder}
              onChange={setBankHolder}
            />
            <div className="flex items-center gap-1.5 mt-2 text-[#36C76C]">
              <CheckCircle size={14} />
              <span className="text-xs font-medium">Valid holder</span>
            </div>
          </div>
        </div>
      </div>

      {/* VAT Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
        <h2 className="text-sm font-bold text-slate-800 mb-6">VAT</h2>
        <div className="space-y-6">
          <div>
            <CustomInput
              label="VAT *"
              value={vatNumber}
              onChange={setVatNumber}
            />
            <div className="flex items-center gap-1.5 mt-2 text-[#36C76C]">
              <CheckCircle size={14} />
              <span className="text-xs font-medium">Valid VAT number</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Address
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-y min-h-[100px]"
            />
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mt-2">
            <h4 className="text-sm font-semibold text-slate-800 mb-2">
              Data security
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your banking details are stored securely and encrypted. They are
              never shared with third parties and are used exclusively to
              process your refund payments.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end pb-8">
        <SubmitButton>Save Changes</SubmitButton>
      </div>
    </div>
  );
}
