import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { salonList } from "./data";

interface SalonSelectorProps {
  onSelectSalon: (name: string) => void;
}

export default function SalonSelector({ onSelectSalon }: SalonSelectorProps) {
  return (
    <div className="w-full max-w-2xl space-y-3 sm:space-y-3.5">
      {salonList.map((salon) => (
        <button
          key={salon.name}
          onClick={() => onSelectSalon(salon.name)}
          className="flex w-full items-center justify-between p-3.5 sm:p-4.5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-brand/45 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 cursor-pointer group text-left"
        >
          <div className="flex items-center gap-3 sm:gap-4.5 min-w-0">
            <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 shrink-0 relative overflow-hidden">
              <Image
                src={salon.image}
                alt={salon.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-700 text-lg group-hover:text-brand transition-colors truncate">
                {salon.name}
              </p>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                Click to select
              </p>
            </div>
          </div>

          <ChevronRight
            size={16}
            className="text-slate-300 group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
          />
        </button>
      ))}
    </div>
  );
}
