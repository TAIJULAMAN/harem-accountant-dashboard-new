"use client";

import React from "react";
import { Grid, List } from "lucide-react";
import FilesGrid from "./FilesGrid";
import FilesList from "./FilesList";

export interface FileItem {
  id: string;
  name: string;
  type: string;
  createdBy: string;
}

interface SuggestedFilesProps {
  files: FileItem[];
  activeMenu: { id: string; type: "folder" | "file" } | null;
  setActiveMenu: (menu: { id: string; type: "folder" | "file" } | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  isGridView: boolean;
  setIsGridView: (val: boolean) => void;
  handleRenameClick: (
    id: string,
    type: "folder" | "file",
    currentName: string,
  ) => void;
  handleMockDownload: (name: string, type: "folder" | "file") => void;
  handleActionNotify: (action: string, itemName: string) => void;
  handleDeleteClick: (id: string, type: "folder" | "file") => void;
}



export default function SuggestedFiles({
  files,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  isGridView,
  setIsGridView,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
}: SuggestedFilesProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-800">
          Suggested Files
        </h2>
        <div className="flex border border-slate-100 rounded-xl overflow-hidden bg-white p-1">
          <button
            onClick={() => setIsGridView(false)}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              !isGridView
                ? "bg-slate-100 text-slate-700"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <List size={16} />
          </button>
          <button
            onClick={() => setIsGridView(true)}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isGridView
                ? "bg-slate-100 text-slate-700"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <Grid size={16} />
          </button>
        </div>
      </div>

      {isGridView ? (
        <FilesGrid
          files={files}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
        />
      ) : (
        <FilesList
          files={files}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </div>
  );
}
