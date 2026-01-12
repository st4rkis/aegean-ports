"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  Train,
  Car,
  Bus,
  MapPin,
  Clock,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Ship,
  Anchor,
  Navigation,
  ParkingSquare,
} from "lucide-react";
import { usePort } from "@/context/PortContext";
import { PORTS, IconKey } from "@/lib/ports.config";

// --- ICON MAPPING ---
// Maps the string keys from config back to Lucide components
const ICON_MAP: Record<IconKey, any> = {
  Car: Car,
  Bus: Bus,
  Train: Train,
  Ship: Ship,
  ParkingSquare: ParkingSquare,
  MapPin: MapPin,
  Anchor: Anchor,
  Navigation: Navigation,
};

export default function TerminalAccessGuide() {
  const { port } = usePort();
  const [activeTab, setActiveTab] = useState<string>("");

  // Fallback to Piraeus if port is undefined
  const activePort = port || PORTS.find((p) => p.key === "PIR")!;
  const transportData = activePort.transport;

  // Set initial tab to the first mode's ID when port changes
  useEffect(() => {
    if (transportData?.modes?.length > 0) {
      setActiveTab(transportData.modes[0].id);
    }
  }, [activePort.key, transportData]);

  // Find the currently active mode object
  const activeMode =
    transportData.modes.find((m) => m.id === activeTab) ||
    transportData.modes[0];
  const ActiveIcon = ICON_MAP[activeMode.icon] || MapPin;

  return (
    <section className="w-full bg-white border-b border-slate-200 py-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Transit Protocols
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            How to <span className="text-[#0EA5E9]">Arrive</span>
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            {transportData.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 bg-slate-50">
          {/* --- LEFT COL: NAVIGATION MENU (Dynamic Tabs) --- */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
            {transportData.modes.map((mode) => {
              const ModeIcon = ICON_MAP[mode.icon] || MapPin;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`
                    flex-shrink-0 lg:flex-shrink w-72 lg:w-full flex items-center gap-4 p-6 lg:p-8 text-left transition-all relative group
                    ${
                      activeTab === mode.id
                        ? "bg-white text-slate-900"
                        : "bg-slate-50 text-slate-500 hover:bg-white hover:text-slate-700"
                    }
                  `}
                >
                  {/* Active Indicator Line */}
                  {activeTab === mode.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0EA5E9] hidden lg:block" />
                  )}
                  {activeTab === mode.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0EA5E9] lg:hidden" />
                  )}

                  <ModeIcon
                    className={`w-6 h-6 ${
                      activeTab === mode.id
                        ? "text-[#0EA5E9]"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-sm block">
                      {mode.title}
                    </span>
                    {/* Show subtitle on desktop only to save space mobile */}
                    <span className="hidden lg:block text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                      Option {mode.id}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* --- RIGHT COL: INSTRUCTION BRIEFING --- */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-12 flex flex-col justify-center min-h-[400px]">
            {/* Briefing Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-10 border-b border-slate-100">
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                  {activeMode.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-xl">
                  {activeMode.desc}
                </p>
              </div>

              {/* Dynamic Action Button based on Link Type */}
              <div className="shrink-0">
                <a
                  href={activeMode.href}
                  target={activeMode.isExternal ? "_blank" : "_self"}
                  rel={
                    activeMode.isExternal
                      ? "nofollow noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-4 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#0EA5E9]">
                    {activeMode.isExternal ? "Book Transfer" : "View Schedule"}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0EA5E9] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Contextual Tips (Simulated "Steps" for visuals) */}
            <div className="space-y-6">
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-widest block mb-4">
                Operational Details
              </span>

              {/* Tip 1 */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 font-mono group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] transition-colors">
                  01
                </div>
                <p className="flex-1 text-slate-700 text-sm leading-relaxed pt-1.5 font-medium">
                  Verify schedules in advance. Peak season traffic may affect
                  transit times by 20-30 minutes.
                </p>
              </div>

              {/* Tip 2 */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 font-mono group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] transition-colors">
                  02
                </div>
                <p className="flex-1 text-slate-700 text-sm leading-relaxed pt-1.5 font-medium">
                  {activeMode.isExternal
                    ? "Pre-booking is highly recommended for guarantee of service."
                    : "Tickets must be validated before boarding or platform entry."}
                </p>
              </div>
            </div>

            {/* Footer with Google Maps Link */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                <MapPin className="w-4 h-4" />
                <span>Target: {activePort.shortName} Port Authority</span>
              </div>

              {/* Uses the mapEmbedUrl from config if we wanted to embed, or just links out */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${activePort.name}+Port`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#0EA5E9] hover:text-slate-900 transition-colors"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
