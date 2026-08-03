"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";
import { useSalon } from "@/context/SalonContext";
import {
  type NotificationItem,
  mockNotifications,
} from "@/components/notifications/data";
import NotificationCard from "@/components/notifications/NotificationCard";
import PageHeader from "@/components/customComponent/PageHeader";

export default function NotificationsPage() {
  const { selectedSalon } = useSalon();
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const [notifications, setNotifications] =
    useState<NotificationItem[]>(mockNotifications);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const toggleReadStatus = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n)),
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    const salonMatch =
      selectedSalon === "All Salons" || n.salon === selectedSalon;
    const readMatch =
      filter === "all" ||
      (filter === "unread" && !n.isRead) ||
      (filter === "read" && n.isRead);
    return salonMatch && readMatch;
  });

  return (
    <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8 space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      <PageHeader
        title="Notifications"
        description="Review and manage your accountant compliance alerts, payroll approvals, and budget status."
      />
      <div className="rounded-xl border border-slate-100 bg-white p-6.5 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex gap-2">
            {(["all", "unread", "read"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`
                  rounded-lg px-4 py-1.5 text-xs font-bold capitalize transition-all border cursor-pointer
                  ${
                    filter === t
                      ? "border-brand text-brand bg-brand/5 font-semibold"
                      : "border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }
                `}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            onClick={markAllAsRead}
            className="flex items-center justify-center gap-1.5 border border-brand bg-white text-brand text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand hover:text-white transition-all shadow-sm cursor-pointer self-start sm:self-auto"
          >
            Mark All as Read
          </button>
        </div>
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notif) => (
              <NotificationCard
                key={notif.id}
                notification={notif}
                onToggleRead={toggleReadStatus}
                onDelete={deleteNotification}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-12 w-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <Bell size={20} />
              </div>
              <p className="text-sm font-semibold text-slate-500">
                No notifications found
              </p>
              <p className="text-xs text-slate-400/80 mt-1">
                Everything is up to date!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
