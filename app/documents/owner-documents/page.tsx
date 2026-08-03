"use client";

import React from "react";
import PageHeader from "@/components/customComponent/PageHeader";
import { AlertCircle, Compass } from "lucide-react";

export default function OwnerDocumentsPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PageHeader
        title="Owner Documents"
        description="Access and manage corporate documents, licenses, and ownership agreements."
      />

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 mt-8">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand animate-pulse">
          <Compass size={32} />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-800">
            Page Design Pending
          </h2>
          <p className="text-sm font-medium text-slate-500 max-w-md">
            This design was missed in Figma, but we will implement it later
            after analyzing the specific content and document types required for
            this page.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-semibold text-slate-600">
          <AlertCircle size={16} className="text-amber-500" />
          <span>Under Construction • Accountant Portal</span>
        </div>
      </div>
    </main>
  );
}
