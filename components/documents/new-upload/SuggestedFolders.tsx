"use client";

import React from "react";
import { MoreVertical, Grid, List } from "lucide-react";
import FolderDropdown from "./FolderDropdown";
import FoldersList from "./FoldersList";
import Image from "next/image";

export interface FolderItem {
  id: string;
  name: string;
  createdBy: string;
}

interface SuggestedFoldersProps {
  folders: FolderItem[];
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
  onFolderClick?: (folder: FolderItem) => void;
  isGridView?: boolean;
  setIsGridView?: (val: boolean) => void;
  showViewMore?: boolean;
}

export default function SuggestedFolders({
  folders,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
  onFolderClick,
  isGridView = true,
  setIsGridView,
  showViewMore = true,
}: SuggestedFoldersProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800">
          Suggested Folders
        </h2>
        <div className="flex items-center gap-3">
          {setIsGridView && (
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
          )}
          {showViewMore && (
            <button
              onClick={() => handleActionNotify("View More", "Suggested Folders")}
              className="text-[#5c59f0] border border-[#5c59f0]/20 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
            >
              View More
            </button>
          )}
        </div>
      </div>

      {!isGridView ? (
        <FoldersList
          folders={folders}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
          onFolderClick={onFolderClick}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => onFolderClick?.(folder)}
              className="bg-[#f8fafc] border border-slate-100/50 rounded-[20px] p-6 flex flex-col items-center relative group hover:shadow-sm hover:bg-slate-100/30 transition-all duration-200 cursor-pointer"
              ref={activeMenu?.id === folder.id ? dropdownRef : null}
            >
              {/* White container box for folder icon */}
              <div className="w-full bg-white rounded-2xl py-6 flex items-center justify-center border border-slate-100/50 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                <Image
                  src="/folder.svg"
                  alt="Folder Icon"
                  width={70}
                  height={56}
                  className="w-16 h-14 object-contain transition-transform group-hover:scale-105 duration-200"
                />
              </div>

              <div className="w-full mt-4 flex justify-between items-start relative px-1">
                <div className="flex flex-col truncate w-[80%] text-left">
                  <span className="text-sm font-semibold text-slate-800 truncate">
                    {folder.name}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 mt-1">
                    Created by {folder.createdBy}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(
                      activeMenu?.id === folder.id
                        ? null
                        : { id: folder.id, type: "folder" },
                    );
                  }}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <MoreVertical size={16} />
                </button>
              </div>

              {/* Dropdown Menu Component */}
              {activeMenu?.id === folder.id && activeMenu?.type === "folder" && (
                <FolderDropdown
                  onRename={() =>
                    handleRenameClick(folder.id, "folder", folder.name)
                  }
                  onDownload={() => handleMockDownload(folder.name, "folder")}
                  onMove={() => handleActionNotify("Move", folder.name)}
                  onManagePermission={() =>
                    handleActionNotify("Manage Permission", folder.name)
                  }
                  onDelete={() => handleDeleteClick(folder.id, "folder")}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
