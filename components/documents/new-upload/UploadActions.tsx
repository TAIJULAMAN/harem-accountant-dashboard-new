"use client";

import React from "react";
import { Upload, Plus } from "lucide-react";

interface UploadActionsProps {
  onUploadClick: () => void;
  onCreateFolderClick: () => void;
}

export default function UploadActions({
  onUploadClick,
  onCreateFolderClick,
}: UploadActionsProps) {
  return (
    <div className="flex gap-4">
      {/* Upload Button */}
      <button
        onClick={onUploadClick}
        className="flex flex-col justify-between items-start bg-[#5c59f0] hover:bg-[#4744db] text-white w-60 h-32 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer p-6 group"
      >
        <Upload size={20} strokeWidth={2.5} />
        <span className="text-sm font-bold">Upload</span>
      </button>

      {/* Create Folder Button */}
      <button
        onClick={onCreateFolderClick}
        className="flex flex-col justify-between items-start bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#5c59f0] w-60 h-32 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer p-6 group"
      >
        <Plus size={20} strokeWidth={2.5} />
        <span className="text-sm font-bold">Create Folder</span>
      </button>
    </div>
  );
}
