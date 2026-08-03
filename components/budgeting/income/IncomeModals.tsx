"use client";

import React from "react";
import {
  X,
  CreditCard,
  TrendingUp,
  FileText,
  AlertCircle,
  Eye,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CashierClosureRow } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface RevenueDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalRevenue: number;
  uniqueCustomers: number;
}

export function RevenueDetailModal({
  isOpen,
  onClose,
  totalRevenue,
  uniqueCustomers,
}: RevenueDetailModalProps) {
  if (!isOpen) return null;

  // Mock subvalues for display
  const receiptsCount = totalRevenue > 0 ? Math.floor(totalRevenue / 42.5) : 0;
  const awaitingPayment = totalRevenue > 0 ? 5 : 0;
  const receiptToIssue = totalRevenue > 0 ? 2 : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 flex justify-center items-start sm:items-center py-6 sm:py-10 animate-in fade-in">
      <div className="bg-white max-w-3xl w-full rounded-2xl border border-slate-100 shadow-2xl p-6 relative flex flex-col gap-6 animate-in zoom-in-95 duration-200 my-auto">
        {/* Header */}
        <div className="flex items-start justify-between text-left">
          <div>
            <h2 className="text-base font-black text-slate-800 tracking-tight">
              Revenue Detail
            </h2>
            <p className="text-xs font-bold text-slate-400 mt-0.5">
              Complete analysis of salon revenue
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* 1. Accounted Revenue Card */}
        <div className="bg-[#e6fcf5]/30 border border-[#c3fae8] rounded-2xl p-5 flex flex-col gap-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0ca678] text-white shadow-sm">
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-800">
                  Accounted Revenue
                </h4>
                <p className="text-[10px] font-bold text-slate-400">
                  Entries recorded with printed receipt and completed payment
                </p>
              </div>
            </div>
            <span className="text-[#0ca678] text-3xl font-black shrink-0 sm:text-right">
              €{" "}
              {totalRevenue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-[#c3fae8]/50 p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Number of Receipts
              </span>
              <span className="text-2xl font-black text-[#0ca678]">
                {receiptsCount}
              </span>
            </div>
            <div className="bg-white rounded-xl border border-[#c3fae8]/50 p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Unique Customers
              </span>
              <span className="text-2xl font-black text-[#0ca678]">
                {uniqueCustomers}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Credit Income Card */}
        <div className="bg-[#fff0f6]/30 border border-[#ffdeeb] rounded-2xl p-5 flex flex-col gap-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e64980] text-white shadow-sm">
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-800">
                  Credit Income
                </h4>
                <p className="text-[10px] font-bold text-slate-400 leading-snug max-w-md">
                  Services provided but not yet paid for or for which a receipt
                  has yet to be issued. Includes deferred payments, advance
                  payments, and services pending payment.
                </p>
              </div>
            </div>
            <span className="text-[#e64980] text-3xl font-black shrink-0 sm:text-right">
              € 0
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-[#ffdeeb]/50 p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Awaiting Payment
              </span>
              <span className="text-2xl font-black text-[#e64980]">
                {awaitingPayment}
              </span>
            </div>
            <div className="bg-white rounded-xl border border-[#ffdeeb]/50 p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Receipt to Issue
              </span>
              <span className="text-2xl font-black text-[#e64980]">
                {receiptToIssue}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Total Revenue Card */}
        <div className="bg-[#f0f2ff]/30 border border-[#d0ebff] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5c60f5] text-white shadow-sm">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-black text-slate-800">
              Total Revenue (Accounted + Credit)
            </span>
          </div>
          <span className="text-[#5c60f5] text-3xl font-black shrink-0 sm:text-right">
            €{" "}
            {totalRevenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* Bottom Disclaimer */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-left">
          <p className="text-[10px] font-semibold text-slate-400 leading-relaxed">
            <span className="text-slate-500 font-extrabold">Note:</span>{" "}
            Accounted revenue represents actual and documented revenue. Credit
            revenue requires follow-up to complete the collection cycle and tax
            documentation.
          </p>
        </div>
      </div>
    </div>
  );
}

interface AverageReceiptAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  averageReceipt: number;
}

export function AverageReceiptAnalysisModal({
  isOpen,
  onClose,
  averageReceipt,
}: AverageReceiptAnalysisModalProps) {
  if (!isOpen) return null;

  // Chart dataset matching double bars + media line
  const chartData = {
    labels: [
      "May 2024",
      "Jun 2024",
      "Jul 2024",
      "Aug 2024",
      "Sep 2024",
      "Oct 2024",
    ],
    datasets: [
      {
        type: "bar" as const,
        label: "Minimum",
        data: [38, 38, 38, 38, 38, 38],
        backgroundColor: "#fcc419", // yellow
        borderRadius: 3,
        borderSkipped: false,
        barThickness: 10,
      },
      {
        type: "bar" as const,
        label: "Maximum",
        data: [67, 67, 67, 67, 67, 67],
        backgroundColor: "#0ca678", // green
        borderRadius: 3,
        borderSkipped: false,
        barThickness: 10,
      },
      {
        type: "line" as const,
        label: "Media",
        data: [20, 32, 45, 36, 42, 45],
        borderColor: "#5c60f5", // blue
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#5c60f5",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#94a3b8",
          font: { size: 9, weight: 700 },
        },
      },
      y: {
        min: 0,
        max: 120,
        grid: { color: "#f8fafc" },
        border: { display: false },
        ticks: {
          stepSize: 30,
          color: "#94a3b8",
          font: { size: 9, weight: 700 },
          callback: (val: any) => `€ ${val}`,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        padding: 8,
        cornerRadius: 6,
      },
    },
  };

  const monthlyDetails = [
    { period: "May 2024", media: 28, min: 28, max: 28, service: "Hair Cut" },
    { period: "Jun 2024", media: 42, min: 28, max: 28, service: "Hair Cut" },
    { period: "Jul 2024", media: 40, min: 28, max: 28, service: "Hair Cut" },
    { period: "Aug 2024", media: 38, min: 28, max: 28, service: "Hair Cut" },
    { period: "Sep 2024", media: 45, min: 28, max: 28, service: "Hair Cut" },
    { period: "Oct 2024", media: 45, min: 28, max: 28, service: "Hair Cut" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 flex justify-center items-start sm:items-center py-6 sm:py-10 animate-in fade-in">
      <div className="bg-white max-w-4xl w-full rounded-2xl border border-slate-100 shadow-2xl p-6 relative flex flex-col gap-6 animate-in zoom-in-95 duration-200 my-auto">
        {/* Header */}
        <div className="flex items-start justify-between text-left">
          <div>
            <h2 className="text-base font-black text-slate-800 tracking-tight">
              Average Receipt Analysis
            </h2>
            <p className="text-xs font-bold text-slate-400 mt-0.5">
              Historical trend and detailed statistics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="bg-[#f0f2ff]/30 border border-[#d0ebff] rounded-xl p-4">
            <h4 className="text-2xl font-black text-[#5c60f5]">
              €{" "}
              {averageReceipt.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h4>
            <span className="text-[10px] font-bold text-slate-400 mt-1 block">
              Current Receipt
            </span>
          </div>
          <div className="bg-[#e6fcf5]/30 border border-[#c3fae8] rounded-xl p-4">
            <h4 className="text-2xl font-black text-[#0ca678]">€ 67</h4>
            <span className="text-[10px] font-bold text-slate-400 mt-1 block">
              Maximum Period
            </span>
          </div>
          <div className="bg-[#fff0f6]/30 border border-[#ffdeeb] rounded-xl p-4">
            <h4 className="text-2xl font-black text-[#e64980]">€ 50</h4>
            <span className="text-[10px] font-bold text-slate-400 mt-1 block">
              Minimum Period
            </span>
          </div>
          <div className="bg-[#e0f2fe]/30 border border-[#bae6fd] rounded-xl p-4">
            <h4 className="text-2xl font-black text-[#0284c7]">+15.5%</h4>
            <span className="text-[10px] font-bold text-slate-400 mt-1 block">
              Trend
            </span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="border border-slate-100 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-slate-800 text-left">
              Average Receipt Trend
            </h3>
            <div className="border border-slate-200 bg-white text-slate-700 text-[10px] font-bold px-3 py-1 rounded-lg">
              Last 3 months
            </div>
          </div>

          <div className="h-64 w-full relative">
            <Bar data={chartData as any} options={chartOptions as any} />
          </div>

          {/* Legends */}
          <div className="flex justify-center gap-5 pt-2">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
              <span className="h-2.5 w-2.5 rounded-full bg-[#fcc419]" />
              <span>Minimum</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0ca678]" />
              <span>Maximum</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
              <span className="h-0.5 w-4 bg-[#5c60f5] relative flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#5c60f5]" />
              </span>
              <span>Media</span>
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                    Period
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                    Media
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                    Minimum
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                    Maximum
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                    N. Transactions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {monthlyDetails.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-3.5 text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {item.period}
                    </td>
                    <td className="px-6 py-3.5 whitespace-nowrap">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg border bg-[#e8f4fd] text-[#1971c2] border-[#d0ebff]/50">
                        € {item.media}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 whitespace-nowrap">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg border bg-amber-50 text-amber-600 border-amber-100/50">
                        € {item.min}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 whitespace-nowrap">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg border bg-emerald-50 text-emerald-600 border-emerald-100/50">
                        € {item.max}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-xs font-bold text-slate-500 whitespace-nowrap">
                      {item.service}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CashierClosureModalProps {
  isOpen: boolean;
  onClose: () => void;
  closure: CashierClosureRow | null;
}

export function CashierClosureModal({
  isOpen,
  onClose,
  closure,
}: CashierClosureModalProps) {
  if (!isOpen || !closure) return null;

  const isRegular = closure.status === "Regular";

  // Mock list of receipts for display
  const receiptsList = [
    {
      hour: "10:30",
      client: {
        name: "Jane Doe",
        phone: "+39 333 1234567",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      },
      employee: {
        name: "Sofia Bianchi",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      },
      services: "Women's Cut, Fold",
      amount: 600,
    },
    {
      hour: "11:00",
      client: {
        name: "John Smith",
        phone: "+39 333 1234567",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      },
      employee: {
        name: "Marco Esposito",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
      },
      services: "Women's Cut, Fold",
      amount: 600,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 flex justify-center items-start sm:items-center py-6 sm:py-10 animate-in fade-in">
      <div className="bg-white max-w-3xl w-full rounded-2xl border border-slate-100 shadow-2xl p-6 relative flex flex-col gap-6 animate-in zoom-in-95 duration-200 my-auto">
        {/* Header */}
        <div className="flex items-start justify-between text-left">
          <div className="space-y-2">
            <h2 className="text-base font-black text-slate-800 tracking-tight">
              Cashier's Office Closes - October 4, 2025
            </h2>
            <div className="flex">
              {isRegular ? (
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg border bg-emerald-50 text-emerald-600 border-emerald-100/50 flex items-center gap-1">
                  Regular Closing ✓
                </span>
              ) : (
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg border bg-pink-50 text-pink-600 border-pink-100/50 flex items-center gap-1">
                  Irregular Closure ⚠
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* 3 Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col gap-1">
            <h4 className="text-2xl font-black text-slate-800">
              € {closure.taxClosure}
            </h4>
            <span className="text-[10px] font-bold text-slate-400">
              Tax Closure
            </span>
          </div>

          <div className="bg-[#f0f2ff]/30 border border-[#d0ebff] p-4 rounded-xl flex flex-col gap-1 text-[#5c60f5]">
            <h4 className="text-2xl font-black">
              € {closure.platformReceipts}
            </h4>
            <span className="text-[10px] font-bold text-slate-400">
              Platform Receipts
            </span>
          </div>

          {isRegular ? (
            <div className="bg-[#e6fcf5]/30 border border-[#c3fae8] p-4 rounded-xl flex flex-col gap-1 text-[#0ca678]">
              <h4 className="text-2xl font-black">€ {closure.difference}</h4>
              <span className="text-[10px] font-bold text-slate-400">
                Difference
              </span>
            </div>
          ) : (
            <div className="bg-[#fff0f6]/30 border border-[#ffdeeb] p-4 rounded-xl flex flex-col gap-1 text-[#e64980]">
              <h4 className="text-2xl font-black">+ € {closure.difference}</h4>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span>Difference</span>
                <span className="text-[#e64980]">Tax surplus</span>
              </div>
            </div>
          )}
        </div>

        {/* Warning callout banner for irregular closures */}
        {!isRegular && (
          <div className="bg-[#fff0f6] border border-[#ffdeeb]/40 rounded-xl p-4 text-[#e64980] text-[11px] font-bold flex items-start gap-3 text-left leading-relaxed">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-[#e64980]" />
            <p>
              Warning: Irregularity Detected — The tax closing date does not
              match the receipts recorded on the platform. Carefully check all
              the day's transactions and tax documents.
            </p>
          </div>
        )}

        {/* Receipts segment */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-800 text-left">
            Receipts of the Day ( {isRegular ? receiptsList.length : 0} )
          </h3>

          {isRegular ? (
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-slate-100">
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Hour
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Client
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Employee
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Services
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {receiptsList.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-3 text-xs font-semibold text-slate-500 whitespace-nowrap">
                          {row.hour}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <img
                              src={row.client.avatar}
                              alt={row.client.name}
                              className="h-7 w-7 rounded-full object-cover shrink-0 bg-slate-50"
                            />
                            <div className="flex flex-col text-left">
                              <span className="text-xs font-extrabold text-slate-700 leading-tight">
                                {row.client.name}
                              </span>
                              <span className="text-[9px] font-bold text-slate-400">
                                {row.client.phone}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <img
                              src={row.employee.avatar}
                              alt={row.employee.name}
                              className="h-7 w-7 rounded-full object-cover shrink-0 bg-slate-50"
                            />
                            <span className="text-xs font-extrabold text-slate-700">
                              {row.employee.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-xs font-bold text-slate-500 whitespace-nowrap">
                          {row.services}
                        </td>
                        <td className="px-6 py-3 text-xs font-black text-[#0ca678] whitespace-nowrap">
                          € {row.amount}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <button className="p-1 rounded-md text-[#5c60f5] hover:bg-slate-50 transition-colors cursor-pointer">
                            <Eye size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#f8fafc]">
                      <td
                        colSpan={4}
                        className="px-6 py-3.5 text-xs font-bold text-slate-500 text-left"
                      >
                        Total
                      </td>
                      <td className="px-6 py-3.5 text-xs font-black text-[#5c60f5] text-left">
                        € 1200
                      </td>
                      <td className="px-6 py-3.5" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="border border-slate-100 rounded-xl py-12 flex flex-col items-center justify-center text-center gap-3">
              <FileText size={40} className="text-slate-400 shrink-0" />
              <span className="text-xs font-extrabold text-slate-500">
                No receipt recorded for this date
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
