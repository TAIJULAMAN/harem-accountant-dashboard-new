"use client";

import React from "react";
import TaxObligationsChart from "./TaxObligationsChart";
import AverageReceiptTrendChart from "./AverageReceiptTrendChart";

export default function TaxesCharts() {
  return (
    <div className="flex flex-col gap-6">
      <TaxObligationsChart />
      <AverageReceiptTrendChart />
    </div>
  );
}
