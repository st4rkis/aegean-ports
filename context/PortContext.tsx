"use client";

import { createContext, useContext } from "react";
import type { PortConfig } from "@/lib/ports.config";

// 1. Change the shape to include the 'port' key
interface PortContextType {
  port: PortConfig;
}

const PortContext = createContext<PortContextType | null>(null);

export function PortProvider({
  value,
  children,
}: {
  value: PortConfig;
  children: React.ReactNode;
}) {
  // 2. Wrap the value in an object: { port: value }
  return (
    <PortContext.Provider value={{ port: value }}>
      {children}
    </PortContext.Provider>
  );
}

export function usePort() {
  const ctx = useContext(PortContext);
  if (!ctx) {
    throw new Error("usePort must be used within <PortProvider>");
  }
  return ctx;
}
