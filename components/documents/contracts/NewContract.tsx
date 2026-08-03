"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, FileText } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomFileUpload from "@/components/customComponent/CustomFileUpload";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";
import CustomInput from "@/components/customComponent/CustomInput";
import SuccessModal from "@/components/modal/SuccessModal";

export default function NewContract() {
  const router = useRouter();

  const [contractType, setContractType] = useState("Permanent");
  const [taxIdCode, setTaxIdCode] = useState("");
  const [iban, setIban] = useState("");
  const [startDate, setStartDate] = useState("");
  const [role, setRole] = useState("Select role");
  const [remunerationType, setRemunerationType] = useState("Select type");
  const [salon, setSalon] = useState("Select Salon");
  const [taxType, setTaxType] = useState("Select Tax Type");
  const [file, setFile] = useState<File | null>(null);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setIsSuccessModalOpen(true);
    } else {
      alert("Please upload a document.");
    }
  };

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/documents/contracts");
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
          New Tax Upload
        </h1>
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
          <Link
            href="/documents"
            className="hover:text-[#6366f1] transition-colors"
          >
            <Home size={14} />
          </Link>
          <span>/</span>
          <Link
            href="/documents/contracts"
            className="bg-indigo-50 text-[#6366f1] px-3 py-1.5 rounded-lg transition-colors"
          >
            Contract
          </Link>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
          {/* Contract Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Contract Type *
            </label>
            <CustomSelect
              value={contractType}
              options={["Permanent", "Temporary", "Freelance", "Internship"]}
              onChange={setContractType}
            />
          </div>

          {/* Tax ID Code */}
          <div>
            <CustomInput
              label="Tax ID Code *"
              value={taxIdCode}
              onChange={setTaxIdCode}
              placeholder="Enter tax ID code"
              required
            />
          </div>

          {/* IBAN */}
          <div className="md:col-span-2">
            <CustomInput
              label="IBAN"
              value={iban}
              onChange={setIban}
              placeholder="Enter IBAN for salary payments"
            />
          </div>

          {/* Start Date */}
          <div className="md:col-span-2">
            <div className="mb-2">
              <CustomInput
                label="Start Date *"
                value={startDate}
                onChange={setStartDate}
                placeholder="Enter start date"
                required
              />
            </div>
            <button
              type="button"
              className="text-xs font-bold text-[#6366f1] hover:underline cursor-pointer"
            >
              Set an end date
            </button>
          </div>

          {/* Role */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Role *
            </label>
            <CustomSelect
              value={role}
              options={["Hair Stylist", "Colorist", "Receptionist", "Manager"]}
              onChange={setRole}
              placeholder="Select role"
            />
          </div>

          {/* Remuneration Type */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Remuneration Type *
            </label>
            <CustomSelect
              value={remunerationType}
              options={["Fixed Salary", "Hourly", "Commission Base"]}
              onChange={setRemunerationType}
              placeholder="Select type"
            />
          </div>

          {/* Salon */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Salon *
            </label>
            <CustomSelect
              value={salon}
              options={["Chic Hair & Beauty", "Style Studio", "Elegance Spa"]}
              onChange={setSalon}
              placeholder="Select Salon"
            />
          </div>

          {/* Tax Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Tax Type *
            </label>
            <CustomSelect
              value={taxType}
              options={["Standard", "Reduced", "Exempt"]}
              onChange={setTaxType}
              placeholder="Select Tax Type"
            />
          </div>
        </div>

        {/* Drag and Drop Zone */}
        <div className="mb-8">
          <CustomFileUpload
            label="Document *"
            accept=".pdf,.doc,.docx,.txt"
            onFileSelect={setFile}
          />
          {file && (
            <div className="flex flex-col items-center text-center mt-6">
              <div className="w-16 h-16 bg-[#e0e7ff] text-[#6366f1] rounded-xl flex items-center justify-center mb-4">
                <FileText size={32} />
              </div>
              <span className="text-sm font-bold text-slate-800 mb-1">
                {file.name}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="mt-4 text-xs font-bold text-red-500 hover:text-red-600 px-3 py-1.5 bg-red-50 rounded-lg"
              >
                Remove File
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-6 flex items-center justify-between">
          <CancelButton onClick={() => router.push("/documents/contracts")}>
            Cancel
          </CancelButton>
          <SubmitButton>Send for Approval</SubmitButton>
        </div>
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Success!"
        message="Contract submitted for approval."
      />
    </div>
  );
}
