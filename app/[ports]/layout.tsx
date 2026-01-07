import React from "react";
import Header from "@/components/Header";
import { PortProvider } from "@/context/PortContext";
import { PORTS } from "@/lib/ports.config";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ ports: string }>;
};

export default async function TenantLayout({ children, params }: Props) {
  // 1. Resolve Params
  const { ports: portKey } = await params;

  // 2. Find Data
  const portData = PORTS.find((p) => p.key === portKey);

  if (!portData) {
    return notFound();
  }

  // 3. Render Provider + Header
  return (
    <PortProvider value={portData}>
      <Header />
      {children}
    </PortProvider>
  );
}
