import React from "react";
import NewTaxUpload from "@/components/taxes/new-upload/NewTaxUpload";

export default function NewTaxUploadPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 px-5 space-y-6">
      <NewTaxUpload />
    </main>
  );
}
