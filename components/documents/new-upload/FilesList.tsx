"use client";

import React from "react";
import { MoreVertical, FileText } from "lucide-react";
import FileDropdown from "./FileDropdown";
import { FileItem } from "./SuggestedFiles";

interface FilesListProps {
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

export default function FilesList({
  files,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
}: FilesListProps) {
  return (
    <div className="bg-[#f8fafc] border border-slate-100 rounded-[20px] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-200/60">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                File Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Uploaded By
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {files.map((file) => (
              <tr
                key={file.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#e0e7ff] text-[#5c59f0] rounded-lg">
                      <FileText size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      {file.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                  {file.type}
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-500">
                  {file.createdBy}
                </td>
                <td className="px-6 py-4 text-right relative">
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

                  {/* List view dropdown */}
                  {activeMenu?.id === file.id && activeMenu?.type === "file" && (
                    <FileDropdown
                      onRename={() =>
                        handleRenameClick(file.id, "file", file.name)
                      }
                      onDownload={() => handleMockDownload(file.name, "file")}
                      onMove={() => handleActionNotify("Move", file.name)}
                      onPublish={() =>
                        handleActionNotify(
                          "Publish social media post",
                          file.name,
                        )
                      }
                      onManagePermission={() =>
                        handleActionNotify("Manage Permission", file.name)
                      }
                      onDelete={() => handleDeleteClick(file.id, "file")}
                      alignLeft={true}
                    />
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
