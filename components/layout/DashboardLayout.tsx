"use client";

import React from "react";
import { SalonProvider } from "@/context/SalonContext";
import DashboardLayoutContent from "./DashboardLayoutContent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SalonProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SalonProvider>
  );
}
