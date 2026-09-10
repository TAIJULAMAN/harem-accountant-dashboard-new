"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, RotateCw } from "lucide-react";
import { ExtractedSalary } from "../../salaries/newUpload/data";
import dynamic from "next/dynamic";
import DocumentViewerControls from "../DocumentViewerControls";

const DocumentPreview = dynamic(() => import("../DocumentPreview"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-slate-200/60 min-h-[400px]">
      <div className="flex flex-col items-center gap-2 text-slate-500">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-semibold">Loading PDF Viewer...</span>
      </div>
    </div>
  ),
});
import EmployeeInformationCard from "./EmployeeInformationCard";
import PayPeriodCard from "./PayPeriodCard";
import PaymentReasonCard from "./PaymentReasonCard";
import FinancialDataCard from "./FinancialDataCard";

interface ReviewPacketModalProps {
  editingPacket: ExtractedSalary;
  setEditingPacket: (packet: ExtractedSalary | null) => void;
  docPage: number;
  setDocPage: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  handleReextract: () => void;
  isReextracting: boolean;
  setSalaries: React.Dispatch<React.SetStateAction<ExtractedSalary[]>>;
  pdfUrl?: string | null;
  onUploadNewPdf?: (file: File) => void;
}

export default function ReviewPacketModal({
  editingPacket,
  setEditingPacket,
  docPage,
  setDocPage,
  zoom,
  setZoom,
  handleReextract,
  isReextracting,
  setSalaries,
  pdfUrl,
  onUploadNewPdf,
}: ReviewPacketModalProps) {
  const [totalPages, setTotalPages] = React.useState(9);

  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEditingPacket(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setEditingPacket]);

  const handleSaveAndApprove = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (editingPacket) {
      setSalaries((prev) =>
        prev.map((item) =>
          item.id === editingPacket.id
            ? { ...editingPacket, status: "Approved" }
            : item,
        ),
      );
      setEditingPacket(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setEditingPacket(null)}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 w-full max-w-[1340px] h-[94vh] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Left Column: Document Viewer */}
        <div className="w-full md:w-[52%] lg:w-[55%] flex flex-col border-r border-slate-200/80 bg-slate-100/70 h-full">
          <DocumentViewerControls
            docPage={docPage}
            setDocPage={setDocPage}
            zoom={zoom}
            setZoom={setZoom}
            totalPages={totalPages}
          />

          {/* Document Container */}
          <DocumentPreview
            zoom={zoom}
            docPage={docPage}
            editingPacket={editingPacket}
            pdfUrl={pdfUrl}
            onPageCountChange={setTotalPages}
            onUploadNewPdf={onUploadNewPdf}
          />
        </div>

        {/* Right Column: Review & Edit Form */}
        <div className="w-full md:w-[48%] lg:w-[45%] flex flex-col bg-white h-full">
          {/* Header */}
          <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-200/80 bg-white">
            <h3 className="font-bold text-slate-800 text-[15px] tracking-tight">
              Review & Edit Packet
            </h3>
            <button
              type="button"
              onClick={() => setEditingPacket(null)}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4 bg-slate-50/40">
            <EmployeeInformationCard
              editingPacket={editingPacket}
              setEditingPacket={setEditingPacket}
            />
            <PayPeriodCard
              editingPacket={editingPacket}
              setEditingPacket={setEditingPacket}
            />
            <PaymentReasonCard
              editingPacket={editingPacket}
              setEditingPacket={setEditingPacket}
            />
            <FinancialDataCard
              editingPacket={editingPacket}
              setEditingPacket={setEditingPacket}
            />
          </div>

          {/* Action Buttons Footer */}
          <div className="shrink-0 p-5 border-t border-slate-200/80 bg-white space-y-2.5">
            {/* Primary Action: Save & Approve */}
            <button
              type="button"
              onClick={handleSaveAndApprove}
              className="w-full py-3 px-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <CheckCircle2 size={16} />
              <span>Save & Approve</span>
            </button>

            {/* Secondary Action: Re-extract Data */}
            <button
              type="button"
              onClick={handleReextract}
              disabled={isReextracting}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
            >
              <RotateCw
                size={15}
                className={isReextracting ? "animate-spin" : ""}
              />
              <span>
                {isReextracting ? "Extracting Data..." : "Re-extract Data"}
              </span>
            </button>

            {/* Tertiary Action: Close */}
            <button
              type="button"
              onClick={() => setEditingPacket(null)}
              className="w-full py-2 px-4 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
