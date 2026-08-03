"use client";

import React, { useState, useEffect } from "react";
import { X, FileText, FileSpreadsheet, FileJson, Check, Loader2, Download } from "lucide-react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ExportModal({ isOpen, onClose, title }: ExportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "csv" | "json">("pdf");
  const [fileName, setFileName] = useState(() => {
    const sanitizedTitle = title.toLowerCase().replace(/\s+/g, "-");
    return `${sanitizedTitle}-${new Date().getFullYear()}`;
  });
  const [exportState, setExportState] = useState<"idle" | "loading" | "success">("idle");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExport = (e: React.FormEvent) => {
    e.preventDefault();
    setExportState("loading");

    // Simulate export progress
    setTimeout(() => {
      setExportState("success");
      // Close modal after success animation
      setTimeout(() => {
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop backdrop-blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl p-6.5 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <h3 className="text-base.5 font-bold text-slate-800 tracking-tight">
            Export Chart Data
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            {title}
          </p>
        </div>

        {exportState === "idle" ? (
          <form onSubmit={handleExport} className="space-y-5">
            {/* File Name Input */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                File Name
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none transition-colors"
                placeholder="Enter file name"
              />
            </div>

            {/* Format Selection Cards */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Choose Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                {/* PDF Option */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat("pdf")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all cursor-pointer
                    ${selectedFormat === "pdf" 
                      ? "border-brand bg-brand/5 text-brand" 
                      : "border-slate-100 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600"}
                  `}
                >
                  <FileText size={20} />
                  <span className="text-[11px] font-bold">PDF Document</span>
                </button>

                {/* CSV Option */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat("csv")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all cursor-pointer
                    ${selectedFormat === "csv" 
                      ? "border-brand bg-brand/5 text-brand" 
                      : "border-slate-100 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600"}
                  `}
                >
                  <FileSpreadsheet size={20} />
                  <span className="text-[11px] font-bold">CSV Sheet</span>
                </button>

                {/* JSON Option */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat("json")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all cursor-pointer
                    ${selectedFormat === "json" 
                      ? "border-brand bg-brand/5 text-brand" 
                      : "border-slate-100 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600"}
                  `}
                >
                  <FileJson size={20} />
                  <span className="text-[11px] font-bold">JSON Data</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-brand hover:bg-brand-dark text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download size={14} />
                <span>Export Now</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {exportState === "loading" ? (
              <>
                <Loader2 size={36} className="text-brand animate-spin" />
                <h4 className="text-sm font-bold text-slate-800 mt-4">Generating file...</h4>
                <p className="text-[11px] text-slate-400 mt-1 font-medium">Please do not close this window</p>
              </>
            ) : (
              <>
                <div className="h-10 w-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <Check size={20} />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mt-4">Export Complete!</h4>
                <p className="text-[11px] text-slate-400 mt-1 font-medium">Your download has started.</p>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
