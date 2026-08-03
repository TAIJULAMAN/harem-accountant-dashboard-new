"use client";

import React from "react";
import { MoreVertical } from "lucide-react";
import FolderDropdown from "./FolderDropdown";
import { FolderItem } from "./SuggestedFolders";
import Image from "next/image";

interface FoldersListProps {
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
}

export default function FoldersList({
  folders,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
  onFolderClick,
}: FoldersListProps) {
  return (
    <div className="bg-[#f8fafc] border border-slate-100 rounded-[20px] overflow-hidden shadow-sm animate-in fade-in duration-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-200/60">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Folder Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Created By
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {folders.map((folder) => (
              <tr
                key={folder.id}
                onClick={() => onFolderClick?.(folder)}
                className="hover:bg-slate-50/50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#eef2ff] text-[#5c59f0] rounded-lg">
                      <Image
                        src="/folder.svg"
                        alt="Folder"
                        width={18}
                        height={14}
                        className="w-[18px] h-[14px] object-contain"
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      {folder.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                  Folder
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-500">
                  {folder.createdBy}
                </td>
                <td
                  className="px-6 py-4 text-right relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(
                        activeMenu?.id === folder.id
                          ? null
                          : { id: folder.id, type: "folder" },
                      );
                    }}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-all cursor-pointer inline-block"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {activeMenu?.id === folder.id && activeMenu?.type === "folder" && (
                    <div ref={dropdownRef} className="absolute right-0 z-30">
                      <FolderDropdown
                        onRename={() =>
                          handleRenameClick(folder.id, "folder", folder.name)
                        }
                        onDownload={() =>
                          handleMockDownload(folder.name, "folder")
                        }
                        onMove={() => handleActionNotify("Move", folder.name)}
                        onManagePermission={() =>
                          handleActionNotify("Manage Permission", folder.name)
                        }
                        onDelete={() => handleDeleteClick(folder.id, "folder")}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
