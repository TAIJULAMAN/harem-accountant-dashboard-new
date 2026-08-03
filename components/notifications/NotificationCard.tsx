"use client";

import React from "react";
import { AlertTriangle, CheckCircle2, Info, Trash2 } from "lucide-react";
import { type NotificationItem } from "./data";

interface NotificationCardProps {
  notification: NotificationItem;
  onToggleRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function NotificationCard({
  notification,
  onToggleRead,
  onDelete,
}: NotificationCardProps) {
  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="text-rose-500" size={18} />;
      case "warning":
        return <AlertTriangle className="text-amber-500" size={18} />;
      case "success":
        return <CheckCircle2 className="text-emerald-500" size={18} />;
      case "info":
      default:
        return <Info className="text-indigo-500" size={18} />;
    }
  };

  const getBgClass = (type: NotificationItem["type"]) => {
    switch (type) {
      case "error":
        return "bg-rose-50 border-rose-100/50";
      case "warning":
        return "bg-amber-50/70 border-amber-100/50";
      case "success":
        return "bg-emerald-50 border-emerald-100/50";
      case "info":
      default:
        return "bg-indigo-50/50 border-indigo-100/50";
    }
  };

  return (
    <div
      className={`flex gap-4 rounded-xl border p-4 transition-all relative group
        ${getBgClass(notification.type)}
        ${notification.isRead ? "opacity-75" : "shadow-sm"}
      `}
    >
      {/* Status Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-inner">
        {getIcon(notification.type)}
      </div>

      {/* Content Detail */}
      <div className="flex-1 min-w-0 pr-12">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="text-sm font-bold text-slate-800 leading-snug">
            {notification.title}
          </h4>
          {!notification.isRead && (
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          )}
        </div>
        <p className="text-xs font-semibold text-brand mt-0.5">
          {notification.salon}
        </p>
        <p className="text-xs text-slate-500 mt-1.5 font-medium leading-relaxed">
          {notification.description}
        </p>
        <span className="inline-block text-[10px] font-semibold text-slate-400 mt-2">
          {notification.time}
        </span>
      </div>

      {/* Actions Corner (Read / Delete) */}
      <div className="absolute right-4 top-4 flex gap-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onToggleRead(notification.id)}
          title={notification.isRead ? "Mark as unread" : "Mark as read"}
          className="p-1.5 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-brand hover:border-brand/20 transition-all cursor-pointer"
        >
          <CheckCircle2 size={14} />
        </button>
        <button
          onClick={() => onDelete(notification.id)}
          title="Delete notification"
          className="p-1.5 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-all cursor-pointer"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
