// app/[ports]/layout.tsx

import React from "react";
import { PORTS_DATA } from "@/lib/port-data";
import { PortProvider } from "@/context/PortContext";
import Header from "@/components/Header";
import { Metadata } from "next";

// --- METADATA (SEO) ---
type Props = {
  params: Promise<{ ports: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ports } = await params;
  const port = PORTS_DATA[ports] || PORTS_DATA["default"];

  return {
    title: port.seoTitle,
    description: port.description,
  };
}

// --- TENANT LAYOUT ---
export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ports: string }>;
}) {
  // 1. Resolve the port ID from the URL params
  const { ports } = await params;

  // 2. Get the matching data (or fallback)
  const portData = PORTS_DATA[ports] || PORTS_DATA["default"];

  return (
    <PortProvider value={portData}>
      {/* The Header accesses 'usePort()' from this provider */}
      <Header />

      <div className="min-h-screen flex flex-col">{children}</div>

      {/* Footer will go here */}
    </PortProvider>
  );
}
