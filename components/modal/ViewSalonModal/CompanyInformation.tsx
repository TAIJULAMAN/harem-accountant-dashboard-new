import React from "react";
import { type SalonInfo } from "../../salons/data";

interface CompanyInformationProps {
  salon: SalonInfo;
}

export default function CompanyInformation({ salon }: CompanyInformationProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-800 my-4">
        Company Information
      </h4>
      <div className="grid grid-cols-2 gap-y-6">
        <div>
          <p className="text-xs text-slate-400 mb-1">Company Name</p>
          <p className="text-sm font-semibold text-slate-800">
            {salon.name} {salon.badge !== "Ind." ? salon.badge : ""}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-1">VAT number</p>
          <p className="text-sm font-semibold text-slate-800">
            IT12345678901
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-1">Address</p>
          <p className="text-sm font-semibold text-slate-800">
            {salon.city}, Italy
          </p>
        </div>
      </div>
    </div>
  );
}
