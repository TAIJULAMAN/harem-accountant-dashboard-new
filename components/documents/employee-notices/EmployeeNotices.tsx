"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Eye } from "lucide-react";
import Pagination from "@/components/customComponent/Pagination";
import SendNoticeModal from "./SendNoticeModal";
import SuccessModal from "@/components/modal/SuccessModal";
import NoticeDetailsModal from "./NoticeDetailsModal";
import { mockNotices, EmployeeNotice } from "./data";
import Image from "next/image";

export default function EmployeeNotices() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<EmployeeNotice | null>(
    null,
  );

  const totalPages = Math.ceil(mockNotices.length / itemsPerPage);
  const paginatedData = mockNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          Employee Notices
        </h1>
        <div className="flex items-center gap-3">
          <Link
            href="/documents/employee-notices/upload"
            className="flex items-center gap-2 bg-[#e0e7ff] hover:bg-indigo-100 text-[#6366f1] px-5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer"
          >
            <Plus size={16} strokeWidth={3} />
            <span>Upload Notice</span>
          </Link>
          <button
            onClick={() => setIsSendModalOpen(true)}
            className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm cursor-pointer"
          >
            <Plus size={16} strokeWidth={3} />
            <span>Send Notice</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Title
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Recipient
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Date Sent
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.map((notice) => (
                <tr
                  key={notice.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="text-sm font-bold text-slate-700">
                      {notice.title}
                    </div>
                  </td>
                  <td className="px-6 py-5">
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
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-600">
                    {notice.dateSent}
                  </td>
                  <td className="px-6 py-5">
                    <div
                      className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                      ${notice.status === "Read" ? "bg-[#eafff5] text-[#22c55e]" : "bg-[#fffbf0] text-[#facc15]"}
                    `}
                    >
                      {notice.status}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <button
                      onClick={() => setSelectedNotice(notice)}
                      className="p-2 text-[#6366f1] bg-[#e0e7ff] hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={mockNotices.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Modals */}
      <SendNoticeModal
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
        onSuccess={() => setIsSuccessModalOpen(true)}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <NoticeDetailsModal
        isOpen={!!selectedNotice}
        onClose={() => setSelectedNotice(null)}
        notice={selectedNotice}
      />
    </div>
  );
}
