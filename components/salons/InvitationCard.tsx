"use client";

import React from "react";
import { Store, Check, X } from "lucide-react";

export interface Invitation {
  id: string;
  salonName: string;
  senderName: string;
  message: string;
  sentDate: string;
}

interface InvitationCardProps {
  invitation: Invitation;
  onAccept: () => void;
  onDecline: () => void;
}

export default function InvitationCard({
  invitation,
  onAccept,
  onDecline,
}: InvitationCardProps) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Salon Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark shadow-sm">
          <Store size={18} className="text-white" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">
            {invitation.salonName}
          </p>
          <p className="text-xs text-slate-400 truncate">
            from {invitation.senderName}
          </p>
        </div>
      </div>

      {/* Message */}
      <p className="text-xs text-slate-500 leading-relaxed">
        {invitation.message}
      </p>

      {/* Sent Date */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs text-slate-400">Sent</span>
        <span className="text-xs font-medium text-slate-600">
          {invitation.sentDate}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onAccept}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-[#16CDC7] bg-[#ECFDFD] hover:bg-teal-100 transition-colors duration-150 cursor-pointer"
        >
          <Check size={13} strokeWidth={2.5} />
          Accept
        </button>
        <button
          onClick={onDecline}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-[#FF6692] bg-[#FFE5ED] hover:bg-rose-100 transition-colors duration-150 cursor-pointer"
        >
          <X size={13} strokeWidth={2.5} />
          Decline
        </button>
      </div>
    </div>
  );
}
