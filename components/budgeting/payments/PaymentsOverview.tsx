"use client";

import React from "react";
import PaymentsHeader from "./PaymentsHeader";
import PaymentsMetricCards from "./PaymentsMetricCards";
import PaymentsFilterBar from "./PaymentsFilterBar";
import PaymentsTable from "./PaymentsTable";

export default function PaymentsOverview() {
  const [activeMethod, setActiveMethod] = React.useState("All");
  const [activeStatus, setActiveStatus] = React.useState("All");
  const [activeReceipt, setActiveReceipt] = React.useState("All");

  return (
    <div className="space-y-6">
      <PaymentsHeader />
      <PaymentsMetricCards />
      <div className="bg-white rounded-xl p-5 shadow-md">
        <PaymentsFilterBar 
          activeMethod={activeMethod}
          setActiveMethod={setActiveMethod}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          activeReceipt={activeReceipt}
          setActiveReceipt={setActiveReceipt}
        />
        <PaymentsTable 
          activeMethod={activeMethod}
          activeStatus={activeStatus}
          activeReceipt={activeReceipt}
        />
      </div>
    </div>
  );
}
