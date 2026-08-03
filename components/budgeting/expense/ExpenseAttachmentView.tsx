import React from "react";
import Image from "next/image";
import { Home, Download } from "lucide-react";
import { ExpenseTransaction } from "./data";

interface ExpenseAttachmentViewProps {
  attachmentTx: ExpenseTransaction;
  onClose: () => void;
  onDownload: (id: string) => void;
}

export default function ExpenseAttachmentView({
  attachmentTx,
  onClose,
  onDownload,
}: ExpenseAttachmentViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 px-6 py-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
          View Attachment
        </h1>
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
          <button
            onClick={onClose}
            className="hover:text-[#5c60f5] text-slate-400 transition-colors cursor-pointer"
            title="Home"
          >
            <Home size={14} />
          </button>
          <span>/</span>
          <button
            onClick={onClose}
            className="bg-indigo-50 text-[#5c60f5] hover:bg-[#e6e8ff] px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-bold text-[11px]"
          >
            Expense Management
          </button>
        </div>
      </div>

      {/* Invoice Card Box */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-6">
        {/* Header Row: Document Name + Download Button */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <h3 className="text-sm font-extrabold text-slate-800">
            {attachmentTx.attachmentName || "originalname.pdf"}
          </h3>
          <button
            onClick={() => onDownload(attachmentTx.id)}
            className="flex items-center gap-1.5 bg-[#f0f2ff] hover:bg-[#e6e8ff] text-[#5c60f5] text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* PDF Paper Sheet Visual Preview */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-12 flex justify-center items-start min-h-[600px]">
          <div className="bg-white shadow-xl border border-slate-200 p-8 sm:p-14 max-w-[680px] w-full text-slate-700 font-sans leading-relaxed text-xs space-y-6 rounded-lg text-left">
            {/* Document Header */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-base font-black text-slate-800 tracking-tight">
                  Document Name
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Invoice Receipt
                </p>
              </div>
              <Image
                src="/assets/icons/logo.svg"
                alt="Logo"
                width={80}
                height={24}
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* Document Body Columns */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h5 className="font-extrabold text-slate-800">
                  What is Lorem Ipsum?
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-8 pt-10 pb-6">
              <div>
                <div className="border-t border-slate-300 pt-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Maria Rodriguez (Client)
                </div>
              </div>
              <div>
                <div className="border-t border-slate-300 pt-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Maria Fernandez (Owner)
                </div>
              </div>
            </div>

            {/* Document Footer */}
            <div className="text-[10px] text-slate-400 font-semibold pt-4 border-t border-slate-100 flex justify-between">
              <span>www.name.com</span>
              <span>Page 1 of 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
