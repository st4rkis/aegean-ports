"use client";

import { createContext, useContext } from "react";
import type { PortConfig } from "@/lib/ports.config";

const PortContext = createContext<PortConfig | null>(null);

export function PortProvider({
  value,
  children,
}: {
  value: PortConfig;
  children: React.ReactNode;
}) {
  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}

export function usePort() {
  const ctx = useContext(PortContext);
  if (!ctx) {
    throw new Error("usePort must be used within <PortProvider>");
  }
  return ctx;
}
