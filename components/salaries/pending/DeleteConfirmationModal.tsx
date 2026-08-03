import React from "react";

interface DeleteConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmationModal({
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 animate-in fade-in zoom-in-95 duration-200">
      <h2 className="text-lg font-bold text-slate-800 mb-2">
        Are you sure you want to delete this record?
      </h2>
      <p className="text-[13px] font-medium text-slate-500 mb-8">
        This action cannot be undone.
      </p>

      <div className="flex items-center justify-end gap-3">
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-slate-50 text-slate-600 text-[13px] font-bold hover:bg-slate-100 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-5 py-2.5 rounded-xl bg-red-50 text-red-500 text-[13px] font-bold hover:bg-red-100 transition-colors"
        >
          Delete Record
        </button>
      </div>
    </div>
  );
}
