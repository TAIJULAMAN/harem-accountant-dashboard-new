import React from "react";
import { FileText, Eye, Download } from "lucide-react";

interface TemplateCardProps {
  title: string;
  sizeText: string;
  onView: () => void;
  onDownload: () => void;
}

export default function TemplateCard({ title, sizeText, onView, onDownload }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center justify-center w-80 min-w-[16rem]">
      <div className="h-12 w-12 rounded-xl bg-[#f3effe] text-[#5c60f5] flex items-center justify-center mb-4">
        <FileText size={24} />
      </div>
      <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
      <span className="text-[10px] font-bold text-slate-400 mb-4">{sizeText}</span>

      <div className="flex items-center gap-2">
        <button 
          onClick={onView} 
          className="h-8 w-10 rounded-lg bg-[#f3effe] text-[#5c60f5] flex items-center justify-center hover:bg-[#e0e1fe] transition-colors cursor-pointer"
        >
          <Eye size={14} />
        </button>
        <button 
          onClick={onDownload} 
          className="h-8 w-10 rounded-lg bg-[#f8fafc] text-slate-500 border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <Download size={14} />
        </button>
      </div>
    </div>
  );
}
