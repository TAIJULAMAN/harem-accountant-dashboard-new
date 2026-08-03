"use client";

import React from "react";

interface PageHeaderProps {
  title?: string;
  description?: string;
}

export default function PageHeader({
  title = "Dashboard",
  description = "Overview of your financial approvals, budgets, and compliance warnings.",
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl bg-white px-6 py-4.5">
      <div>
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          {title}
        </h1>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}
