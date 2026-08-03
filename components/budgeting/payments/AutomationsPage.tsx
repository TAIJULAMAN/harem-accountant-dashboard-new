"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home, Mail, MessageSquare, Phone } from "lucide-react";

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
          <div className="bg-[#f8fafc] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <Phone size={20} className="fill-current" />
              </div>
              <button 
                onClick={() => handleToggle('whatsapp')}
                className={`w-11 h-[22px] rounded-[8px] flex items-center p-1 transition-colors cursor-pointer ${
                  toggles.whatsapp ? "bg-[#5c60f5]" : "bg-slate-200"
                }`}
              >
                <div 
                  className={`w-[16px] h-[16px] rounded-[6px] bg-white shadow-sm transition-transform ${
                    toggles.whatsapp ? "translate-x-[20px]" : "translate-x-0"
                  }`} 
                />
              </button>
            </div>
            <h4 className="text-[15px] font-semibold text-slate-800 leading-snug mb-6 pr-4">
              Send whatsapp message with receipt
            </h4>
            <button className="self-start px-4 py-2 bg-[#f3effe] text-[#5c60f5] text-xs font-bold rounded-lg hover:bg-[#e0e1fe] transition-colors">
              Personalize Whatsapp Message
            </button>
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#f8fafc] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-[#5c60f5] flex items-center justify-center text-white shadow-sm">
                <Mail size={20} />
              </div>
              <button 
                onClick={() => handleToggle('email')}
                className={`w-11 h-[22px] rounded-[8px] flex items-center p-1 transition-colors cursor-pointer ${
                  toggles.email ? "bg-[#5c60f5]" : "bg-slate-200"
                }`}
              >
                <div 
                  className={`w-[16px] h-[16px] rounded-[6px] bg-white shadow-sm transition-transform ${
                    toggles.email ? "translate-x-[20px]" : "translate-x-0"
                  }`} 
                />
              </button>
            </div>
            <h4 className="text-[15px] font-semibold text-slate-800 leading-snug mb-6 pr-4">
              Send email with receipt
            </h4>
            <button className="self-start px-4 py-2 bg-[#f3effe] text-[#5c60f5] text-xs font-bold rounded-lg hover:bg-[#e0e1fe] transition-colors">
              Personalize Email
            </button>
          </div>

          {/* Card 3: Phone Message */}
          <div className="bg-[#f8fafc] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 rounded-full bg-[#FFB74D] flex items-center justify-center text-white shadow-sm">
                <MessageSquare size={20} className="fill-current" />
              </div>
              <button 
                onClick={() => handleToggle('phone')}
                className={`w-11 h-[22px] rounded-[8px] flex items-center p-1 transition-colors cursor-pointer ${
                  toggles.phone ? "bg-[#5c60f5]" : "bg-slate-200"
                }`}
              >
                <div 
                  className={`w-[16px] h-[16px] rounded-[6px] bg-white shadow-sm transition-transform ${
                    toggles.phone ? "translate-x-[20px]" : "translate-x-0"
                  }`} 
                />
              </button>
            </div>
            <h4 className="text-[15px] font-semibold text-slate-800 leading-snug mb-6 pr-4">
              Send phone message with receipt
            </h4>
            <button className="self-start px-4 py-2 bg-[#f3effe] text-[#5c60f5] text-xs font-bold rounded-lg hover:bg-[#e0e1fe] transition-colors">
              Personalize Phone Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
