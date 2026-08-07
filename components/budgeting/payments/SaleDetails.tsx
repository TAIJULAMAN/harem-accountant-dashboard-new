import React from "react";
import { Printer, Eye } from "lucide-react";

interface SaleDetailsProps {
  saleId: string;
  isOnlineReceiptPrinted: boolean;
  setPrintModalState: (state: "closed" | "not_received" | "received") => void;
}

export default function SaleDetails({
  saleId,
  isOnlineReceiptPrinted,
  setPrintModalState,
}: SaleDetailsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-xs font-semibold text-slate-800 tracking-tight mb-1">
        Sale #{saleId.padStart(3, "0")}
      </h3>
      <p className="text-xs font-semibold text-slate-400 mb-6">
        5 Aug 2025, 12:30
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 pr-6 text-xs font-semibold text-slate-500 uppercase">
                Service
              </th>
              <th className="pb-3 px-6 text-xs font-semibold text-slate-500 uppercase">
                Employee
              </th>
              <th className="pb-3 px-6 text-xs font-semibold text-slate-500 uppercase">
                Start Time
              </th>
              <th className="pb-3 px-6 text-xs font-semibold text-slate-500 uppercase">
                Date
              </th>
              <th className="pb-3 px-6 text-xs font-semibold text-slate-500 uppercase">
                Duration
              </th>
              <th className="pb-3 pl-6 text-xs font-semibold text-slate-500 uppercase text-right">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-4 pr-6 text-xs font-semibold text-slate-800">
                Haircut
              </td>
              <td className="pt-4 px-6 text-xs font-semibold text-slate-500">
                Maria Rodriguez
              </td>
              <td className="pt-4 px-6 text-xs font-semibold text-slate-500">
                12:00
              </td>
              <td className="pt-4 px-6 text-xs font-semibold text-slate-500">
                5 Aug 2025
              </td>
              <td className="pt-4 px-6 text-xs font-semibold text-slate-500">
                15 min
              </td>
              <td className="pt-4 pl-6 text-xs font-semibold text-slate-800 text-right">
                € 170
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full border border-slate-100 rounded-xl p-5 mb-6">
        <h4 className="text-xs font-semibold text-slate-800 mb-4">
          Order Summary
        </h4>
        <div className="space-y-3 text-xs">
          <div className="flex justify-between font-semibold text-slate-500">
            <span>Subtotal</span>
            <span>€ 170</span>
          </div>
          <div className="flex justify-between font-bold text-slate-800 pb-3 border-b border-slate-100">
            <span>Total</span>
            <span>€ 170</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-500 pt-2">
            <span>Paid with Cash</span>
            <span>€ 10</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-400 text-[10px]">
            <span>5 Aug 2025, 12:30</span>
            <span></span>
          </div>
          <div className="flex justify-between font-bold text-slate-800 pt-3 border-t border-slate-100 mt-3">
            <span>Balance</span>
            <span>€ 160</span>
          </div>
        </div>
      </div>

      <div className="w-full border border-slate-100 rounded-xl p-5">
        <h4 className="text-[13px] font-bold text-slate-800 mb-4">
          Receipt Status
        </h4>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Cash</span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-emerald-400 text-emerald-500 bg-emerald-50/50">
              Printed
            </span>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f3effe] text-[#5c60f5] text-[10px] font-bold hover:bg-[#e0e1fe] transition-colors">
            <Eye size={12} /> View Receipt
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">
              Online payment
            </span>
            {isOnlineReceiptPrinted ? (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-emerald-400 text-emerald-500 bg-emerald-50/50">
                Printed
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-yellow-400 text-yellow-500 bg-yellow-50/50">
                Not printed
              </span>
            )}
          </div>
          {isOnlineReceiptPrinted ? (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f3effe] text-[#5c60f5] text-[10px] font-bold hover:bg-[#e0e1fe] transition-colors">
              <Eye size={12} /> View Receipt
            </button>
          ) : (
            <button
              onClick={() => setPrintModalState("not_received")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#5c60f5] text-white text-[10px] font-bold hover:bg-[#4a4ec4] transition-colors shadow-sm"
            >
              <Printer size={12} /> Print Receipt
            </button>
          )}
        </div>

        {/* Hidden button for testing the other modal state */}
        <button
          onClick={() => setPrintModalState("received")}
          className="mt-4 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors"
        >
          (Test: Print Receipt - Received)
        </button>
      </div>
    </div>
  );
}
