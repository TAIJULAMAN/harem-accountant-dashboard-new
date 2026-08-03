"use client";

import React from "react";
import { MousePointerClick } from "lucide-react";

interface CustomFileUploadProps {
  label: string;
  accept?: string;
  onFileSelect?: (file: File) => void;
}

export default function CustomFileUpload({
  label,
  accept,
  onFileSelect,
}: CustomFileUploadProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-2">
        {label}
      </label>
      <div className="relative border-2 border-dashed border-[#635BFF]/30 rounded-xl p-8 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition-colors overflow-hidden">
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file && onFileSelect) {
              onFileSelect(file);
            }
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-16 h-16 bg-[#F4F4FD] rounded-xl flex items-center justify-center mb-4 text-[#635BFF]">
          <MousePointerClick size={32} />
        </div>
        <p className="text-sm font-medium text-[#635BFF]">
          Drop here or click to browse
        </p>
      </div>
    </div>
  );
}
