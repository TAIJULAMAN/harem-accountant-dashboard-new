import React from "react";
import EmployeeNotices from "@/components/documents/employee-notices/EmployeeNotices";

export default function EmployeeNoticesPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <EmployeeNotices />
    </main>
  );
}
