import React from "react";
import SalonSelector from "./SalonSelector";

interface SalonSelectionWarningProps {
  setSelectedSalon: (salon: string) => void;
}

export default function SalonSelectionWarning({
  setSelectedSalon,
}: SalonSelectionWarningProps) {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="text-center max-w-xl mb-8 space-y-2.5">
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
          Select a Salon
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          To proceed with the upload, you must select a specific salon.
          <br />
          You cannot upload files when &quot;All Salons&quot; is active.
        </p>
      </div>

      <SalonSelector onSelectSalon={setSelectedSalon} />
    </div>
  );
}
