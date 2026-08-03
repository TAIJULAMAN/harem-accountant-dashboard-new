import React, { useRef } from "react";
import { FileText, FileUp, Trash2 } from "lucide-react";
import TemplateCard from "./TemplateCard";
import Image from "next/image";

interface Props {
  uploadedFile: File | null;
  onUpload: (file: File) => void;
  onRemoveFile: () => void;
}

export default function ImportTemplatesAndFile({ uploadedFile, onUpload, onRemoveFile }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-8 mb-8">
      {/* Templates Section */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">Templates</h3>
        <div className="flex gap-6 overflow-x-auto pb-2">
          <TemplateCard
            title="CSV Template"
            sizeText="CSV • 100 KB"
            onView={() => alert("Viewing template...")}
            onDownload={() => alert("Downloading template...")}
          />
          <TemplateCard
            title="Filled CSV Example"
            sizeText="CSV • 100 KB"
            onView={() => alert("Viewing example...")}
            onDownload={() => alert("Downloading example...")}
          />
        </div>
      </div>

      {/* Import File Section */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">Import File</h3>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
        />

        {/* Dropzone */}
        {!uploadedFile && (
          <div
            className="border-2 border-dashed border-[#e0e1fe] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer mb-4"
            onClick={triggerFileSelect}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-center mb-3">
              <Image
                width={50}
                height={50}
                src="/upload.png"
                alt="Upload"
              />
            </div>
            <span className="text-base font-semibold text-[#5c60f5]">Drop here or click to browse</span>
          </div>
        )}

        {/* Uploaded File */}
        {uploadedFile && (
          <div>

            <div
              className="border-2 border-dashed border-[#e0e1fe] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer mb-4"
              onClick={triggerFileSelect}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-center mb-3">
                <Image
                  width={50}
                  height={50}
                  src="/upload.png"
                  alt="Upload"
                />
              </div>
              <span className="text-base font-semibold text-[#5c60f5]">Drop here or click to browse</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-pink-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#f3effe] text-[#5c60f5] flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5c60f5]">{uploadedFile.name}</p>
                  <p className="text-[10px] font-bold text-slate-400">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button onClick={onRemoveFile} className="p-2 text-[#ff4d79] hover:bg-pink-50 rounded-lg transition-colors cursor-pointer">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
