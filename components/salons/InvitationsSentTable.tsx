import React from "react";
import { Mail, X, Copy, Crown } from "lucide-react";
import Image from "next/image";

export interface InvitationData {
  id: number;
  salonName: string;
  email: string;
  date: string;
  status: string;
  plan: string;
  planDetails: string;
  share: string;
  lastShare: string;
  avatarGradient: string;
  avatarImage?: string;
}

interface InvitationsSentTableProps {
  invitations: InvitationData[];
}

export default function InvitationsSentTable({
  invitations,
}: InvitationsSentTableProps) {
  return (
    <div className="overflow-x-auto border border-slate-100 rounded-xl">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-[#F8F9FA] border-b border-slate-100">
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">
              Salon
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">
              Invitation Date
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">
              Status
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">
              Plan
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700">
              Your Share (30%)
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((inv, index) => (
            <tr
              key={inv.id}
              className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${
                index === invitations.length - 1 ? "border-none" : ""
              }`}
            >
              {/* Salon */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-3">
                  {inv.avatarImage ? (
                    <Image
                      width={40}
                      height={40}
                      src={inv.avatarImage}
                      alt={inv.salonName}
                      className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-sm opacity-90"
                    />
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-xl shrink-0 bg-gradient-to-tr ${inv.avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-sm opacity-90`}
                    />
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {inv.salonName}
                    </h3>
                    <p className="text-xs text-slate-500">{inv.email}</p>
                  </div>
                </div>
              </td>

              {/* Date */}
              <td className="px-3 py-2 text-sm text-slate-600">{inv.date}</td>

              {/* Status */}
              <td className="px-3 py-2">
                <span
                  className={`inline-flex px-2.5 py-1 rounded-xl text-xs
                  ${inv.status === "Accepted" ? "bg-[#EBFAF0] text-[#36C76C]" : ""}
                  ${inv.status === "Pending" ? "bg-[#FFF7E3] text-[#FFB020]" : ""}
                  ${inv.status === "Rejected" ? "bg-[#FDE7E9] text-[#E63946]" : ""}
                `}
                >
                  {inv.status}
                </span>
              </td>

              {/* Plan */}
              <td className="px-3 py-2">
                {inv.plan !== "-" ? (
                  <div className="space-y-1.5">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-lg text-xs
                      ${inv.plan === "Premium" ? "bg-[#D2F4F2] text-[#29343D]" : ""}
                      ${inv.plan === "Enterprise" ? "bg-brand text-white" : ""}
                      ${inv.plan === "Basic" ? "bg-[#DAD8FF] text-[#29343D]" : ""}
                    `}
                    >
                      {inv.plan === "Enterprise" && (
                        <Crown size={12} className="mr-1" />
                      )}
                      {inv.plan}
                    </span>
                    <div className="text-xs text-slate-500 font-medium">
                      {inv.planDetails}
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-slate-400">-</span>
                )}
              </td>

              {/* Your Share */}
              <td className="px-6 py-4">
                {inv.share !== "-" ? (
                  <div>
                    <p className="text-sm font-semibold text-[#36C76C]">
                      {inv.share}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {inv.lastShare}
                    </p>
                  </div>
                ) : (
                  <span className="text-sm text-slate-400">-</span>
                )}
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                  <button className="w-8 h-8 rounded-lg bg-[#F4F4FD] text-[#635BFF] hover:bg-[#635BFF] hover:text-white flex items-center justify-center transition-colors">
                    <Mail size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[#FFEBEB] text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white flex items-center justify-center transition-colors">
                    <X size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors">
                    <Copy size={14} />
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
