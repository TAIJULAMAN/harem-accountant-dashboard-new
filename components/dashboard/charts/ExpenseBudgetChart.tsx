"use client";

import React, { useState } from "react";
import YearSelect from "@/components/customComponent/YearSelect";
import CustomExportButton from "@/components/customComponent/CustomExportButton";
import ExportModal from "@/components/modal/ExportModal";
import {
  expenseCategories,
  getExpenseBudgetData,
  SVG_WIDTH,
  SVG_HEIGHT,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  Y_MAX,
} from "./data";

interface ExpenseBudgetChartProps {
  selectedSalon: string;
}

export default function ExpenseBudgetChart({
  selectedSalon,
}: ExpenseBudgetChartProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const barData = getExpenseBudgetData(selectedSalon, selectedYear);
  const categories = expenseCategories;

  const chartWidth = SVG_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = SVG_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Expense vs Budget
          </h3>
          <span className="text-[10px] text-slate-400 font-medium">
            Last 12 Months
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end">
          {/* Year Dropdown Select */}
          <YearSelect
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />

          {/* Export Button */}
          <CustomExportButton
            label="Export Data"
            variant="outline"
            onClick={() => setIsExportOpen(true)}
          />
        </div>
      </div>

      {/* SVG Bar Chart */}
      <div className="relative flex-1 min-h-[220px]">
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        >
          {/* Grid Lines (Horizontal) */}
          {[0, 15000, 30000, 45000, 60000].map((tick, idx) => {
            const y = PADDING_TOP + chartHeight - (tick / Y_MAX) * chartHeight;
            return (
              <g key={idx}>
                <line
                  x1={PADDING_LEFT}
                  y1={y}
                  x2={SVG_WIDTH - PADDING_RIGHT}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x={PADDING_LEFT - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px] fill-slate-400 font-semibold"
                >
                  {tick === 0 ? "0" : `${tick / 1000}k`}
                </text>
              </g>
            );
          })}

          {/* Bar Drawing */}
          {barData.map((data, idx) => {
            const groupWidth = chartWidth / barData.length;
            const xGroupStart = PADDING_LEFT + idx * groupWidth;

            const barWidth = 10;
            const gap = 4;

            const budgetX =
              xGroupStart + (groupWidth - (barWidth * 2 + gap)) / 2;
            const expenseX = budgetX + barWidth + gap;

            const budgetY =
              PADDING_TOP + chartHeight - (data.budget / Y_MAX) * chartHeight;
            const expenseY =
              PADDING_TOP + chartHeight - (data.expense / Y_MAX) * chartHeight;
            const budgetH = (data.budget / Y_MAX) * chartHeight;
            const expenseH = (data.expense / Y_MAX) * chartHeight;

            const isHovered = activeBarIndex === idx;

            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setActiveBarIndex(idx)}
                onMouseLeave={() => setActiveBarIndex(null)}
              >
                <rect
                  x={xGroupStart}
                  y={PADDING_TOP}
                  width={groupWidth}
                  height={chartHeight}
                  fill="transparent"
                />

                {/* Budget Bar */}
                <rect
                  x={budgetX}
                  y={budgetY}
                  width={barWidth}
                  height={budgetH}
                  rx="3"
                  fill={isHovered ? "#4f46e5" : "#5c60f5"}
                  className="transition-colors duration-150"
                />

                {/* Expense Bar */}
                <rect
                  x={expenseX}
                  y={expenseY}
                  width={barWidth}
                  height={expenseH}
                  rx="3"
                  fill={isHovered ? "#db2777" : "#e64980"}
                  className="transition-colors duration-150"
                />

                {/* X Axis Label */}
                <text
                  x={xGroupStart + groupWidth / 2}
                  y={SVG_HEIGHT - 10}
                  textAnchor="middle"
                  className={`text-[10px] font-semibold transition-colors duration-200 ${
                    isHovered ? "fill-slate-700 font-bold" : "fill-slate-400"
                  }`}
                >
                  {categories[idx]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Interactive Tooltip */}
        {activeBarIndex !== null && (
          <div
            style={{
              left: `${((PADDING_LEFT + activeBarIndex * (chartWidth / barData.length) + chartWidth / barData.length / 2) / SVG_WIDTH) * 100}%`,
              top: `${
                (Math.min(
                  PADDING_TOP +
                    chartHeight -
                    (barData[activeBarIndex].budget / Y_MAX) * chartHeight,
                  PADDING_TOP +
                    chartHeight -
                    (barData[activeBarIndex].expense / Y_MAX) * chartHeight,
                ) /
                  SVG_HEIGHT) *
                  100 -
                15
              }%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-full bg-slate-800 text-white text-[10px] p-2.5 rounded-xl shadow-md z-10 pointer-events-none whitespace-nowrap border border-slate-700 font-medium"
          >
            <div className="font-bold text-slate-300">
              {categories[activeBarIndex]}
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5c60f5]" />
              Budget:{" "}
              <span className="font-bold text-white">
                €{barData[activeBarIndex].budget.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e64980]" />
              Expense:{" "}
              <span className="font-bold text-white">
                €{barData[activeBarIndex].expense.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="text-[10px] font-bold text-slate-500">Budget</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e64980]" />
          <span className="text-[10px] font-bold text-slate-500">Expense</span>
        </div>
      </div>
      {isExportOpen && (
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          title="Expense vs Budget Analytics"
        />
      )}
    </div>
  );
}
