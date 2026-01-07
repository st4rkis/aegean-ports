// app/[ports]/page.tsx
"use client";

import { usePort } from "@/context/PortContext";

export default function PortHomepage() {
  const port = usePort();

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-10">
      <h1 className="text-6xl font-bold text-[#F97316]">ROUTER IS WORKING</h1>
      <p className="text-2xl mt-4">Loaded Port ID: {port.id}</p>
      <p className="text-2xl">Loaded Port Name: {port.name}</p>
    </div>
  );
}
