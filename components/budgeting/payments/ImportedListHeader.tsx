"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface Props {
  dataLength: number;
  selectedCount: number;
  onMassReapproval: () => void;
  onMassApproval: () => void;
}

export default function ImportedListHeader({
  dataLength,
  selectedCount,
  onMassReapproval,
  onMassApproval,
}: Props) {
  const [activeModal, setActiveModal] = useState<"reapproval" | "approval" | null>(null);

  const handleConfirm = () => {
    if (activeModal === "reapproval") {
      onMassReapproval();
    } else if (activeModal === "approval") {
      onMassApproval();
    }
    setActiveModal(null);
  };

  return (
    <>
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">
          Imported List{" "}
          <span className="text-slate-400 font-medium ml-2">
            ({dataLength})
          </span>
        </h3>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveModal("reapproval")}
            disabled={selectedCount === 0}
            className="px-4 py-2 rounded-lg bg-pink-50 text-[#ff4d79] text-xs font-bold hover:bg-pink-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mass Reapproval
          </button>
          <button
            onClick={() => setActiveModal("approval")}
            disabled={selectedCount === 0}
            className="px-4 py-2 rounded-lg bg-[#00d6c9] text-white text-xs font-bold shadow-sm hover:bg-[#00bfae] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mass Approval
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">
                Confirm {activeModal === "reapproval" ? "Mass Reapproval" : "Mass Approval"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Are you sure you want to {activeModal === "reapproval" ? "reapprove" : "approve"}{" "}
                <span className="font-bold text-slate-800">{selectedCount}</span> selected item{selectedCount !== 1 ? "s" : ""}? 
                This action cannot be undone.
              </p>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className={`px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-sm transition-colors ${
                    activeModal === "reapproval"
                      ? "bg-[#ff4d79] hover:bg-[#ff3366]"
                      : "bg-[#00d6c9] hover:bg-[#00bfae]"
                  }`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
