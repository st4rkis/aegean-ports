import { portByKey } from "@/lib/ports.config";
import { notFound } from "next/navigation";
import HeroDashboard from "@/components/sections/HeroDashboard";
import LiveOperations from "@/components/sections/LiveOperations";
import GettingHere from "@/components/sections/GettingHere"; // <--- Import

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
      {/* 1. HERO DASHBOARD */}
      <div className="pt-44">
        <HeroDashboard />
      </div>

      {/* 2. LIVE OPERATIONS */}
      <LiveOperations />

      {/* 3. GETTING HERE (Ground Transport) */}
      <GettingHere />

      {/* 4. NEXT SECTIONS (Placeholders) */}
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        <div className="h-40 border border-white/10 border-dashed flex items-center justify-center text-gray-600 font-mono uppercase">
          Section D: Facilities & Local Area
        </div>
      </div>
    </main>
  );
}
