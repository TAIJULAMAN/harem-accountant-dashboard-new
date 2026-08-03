import React from "react";

interface ElectronicInvoiceCardProps {
  receiptNo: string;
  date: string;
}

export default function ElectronicInvoiceCard({ receiptNo, date }: ElectronicInvoiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider mb-4">
        Electronic Invoice
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5">
          <h4 className="text-2xl font-bold text-slate-800">{receiptNo}</h4>
          <span className="text-[10px] font-medium text-slate-400 mt-1 block">
            Receipt No
          </span>
        </div>
        <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5">
          <h4 className="text-2xl font-bold text-slate-800">{date}</h4>
          <span className="text-[10px] font-medium text-slate-400 mt-1 block">
            Date
          </span>
        </div>
      </div>
    </div>
  );
}
