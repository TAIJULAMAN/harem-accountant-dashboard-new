import React, { useState } from "react";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import CustomSearch from "@/components/customComponent/CustomSearch";
import Image from "next/image";

interface MoveFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetName: string;
  onSave: () => void;
}

export default function MoveFolderModal({
  isOpen,
  onClose,
  onSave,
}: MoveFolderModalProps) {
  const [moveSearchQuery, setMoveSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col gap-6 text-left">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Move Folder</h3>
          <CustomCloseButton
            onClick={onClose}
            className="p-1 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
          />
        </div>

        <CustomSearch
          value={moveSearchQuery}
          onChange={setMoveSearchQuery}
          placeholder="Search a folder"
        />

        <div className="space-y-4 flex-1">
          <h4 className="text-xs font-semibold text-slate-600">Suggestions</h4>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {["Employess", "Employess", "Employess", "Employess"]
              .filter((name) =>
                name.toLowerCase().includes(moveSearchQuery.toLowerCase()),
              )
              .map((folderName, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2 px-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
                >
                  <div className="p-2.5 bg-[#eef2ff] text-[#5c59f0] rounded-xl flex items-center justify-center">
                    <Image
                      src="/folder.svg"
                      alt="Folder Icon"
                      width={20}
                      height={16}
                      className="w-5 h-4 object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-slate-800 leading-tight">
                      {folderName}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                      Created by Maria Rodriguez
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-end pt-4 mt-2 border-t border-slate-100">
          <button
            onClick={() => {
              setMoveSearchQuery("");
              onSave();
            }}
            className="px-6 py-2.5 bg-[#5c59f0] hover:bg-[#4744db] text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
