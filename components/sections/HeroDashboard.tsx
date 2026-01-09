"use client";

import { useState } from "react";
import {
  Search,
  ArrowRight,
  Ship,
  Anchor,
  Clock,
  AlertCircle,
} from "lucide-react";
import { usePort } from "@/context/PortContext";

export default function HeroDashboard() {
  const { port } = usePort();
  const [activeTab, setActiveTab] = useState<"departures" | "arrivals">(
    "departures"
  );

  return (
    <div className="relative w-full bg-[#020617] text-white pt-12 pb-20 px-6 border-b border-white/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* --- LEFT COLUMN: TERMINAL LOCATOR (Action Center) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Operational Dashboard
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            {port?.shortName?.toUpperCase() || "PORT"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A]">
              COMMAND
            </span>
          </h1>

          {/* "Which Terminal?" Search Module */}
          <div className="bg-[#0A0A0A] border border-white/10 p-8 max-w-2xl group hover:border-[#0EA5E9]/30 transition-colors">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 block">
              Locate Your Vessel / Terminal
            </label>
            <div className="flex">
              <div className="relative grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search Ferry Name, Operator, or Destination..."
                  className="w-full bg-[#111] border border-white/10 h-14 pl-12 pr-4 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors placeholder:text-gray-700 uppercase"
                />
              </div>
              <button className="bg-[#0EA5E9] text-black h-14 px-8 font-black uppercase tracking-wider hover:bg-white transition-colors">
                Find
              </button>
            </div>
            <div className="mt-4 flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
              <span>Popular:</span>
              <button className="hover:text-white underline decoration-gray-700">
                Blue Star Delos
              </button>
              <button className="hover:text-white underline decoration-gray-700">
                Seajets World
              </button>
              <button className="hover:text-white underline decoration-gray-700">
                Minoan Palace
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: LIVE TRAFFIC SNAPSHOT (The "Board") --- */}
        <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 flex flex-col h-full min-h-[500px]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#050505]">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("departures")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeTab === "departures"
                    ? "bg-[#0EA5E9] text-black"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Departures
              </button>
              <button
                onClick={() => setActiveTab("arrivals")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeTab === "arrivals"
                    ? "bg-[#0EA5E9] text-black"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Arrivals
              </button>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#0EA5E9] animate-pulse font-mono uppercase">
              <div className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
              Live Feed
            </div>
          </div>

          {/* Rows */}
          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 text-center">
                    <span className="block text-lg font-black text-white leading-none">
                      14:30
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                      EST
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#0EA5E9] transition-colors">
                        Blue Star Naxos
                      </span>
                      <span className="text-[10px] bg-white/10 text-gray-300 px-1.5 py-0.5 uppercase">
                        Gate E7
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">
                      To Syros - Tinos - Mykonos
                    </span>
                  </div>
                </div>

                {i === 0 ? (
                  <span className="text-[10px] font-bold text-[#0EA5E9] border border-[#0EA5E9] px-2 py-1 uppercase tracking-wider">
                    Boarding
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-gray-600 px-2 py-1 uppercase tracking-wider">
                    Scheduled
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Footer Link */}
          <div className="p-4 border-t border-white/10 bg-[#050505]">
            <button className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group">
              <span>View Full Schedule</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
