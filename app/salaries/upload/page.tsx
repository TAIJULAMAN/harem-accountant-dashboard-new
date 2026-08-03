import React from "react";
import PageHeader from "@/components/customComponent/PageHeader";
import SalaryUploadFlow from "@/components/salaries/newUpload/SalaryUploadFlow";

export default function SalaryUploadPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader
        title="New Salary Upload"
        description="Upload pay slips, verify extracted data, and submit for approval."
      />
      <SalaryUploadFlow />
    </main>
  );
}
