import React from "react";
import { MoreVertical } from "lucide-react";
import FileDropdown from "./FileDropdown";
import { FileItem } from "./data";

interface SubfolderFilesListProps {
  files: FileItem[];
  selectedFileIds: string[];
  handleToggleFileSelection: (id: string) => void;
  activeMenu: { id: string; type: "folder" | "file" } | null;
  setActiveMenu: (menu: { id: string; type: "folder" | "file" } | null) => void;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  handleRenameClick: (id: string, type: "folder" | "file", name: string) => void;
  handleMockDownload: (name: string, type: "folder" | "file") => void;
  handleActionNotify: (action: string, name: string) => void;
  handleDeleteClick: (id: string, type: "folder" | "file") => void;
}

export default function SubfolderFilesList({
  files,
  selectedFileIds,
  handleToggleFileSelection,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
}: SubfolderFilesListProps) {
  return (
    <div className="space-y-3">
      {files.map((file) => (
        <div
          key={file.id}
          onClick={() => handleToggleFileSelection(file.id)}
          className={`bg-white border rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-200 cursor-pointer ${
            selectedFileIds.includes(file.id)
              ? "border-[#5c59f0] bg-[#5c59f0]/5"
              : "border-slate-100"
          }`}
        >
          <div className="flex items-center gap-4 flex-1">
            {/* Checkbox (visible if selection mode active or hovered) */}
            <div
              className={`transition-opacity duration-200 ${
                selectedFileIds.length > 0 || selectedFileIds.includes(file.id)
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={selectedFileIds.includes(file.id)}
                onChange={() => handleToggleFileSelection(file.id)}
                className="w-5 h-5 rounded border-slate-300 text-[#5c59f0] focus:ring-[#5c59f0] cursor-pointer mr-2"
              />
            </div>

            {/* File Icon */}
            <div className="relative w-12 h-12 bg-[#fff1f2] border border-rose-100 rounded-xl flex flex-col items-center justify-center shadow-sm">
              <span className="text-[18px]">📄</span>
              <span className="absolute bottom-1 text-[7px] font-bold bg-[#ff4a4a] text-white px-1 rounded uppercase scale-90">
                PDF
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-slate-800">
                {file.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 mt-1">
                PDF • 20 MB • Created by {file.createdBy}
              </span>
            </div>
          </div>

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(
                  activeMenu?.id === file.id
                    ? null
                    : { id: file.id, type: "file" },
                );
              }}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-all cursor-pointer inline-block"
            >
              <MoreVertical size={16} />
            </button>

            {activeMenu?.id === file.id && activeMenu?.type === "file" && (
              <div ref={dropdownRef} className="absolute right-0 z-30">
                <FileDropdown
                  onRename={() => handleRenameClick(file.id, "file", file.name)}
                  onDownload={() => handleMockDownload(file.name, "file")}
                  onMove={() => handleActionNotify("Move", file.name)}
                  onPublish={() =>
                    handleActionNotify("Publish social media post", file.name)
                  }
                  onManagePermission={() =>
                    handleActionNotify("Manage Permission", file.name)
                  }
                  onDelete={() => handleDeleteClick(file.id, "file")}
                  alignLeft={true}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
