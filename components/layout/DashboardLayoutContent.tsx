"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSalon } from "@/context/SalonContext";

export default function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { selectedSalon, setSelectedSalon } = useSalon();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          selectedSalon={selectedSalon}
          onSalonChange={setSelectedSalon}
        />
        <div className="flex flex-1 flex-col overflow-hidden rounded-tl-3xl bg-bg-main shadow-inner sm:rounded-tl-[2rem] border-l border-t border-slate-100/50">
          {children}
        </div>
      </div>
    </div>
  );
}
