import { portByKey } from "@/lib/ports.config";
import { notFound } from "next/navigation";
import HeroDashboard from "@/components/sections/HeroDashboard";
import LiveOperations from "@/components/sections/LiveOperations";
import GettingHere from "@/components/sections/GettingHere";
import FacilitiesLocal from "@/components/sections/FacilitiesLocal"; // <--- Import

type Props = {
  params: Promise<{ port: string }>;
};

export default async function PortHome({ params }: Props) {
  const { port } = await params;
  const code = port.toUpperCase();
  const portConfig = portByKey[code];

  if (!portConfig) {
    return notFound();
  }

  return (
    <main className="bg-[#020617] min-h-screen selection:bg-[#0EA5E9] selection:text-white">
      {/* 1. HERO DASHBOARD (Command Center) */}
      <div className="pt-44">
        <HeroDashboard />
      </div>

      {/* 2. LIVE OPERATIONS (Cams & Ops Data) */}
      <LiveOperations />

      {/* 3. GETTING HERE (Ground Transport) */}
      <GettingHere />

      {/* 4. FACILITIES & LOCAL AREA (Services) */}
      <FacilitiesLocal />

      {/* 5. FOOTER PLACEHOLDER */}
    </main>
  );
}
