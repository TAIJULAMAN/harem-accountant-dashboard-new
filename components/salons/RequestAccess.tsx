"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomInput from "@/components/customComponent/CustomInput";
import CustomTextarea from "@/components/customComponent/CustomTextarea";
import CustomAlert from "@/components/customComponent/CustomAlert";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";
import { useRouter } from "next/navigation";

const ROLE_OPTIONS = ["Accountant", "Tax Advisor", "Financial Consultant"];
const ROLE_PLACEHOLDER = "Select Tax Type";

export default function RequestAccess() {
  const router = useRouter();
  const [salonCode, setSalonCode] = useState("");
  const [role, setRole] = useState(ROLE_PLACEHOLDER);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ salonCode, role, description });
  };

  return (
    <div className="space-y-5">
      {/* Page Title Card */}
      <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100">
        <h2 className="text-xl font-semibold text-slate-700">
          Request Access to Salon
        </h2>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CustomInput
              id="salon-code"
              label="Salon Code or Email *"
              value={salonCode}
              onChange={setSalonCode}
              placeholder="Enter Salon Code or Email"
              required
            />

            <CustomSelect
              label="Desired Role *"
              value={role}
              options={ROLE_OPTIONS}
              onChange={setRole}
              placeholder={ROLE_PLACEHOLDER}
            />
          </div>

          <CustomTextarea
            id="description"
            label="Description"
            sublabel="(Optional)"
            value={description}
            onChange={setDescription}
            placeholder="Introduce yourself and explain why you'd like to work with this salon..."
            rows={5}
          />

          {/* Info Banner */}
          <CustomAlert icon={Info}>
            <span className="font-semibold">Note</span>{" "}
            {`-- Your request will be sent to the salon owner for approval. You'll receive a notification once they respond.`}
          </CustomAlert>

          {/* Actions */}
          <div className="flex items-center justify-between pt-1">
            <CancelButton onClick={() => router.back()} />
            <SubmitButton>Send Request</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
