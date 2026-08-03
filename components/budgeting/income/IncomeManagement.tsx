"use client";

import React from "react";
import { initialKpis } from "./data";
import IncomeKPICards from "./IncomeKPICards";
import {
  RevenueDetailModal,
  AverageReceiptAnalysisModal,
  CashierClosureModal,
} from "./IncomeModals";
import {
  EmployeePerformanceChart,
  Last7DaysTrendsChart,
  MostRequestedServicesChart,
  RevenueDistributionChart,
} from "./IncomeCharts";
import IncomeTable from "./IncomeTable";
import IncomeFilters from "./IncomeFilters";
import { useIncomeManagement } from "./hooks/useIncomeManagement";

export default function IncomeManagement() {
  const {
    selectedDate,
    setSelectedDate,
    selectedEmployee,
    setSelectedEmployee,
    selectedService,
    setSelectedService,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    activeModal,
    selectedClosure,
    handleOpenRevenueModal,
    handleOpenAverageModal,
    handleOpenClosureModal,
    handleCloseModal,
  } = useIncomeManagement();

  return (
    <div className="space-y-6">
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
            Income & Revenue
          </h1>
        </div>

        <IncomeFilters
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />
      </div>

      <IncomeKPICards
        selectedDate={selectedDate}
        selectedEmployee={selectedEmployee}
        selectedService={selectedService}
        selectedPaymentMethod={selectedPaymentMethod}
        onOpenRevenueModal={handleOpenRevenueModal}
        onOpenAverageModal={handleOpenAverageModal}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Last7DaysTrendsChart filter={selectedDate} />
        <EmployeePerformanceChart filter={selectedEmployee} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MostRequestedServicesChart filter={selectedService} />
        <RevenueDistributionChart filter={selectedPaymentMethod} />
      </div>

      <IncomeTable
        selectedDate={selectedDate}
        selectedEmployee={selectedEmployee}
        selectedService={selectedService}
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectClosure={handleOpenClosureModal}
      />

      <RevenueDetailModal
        isOpen={activeModal === "revenue"}
        onClose={handleCloseModal}
        totalRevenue={initialKpis.totalRevenue}
        uniqueCustomers={initialKpis.uniqueCustomers}
      />

      <AverageReceiptAnalysisModal
        isOpen={activeModal === "average"}
        onClose={handleCloseModal}
        averageReceipt={initialKpis.averageReceipt}
      />

      <CashierClosureModal
        isOpen={activeModal === "closure"}
        onClose={handleCloseModal}
        closure={selectedClosure}
      />
    </div>
  );
}
