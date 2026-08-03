"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, FileText } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomInput from "@/components/customComponent/CustomInput";
import CustomFileUpload from "@/components/customComponent/CustomFileUpload";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";
import { employeeOptions } from "./data";
import SuccessModal from "@/components/modal/SuccessModal";

export default function UploadNotice() {
  const router = useRouter();
  const [employee, setEmployee] = useState("Select Employee");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee !== "Select Employee" && title && file) {
      setIsSuccessModalOpen(true);
    } else if (!file) {
      alert("Please select a document to upload.");
    }
  };

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/documents/employee-notices");
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
          Upload Notice
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
            href="/documents/employee-notices"
            className="bg-indigo-50 text-[#6366f1] px-3 py-1.5 rounded-lg transition-colors"
          >
            Employee Notices
          </Link>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-8 space-y-8"
      >
        <CustomInput
          label="Title *"
          value={title}
          onChange={setTitle}
          placeholder="Enter Title"
          required
        />
        <CustomSelect
          label="Select Employee *"
          value={employee}
          options={employeeOptions}
          onChange={setEmployee}
          placeholder="Select Employee"
        />

        {/* Drag and Drop Zone */}
        <div>
          <CustomFileUpload
            label="Document *"
            accept=".pdf,.doc,.docx,.txt"
            onFileSelect={(selectedFile) => setFile(selectedFile)}
          />
          {file && (
            <div className="mt-4 flex flex-col items-center text-center p-6 border rounded-xl border-slate-100 bg-slate-50">
              <div className="w-12 h-12 bg-white shadow-sm text-[#6366f1] rounded-xl flex items-center justify-center mb-3">
                <FileText size={24} />
              </div>
              <span className="text-sm font-bold text-slate-800 mb-1">
                {file.name}
              </span>
              <span className="text-xs font-medium text-slate-500 mb-3">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-xs font-bold text-red-500 hover:text-red-600 px-3 py-1.5 bg-red-50 rounded-lg cursor-pointer transition-colors"
              >
                Remove File
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <CancelButton
            onClick={() => router.push("/documents/employee-notices")}
          >
            Cancel
          </CancelButton>
          <SubmitButton>Send Notice</SubmitButton>
        </div>
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Notice Uploaded Successfully!"
        message="The document has been securely saved."
      />
    </div>
  );
}
