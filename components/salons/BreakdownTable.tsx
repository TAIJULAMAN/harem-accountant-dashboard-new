import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { BreakdownData } from "./revenueData";

interface BreakdownTableProps {
  data: BreakdownData[];
}

export default function BreakdownTable({ data }: BreakdownTableProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        Breakdown per Salon
      </h3>
      <div className="overflow-x-auto border border-slate-100 rounded-xl bg-white">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-[#F8F9FA] border-b border-slate-100">
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Salon
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Plan
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Your Share (30%)
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Last Payment
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Next Renewal
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                Lifetime
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${
                  index === data.length - 1 ? "border-none" : ""
                }`}
              >
                {/* Salon */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative rounded-xl shrink-0 overflow-hidden w-10 h-10 shadow-sm opacity-90">
                      <Image
                        width={40}
                        height={40}
                        src={item.avatarImage}
                        alt={item.salonName}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {item.salonName}
                      </h3>
                      <p className="text-xs text-slate-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                {/* Plan */}
                <td className="px-6 py-4">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs bg-[#D2F4F2] text-[#29343D]">
                      {item.plan}
                    </span>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.planDetails}
                    </div>
                  </div>
                </td>

                {/* Your Share */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-[#22C55E]">
                    {item.share}
                  </span>
                </td>

                {/* Last Payment */}
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-700">{item.lastPayment}</p>
                    <p className="text-xs text-slate-500">
                      {item.lastPaymentDate}
                    </p>
                  </div>
                </td>

                {/* Next Renewal */}
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-700">{item.nextRenewal}</p>
                    <p className="text-xs text-slate-500">
                      {item.nextRenewalDate}
                    </p>
                  </div>
                </td>

                {/* Lifetime */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-[#635BFF]">
                    {item.lifetime}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <button className="w-8 h-8 rounded-lg bg-[#F4F4FD] text-[#635BFF] hover:bg-[#635BFF] hover:text-white flex items-center justify-center transition-colors">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
