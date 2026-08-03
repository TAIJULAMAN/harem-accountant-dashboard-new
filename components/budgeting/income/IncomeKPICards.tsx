"use client";

import React from "react";
import { Euro, TrendingUp, Users, FileText } from "lucide-react";
import { initialLatestReceipts } from "./data";

interface IncomeKPICardsProps {
  selectedDate: string;
  selectedEmployee: string;
  selectedService: string;
  selectedPaymentMethod: string;
  onOpenRevenueModal?: () => void;
  onOpenAverageModal?: () => void;
}

export default function IncomeKPICards({
  selectedEmployee,
  selectedService,
  selectedPaymentMethod,
  onOpenRevenueModal,
  onOpenAverageModal,
}: IncomeKPICardsProps) {
  // Compute KPI metrics dynamically based on filters
  const filteredReceipts = initialLatestReceipts.filter((r) => {
    if (selectedEmployee !== "All" && r.teamMember.name !== selectedEmployee)
      return false;
    if (
      selectedService !== "All" &&
      !r.service.toLowerCase().includes(selectedService.toLowerCase())
    )
      return false;
    if (
      selectedPaymentMethod !== "All" &&
      r.paymentMethod !== selectedPaymentMethod
    )
      return false;
    return true;
  });

  const totalRevenue = filteredReceipts.reduce((sum, r) => sum + r.amount, 0);
  const averageReceipt =
    filteredReceipts.length > 0 ? totalRevenue / filteredReceipts.length : 0;

  // Unique customers: unique employee/receipt combinations as a mock
  const uniqueCustomers =
    filteredReceipts.length > 0
      ? new Set(filteredReceipts.map((r) => r.client.name)).size + 2
      : 0;

  // Split: Services and Products (mock count and revenue splits)
  const servicesCount = filteredReceipts.length;
  const servicesRevenue = totalRevenue;
  const productsCount =
    filteredReceipts.length > 0 ? Math.floor(filteredReceipts.length * 0.4) : 0;
  const productsRevenue = productsCount * 12.5;

  const totalItems = servicesCount + productsCount || 1;
  const servicesPercent = Math.round((servicesCount / totalItems) * 100);
  const productsPercent = Math.round((productsCount / totalItems) * 100);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1. Total Accounted Revenue */}
      <div
        onClick={onOpenRevenueModal}
        className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left cursor-pointer"
        style={{
          background: "linear-gradient(180deg, #0ca67818 0%, #0ca67804 100%)",
        }}
      >
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-kpi-teal-icon-bg">
            <Euro size={20} className="text-kpi-teal-text" />
          </div>
          <span className="text-[13px] font-bold text-slate-700 tracking-tight leading-snug">
            Total Accounted Revenue
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-[38px] font-bold tracking-tight text-slate-800 leading-none">
            €{" "}
            {totalRevenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
          <div className="mt-4 flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold text-slate-400 mt-1 block">
              Entries recorded with printed receipt
            </span>
          </div>
        </div>
      </div>

      {/* 2. Average Receipt */}
      <div
        onClick={onOpenAverageModal}
        className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left cursor-pointer"
        style={{
          background: "linear-gradient(180deg, #7048e818 0%, #7048e804 100%)",
        }}
      >
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-kpi-purple-icon-bg">
            <TrendingUp size={20} className="text-kpi-purple-text" />
          </div>
          <span className="text-[13px] font-bold text-slate-700 tracking-tight leading-snug">
            Average Receipt
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-[38px] font-bold tracking-tight text-slate-800 leading-none">
            €{" "}
            {averageReceipt.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
          <div className="mt-4 flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold text-slate-400 mt-1 block">
              Click for detailed analysis
            </span>
          </div>
        </div>
      </div>

      {/* 3. Unique Customers */}
      <div
        className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left"
        style={{
          background: "linear-gradient(180deg, #d9770618 0%, #d9770604 100%)",
        }}
      >
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-kpi-yellow-icon-bg">
            <Users size={20} className="text-kpi-yellow-text" />
          </div>
          <span className="text-[13px] font-bold text-slate-700 tracking-tight leading-snug">
            Unique Customers
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-[38px] font-bold tracking-tight text-slate-800 leading-none">
            {uniqueCustomers}
          </h3>
          <div className="mt-4 flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold text-slate-400 mt-1 block">
              In the selected period
            </span>
          </div>
        </div>
      </div>

      {/* 4. Services & Products split */}
      <div
        className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left"
        style={{
          background: "linear-gradient(180deg, #e6498018 0%, #e6498004 100%)",
        }}
      >
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-kpi-pink-icon-bg">
            <FileText size={20} className="text-kpi-pink-text" />
          </div>
          <span className="text-[13px] font-bold text-slate-700 tracking-tight leading-snug">
            Services & Products
          </span>
        </div>

        <div className="mt-6 space-y-2.5 w-full">
          {/* Services row */}
          <div>
            <div className="flex justify-between text-[10px] font-extrabold text-slate-600 mb-1">
              <span>Services</span>
              <span>
                {servicesCount} - € {servicesRevenue.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-slate-100/80 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#0ca678] h-full rounded-full transition-all"
                style={{ width: `${servicesPercent}%` }}
              />
            </div>
          </div>

          {/* Products row */}
          <div>
            <div className="flex justify-between text-[10px] font-extrabold text-slate-600 mb-1">
              <span>Products</span>
              <span>
                {productsCount} - € {productsRevenue.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-slate-100/80 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-slate-300 h-full rounded-full transition-all"
                style={{ width: `${productsPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
