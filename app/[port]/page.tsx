import { portByKey } from "@/lib/ports.config";
import { notFound } from "next/navigation";
import HeroDashboard from "@/components/sections/HeroDashboard";
import LiveOperations from "@/components/sections/LiveOperations";
import TicketOperators from "@/components/sections/TicketOperators";
import FacilitiesLocal from "@/components/sections/FacilitiesLocal";
import PortStats from "@/components/sections/PortStats";
import TerminalAccessGuide from "@/components/sections/TerminalAccessGuide";

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
    <main className="bg-white min-h-screen selection:bg-[#0EA5E9] selection:text-white">
      {/* FIX: Removed 'pt-44'. The Sticky Header now pushes this down automatically. */}
      <div>
        <HeroDashboard />
      </div>

      <LiveOperations />

      {/* Suggested Order: Directions usually come before Facilities, but this order works too */}
      <TerminalAccessGuide />

      <TicketOperators />

      <FacilitiesLocal />

      <PortStats />

      {/* Footer is global in layout */}
    </main>
  );
}
