"use client";

import React from "react";
import Image from "next/image";
import { Eye, Unlink, Crown } from "lucide-react";
import { type SalonInfo } from "./data";

interface SalonsTableProps {
  salons: SalonInfo[];
  onView?: (salon: SalonInfo) => void;
}

export default function SalonsTable({ salons, onView }: SalonsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="bg-[#f8f9fc] border-b border-slate-100">
            <th className="px-6 py-4 text-sm font-semibold text-slate-800">
              Salon
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-800">
              Plan
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-800">
              Payment
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-800">
              Next Renewal
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-800">
              Referral
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-800 text-right pr-8">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {salons.map((salon) => (
            <tr
              key={salon.id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  {salon.avatarImage ? (
                    <div className="relative rounded-xl shrink-0 overflow-hidden">
                      <Image
                        width={48}
                        height={48}
                        src={salon.avatarImage}
                        alt={salon.name}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-xl shrink-0 bg-gradient-to-tr ${salon.avatarGradient} flex items-center justify-center text-white font-bold text-lg shadow-sm`}
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-slate-800">
                        {salon.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {salon.badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {salon.ownerName} • {salon.city}
                    </div>
                    <div className="text-xs text-slate-400">{salon.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-2">
                <div className="space-y-1.5">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-lg text-xs
                    ${salon.plan === "Premium" ? "bg-[#D2F4F2] text-[#29343D]" : ""}
                    ${salon.plan === "Enterprise" ? "bg-brand text-white" : ""}
                    ${salon.plan === "Basic" ? "bg-[#DAD8FF] text-[#29343D]" : ""}
                  `}
                  >
                    {salon.plan === "Enterprise" && (
                      <Crown size={12} className="mr-1" />
                    )}
                    {salon.plan}
                  </span>
                  <div className="text-xs text-slate-500 font-medium">
                    {salon.planPrice}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex px-2 py-1 rounded-xl text-xs
                  ${salon.paymentStatus === "In order" ? "bg-[#EBFAF0] text-[#36C76C]" : "bg-[#FDE7E9] text-[#E63946]"}
                `}
                >
                  {salon.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-600 font-medium">
                  {salon.nextRenewal}
                </span>
              </td>
              <td className="px-6 py-4">
                {salon.referral !== "-" ? (
                  <span className="inline-flex px-2 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-500">
                    {salon.referral}
                  </span>
                ) : (
                  <span className="text-slate-400 font-medium">
                    {salon.referral}
                  </span>
                )}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2 pr-2">
                  <button
                    onClick={() => onView && onView(salon)}
                    className="w-8 h-8 rounded-lg bg-indigo-50 text-brand flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <Eye size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center hover:bg-pink-100 transition-colors cursor-pointer">
                    <Unlink size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
