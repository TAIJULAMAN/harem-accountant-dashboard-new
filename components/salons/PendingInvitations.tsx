"use client";

import React, { useState } from "react";
import Image from "next/image";
import InvitationCard, { type Invitation } from "./InvitationCard";
import { initialInvitations } from "./data";

export default function PendingInvitations() {
  const [invitations, setInvitations] =
    useState<Invitation[]>(initialInvitations);

  const handleAccept = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
  };

  const handleDecline = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
  };

  return (
    <div className="space-y-5">
      {/* Page Title Card */}
      <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-slate-700">
            Pending Invitations
          </h2>
          {invitations.length > 0 && (
            <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full bg-brand text-white text-xs font-bold">
              {invitations.length}
            </span>
          )}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-h-[220px]">
        {invitations.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <Image
              src="/icons/PendingInvitations.svg"
              alt="No pending invitations"
              width={56}
              height={56}
            />
            <p className="text-sm text-slate-500">
              There are no pending invitations
            </p>
          </div>
        ) : (
          /* Invitation Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {invitations.map((inv) => (
              <InvitationCard
                key={inv.id}
                invitation={inv}
                onAccept={() => handleAccept(inv.id)}
                onDecline={() => handleDecline(inv.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
