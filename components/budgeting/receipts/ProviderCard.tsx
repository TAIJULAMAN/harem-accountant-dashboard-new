import React from "react";

export default function ProviderCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Transferor/Provider
      </h3>
      <div className="space-y-3">
        <div>
          <h4 className="text-lg font-semibold text-slate-800">Bella Vista Salon</h4>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">Via Roma, 123</p>
          <p className="text-xs font-semibold text-slate-500">20121 Milan (MI) - Italy</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">P.IVA</span>
            <span className="text-xs font-semibold text-slate-700">IT12345678901</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">Tax Code</span>
            <span className="text-xs font-semibold text-slate-700">12345678901</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">PEC</span>
            <span className="text-xs font-semibold text-slate-700 break-all">
              amministrazione@pec.salonflow.it
            </span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">
              Recipient Code
            </span>
            <span className="text-xs font-semibold text-slate-700">XXXXXXX</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">Telephone</span>
            <span className="text-xs font-semibold text-slate-700">+39 02 1234567</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 block uppercase">Email</span>
            <span className="text-xs font-semibold text-slate-700 break-all">
              fatturazione@salonflow.it
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
