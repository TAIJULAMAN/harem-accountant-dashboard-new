import React from "react";
import { filterOptions } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";

interface PaymentsFilterBarProps {
  activeMethod: string;
  setActiveMethod: (val: string) => void;
  activeStatus: string;
  setActiveStatus: (val: string) => void;
  activeReceipt: string;
  setActiveReceipt: (val: string) => void;
}

export default function PaymentsFilterBar({
  activeMethod,
  setActiveMethod,
  activeStatus,
  setActiveStatus,
  activeReceipt,
  setActiveReceipt,
}: PaymentsFilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-end gap-4 mb-6">
      <div className="w-full md:w-48">
        <CustomSelect
          options={filterOptions.methods}
          value={activeMethod}
          onChange={setActiveMethod}
        />
      </div>
      <div className="w-full md:w-48">
        <CustomSelect
          options={filterOptions.paymentStatus}
          value={activeStatus}
          onChange={setActiveStatus}
        />
      </div>
      <div className="w-full md:w-48">
        <CustomSelect
          options={filterOptions.receiptStatus}
          value={activeReceipt}
          onChange={setActiveReceipt}
        />
      </div>
    </div>
  );
}
