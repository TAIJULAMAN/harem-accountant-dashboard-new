"use client";

import React from "react";
import SalaryExpendituresChart from "./SalaryExpendituresChart";
import SalaryDistributionChart from "./SalaryDistributionChart";

export default function SalariesCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SalaryExpendituresChart />
      <SalaryDistributionChart />
    </div>
  );
}
