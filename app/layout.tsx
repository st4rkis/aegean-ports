import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { getTenantFromHost, PORTS } from "@/lib/ports.config";

// Replaced static 'export const metadata' with this dynamic function
export async function generateMetadata(): Promise<Metadata> {
  // 1. Get the hostname from the request
  const headersList = await headers();
  const host = headersList.get("host");

  // 2. Find the matching port
  // Fallback to Piraeus (grpir) if something goes wrong
  const port = getTenantFromHost(host) || PORTS.find((p) => p.key === "grpir");

  // 3. Define the base verification
  const verification: Metadata["verification"] = {
    other: {
      // You can add your seobility ID here if you have one for ports
      // seobility: "...",
    },
  };

  // 4. Inject Google Verification (if you add this field to your data later)
  /* if (port?.googleVerificationId) {
    verification.google = port.googleVerificationId;
  } */

  return {
    title: port?.seoTitle || "Port Guide",
    description: port?.description || "Official Port Authority Guide",
    verification,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-gray-50">{children}</body>
    </html>
  );
}
