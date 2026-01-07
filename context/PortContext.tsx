"use client";

import React, { createContext, useContext } from "react";
import { PortData } from "@/lib/port-data";

// 1. Initialize the Context
const PortContext = createContext<PortData | null>(null);

// 2. Define and Export the Provider Component
export function PortProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: PortData;
}) {
  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}

// 3. Define and Export the Hook for using it
export function usePort() {
  const context = useContext(PortContext);
  if (!context) {
    throw new Error("usePort must be used within a PortProvider");
  }
  return context;
}
