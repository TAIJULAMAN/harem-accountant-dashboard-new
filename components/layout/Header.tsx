"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, ChevronDown, Menu, Check } from "lucide-react";
import UserProfile from "./UserProfile";

interface HeaderProps {
  onMenuClick: () => void;
  selectedSalon: string;
  onSalonChange: (salon: string) => void;
}

export default function Header({
  onMenuClick,
  selectedSalon,
  onSalonChange,
}: HeaderProps) {
  const [salonDropdownOpen, setSalonDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const salonDropdownRef = useRef<HTMLDivElement>(null);

  const salons = [
    "All Salons",
    "Glamour Beauty",
    "Style Studio",
    "Chic Hair & Beauty",
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        salonDropdownRef.current &&
        !salonDropdownRef.current.contains(event.target as Node)
      ) {
        setSalonDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-slate-100 bg-white px-4 sm:px-6 lg:px-8 relative">
      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="absolute inset-x-0 inset-y-0 bg-white z-40 flex items-center px-4 gap-3 animate-in slide-in-from-top duration-150">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/10 bg-slate-50/50"
            />
          </div>
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Search and Mobile Menu Button */}
      <div className="flex flex-1 items-center gap-2 sm:gap-4">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/10 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {/* Mobile Search Icon (only visible on mobile layout) */}
        <div className="sm:hidden">
          <button 
            onClick={() => setMobileSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-50 cursor-pointer"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Salon Selector Dropdown */}
        <div className="relative" ref={salonDropdownRef}>
          <button
            onClick={() => setSalonDropdownOpen(!salonDropdownOpen)}
            className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-white px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer"
          >
            <span className="max-w-[90px] sm:max-w-[150px] md:max-w-none truncate">{selectedSalon}</span>
            <ChevronDown
              size={14}
              className={`text-slate-500 transition-transform duration-200 shrink-0 ${salonDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {salonDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg ring-1 ring-black/5 z-30 transition-all">
              {salons.map((salon) => (
                <button
                  key={salon}
                  onClick={() => {
                    onSalonChange(salon);
                    setSalonDropdownOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-left text-sm transition-colors ${
                    selectedSalon === salon
                      ? "bg-brand/5 text-brand font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{salon}</span>
                  {selectedSalon === salon && <Check size={16} />}
                </button>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
        </Link>
        <UserProfile />
      </div>
    </header>
  );
}
