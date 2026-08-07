"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Home, FileText, X } from "lucide-react";
import ImportBanner from "./ImportBanner";
import CustomFileUpload from "@/components/customComponent/CustomFileUpload";
import ImportedListTable from "./ImportedListTable";
import { mockImportedPayments, ImportedPaymentItem } from "./data";
import ImportTemplatesAndFile from "./ImportTemplatesAndFile";

export default function ImportPayments() {
  const router = useRouter();
  const [importedData, setImportedData] = useState<ImportedPaymentItem[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    const newItems = mockImportedPayments.map((item, index) => ({
      ...item,
      id: `#NEW-${index + 1}`,
      receiptNumber: `FILE-${Math.floor(Math.random() * 9000) + 1000}`,
    }));
    setImportedData(newItems);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setImportedData([]);
  };

  const handleSave = () => {
    alert(`Successfully imported ${importedData.length} records!`);
    router.push("/budgeting/payments");
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
        <Link
          href="/budgeting/payments"
          className="flex items-center gap-2 text-xl font-semibold text-slate-800 hover:text-[#5c60f5] transition-colors"
        >
          <ChevronLeft size={24} />
          Import Services
        </Link>
        <div className="flex items-center gap-1 bg-[#f3effe] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5c60f5]">
          <Home size={12} />
          <span className="text-slate-400 mx-1">/</span>
          <span>Payments</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <ImportBanner />
        <ImportTemplatesAndFile />
        {uploadedFile ? (
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#5c60f5]/10 rounded-lg flex items-center justify-center text-[#5c60f5]">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {uploadedFile.name}
                </p>
                <p className="text-xs text-slate-500">
                  {(uploadedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-2 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="mt-5">
            <CustomFileUpload
              label="Upload Data File"
              accept=".csv,.xlsx"
              onFileSelect={handleFileUpload}
            />
          </div>
        )}
      </div>

      {importedData.length > 0 && (
        <ImportedListTable data={importedData} onDataChange={setImportedData} />
      )}

      {importedData.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#5c60f5] text-white text-sm font-bold rounded-xl shadow-lg hover:bg-[#4b4fdb] hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
