"use client";

import { Users, Anchor, Container, Map, ArrowUpRight } from "lucide-react";

export default function PortStats() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-24 px-6 relative overflow-hidden">
      {/* Background Decor: Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#0EA5E9]" />
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
                System Metrics
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Operational <span className="text-[#0EA5E9]">Scale</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
              Data Period: FY 2024-2025
            </div>
            <div className="text-xs font-mono text-slate-900 uppercase tracking-widest font-bold">
              Status: Verified
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* STAT 1: Passengers */}
          <div className="bg-white border border-slate-200 p-8 group hover:border-[#0EA5E9] hover:shadow-[0_10px_40px_-15px_rgba(14,165,233,0.2)] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 text-[#0EA5E9]">
                <Users className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-none uppercase">
                <ArrowUpRight className="w-3 h-3" /> +12% YoY
              </span>
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
              17.4<span className="text-[#0EA5E9]">M</span>
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
              Annual Passengers
            </p>
            <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4 mt-4">
              Highest passenger volume in the Eastern Mediterranean basin.
            </p>
          </div>

          {/* STAT 2: Ferry Movements */}
          <div className="bg-white border border-slate-200 p-8 group hover:border-[#0EA5E9] hover:shadow-[0_10px_40px_-15px_rgba(14,165,233,0.2)] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 text-[#0EA5E9]">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-none uppercase">
                Daily Avg
              </span>
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
              450<span className="text-[#0EA5E9]">+</span>
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
              Vessel Movements
            </p>
            {/* Visual Bar Graph */}
            <div className="flex items-end gap-1 h-8 mt-4 border-t border-slate-100 pt-4">
              {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-slate-200 group-hover:bg-[#0EA5E9] transition-colors duration-500"
                />
              ))}
            </div>
          </div>

          {/* STAT 3: Destinations */}
          <div className="bg-white border border-slate-200 p-8 group hover:border-[#0EA5E9] hover:shadow-[0_10px_40px_-15px_rgba(14,165,233,0.2)] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 text-[#0EA5E9]">
                <Map className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-none uppercase">
                Network
              </span>
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
              72<span className="text-[#0EA5E9]"></span>
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
              Island Connections
            </p>
            <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4 mt-4">
              Direct links to Cyclades, Dodecanese, Crete, and Saronic Gulf.
            </p>
          </div>

          {/* STAT 4: Cargo/TEU */}
          <div className="bg-white border border-slate-200 p-8 group hover:border-[#0EA5E9] hover:shadow-[0_10px_40px_-15px_rgba(14,165,233,0.2)] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 text-[#0EA5E9]">
                <Container className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-none uppercase">
                <ArrowUpRight className="w-3 h-3" /> +4.5% YoY
              </span>
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
              5.1<span className="text-[#0EA5E9]">M</span>
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
              Cargo TEUs
            </p>
            {/* Simple Progress Line */}
            <div className="w-full h-1 bg-slate-100 mt-6 overflow-hidden">
              <div className="h-full w-[85%] bg-[#0EA5E9] group-hover:animate-pulse" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-mono uppercase text-slate-400">
              <span>Capacity</span>
              <span>85% Load</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
