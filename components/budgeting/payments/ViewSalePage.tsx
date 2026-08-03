"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home, Printer, Eye } from "lucide-react";

interface ViewSalePageProps {
  saleId: string;
}

export default function ViewSalePage({ saleId }: ViewSalePageProps) {
  const [printModalState, setPrintModalState] = useState<"closed" | "not_received" | "received">("closed");

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between border border-slate-100">
        <Link
          href="/budgeting/payments"
          className="flex items-center gap-2 text-[15px] font-bold text-slate-800 hover:text-[#5c60f5] transition-colors"
        >
          <ChevronLeft size={20} />
          View Sale
        </Link>
        <div className="flex items-center gap-1 bg-[#f3effe] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5c60f5]">
          <Home size={12} />
          <span className="text-slate-400 mx-1">/</span>
          <span>Payments</span>
        </div>
      </div>

      {/* Top Grid: Basic Details + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Basic Details */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight mb-6">Basic Details</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            <div className="col-span-2 md:col-span-4">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Salon</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-sm"></div>
                <span className="text-xs font-bold text-slate-800">Glamour Beauty</span>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">ID</p>
              <p className="text-sm font-bold text-slate-800">#{saleId.padStart(3, '0')}</p>
            </div>

            <div className="col-span-1 md:col-span-3">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Payment Date</p>
              <p className="text-xs font-bold text-slate-800">5 Aug 2025, 12:30</p>
            </div>

            <div className="col-span-1 md:col-span-1">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Method</p>
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-emerald-50 text-emerald-500">
                Cash
              </span>
            </div>

            <div className="col-span-1 md:col-span-3">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Payment Status</p>
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500 text-white">
                Fully Paid
              </span>
            </div>

            <div className="col-span-2 md:col-span-4">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Receipt Issue</p>
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold border border-yellow-400 text-yellow-500 bg-yellow-50/50">
                Half Printed
              </span>
            </div>

            <div className="col-span-2 md:col-span-2">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Client</p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=maria" alt="Avatar" className="w-10 h-10 rounded-xl object-cover bg-slate-100" />
                <div>
                  <p className="text-xs font-bold text-slate-800">Maria Rodriguez</p>
                  <p className="text-[10px] font-semibold text-slate-400">maria@beautysalon.com</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:col-span-2">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Receipt Issued By</p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=employee" alt="Avatar" className="w-10 h-10 rounded-xl object-cover bg-slate-100" />
                <div>
                  <p className="text-xs font-bold text-slate-800">Maria Rodriguez</p>
                  <p className="text-[10px] font-semibold text-slate-400">maria@beautysalon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight mb-6">Activity</h3>
          <div className="relative pl-2 space-y-6">
            {/* Connecting line */}
            <div className="absolute left-[31px] top-[14px] bottom-0 w-[1px] bg-slate-200"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="text-[10px] font-bold text-slate-500 pt-1 w-20 shrink-0 text-right">Today at 14:34</div>
              <div className="w-3 h-3 rounded-full border-2 border-[#ff4d79] bg-white mt-1 shrink-0"></div>
              <div>
                <p className="text-xs font-bold text-slate-800">€ 10 refunded by cash</p>
                <p className="text-[10px] font-semibold text-slate-400">Completed by Maria Rodriguez</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="text-[10px] font-bold text-slate-500 pt-1 w-20 shrink-0 text-right">Today at 14:34</div>
              <div className="w-3 h-3 rounded-full border-2 border-[#5c60f5] bg-white mt-1 shrink-0"></div>
              <div>
                <p className="text-xs font-bold text-slate-800">Sale #1 created</p>
                <p className="text-[10px] font-semibold text-slate-400">Completed by Maria Rodriguez</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-[15px] font-bold text-slate-800 tracking-tight mb-1">Sale #{saleId.padStart(3, '0')}</h3>
        <p className="text-[11px] font-semibold text-slate-400 mb-6">5 Aug 2025, 12:30</p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-3 pr-6 text-[10px] font-bold text-slate-500 uppercase">Service</th>
                <th className="pb-3 px-6 text-[10px] font-bold text-slate-500 uppercase">Employee</th>
                <th className="pb-3 px-6 text-[10px] font-bold text-slate-500 uppercase">Start Time</th>
                <th className="pb-3 px-6 text-[10px] font-bold text-slate-500 uppercase">Date</th>
                <th className="pb-3 px-6 text-[10px] font-bold text-slate-500 uppercase">Duration</th>
                <th className="pb-3 pl-6 text-[10px] font-bold text-slate-500 uppercase text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-4 pr-6 text-xs font-bold text-slate-800">Haircut</td>
                <td className="pt-4 px-6 text-xs font-semibold text-slate-500">Maria Rodriguez</td>
                <td className="pt-4 px-6 text-xs font-semibold text-slate-500">12:00</td>
                <td className="pt-4 px-6 text-xs font-semibold text-slate-500">5 Aug 2025</td>
                <td className="pt-4 px-6 text-xs font-semibold text-slate-500">15 min</td>
                <td className="pt-4 pl-6 text-xs font-semibold text-slate-800 text-right">€ 170</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-md ml-auto border border-slate-100 rounded-xl p-5 mb-6">
          <h4 className="text-[13px] font-bold text-slate-800 mb-4">Order Summary</h4>
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

        <div className="max-w-md ml-auto border border-slate-100 rounded-xl p-5">
          <h4 className="text-[13px] font-bold text-slate-800 mb-4">Receipt Status</h4>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600">Cash</span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-emerald-400 text-emerald-500 bg-emerald-50/50">Printed</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f3effe] text-[#5c60f5] text-[10px] font-bold hover:bg-[#e0e1fe] transition-colors">
              <Eye size={12} /> View Receipt
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600">Online payment</span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-yellow-400 text-yellow-500 bg-yellow-50/50">Not printed</span>
            </div>
            <button
              onClick={() => setPrintModalState("not_received")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#5c60f5] text-white text-[10px] font-bold hover:bg-[#4a4ec4] transition-colors shadow-sm"
            >
              <Printer size={12} /> Print Receipt
            </button>
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

      {/* Refund Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-[15px] font-bold text-slate-800 tracking-tight mb-1">Refund #1</h3>
        <p className="text-[11px] font-semibold text-slate-400 mb-6">5 Aug 2025, 12:30</p>

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
            <div className="flex justify-between font-bold text-slate-800 border-b border-slate-100 pb-4">
              <span>Total</span>
              <span>- € 10</span>
            </div>
            <div className="flex justify-between font-bold text-slate-800 pt-2">
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

      {/* Print Receipt Modal Overlay */}
      {printModalState !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setPrintModalState("closed")}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[450px] p-6 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Print Receipt</h3>

            <p className="text-sm font-semibold text-slate-600 mb-8 leading-relaxed">
              {printModalState === "not_received"
                ? "The online payment has not been received yet, do you want to print it anyway?"
                : "The online payment has been correctly received, do you want to proceed printing and sending the copy to the client?"}
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setPrintModalState("closed")}
                className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Printing...");
                  setPrintModalState("closed");
                }}
                className="px-5 py-2.5 rounded-lg bg-[#e0e1fe] text-[#5c60f5] text-xs font-bold hover:bg-[#5c60f5] hover:text-white transition-colors"
              >
                {printModalState === "not_received" ? "Print now" : "Print and Send Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
