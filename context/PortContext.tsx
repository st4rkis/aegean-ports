"use client";

import { createContext, useContext } from "react";
import type { PortConfig } from "@/lib/ports.config";

// 1. Define the Context Type
const PortContext = createContext<PortConfig | null>(null);

// 2. The Provider Component
export function PortProvider({
  value,
  children,
}: {
  value: PortConfig; // Accepts the new "Lean" config
  children: React.ReactNode;
}) {
  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}

// 3. The Hook
export function usePort() {
  const ctx = useContext(PortContext);
  if (!ctx) {
    throw new Error("usePort must be used within <PortProvider>");
  }
  return ctx;
}
