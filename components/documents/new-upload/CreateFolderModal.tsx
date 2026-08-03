import React from "react";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import CustomInput from "@/components/customComponent/CustomInput";
import SubmitButton from "@/components/customComponent/SubmitButton";

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  newFolderName: string;
  setNewFolderName: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function CreateFolderModal({
  isOpen,
  onClose,
  newFolderName,
  setNewFolderName,
  onSubmit,
}: CreateFolderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800">
            Create New Folder
          </h3>
          <CustomCloseButton onClick={onClose} className="p-1 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer relative top-0 right-0" />
        </div>
        <p className="text-xs text-slate-400 font-medium mb-6">
          Enter a name for the new folder.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <CustomInput
            label="Name *"
            value={newFolderName}
            onChange={setNewFolderName}
            placeholder="Enter name"
            required
          />

          <div className="flex items-center justify-end pt-2">
            <SubmitButton className="px-6 py-2.5 bg-[#5c59f0] hover:bg-[#4744db] text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer rounded-xl">
              Save
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
