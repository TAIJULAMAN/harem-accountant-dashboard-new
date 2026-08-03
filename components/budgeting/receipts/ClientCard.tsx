import React from "react";

interface ClientCardProps {
  clientName: string;
}

export default function ClientCard({ clientName }: ClientCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Transferee/Client
      </h3>
      <div className="space-y-3">
        <div>
          <h4 className="text-lg font-semibold text-slate-800">{clientName}</h4>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">Via Esempio, 456</p>
          <p className="text-xs font-semibold text-slate-500">10100 Turin (TO) - Italy</p>
        </div>

        <div className="pt-2">
          <span className="text-[9px] font-bold text-slate-400 block uppercase">Tax Code</span>
          <span className="text-xs font-semibold text-slate-700">98765432109</span>
        </div>
      </div>
    </div>
  );
}
