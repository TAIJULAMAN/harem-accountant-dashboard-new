"use client";

import React from "react";
import { MoreVertical } from "lucide-react";
import FileDropdown from "./FileDropdown";
import { FileItem } from "./SuggestedFiles";
import Image from "next/image";

interface FilesGridProps {
  files: FileItem[];
  activeMenu: { id: string; type: "folder" | "file" } | null;
  setActiveMenu: (menu: { id: string; type: "folder" | "file" } | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  handleRenameClick: (
    id: string,
    type: "folder" | "file",
    currentName: string,
  ) => void;
  handleMockDownload: (name: string, type: "folder" | "file") => void;
  handleActionNotify: (action: string, itemName: string) => void;
  handleDeleteClick: (id: string, type: "folder" | "file") => void;
}

export default function FilesGrid({
  files,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
}: FilesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {files.map((file) => (
        <div
          key={file.id}
          className="bg-[#f8fafc] border border-slate-100/50 rounded-[20px] p-6 flex flex-col items-center relative group hover:shadow-sm hover:bg-slate-100/30 transition-all duration-200"
          ref={activeMenu?.id === file.id ? dropdownRef : null}
        >
          {/* White container box for file image */}
          <div className="w-full bg-white rounded-2xl py-6 flex items-center justify-center border border-slate-100/50 shadow-[0_2px_8px_rgba(0,0,0,0.015)] overflow-hidden">
            <Image
              src="/fileImage.png"
              alt="File Preview"
              width={140}
              height={110}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Card footer details - Left aligned */}
          <div className="w-full mt-4 flex justify-between items-start relative px-1">
            <div className="flex flex-col truncate w-[80%] text-left">
              <h3
                className="text-sm font-semibold text-slate-800 truncate"
                title={file.name}
              >
                {file.name}
              </h3>
              <span className="text-[11px] font-semibold text-slate-400 mt-1">
                {file.type} • Created by {file.createdBy}
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

          {/* Dropdown Menu */}
          {activeMenu?.id === file.id && activeMenu?.type === "file" && (
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
            />
          )}
        </div>
      ))}
    </div>
  );
}
