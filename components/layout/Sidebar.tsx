"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  HandCoins,
  ShieldCheck,
  FileText,
  Wallet,
  Store,
  ChevronRight,
  LineChart,
  Upload,
  Clipboard,
  History,
  Users,
  FileSignature,
  DollarSign,
  CreditCard,
  Receipt,
} from "lucide-react";
import Image from "next/image";
import CustomCloseButton from "../customComponent/CustomCloseButton";
import SalonsInvitationsNavlinkIcon from "../icons/SalonsInvitationsNavlinkIcon";
import PendingInvitationsNavlinkIcon from "../icons/PendingInvitationsNavlinkIcon";
import RequestAccessNavlinkIcon from "../icons/RequestAccessNavlinkIcon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const [prevPath, setPrevPath] = useState(pathname);
  const [expandedItem, setExpandedItem] = useState<string | null>(() => {
    if (pathname.startsWith("/salaries")) return "Salaries";
    if (pathname.startsWith("/taxes")) return "Taxes & Compliance";
    if (pathname.startsWith("/documents")) return "Documents";
    if (pathname.startsWith("/budgeting")) return "Budgeting & Finances";
    if (pathname.startsWith("/salons")) return "Salons & Invitations";
    return null;
  });

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setExpandedItem(
      pathname.startsWith("/salaries")
        ? "Salaries"
        : pathname.startsWith("/taxes")
          ? "Taxes & Compliance"
          : pathname.startsWith("/documents")
            ? "Documents"
            : pathname.startsWith("/budgeting")
              ? "Budgeting & Finances"
              : pathname.startsWith("/salons")
                ? "Salons & Invitations"
                : null,
    );
  }

  const toggleExpand = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, hasDropdown: false },
    {
      name: "Salaries",
      icon: HandCoins,
      hasDropdown: true,
      subItems: [
        {
          name: "Overview",
          icon: LineChart,
          path: "/salaries/overview",
          id: "Salaries-Overview",
        },
        {
          name: "New Upload",
          icon: Upload,
          path: "/salaries/upload",
          id: "Salaries-Upload",
        },
        {
          name: "Pending & Declined",
          icon: Clipboard,
          path: "/salaries/pending",
          id: "Salaries-Pending",
        },
        {
          name: "History",
          icon: History,
          path: "/salaries/history",
          id: "Salaries-History",
        },
      ],
    },
    {
      name: "Taxes & Compliance",
      icon: ShieldCheck,
      hasDropdown: true,
      subItems: [
        {
          name: "Overview",
          icon: LineChart,
          path: "/taxes/overview",
          id: "Taxes-Overview",
        },
        {
          name: "New Upload",
          icon: Upload,
          path: "/taxes/new-upload",
          id: "Taxes-Upload",
        },
        {
          name: "Pending & Declined",
          icon: Clipboard,
          path: "/taxes/pending",
          id: "Taxes-Pending",
        },
        {
          name: "History",
          icon: History,
          path: "/taxes/history",
          id: "Taxes-History",
        },
      ],
    },
    {
      name: "Documents",
      icon: FileText,
      hasDropdown: true,
      subItems: [
        {
          name: "Overview",
          icon: LineChart,
          path: "/documents/overview",
          id: "Documents-Overview",
        },
        {
          name: "New Upload",
          icon: Upload,
          path: "/documents/new-upload",
          id: "Documents-Upload",
        },
        {
          name: "Employee Notices",
          icon: Users,
          path: "/documents/employee-notices",
          id: "Documents-EmployeeNotices",
        },
        {
          name: "Contracts",
          icon: FileText,
          path: "/documents/contracts",
          id: "Documents-Contracts",
        },
        {
          name: "Owner Documents",
          icon: FileSignature,
          path: "/documents/owner-documents",
          id: "Documents-OwnerDocuments",
        },
      ],
    },
    {
      name: "Budgeting & Finances",
      icon: Wallet,
      hasDropdown: true,
      subItems: [
        {
          name: "Overview",
          icon: LineChart,
          path: "/budgeting/overview",
          id: "Budgeting-Overview",
        },
        {
          name: "Expense Management",
          icon: Wallet,
          path: "/budgeting/expense",
          id: "Budgeting-Expense",
        },
        {
          name: "Income & Revenue",
          icon: DollarSign,
          path: "/budgeting/income",
          id: "Budgeting-Income",
        },
        {
          name: "Payments",
          icon: CreditCard,
          path: "/budgeting/payments",
          id: "Budgeting-Payments",
        },
        {
          name: "Receipts",
          icon: Receipt,
          path: "/budgeting/receipts",
          id: "Budgeting-Receipts",
        },
      ],
    },
    {
      name: "Salons & Invitations",
      icon: SalonsInvitationsNavlinkIcon,
      hasDropdown: true,
      subItems: [
        {
          name: "My Salons",
          icon: Store,
          path: "/salons/my-salons",
          id: "Salons-MySalons",
        },
        {
          name: "Pending Invitations",
          icon: PendingInvitationsNavlinkIcon,
          path: "/salons/pending-invitations",
          id: "Salons-PendingInvitations",
        },
        {
          name: "Request Access",
          icon: RequestAccessNavlinkIcon,
          path: "/salons/request-access",
          id: "Salons-RequestAccess",
        },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 flex w-72 h-screen flex-col border-r border-slate-100 bg-white px-6 py-6 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Header Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={140}
              height={40}
            />
          </div>

          <CustomCloseButton
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 lg:hidden"
          />
        </div>

        {/* Navigation Categories */}
        <div className="flex-1 overflow-y-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main
          </span>
          <nav className="mt-4 space-y-1">
            {navItems.map((item) => {
              const isParentActive = item.subItems
                ? item.subItems.some((subItem) => pathname === subItem.path)
                : item.name === "Dashboard"
                  ? pathname === "/"
                  : pathname === `/${item.name.toLowerCase()}`;
              const isExpanded = expandedItem === item.name;
              const Icon = item.icon;

              return (
                <div key={item.name} className="space-y-1">
                  {item.subItems ? (
                    <div
                      className={`${isParentActive ? "bg-[#f5f6ff]/70" : ""} rounded-lg p-3 space-y-3 transition-colors`}
                    >
                      {/* Section Header */}
                      <button
                        onClick={() => toggleExpand(item.name)}
                        className={`flex w-full items-center justify-between text-sm font-medium px-1 whitespace-nowrap cursor-pointer transition-colors ${
                          isParentActive || isExpanded
                            ? "text-brand"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={18}
                            className={
                              isParentActive || isExpanded
                                ? "text-brand"
                                : "text-slate-400"
                            }
                          />
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight
                          size={14}
                          className={`${
                            isParentActive || isExpanded
                              ? "text-brand"
                              : "text-slate-400"
                          } transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </button>

                      {/* Sub-items list */}
                      {isExpanded && (
                        <div className="space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.subItems.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = pathname === subItem.path;

                            return (
                              <Link
                                key={subItem.id}
                                href={subItem.path}
                                onClick={() => {
                                  if (window.innerWidth < 1024) onClose();
                                }}
                                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer
                                  ${
                                    isSubActive
                                      ? "bg-brand text-white shadow-md shadow-brand/20"
                                      : "bg-brand/5 text-brand hover:bg-brand/10"
                                  }
                                `}
                              >
                                <SubIcon size={16} />
                                <span>{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      {item.hasDropdown ? (
                        <button
                          onClick={() => toggleExpand(item.name)}
                          className={`
                            flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer
                            ${
                              isParentActive
                                ? "bg-brand text-white shadow-md shadow-brand/20"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={
                                isParentActive
                                  ? "text-white"
                                  : "text-slate-400 group-hover:text-slate-600"
                              }
                            />
                            <span>{item.name}</span>
                          </div>
                          <ChevronRight
                            size={14}
                            className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={
                            item.name === "Dashboard"
                              ? "/"
                              : `/${item.name.toLowerCase()}`
                          }
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              onClose();
                            }
                          }}
                          className={`
                            flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer
                            ${
                              isParentActive
                                ? "bg-brand text-white shadow-md shadow-brand/20"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            }
                          `}
                        >
                          <Icon
                            size={18}
                            className={
                              isParentActive ? "text-white" : "text-slate-400"
                            }
                          />
                          <span>{item.name}</span>
                        </Link>
                      )}

                      {/* Default Submenu Mock for other categories */}
                      {item.hasDropdown && isExpanded && (
                        <div className="pl-11 pr-2 py-1 space-y-1 border-l border-slate-100 ml-6 mt-1">
                          <button
                            onClick={() => {
                              if (window.innerWidth < 1024) onClose();
                            }}
                            className="block w-full text-left rounded-xl py-1.5 px-3 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            Overview
                          </button>
                          <button className="block w-full text-left rounded-xl py-1.5 px-3 text-xs font-medium text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer">
                            History
                          </button>
                          <button className="block w-full text-left rounded-xl py-1.5 px-3 text-xs font-medium text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer">
                            Reports
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
