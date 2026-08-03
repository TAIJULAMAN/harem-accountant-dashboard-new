"use client";

import React from "react";
import PayrollChart from "./PayrollChart";
import ExpenseBudgetChart from "./ExpenseBudgetChart";

interface ChartsProps {
  selectedSalon: string;
}

export default function Charts({ selectedSalon }: ChartsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <PayrollChart selectedSalon={selectedSalon} />
      <ExpenseBudgetChart selectedSalon={selectedSalon} />
    </div>
  );
}
