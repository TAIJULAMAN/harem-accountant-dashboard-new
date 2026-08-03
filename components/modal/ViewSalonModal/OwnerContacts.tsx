import React from "react";
import Image from "next/image";
import { type SalonInfo } from "../../salons/data";

interface OwnerContactsProps {
  salon: SalonInfo;
}

export default function OwnerContacts({ salon }: OwnerContactsProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-800 mb-4">
        Owner Contacts
      </h4>
      <div>
        <p className="text-xs text-slate-400 mb-3">Name</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative">
            <Image
              src="/avatar/avatar.png"
              alt={salon.ownerName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              {salon.ownerName}
            </p>
            <p className="text-xs text-slate-500">{salon.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
