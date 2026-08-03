"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CustomDatePickerProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function CustomDatePicker({
  label,
  value,
  onChange,
  placeholder,
  required,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    if (value) {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return new Date();
  });
  const [prevValue, setPrevValue] = useState(value);

  if (value !== prevValue) {
    setPrevValue(value);
    if (value) {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        setCurrentDate(parsed);
      }
    }
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  // Removed value sync effect to avoid cascading renders warning

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedOutsideContainer =
        containerRef.current && !containerRef.current.contains(target);
      const clickedOutsideDropdown =
        !dropdownRef.current || !dropdownRef.current.contains(target);

      if (clickedOutsideContainer && clickedOutsideDropdown) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // Don't close if scrolling inside the dropdown itself
      if (dropdownRef.current && dropdownRef.current.contains(e.target as Node))
        return;
      setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!isOpen && inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
    setIsOpen(!isOpen);
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDateClick = (day: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    const formatted = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(formatted);
    setIsOpen(false);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="flex flex-col gap-2 relative" ref={containerRef}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">{label}</label>
      )}
      <div
        ref={inputContainerRef}
        className="relative cursor-pointer"
        onClick={toggleDropdown}
      >
        <input
          type="text"
          value={value}
          readOnly
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-colors cursor-pointer pr-10"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <CalendarIcon size={20} />
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute z-[9999] w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3 animate-in fade-in slide-in-from-top-2"
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
          >
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-semibold text-slate-800 text-sm">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-slate-400 py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="w-full aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isSelected =
                  value &&
                  new Date(value).getDate() === day &&
                  new Date(value).getMonth() === currentDate.getMonth() &&
                  new Date(value).getFullYear() === currentDate.getFullYear();

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={(e) => handleDateClick(day, e)}
                    className={`w-full aspect-square flex items-center justify-center text-xs rounded-lg transition-colors
                    ${
                      isSelected
                        ? "bg-[#635BFF] text-white font-medium shadow-sm shadow-[#635BFF]/30"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
