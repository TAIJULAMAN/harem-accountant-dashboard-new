import React from "react";

export default function PaymentMethodsCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Payment Methods
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Mode</span>
          <span className="text-xs font-semibold text-slate-700">Credit Card</span>
        </div>
        <div>
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Payment Date</span>
          <span className="text-xs font-semibold text-slate-700">12/02/2024</span>
        </div>
        <div>
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Deadline</span>
          <span className="text-xs font-semibold text-slate-700">12/14/2024</span>
        </div>
        <div>
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Amount Paid</span>
          <span className="text-xs font-semibold text-slate-800">€ 170</span>
        </div>
        <div>
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Status</span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100/50 w-fit block mt-0.5">
            Paid
          </span>
        </div>
      </div>
    </div>
  );
}
