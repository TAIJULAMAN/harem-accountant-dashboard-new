"use client";

import React, { useState } from "react";
import YearSelect from "@/components/customComponent/YearSelect";
import CustomExportButton from "@/components/customComponent/CustomExportButton";
import ExportModal from "@/components/modal/ExportModal";
import {
  payrollMonths,
  getExpendituresData,
  EXPENDITURES_Y_MAX,
  SVG_WIDTH,
  SVG_HEIGHT,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
} from "./data";

export default function SalaryExpendituresChart() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeAreaIndex, setActiveAreaIndex] = useState<number | null>(4);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const payrollValues = getExpendituresData(selectedYear);

  const chartWidth = SVG_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = SVG_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

  const areaPoints = payrollValues.map((val, idx) => {
    const x = PADDING_LEFT + (idx / (payrollValues.length - 1)) * chartWidth;
    const y =
      PADDING_TOP + chartHeight - (val / EXPENDITURES_Y_MAX) * chartHeight;
    return { x, y, value: val, label: payrollMonths[idx] };
  });

  const createSmoothPath = () => {
    if (areaPoints.length === 0) return "";
    let path = `M ${areaPoints[0].x} ${areaPoints[0].y}`;
    for (let i = 0; i < areaPoints.length - 1; i++) {
      const curr = areaPoints[i];
      const next = areaPoints[i + 1];
      const cpX1 = curr.x + chartWidth / (payrollValues.length - 1) / 3;
      const cpY1 = curr.y;
      const cpX2 = next.x - chartWidth / (payrollValues.length - 1) / 3;
      const cpY2 = next.y;
      path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }
    return path;
  };

  const linePath = createSmoothPath();
  const fillPath = `${linePath} L ${areaPoints[areaPoints.length - 1].x} ${PADDING_TOP + chartHeight} L ${areaPoints[0].x} ${PADDING_TOP + chartHeight} Z`;

  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Monthly Salary Expenditures
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

      {/* Area Chart SVG */}
      <div className="relative flex-1 min-h-[220px]">
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        >
          <defs>
            <linearGradient
              id="expendituresGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#0ca678" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0ca678" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid Lines */}
          {[0, 3500, 7000, 10500, EXPENDITURES_Y_MAX].map((tick, idx) => {
            const y =
              PADDING_TOP +
              chartHeight -
              (tick / EXPENDITURES_Y_MAX) * chartHeight;
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
                  {tick === 0 ? "0" : tick >= 1000 ? `${tick / 1000}k` : tick}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={fillPath} fill="url(#expendituresGradient)" />

          {/* Smooth Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#0ca678"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Hover Guide */}
          {activeAreaIndex !== null && (
            <line
              x1={areaPoints[activeAreaIndex].x}
              y1={PADDING_TOP}
              x2={areaPoints[activeAreaIndex].x}
              y2={PADDING_TOP + chartHeight}
              stroke="#cbd5e1"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )}

          {/* Handles */}
          {areaPoints.map((pt, idx) => (
            <g key={idx}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="14"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActiveAreaIndex(idx)}
              />
              <circle
                cx={pt.x}
                cy={pt.y}
                r={activeAreaIndex === idx ? "5" : "3.5"}
                fill={activeAreaIndex === idx ? "#0ca678" : "#ffffff"}
                stroke="#0ca678"
                strokeWidth={activeAreaIndex === idx ? "2.5" : "1.5"}
                className="transition-all duration-150 pointer-events-none"
              />
            </g>
          ))}

          {/* X Axis */}
          {areaPoints.map((pt, idx) => (
            <text
              key={idx}
              x={pt.x}
              y={SVG_HEIGHT - 10}
              textAnchor="middle"
              className={`text-[10px] font-semibold transition-colors duration-200 ${
                activeAreaIndex === idx
                  ? "fill-slate-700 font-bold"
                  : "fill-slate-400"
              }`}
            >
              {pt.label}
            </text>
          ))}
        </svg>

        {/* Tooltip */}
        {activeAreaIndex !== null && (
          <div
            style={{
              left: `${(areaPoints[activeAreaIndex].x / SVG_WIDTH) * 100}%`,
              top: `${(areaPoints[activeAreaIndex].y / SVG_HEIGHT) * 100 - 15}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-full bg-slate-800 text-white text-[10px] p-2 rounded-xl shadow-md z-10 pointer-events-none whitespace-nowrap border border-slate-700 font-medium"
          >
            <div className="font-bold text-slate-300">
              {payrollMonths[activeAreaIndex]}, {selectedYear}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0ca678]" />
              Total{" "}
              <span className="font-bold text-white">
                €{(payrollValues[activeAreaIndex] / 1000).toFixed(1)}K
              </span>
            </div>
          </div>
        )}
      </div>

      {isExportOpen && (
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          title="Monthly Salary Expenditures Analytics"
        />
      )}
    </div>
  );
}
