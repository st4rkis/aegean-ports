"use client";

import { PortProvider } from "@/context/PortContext";
import { portByKey } from "@/lib/ports.config";

export default function PortShell({
  portCode,
  children,
}: {
  portCode: string;
  children: React.ReactNode;
}) {
  const port = portByKey[portCode.toUpperCase()];

  if (!port) {
    return <main className="p-10">Unknown Port: {portCode}</main>;
  }

  return (
    <PortProvider value={port}>
      {/* <AirportNavbar /> */}
      {/* CHANGED: Removed max-w-6xl, px-6, and pt-10. Now it's just full width. */}
      <main className="w-full">{children}</main>
    </PortProvider>
  );
}
