"use client";

import React, { useEffect, useState } from "react";
import { Contract } from "./data";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomDatePicker from "@/components/customComponent/CustomDatePicker";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";

interface ModifyContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (updatedContract: Contract) => void;
  contract: Contract | null;
}

export default function ModifyContractModal({
  isOpen,
  onClose,
  onConfirm,
  contract,
}: ModifyContractModalProps) {
  const [startDate, setStartDate] = useState(contract?.startDate || "");
  const [endDate, setEndDate] = useState(contract?.endDate || "");
  const [type, setType] = useState<Contract["type"]>(
    contract?.type || "Full Time",
  );
  const [status, setStatus] = useState<Contract["status"]>(
    contract?.status || "Active",
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !contract) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate && type && status) {
      onConfirm({
        ...contract,
        startDate,
        endDate,
        type,
        status,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      <div className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Modify Contract
        </h3>
        <p className="text-sm text-slate-500 font-medium mb-6">
          Edit contract details for{" "}
          <span className="font-bold text-slate-700">
            {contract.employee.name}
          </span>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CustomSelect
            label="Contract Type *"
            value={type}
            options={["Full Time", "Part Time", "Vat collaboration", "Stage"]}
            onChange={(val) => setType(val as Contract["type"])}
          />
          <CustomDatePicker
            label="Start Date *"
            value={startDate}
            onChange={setStartDate}
            placeholder="Jan 14, 2024"
            required
          />
          <CustomDatePicker
            label="End Date *"
            value={endDate}
            onChange={setEndDate}
            placeholder="Dec 30, 2025"
            required
          />
          <CustomSelect
            label="Status *"
            value={status}
            options={["Active", "Inactive", "Pending"]}
            onChange={(val) => setStatus(val as Contract["status"])}
          />
          <div className="flex items-center justify-end gap-3 pt-2">
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SubmitButton>Save Changes</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
