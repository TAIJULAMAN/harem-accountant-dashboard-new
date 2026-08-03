import React from "react";
import { FileText, Trash2 } from "lucide-react";
import { UploadedFile } from "./useMockUpload";

interface UploadedFilesListProps {
  files: UploadedFile[];
  onRemoveFile: (index: number) => void;
  formatFileSize: (bytes: number) => string;
}

export default function UploadedFilesList({
  files,
  onRemoveFile,
  formatFileSize,
}: UploadedFilesListProps) {
  if (files.length === 0) return null;

  return (
    <div className="space-y-3.5">
      <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
        Uploaded Files ({files.length})
      </h5>

      <div className="space-y-2">
        {files.map((file, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow duration-150"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-4">
              <div className="h-9 w-9 shrink-0 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                <FileText size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700 truncate">
                    {file.name}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                    {file.status === "uploading"
                      ? `${file.progress}%`
                      : formatFileSize(file.size)}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-150 ${
                      file.status === "error"
                        ? "bg-rose-500"
                        : file.status === "completed"
                          ? "bg-emerald-500"
                          : "bg-brand"
                    }`}
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onRemoveFile(idx)}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
            >
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
