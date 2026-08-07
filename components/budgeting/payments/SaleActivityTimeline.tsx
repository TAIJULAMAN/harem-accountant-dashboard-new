import React from "react";

export default function SaleActivityTimeline() {
  return (
    <div className="lg:col-span-2 bg-white rounded-[20px] p-7 shadow-sm border border-slate-100 flex flex-col">
      <h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-7 flex items-center gap-2">
        Activity
        {/* <div className="h-px bg-slate-100 flex-1 ml-2"></div> */}
      </h3>

      <div className="relative flex-1">
        {/* Connecting line meticulously aligned */}
        <div className="absolute left-[90px] top-[8px] bottom-6 w-[2px] bg-slate-100 rounded-full z-0"></div>

        <div className="flex items-start relative z-10">
          <div className="text-xs font-bold text-slate-400/80 pt-[2px] w-[84px] shrink-0 text-right pr-4 tracking-wider uppercase">
            Today, 14:34
          </div>
          <div className="relative flex flex-col items-center shrink-0">
            <div className="w-[14px] h-[14px] rounded-full border-[2.5px] border-[#ff4d79] bg-white z-10 shadow-[0_0_0_4px_white]"></div>
          </div>
          <div className="pl-5 pb-8">
            <p className="text-xs font-semibold text-slate-800 leading-tight">
              € 10 refunded by cash
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-1">
              Completed by Maria Rodriguez
            </p>
          </div>
        </div>

        <div className="flex items-start relative z-10">
          <div className="text-xs font-bold text-slate-400/80 pt-[2px] w-[84px] shrink-0 text-right pr-4 tracking-wider uppercase">
            Today, 14:34
          </div>
          <div className="relative flex flex-col items-center shrink-0">
            <div className="w-4 h-4 rounded-full border-[2.5px] border-[#5c60f5] bg-white z-10 shadow-[0_0_0_4px_white]"></div>
          </div>
          <div className="pl-5 pb-2">
            <p className="text-xs font-semibold text-slate-800 leading-tight">
              Sale #1 created
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-1">
              Completed by Maria Rodriguez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
