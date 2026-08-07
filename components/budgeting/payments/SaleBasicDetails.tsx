import React from "react";
import Image from "next/image";

interface SaleBasicDetailsProps {
  saleId: string;
}

export default function SaleBasicDetails({ saleId }: SaleBasicDetailsProps) {
  return (
    <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-6">
        Basic Details
      </h3>

      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <div className="col-span-2">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Salon
          </p>
          <div className="flex items-center gap-3">
            <Image
              width={50}
              height={50}
              src="/RecentActivity/RecentActivity1.png"
              alt="Avatar"
            />
            <span className="text-xl font-semibold text-slate-800">
              Glamour Beauty
            </span>
          </div>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            ID
          </p>
          <p className="text-xl font-semibold text-slate-800">
            #{saleId.padStart(3, "0")}
          </p>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Payment Date
          </p>
          <p className="text-xl font-semibold text-slate-800">
            5 Aug 2025, 12:30
          </p>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Method
          </p>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-500">
            Cash
          </span>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Payment Status
          </p>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white">
            Fully Paid
          </span>
        </div>

        <div className="col-span-2">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Receipt issue
          </p>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold border border-yellow-400 text-yellow-500 bg-yellow-50/50">
            Half Printed
          </span>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Client
          </p>
          <div className="flex items-center gap-3">
            <Image
              width={50}
              height={50}
              src="/avatar/avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Maria Rodriguez
              </p>
              <p className="text-xs font-semibold text-slate-400">
                maria@beautysalon.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Receipt Issued By
          </p>
          <div className="flex items-center gap-3">
            <Image
              width={50}
              height={50}
              src="/avatar/avatar1.png"
              alt="Avatar"
            />
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Maria Rodriguez
              </p>
              <p className="text-xs font-semibold text-slate-400">
                maria@beautysalon.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
