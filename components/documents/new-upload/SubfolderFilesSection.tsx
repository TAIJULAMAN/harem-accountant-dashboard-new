import React from "react";
import { Trash2, Download, FolderInput, List, Grid } from "lucide-react";
import SubfolderFilesGrid from "./SubfolderFilesGrid";
import SubfolderFilesList from "./SubfolderFilesList";
import { FileItem } from "./data";

interface SubfolderFilesSectionProps {
  subfolderFiles: FileItem[];
  selectedFileIds: string[];
  handleHeaderCheckboxClick: () => void;
  handleDeleteSelectedFiles: () => void;
  handleDownloadSelectedFiles: () => void;
  handleMoveSelectedFiles: () => void;
  isGridView: boolean;
  setIsGridView: (val: boolean) => void;
  handleToggleFileSelection: (id: string) => void;
  activeMenu: { id: string; type: "folder" | "file" } | null;
  setActiveMenu: (menu: { id: string; type: "folder" | "file" } | null) => void;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  handleRenameClick: (id: string, type: "folder" | "file", name: string) => void;
  handleMockDownload: (name: string, type: "folder" | "file") => void;
  handleActionNotify: (action: string, name: string) => void;
  handleDeleteClick: (id: string, type: "folder" | "file") => void;
}

export default function SubfolderFilesSection({
  subfolderFiles,
  selectedFileIds,
  handleHeaderCheckboxClick,
  handleDeleteSelectedFiles,
  handleDownloadSelectedFiles,
  handleMoveSelectedFiles,
  isGridView,
  setIsGridView,
  handleToggleFileSelection,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
}: SubfolderFilesSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm space-y-6 animate-in fade-in duration-200">
      {/* Selection / Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          {/* Header Checkbox */}
          <button
            onClick={handleHeaderCheckboxClick}
            className="text-[#5c59f0] hover:text-[#4744db] transition-colors cursor-pointer"
          >
            {selectedFileIds.length === subfolderFiles.length ? (
              <div className="w-5 h-5 bg-[#5c59f0] border border-[#5c59f0] rounded flex items-center justify-center text-white text-xs font-bold">
                ✓
              </div>
            ) : selectedFileIds.length > 0 ? (
              <div className="w-5 h-5 bg-[#ff5b5b] border border-[#ff5b5b] rounded flex items-center justify-center text-white text-[16px] font-extrabold leading-none">
                -
              </div>
            ) : (
              <div className="w-5 h-5 border-2 border-slate-300 rounded bg-white hover:border-[#5c59f0]" />
            )}
          </button>
          <span className="text-sm font-bold text-slate-800">
            {selectedFileIds.length === subfolderFiles.length
              ? "Unselect All Salons"
              : selectedFileIds.length > 0
                ? "Select All Files"
                : "Files"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Selection Actions */}
          {selectedFileIds.length > 0 && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
              <button
                onClick={handleDeleteSelectedFiles}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#f43f5e] text-xs font-bold rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
              <button
                onClick={handleDownloadSelectedFiles}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#5c59f0] text-xs font-bold rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <Download size={14} />
                <span>Download</span>
              </button>
              <button
                onClick={handleMoveSelectedFiles}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-xl transition-all active:scale-95 cursor-pointer border border-slate-200"
              >
                <FolderInput size={14} />
                <span>Move</span>
              </button>
            </div>
          )}

          {/* Layout Toggle */}
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
      </div>

      {/* Files Display */}
      {isGridView ? (
        <SubfolderFilesGrid
          files={subfolderFiles}
          selectedFileIds={selectedFileIds}
          handleToggleFileSelection={handleToggleFileSelection}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
        />
      ) : (
        <SubfolderFilesList
          files={subfolderFiles}
          selectedFileIds={selectedFileIds}
          handleToggleFileSelection={handleToggleFileSelection}
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
