"use client";

import React, { useState } from "react";
import YearSelect from "@/components/customComponent/YearSelect";
import CustomExportButton from "@/components/customComponent/CustomExportButton";
import ExportModal from "@/components/modal/ExportModal";
import {
  distributionBrackets,
  getDistributionData,
  DISTRIBUTION_Y_MAX,
  SVG_WIDTH,
  SVG_HEIGHT,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
} from "./data";

export default function SalaryDistributionChart() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const distributionValues = getDistributionData(selectedYear);

  const chartWidth = SVG_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = SVG_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Salary Distribution
          </h3>
          <span className="text-[10px] text-slate-400 font-medium">
            Last 12 Months
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end">
          <YearSelect
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />
          <CustomExportButton
            label="Export Data"
            variant="outline"
            onClick={() => setIsExportOpen(true)}
          />
        </div>
      </div>

      {/* Distribution Bar Chart SVG */}
      <div className="relative flex-1 min-h-[220px]">
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        >
          {/* Grid Lines */}
          {[0, 4, 8, 12, DISTRIBUTION_Y_MAX].map((tick, idx) => {
            const y =
              PADDING_TOP +
              chartHeight -
              (tick / DISTRIBUTION_Y_MAX) * chartHeight;
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
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {distributionValues.map((val, idx) => {
            const groupWidth = chartWidth / distributionValues.length;
            const barWidth = 14;
            const x =
              PADDING_LEFT + idx * groupWidth + (groupWidth - barWidth) / 2;
            const y =
              PADDING_TOP +
              chartHeight -
              (val / DISTRIBUTION_Y_MAX) * chartHeight;
            const h = (val / DISTRIBUTION_Y_MAX) * chartHeight;
            const isHovered = activeBarIndex === idx;

            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setActiveBarIndex(idx)}
                onMouseLeave={() => setActiveBarIndex(null)}
              >
                <rect
                  x={PADDING_LEFT + idx * groupWidth}
                  y={PADDING_TOP}
                  width={groupWidth}
                  height={chartHeight}
                  fill="transparent"
                />
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={h}
                  rx="4"
                  fill={isHovered ? "#3b5bdb" : "#5c7cfa"}
                  className="transition-colors duration-150"
                />
                <text
                  x={PADDING_LEFT + idx * groupWidth + groupWidth / 2}
                  y={SVG_HEIGHT - 10}
                  textAnchor="middle"
                  className={`text-[9px] font-bold transition-colors duration-200 ${
                    isHovered ? "fill-slate-700" : "fill-slate-400"
                  }`}
                >
                  {distributionBrackets[idx]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {activeBarIndex !== null && (
          <div
            style={{
              left: `${((PADDING_LEFT + activeBarIndex * (chartWidth / distributionValues.length) + chartWidth / distributionValues.length / 2) / SVG_WIDTH) * 100}%`,
              top: `${((PADDING_TOP + chartHeight - (distributionValues[activeBarIndex] / DISTRIBUTION_Y_MAX) * chartHeight) / SVG_HEIGHT) * 100 - 15}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-full bg-slate-800 text-white text-[10px] p-2.5 rounded-xl shadow-md z-10 pointer-events-none whitespace-nowrap border border-slate-700 font-medium"
          >
            <div className="font-bold text-slate-300">
              {distributionBrackets[activeBarIndex]}
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5c7cfa]" />
              Salaries:{" "}
              <span className="font-bold text-white">
                {distributionValues[activeBarIndex]} employees
              </span>
            </div>
          </div>
        )}
      </div>

      {isExportOpen && (
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          title="Salary Distribution Analytics"
        />
      )}
    </div>
  );
}
