import React from "react";
import { UploadCloud } from "lucide-react";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import SubmitButton from "@/components/customComponent/SubmitButton";

interface UploadFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadClick: () => void;
}

export default function UploadFilesModal({
  isOpen,
  onClose,
  onUploadClick,
}: UploadFilesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Upload Files</h3>
          <CustomCloseButton
            onClick={onClose}
            className="p-1 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
          />
        </div>

        <div
          onClick={onUploadClick}
          className="border-2 border-dashed border-[#5c59f0]/30 hover:border-[#5c59f0] rounded-[24px] bg-[#f8fafc] hover:bg-[#eef2ff]/30 py-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-200 group"
        >
          <div className="p-4 bg-[#eef2ff] text-[#5c59f0] rounded-2xl group-hover:scale-105 transition-transform duration-200">
            <UploadCloud size={32} strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold text-[#5c59f0]">
            Drop here or click to browse
          </span>
        </div>

        <div className="flex items-center justify-end pt-6 mt-6 border-t border-slate-100">
          <SubmitButton
            onClick={onClose}
            className="px-6 py-2.5 bg-[#5c59f0] hover:bg-[#4744db] text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer rounded-xl"
          >
            Save
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
