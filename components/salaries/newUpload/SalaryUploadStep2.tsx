import React, { useState } from "react";
import { Check } from "lucide-react";
import { ExtractedSalary } from "./data";
import ExtractStatusBanner from "./ExtractStatusBanner";
import ViewModeToggle from "./ViewModeToggle";
import SalaryGrid from "./SalaryGrid";
import SalaryList from "./SalaryList";
import ReviewPacketModal from "../../modal/ReviewPacketModal/ReviewPacketModal";
import { useReextract } from "./useReextract";

interface SalaryUploadStep2Props {
  selectedSalon: string;
  salaries: ExtractedSalary[];
  setSalaries: React.Dispatch<React.SetStateAction<ExtractedSalary[]>>;
  setStep: (step: 1 | 2 | 3 | 4) => void;
}

export default function SalaryUploadStep2({
  salaries,
  setSalaries,
  setStep,
}: SalaryUploadStep2Props) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [editingPacket, setEditingPacket] = useState<ExtractedSalary | null>(
    null,
  );
  const [docPage, setDocPage] = useState(3);
  const [zoom, setZoom] = useState(120);

  const { isReextracting, handleReextract } = useReextract(
    editingPacket,
    setEditingPacket,
  );

  const totalCount = salaries.length;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === salaries.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(salaries.map((s) => s.id));
    }
  };

  const approveSelected = () => {
    setSalaries((prev) =>
      prev.map((s) =>
        selectedIds.includes(s.id) ? { ...s, status: "Approved" } : s,
      ),
    );
    setSelectedIds([]);
  };

  const approvePacket = (id: string) => {
    setSalaries((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Approved" } : s)),
    );
  };

  return (
    <div className="space-y-6 bg-white rounded-xl shadow-sm p-5">
      <ExtractStatusBanner totalCount={totalCount} salaries={salaries} />

      {/* 2. List/Grid */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-slate-800 text-base">
          Extracted Salary Packets ({totalCount})
        </h4>

        <div className="flex items-center gap-4">
          {/* Bulk Approve button (only visible when 1 or more are selected) */}
          {selectedIds.length > 0 && (
            <button
              onClick={approveSelected}
              className="bg-emerald-50 text-emerald-600 hover:bg-[#c3fae8]/80 text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm border border-emerald-100"
            >
              <Check size={14} />
              <span>Approve Selected ({selectedIds.length})</span>
            </button>
          )}

          {/* Selecte All Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                checked={
                  selectedIds.length === salaries.length && salaries.length > 0
                }
                onChange={toggleSelectAll}
                className="sr-only"
              />
              <div
                className={`h-4.5 w-4.5 rounded-[5px] flex items-center justify-center transition-all ${
                  selectedIds.length === salaries.length && salaries.length > 0
                    ? "bg-brand text-white border-brand"
                    : "border border-slate-300 bg-white hover:border-slate-400"
                }`}
              >
                {selectedIds.length === salaries.length &&
                  salaries.length > 0 && (
                    <Check size={10} strokeWidth={4} className="text-white" />
                  )}
              </div>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Selecte All
            </span>
          </label>
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>
      {viewMode === "grid" ? (
        <SalaryGrid
          salaries={salaries}
          selectedIds={selectedIds}
          toggleSelect={toggleSelect}
          setEditingPacket={setEditingPacket}
          approvePacket={approvePacket}
        />
      ) : (
        <SalaryList
          salaries={salaries}
          selectedIds={selectedIds}
          toggleSelect={toggleSelect}
          setEditingPacket={setEditingPacket}
          approvePacket={approvePacket}
        />
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <button
          onClick={() => setStep(1)}
          className="flex items-center justify-center rounded-xl bg-[#5c60f5]/10 text-[#5c60f5] text-xs font-bold px-5 py-3.5 hover:bg-[#5c60f5]/20 transition-all cursor-pointer"
        >
          Upload Different File
        </button>

        <button
          onClick={() => setStep(3)}
          className="flex items-center justify-center rounded-xl bg-brand text-white text-xs font-bold px-6 py-3.5 hover:bg-brand-dark transition-all shadow-md shadow-brand/20 cursor-pointer"
        >
          Continue to Finalize
        </button>
      </div>

      {/* Review Details Modal */}
      {editingPacket && (
        <ReviewPacketModal
          editingPacket={editingPacket}
          setEditingPacket={setEditingPacket}
          docPage={docPage}
          setDocPage={setDocPage}
          zoom={zoom}
          setZoom={setZoom}
          handleReextract={handleReextract}
          isReextracting={isReextracting}
          setSalaries={setSalaries}
        />
      )}
    </div>
  );
}
