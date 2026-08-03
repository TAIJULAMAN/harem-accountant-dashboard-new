import React from "react";
import { X } from "lucide-react";
import { ExtractedSalary } from "../../salaries/newUpload/data";
import DocumentViewerControls from "../DocumentViewerControls";
import DocumentPreview from "../DocumentPreview";
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
}: ReviewPacketModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-50/50 rounded-[32px] border border-slate-100 w-full max-w-6xl h-[90vh] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
        {/* Document Viewer */}
        <div className="w-full md:w-[50%] flex flex-col border-r border-slate-100 bg-[#f8fafc] h-full">
          <DocumentViewerControls
            docPage={docPage}
            setDocPage={setDocPage}
            zoom={zoom}
            setZoom={setZoom}
          />

          {/* Document Container */}
          <DocumentPreview
            zoom={zoom}
            docPage={docPage}
            editingPacket={editingPacket}
          />
        </div>

        {/* Form details */}
        <div className="w-full md:w-[50%] flex flex-col bg-[#f8fafc] h-full">
          <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-100 bg-white">
            <span className="font-bold text-slate-800 text-sm">
              Review and Edit Packet
            </span>
            <button
              type="button"
              onClick={() => setEditingPacket(null)}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            <EmployeeInformationCard
              editingPacket={editingPacket}
              setEditingPacket={(p) => setEditingPacket(p)}
            />
            <PayPeriodCard
              editingPacket={editingPacket}
              setEditingPacket={(p) => setEditingPacket(p)}
            />
            <PaymentReasonCard
              editingPacket={editingPacket}
              setEditingPacket={(p) => setEditingPacket(p)}
            />
            <FinancialDataCard
              editingPacket={editingPacket}
              setEditingPacket={(p) => setEditingPacket(p)}
            />
          </div>

          {/* Action Buttons Footer */}
          <div className="h-16 shrink-0 flex items-center justify-between px-6 border-t border-slate-100 bg-white">
            <button
              type="button"
              onClick={() => setEditingPacket(null)}
              className="border border-[#5c60f5] text-[#5c60f5] bg-white rounded-xl text-xs font-bold px-5 py-2.5 transition-all hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleReextract}
                disabled={isReextracting}
                className="bg-[#eef2ff] text-[#5c60f5] hover:bg-[#e0e7ff] rounded-xl text-xs font-bold px-5 py-2.5 transition-all cursor-pointer flex items-center gap-1.5 border border-[#5c60f5]/10"
              >
                {isReextracting ? (
                  <>
                    <svg
                      className="animate-spin h-3.5 w-3.5 text-brand"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Extracting...</span>
                  </>
                ) : (
                  <span>Re-extract Data</span>
                )}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
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
                }}
                className="bg-[#10b981] hover:bg-[#059669] text-white rounded-xl text-xs font-bold px-5 py-2.5 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
              >
                Save and Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
