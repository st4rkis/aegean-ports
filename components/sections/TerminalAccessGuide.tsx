"use client";

import { useState } from "react";
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
} from "lucide-react";

export default function TerminalAccessGuide() {
  const [activeTab, setActiveTab] = useState("airport");

  const modes = {
    airport: {
      id: "airport",
      label: "Airport Connection",
      icon: Plane,
      title: "ATH Airport to Port",
      desc: "Direct transit vectors from Athens International Airport (El. Venizelos) to Piraeus Harbor.",
      time: "55 - 60 min",
      cost: "€9.00 / €5.50",
      steps: [
        "Metro: Take Blue Line 3 (Direct) to 'Piraeus' terminus. departs every 36 min.",
        "Bus: Express Route X96 runs 24/7 from Arrivals Level between Exits 4 & 5.",
        "Taxi: Fixed fare ring applies. Standard: €60 (Day) / €75 (Night).",
      ],
    },
    metro: {
      id: "metro",
      label: "Metro / Rail",
      icon: Train,
      title: "City Center (Metro)",
      desc: "High-speed electric rail connecting Syntagma Square and Monastiraki directly to the terminals.",
      time: "20 - 25 min",
      cost: "€1.20",
      steps: [
        "Line 1 (Green): Terminus 'Piraeus' is located opposite Gate E5.",
        "Line 3 (Blue): New station 'Piraeus' provides direct access to Gates E1-E9.",
        "Validation: Tickets must be scanned at turnstiles before platform entry.",
      ],
    },
    bus: {
      id: "bus",
      label: "Public Bus Network",
      icon: Bus,
      title: "OASA Bus Network",
      desc: "Extensive surface network serving the coastal zone (Riviera) and downtown Athens.",
      time: "45+ min (Traffic)",
      cost: "€1.20",
      steps: [
        "Route 040: Syntagma to Piraeus (24-hour service).",
        "Route X96: Express connection to Airport.",
        "Hop-on Hop-off: Tourist lines stop at Cruise Terminal A (Gate E11).",
      ],
    },
    car: {
      id: "car",
      label: "Private Vehicle",
      icon: Car,
      title: "Driving Directions",
      desc: "Arrival protocols for private vehicles and drop-offs. Traffic heavy during AM peak hours.",
      time: "Variable",
      cost: "Toll Free",
      steps: [
        "From City: Follow Leoforos Syngrou -> Leoforos Posidonos (Coastal).",
        "From North: Take Kifisos Avenue (E75) straight to port entrance.",
        "Drop-off: Permitted briefly at Gates E7, E8, and E9. No unattended parking.",
      ],
    },
  };

  const activeContent = modes[activeTab as keyof typeof modes];

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
            Detailed navigational instructions for connecting to the port from
            key transit nodes. Select your mode of transport below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 bg-slate-50">
          {/* --- LEFT COL: NAVIGATION MENU --- */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
            {Object.values(modes).map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveTab(mode.id)}
                className={`
                  flex-shrink-0 lg:flex-shrink w-64 lg:w-full flex items-center gap-4 p-6 lg:p-8 text-left transition-all relative group
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

                <mode.icon
                  className={`w-6 h-6 ${
                    activeTab === mode.id
                      ? "text-[#0EA5E9]"
                      : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
                <span className="font-bold uppercase tracking-wider text-sm">
                  {mode.label}
                </span>
              </button>
            ))}
          </div>

          {/* --- RIGHT COL: INSTRUCTION BRIEFING --- */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-12 flex flex-col justify-center min-h-[500px]">
            {/* Briefing Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-slate-100">
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                  {activeContent.title}
                </h3>
                <p className="text-slate-500 text-sm max-w-lg">
                  {activeContent.desc}
                </p>
              </div>

              {/* Key Stats Pill */}
              <div className="flex gap-4">
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 min-w-[120px]">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                    <Clock className="w-3 h-3" /> Est. Time
                  </div>
                  <div className="text-slate-900 font-bold text-lg">
                    {activeContent.time}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 min-w-[120px]">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                    <CreditCard className="w-3 h-3" /> Cost
                  </div>
                  <div className="text-slate-900 font-bold text-lg">
                    {activeContent.cost}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-6">
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-widest block mb-4">
                Navigation Sequence
              </span>

              {activeContent.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 font-mono group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] transition-colors">
                    0{idx + 1}
                  </div>
                  <p className="flex-1 text-slate-700 text-sm leading-relaxed pt-1.5 font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                <MapPin className="w-4 h-4" />
                <span>Target: Piraeus Port Authority</span>
              </div>
              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#0EA5E9] hover:text-slate-900 transition-colors">
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
