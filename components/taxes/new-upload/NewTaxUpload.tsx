"use client";

import React, { useState } from "react";
import { Trash2, File as FileIcon } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomFileUpload from "@/components/customComponent/CustomFileUpload";
import CustomTextarea from "@/components/customComponent/CustomTextarea";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";

const TAX_TYPES = [
  "Select tax type",
  "VAT",
  "Income Tax",
  "Social Security",
  "Property Tax",
  "Other",
];

const SALONS = ["Select Salon", "Salon 1", "Salon 2"];

export default function NewTaxUpload() {
  const [salon, setSalon] = useState("Select Salon");
  const [taxType, setTaxType] = useState("Select Tax Type");

  const [file, setFile] = useState<File | null>(null);
  const [note, setNote] = useState("");

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  return (
    <div className="flex flex-col h-full space-y-6 pt-5 pb-10 mb-10">
      {/* Top Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
          New Tax Upload
        </h2>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-6 sm:p-8">
        {/* Dropdowns Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
          <CustomSelect
            label="Salon *"
            value={salon}
            options={SALONS}
            onChange={setSalon}
            placeholder="Select Salon"
          />

          <CustomSelect
            label="Tax Type *"
            value={taxType}
            options={TAX_TYPES}
            onChange={setTaxType}
            placeholder="Select Tax Type"
          />
        </div>

        {/* Dropzone Container */}
        <div className="mb-6 relative z-0">
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Drop Tax Document
            </h3>
            <p className="text-[13px] text-slate-400 font-medium">
              You can upload multiple employees in one PDF file
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <CustomFileUpload
              label=""
              accept="application/pdf"
              onFileSelect={(f) => {
                if (f.type === "application/pdf") {
                  setFile(f);
                } else {
                  alert("Please upload a PDF file.");
                }
              }}
            />
          </div>

          {file && (
            <div className="border border-slate-100 rounded-xl p-4 flex items-center justify-between w-full max-w-4xl mx-auto mt-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] bg-white ring-1 ring-slate-100">
              <div className="flex items-center gap-4 px-2">
                <div className="text-indigo-500">
                  <FileIcon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-indigo-500">
                    {file.name}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {formatFileSize(file.size)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-rose-400 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors cursor-pointer mr-2"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Note (Optional) Field - Shows when file is uploaded */}
        {file && (
          <div className="mt-8 relative z-0">
            <CustomTextarea
              label="Note(Optional)"
              value={note}
              onChange={setNote}
              placeholder="Add a note"
            />
          </div>
        )}
      </div>

      {/* Action Buttons Bottom Row */}
      <div className="flex items-center justify-between pt-2">
        <CancelButton>Cancel</CancelButton>
        <SubmitButton>Send for Approval</SubmitButton>
      </div>
    </div>
  );
}
