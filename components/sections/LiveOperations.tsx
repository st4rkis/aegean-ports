"use client";

import { Video, Wind, AlertTriangle, Clock, Activity, Map } from "lucide-react";

export default function LiveOperations() {
  return (
    <section className="w-full bg-[#050505] border-b border-white/5 py-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#0EA5E9]" />
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
                Live Surveillance
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Terminal <span className="text-[#0EA5E9]">Sector View</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 animate-pulse rounded-none" />
            Live Feed • UTC +2
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT: CAMERA GRID (Authority Visuals) --- */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cam 1: Main Basin (Large) */}
            <div className="md:col-span-2 relative aspect-video bg-[#020617] border border-white/10 group overflow-hidden">
              {/* Placeholder for Video Feed */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559138867-2708307d1746?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />

              {/* Overlay UI */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1 border border-white/10">
                <Video className="w-3 h-3 text-red-500" />
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                  CAM_01 • Main Basin
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="text-4xl font-black text-white/10 select-none">
                  LIVE
                </span>
              </div>
            </div>

            {/* Cam 2: Approach Roads */}
            <div className="relative aspect-video bg-[#020617] border border-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494515152763-98284699c279?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 border border-white/10">
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                  CAM_02 • Gate E7 Traffic
                </span>
              </div>
            </div>

            {/* Cam 3: Terminal Frontage */}
            <div className="relative aspect-video bg-[#020617] border border-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574972748950-8b1b22987588?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 border border-white/10">
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                  CAM_03 • Taxi Drop-off
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: TODAY'S INTELLIGENCE (Data Briefing) --- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Widget 1: Weather / Wind */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 flex items-center justify-between group hover:border-[#0EA5E9]/30 transition-colors">
              <div>
                <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                  Sea State
                </span>
                <div className="text-3xl font-black text-white uppercase flex items-center gap-2">
                  Force 5 <span className="text-[#0EA5E9] text-lg">NW</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Moderate chop. Ferries operating normally.
                </p>
              </div>
              <Wind className="w-10 h-10 text-gray-700 group-hover:text-[#0EA5E9] transition-colors" />
            </div>

            {/* Widget 2: Congestion Forecast */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 group hover:border-[#0EA5E9]/30 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                  Congestion Forecast
                </span>
                <Activity className="w-5 h-5 text-gray-700 group-hover:text-yellow-500 transition-colors" />
              </div>

              {/* Traffic Bar Graph Simulation */}
              <div className="flex items-end gap-1 h-12 mb-4">
                {[40, 60, 90, 30, 20, 45, 80, 50].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 ${
                      h > 75 ? "bg-yellow-500" : "bg-[#333]"
                    } hover:bg-[#0EA5E9] transition-colors`}
                  />
                ))}
              </div>
              <p className="text-xs text-white font-mono uppercase">
                <span className="text-yellow-500 font-bold">Peak Warning:</span>{" "}
                07:00 - 09:30 AM
              </p>
            </div>

            {/* Widget 3: Boarding Rules */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 flex-1 flex flex-col justify-center group hover:border-[#0EA5E9]/30 transition-colors">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#0EA5E9] mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                    Boarding Cut-off
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400 font-mono uppercase">
                    <li className="flex justify-between w-full">
                      <span>Vehicles</span>
                      <span className="text-white">60 min prior</span>
                    </li>
                    <li className="flex justify-between w-full">
                      <span>Passengers</span>
                      <span className="text-white">30 min prior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
