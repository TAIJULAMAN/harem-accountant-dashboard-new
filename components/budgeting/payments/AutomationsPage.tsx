"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home, Mail, MessageSquare, Phone } from "lucide-react";
import CustomSwitch from "@/components/customComponent/CustomSwitch";

export default function AutomationsPage() {
  const [activeTab, setActiveTab] = useState("Cash Payment");
  const tabs = ["Cash Payment", "Card Payments", "Online Payments"];

  const [toggles, setToggles] = useState({
    whatsapp: false,
    email: false,
    phone: false,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
        <Link
          href="/budgeting/payments"
          className="flex items-center gap-2 text-xl font-semibold text-slate-800 hover:text-[#5c60f5] transition-colors"
        >
          <ChevronLeft size={24} />
          Set Automations
        </Link>
        <div className="flex items-center gap-1 bg-[#f3effe] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5c60f5]">
          <Home size={12} />
          <span className="text-slate-400 mx-1">/</span>
          <span>Payments</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-h-[500px]">
        {/* Tabs */}
        <div className="flex border-b border-slate-100 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold transition-all relative ${
                activeTab === tab ? "text-[#5c60f5]" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#5c60f5]" />
              )}
            </button>
          ))}
        </div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp */}
          <div className="bg-[#f8fafc] rounded-[18px] p-6 flex flex-col min-h-[200px] border border-transparent hover:border-slate-100 transition-colors">
            <div className="h-[38px] w-[38px] rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm mb-5">
              <Phone size={18} className="fill-current" />
            </div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h4 className="text-[13.5px] font-medium text-slate-800 leading-[1.3] max-w-[170px]">
                Send whatsapp message with receipt
              </h4>
              <CustomSwitch
                checked={toggles.whatsapp}
                onChange={() => handleToggle("whatsapp")}
              />
            </div>
            <div className="mt-auto">
              <button className="px-3.5 py-2 bg-[#f3effe] text-[#5c60f5] text-[11.5px] font-medium rounded-lg hover:bg-[#e0e1fe] transition-colors shadow-sm">
                Personalize Whatsapp Message
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#f8fafc] rounded-[18px] p-6 flex flex-col min-h-[200px] border border-transparent hover:border-slate-100 transition-colors">
            <div className="h-[38px] w-[38px] rounded-full bg-[#5c60f5] flex items-center justify-center text-white shadow-sm mb-5">
              <Mail size={18} />
            </div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h4 className="text-[13.5px] font-medium text-slate-800 leading-[1.3] max-w-[170px]">
                Send email with receipt
              </h4>
              <CustomSwitch
                checked={toggles.email}
                onChange={() => handleToggle("email")}
              />
            </div>
            <div className="mt-auto">
              <button className="px-3.5 py-2 bg-[#f3effe] text-[#5c60f5] text-[11.5px] font-medium rounded-lg hover:bg-[#e0e1fe] transition-colors shadow-sm">
                Personalize Email
              </button>
            </div>
          </div>

          {/* Card 3: Phone Message */}
          <div className="bg-[#f8fafc] rounded-[18px] p-6 flex flex-col min-h-[200px] border border-transparent hover:border-slate-100 transition-colors">
            <div className="h-[38px] w-[38px] rounded-full bg-[#FFCA28] flex items-center justify-center text-white shadow-sm mb-5">
              <MessageSquare size={18} className="fill-current" />
            </div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h4 className="text-[13.5px] font-medium text-slate-800 leading-[1.3] max-w-[170px]">
                Send phone message with receipt
              </h4>
              <CustomSwitch
                checked={toggles.phone}
                onChange={() => handleToggle("phone")}
              />
            </div>
            <div className="mt-auto">
              <button className="px-3.5 py-2 bg-[#f3effe] text-[#5c60f5] text-[11.5px] font-medium rounded-lg hover:bg-[#e0e1fe] transition-colors shadow-sm">
                Personalize Phone Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
