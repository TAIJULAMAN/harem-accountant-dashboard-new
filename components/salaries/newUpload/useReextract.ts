import { useState } from "react";
import { ExtractedSalary } from "./data";

export function useReextract(
  editingPacket: ExtractedSalary | null,
  setEditingPacket: (packet: ExtractedSalary | null) => void
) {
  const [isReextracting, setIsReextracting] = useState(false);

  const handleReextract = () => {
    setIsReextracting(true);
    setTimeout(() => {
      setIsReextracting(false);
      if (editingPacket) {
        setEditingPacket({
          ...editingPacket,
          employeeName: "Angelica Rodriguez",
          cf: "SLNLC87WBW88WJ",
          period: "07/2025",
          causale: "July 2025 Salary",
          confidence: 95,
          grossSalary: 887.42,
          deemed: 124.35,
          netSalary: 762,
          tfrMonthly: "",
          trfThisYear: 687.42,
          trfPrevYears: 4011.71,
          totalTfrAmount: "31/12/2024",
        });
      }
    }, 1000);
  };

  return { isReextracting, handleReextract };
}
