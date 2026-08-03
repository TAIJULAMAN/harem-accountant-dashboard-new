"use client";

import React, { createContext, useContext, useState } from "react";

interface SalonContextType {
  selectedSalon: string;
  setSelectedSalon: (salon: string) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export function SalonProvider({ children }: { children: React.ReactNode }) {
  const [selectedSalon, setSelectedSalon] = useState("All Salons");

  return (
    <SalonContext.Provider value={{ selectedSalon, setSelectedSalon }}>
      {children}
    </SalonContext.Provider>
  );
}

export function useSalon() {
  const context = useContext(SalonContext);
  if (context === undefined) {
    throw new Error("useSalon must be used within a SalonProvider");
  }
  return context;
}
