import React from "react";
import DocumentsOverview from "@/components/documents/overview/DocumentsOverview";

export default function DocumentsOverviewPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <DocumentsOverview />
    </main>
  );
}
