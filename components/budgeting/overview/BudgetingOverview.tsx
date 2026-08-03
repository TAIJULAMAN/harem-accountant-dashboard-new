"use client";

import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";
import BudgetingKPICards from "./BudgetingKPICards";
import UpcomingPayments from "./UpcomingPayments";
import LatestTransactions from "./LatestTransactions";
import CustomSelect from "@/components/customComponent/CustomSelect";
import CustomAlert from "@/components/customComponent/CustomAlert";
import CustomCloseButton from "@/components/customComponent/CustomCloseButton";
import { useSalon } from "@/context/SalonContext";
import { TotalMonthlyExpensesChart } from "./TotalMonthlyExpensesChart";
import { DailySpendingTrendsChart } from "./DailySpendingTrendsChart";
import { SalonExpensesChart } from "./SalonExpensesChart";
import { PaymentMethodsChart } from "./PaymentMethodsChart";
import { ExpensesMacroCategoriesChart } from "./ExpensesMacroCategoriesChart";
import { ExpensesCategoriesChart } from "./ExpensesCategoriesChart";
import { ExpensesSupplierChart } from "./ExpensesSupplierChart";

export default function BudgetingOverview() {
  const { selectedSalon } = useSalon();
  const [dismissedSalon, setDismissedSalon] = useState<string | null>(null);
  const isWarningVisible = dismissedSalon !== selectedSalon;

  const getWarningMessage = () => {
    switch (selectedSalon) {
      case "Style Studio":
        return `Warning – At Salon "Style Studio" you are about to exceed 70% of your budget.`;
      case "Chic Hair & Beauty":
        return `Warning – At Salon "Chic Hair & Beauty" you have reached 92% of your monthly budget allocation.`;
      case "Glamour Beauty":
      case "All Salons":
      default:
        return `Warning – At Salon "Glamour Beauty" you are about to exceed 85% of your budget.`;
    }
  };

  const handleExport = (format: string) => {
    alert(`Exporting budgeting overview as ${format.toUpperCase()}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white px-6 py-4.5 rounded-xl border border-slate-100 shadow-sm gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
            Overview
          </h1>
        </div>

        {/* Export Dropdown */}
        <div className="w-full sm:w-48">
          <CustomSelect
            value="Export Report"
            options={["PDF", "CSV"]}
            onChange={(val) => handleExport(val.toLowerCase())}
          />
        </div>
      </div>

      {isWarningVisible && (
        <div className="relative animate-in fade-in duration-200">
          <CustomAlert
            icon={AlertTriangle}
            iconColor="#eab308"
            bgColor="#fef9c3"
            borderColor="#fde047"
            textColor="#a16207"
          >
            <div className="flex items-center justify-between w-full">
              <span>{getWarningMessage()}</span>
            </div>
          </CustomAlert>
          <CustomCloseButton
            onClick={() => setDismissedSalon(selectedSalon)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg text-[#a16207] hover:bg-[#fde047]/50 transition-colors cursor-pointer"
          />
        </div>
      )}
      <BudgetingKPICards />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-6">
          <TotalMonthlyExpensesChart />
        </div>
        <div className="xl:col-span-6">
          <UpcomingPayments />
        </div>
      </div>
      <DailySpendingTrendsChart />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-6">
          <SalonExpensesChart />
        </div>
        <div className="xl:col-span-6">
          <PaymentMethodsChart />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-6">
          <ExpensesMacroCategoriesChart />
        </div>
        <div className="xl:col-span-6">
          <ExpensesCategoriesChart />
        </div>
      </div>
      <ExpensesSupplierChart />
      <LatestTransactions />
    </div>
  );
}
