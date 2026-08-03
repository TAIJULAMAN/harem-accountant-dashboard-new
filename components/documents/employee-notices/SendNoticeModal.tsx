"use client";

import React, { useState, useEffect } from "react";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomInput from "@/components/customComponent/CustomInput";
import CustomTextarea from "@/components/customComponent/CustomTextarea";
import SubmitButton from "@/components/customComponent/SubmitButton";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { employeeOptions } from "./data";

interface SendNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SendNoticeModal({
  isOpen,
  onClose,
  onSuccess,
}: SendNoticeModalProps) {
  const [employee, setEmployee] = useState("Select Employee");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee !== "Select Employee" && title && description) {
      onClose();
      onSuccess();
      setEmployee("Select Employee");
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      <div className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Send Notice</h3>
          <CustomCloseButton
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <form
            id="sendNoticeForm"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Employee Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Select Employee *
              </label>
              <CustomSelect
                value={employee}
                options={employeeOptions}
                onChange={setEmployee}
                placeholder="Select Employee"
              />
            </div>

            {/* Title */}
            <div>
              <CustomInput
                label="Title *"
                value={title}
                onChange={setTitle}
                placeholder="Enter Title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <CustomTextarea
                label="Description *"
                value={description}
                onChange={setDescription}
                placeholder="Enter notice description..."
                required
                rows={6}
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-slate-100 flex justify-end">
          <SubmitButton form="sendNoticeForm">Send Notice</SubmitButton>
        </div>
      </div>
    </div>
  );
}
