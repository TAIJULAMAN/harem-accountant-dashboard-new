"use client";

import React, { useEffect } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { EmployeeNotice } from "./data";
import Image from "next/image";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";

interface NoticeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: EmployeeNotice | null;
}

export default function NoticeDetailsModal({
  isOpen,
  onClose,
  notice,
}: NoticeDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      <div className="relative w-full max-w-lg bg-white border border-slate-100 rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">
            Notice Details
          </h3>
          <CustomCloseButton
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Header Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              {notice.title}
            </h4>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Image
                  width={40}
                  height={40}
                  src={notice.recipient.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-xl object-cover bg-slate-100 ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-slate-700">
                    {notice.recipient.name}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    {notice.recipient.email}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-500 mb-1">
                  {notice.dateSent}
                </div>
                <div
                  className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                  ${notice.status === "Read" ? "bg-[#eafff5] text-[#22c55e]" : "bg-[#fffbf0] text-[#facc15]"}
                `}
                >
                  {notice.status}
                </div>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="text-sm text-slate-600 leading-relaxed font-medium">
            <p>
              Hi {notice.recipient.name.split(" ")[0]},<br />
              <br />
              Please review the attached document regarding the{" "}
              {notice.title.toLowerCase()}. It requires your attention by the
              end of the week.
              <br />
              <br />
              If you have any questions, feel free to reach out to the HR
              department.
            </p>
          </div>

          {/* Attachment */}
          <div>
            <div className="text-base font-semibold text-slate-800 mb-3">
              Attachments (1)
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                  <FileText size={16} />
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  {notice.title.toLowerCase().replace(/\s+/g, "_")}.pdf
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-400 hover:text-indigo-500 bg-white hover:bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-all cursor-pointer">
                  <Eye size={14} />
                </button>
                <button className="p-2 text-slate-400 hover:text-indigo-500 bg-white hover:bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-all cursor-pointer">
                  <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
