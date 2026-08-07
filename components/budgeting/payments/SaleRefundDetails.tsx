import React from "react";

export default function SaleRefundDetails() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-[15px] font-semibold text-slate-800 tracking-tight mb-1">
        Refund #1
      </h3>
      <p className="text-xs font-semibold text-slate-400 mb-6">
        5 Aug 2025, 12:30
      </p>

      <div className="border border-slate-100 rounded-xl p-5">
        <div className="space-y-4 text-xs">
          <div className="flex justify-between font-semibold text-slate-500 border-b border-slate-50 pb-4">
            <span>Accidental Charge</span>
            <span className="text-slate-800">€ 170</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-500 border-b border-slate-50 pb-4">
            <span>Refund Amount</span>
            <span className="text-slate-800">- € 10</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-500 border-b border-slate-50 pb-4">
            <span>Subtotal</span>
            <span className="text-slate-800">- € 10</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-800 border-b border-slate-100 pb-4">
            <span>Total</span>
            <span>- € 10</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-800 pt-2">
            <span>Refunded with Cash</span>
            <span>- € 10</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-500 pb-2">
            <span>Refund Amount</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
