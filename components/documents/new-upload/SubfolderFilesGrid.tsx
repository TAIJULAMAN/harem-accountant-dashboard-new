import React from "react";
import { MoreVertical } from "lucide-react";
import FileDropdown from "./FileDropdown";
import { FileItem } from "./data";

interface SubfolderFilesGridProps {
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

export default function SubfolderFilesGrid({
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
}: SubfolderFilesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {files.map((file) => (
        <div
          key={file.id}
          onClick={() => handleToggleFileSelection(file.id)}
          className={`bg-[#f8fafc] border rounded-[24px] p-5 flex flex-col items-center relative group hover:shadow-md transition-all duration-200 cursor-pointer ${
            selectedFileIds.includes(file.id)
              ? "border-[#5c59f0] ring-1 ring-[#5c59f0]/20 bg-[#5c59f0]/5"
              : "border-slate-100/50"
          }`}
        >
          {/* Checkbox (visible on hover or when selected) */}
          <div
            className={`absolute top-4 left-4 z-10 transition-opacity duration-200 ${
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
              className="w-4 h-4 rounded border-slate-300 text-[#5c59f0] focus:ring-[#5c59f0] cursor-pointer"
            />
          </div>

          {/* Inner White Card for Preview */}
          <div className="w-full bg-white rounded-2xl py-8 flex items-center justify-center border border-slate-100/50 shadow-[0_2px_8px_rgba(0,0,0,0.015)] overflow-hidden">
            <div className="relative w-16 h-20 flex flex-col items-center justify-between border border-rose-100 bg-[#fff5f5] rounded-lg p-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
              <span className="text-[28px] text-rose-500">📄</span>
              <span className="text-[9px] font-bold bg-[#ff4a4a] text-white px-1.5 py-0.5 rounded uppercase tracking-wide">
                PDF
              </span>
            </div>
          </div>

          <div className="w-full mt-4 flex justify-between items-start relative px-1">
            <div className="flex flex-col truncate w-[80%] text-left">
              <span className="text-sm font-bold text-slate-800 truncate">
                {file.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 mt-1">
                PDF • 20 MB • Created by {file.createdBy}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(
                  activeMenu?.id === file.id
                    ? null
                    : { id: file.id, type: "file" },
                );
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <MoreVertical size={16} />
            </button>
          </div>

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
      ))}
    </div>
  );
}
