"use client";
import React, { useState } from "react";
import { X, UploadCloud } from "lucide-react";

interface AttachmentModalProps {
  isOpen: boolean;
  attachmentName: string | null;
  onClose: () => void;
  onAttach: (fileName: string) => void;
}

export default function AttachmentModal({ isOpen, attachmentName, onClose, onAttach }: AttachmentModalProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(attachmentName);

  if (!isOpen) return null;

  const handleUpload = () => {
    onAttach(selectedFile || "uploaded_attachment.pdf");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[20px] shadow-2xl border border-slate-100 w-full max-w-[480px] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h3 className="text-base font-extrabold text-slate-800">Attach receipts/invoices</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <label className="block text-xs font-bold text-slate-700">Attach files *</label>
          <div
            onClick={() => setSelectedFile("new_attached_receipt.pdf")}
            className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-[#fbfbfe] rounded-2xl cursor-pointer transition-all gap-2 group"
          >
            <div className="h-11 w-11 rounded-full bg-[#f0f2ff] flex items-center justify-center text-brand shrink-0 group-hover:scale-105 transition-transform">
              <UploadCloud size={20} />
            </div>
            <span className="text-xs font-bold text-[#5c60f5] group-hover:text-[#4a4ed8] transition-colors">
              {selectedFile ? selectedFile : "Drop here or click to browse"}
            </span>
          </div>

          {/* Footer Submit */}
          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={handleUpload}
              className="bg-[#5c60f5] hover:bg-[#4d51e5] text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
