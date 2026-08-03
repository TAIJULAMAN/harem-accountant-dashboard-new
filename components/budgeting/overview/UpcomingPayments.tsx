"use client";

import React, { useState } from "react";
import { Eye, Check, Bell } from "lucide-react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import { upcomingPaymentsDataByMonth } from "./data";

export default function UpcomingPayments() {
  const [selectedMonth, setSelectedMonth] = useState("February");

  const months = ["January", "February", "March", "April", "May", "June"];

  const activePayments = upcomingPaymentsDataByMonth[selectedMonth] || [];

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm h-full justify-between gap-6">
      {/* Header */}
      <div className="flex items-center justify-between relative">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Upcoming Payments</h3>
        <CustomSelect 
          value={selectedMonth} 
          onChange={setSelectedMonth} 
          options={months} 
        />
      </div>

      {/* List */}
      <div className="flex-1 space-y-6 overflow-x-auto scrollbar-none">
        <div className="min-w-[480px] sm:min-w-0 space-y-5">
          {activePayments.length > 0 ? (
            activePayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between gap-4 py-1 relative w-full"
              >
                {/* Left-most vertical colored line */}
                <div className="w-[3px] h-10 bg-[#fcc419] rounded-full shrink-0" />
                
                {/* Bell Icon & Details */}
                <div className="flex items-center gap-3.5 flex-1 min-w-0 ml-2">
                  <div className="h-11 w-11 rounded-full bg-[#fffbeb] flex items-center justify-center shrink-0">
                    <Bell size={18} className="text-[#f59e0b] fill-[#f59e0b]/5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-800 leading-snug">{payment.name}</h4>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{payment.description}</p>
                  </div>
                </div>

                {/* Price, Date & Actions */}
                <div className="flex items-center gap-6 shrink-0">
                  <span className="bg-[#fff0f6] text-[#e64980] px-3.5 py-1.5 rounded-lg text-xs font-bold leading-none">
                    {payment.amount}
                  </span>
                  
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 whitespace-nowrap">
                    {payment.date}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      className="p-2.5 bg-[#f0f2ff] hover:bg-[#e5e8ff] text-[#5c60f5] rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
                      title="View details"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      className="p-2.5 bg-[#e6fcf5] hover:bg-[#cbf7ea] text-[#0ca678] rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
                      title="Mark paid"
                    >
                      <Check size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center py-12 text-slate-400 text-xs font-bold">
              No upcoming payments for {selectedMonth}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
