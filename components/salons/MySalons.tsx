"use client";

import React, { useState } from "react";
import SalonsHeaderTabs from "./SalonsHeaderTabs";
import SettingsTab from "./SettingsTab";
import InvitationsSentTab from "./InvitationsSentTab";
import MySalonsTab from "./MySalonsTab";
import RevenueShareTab from "./RevenueShareTab";
import PayoutsTab from "./PayoutsTab";

export default function MySalons() {
  const [activeTab, setActiveTab] = useState("My Salons");

  return (
    <div className="space-y-6">
      <SalonsHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "My Salons" && (
        <MySalonsTab />
      )}

      {activeTab === "Settings" && (
        <SettingsTab />
      )}

      {activeTab === "Invitations Sent" && (
        <InvitationsSentTab />
      )}

      {activeTab === "Revenue Share" && (
        <RevenueShareTab />
      )}

      {activeTab === "Payouts" && (
        <PayoutsTab />
      )}
    </div>
  );
}
