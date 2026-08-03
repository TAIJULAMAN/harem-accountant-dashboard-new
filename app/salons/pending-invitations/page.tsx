"use client";

import React from "react";
import PendingInvitations from "@/components/salons/PendingInvitations";

export default function PendingInvitationsPage() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <PendingInvitations />
    </main>
  );
}
