"use client";

import { Search, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { usePort } from "@/context/PortContext";
import Link from "next/link";

export default function HeroDashboard() {
  const { port } = usePort();

  if (!port) return null;

  return (
    <div className="relative w-full bg-white text-slate-900 border-b border-slate-200 overflow-hidden min-h-[calc(100dvh-7rem)] flex flex-col">
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      {/* --- ABSOLUTE TOP ELEMENTS (Removed from flow to allow perfect centering) --- */}
      <div className="absolute top-8 right-6 lg:right-12 z-20 hidden lg:block text-right">
        <div className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">
          Grid Reference
        </div>
        <div className="text-slate-900 font-mono text-xs tracking-widest font-bold">
          37.9429° N, 23.6469° E
        </div>
      </div>

      {/* --- MAIN CONTENT CENTERED WRAPPER --- */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-6 w-full max-w-[1800px] mx-auto">
        {/* Container for the stack to control spacing consistently */}
        <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-14">
          {/* 1. MASSIVE TITLE (Centered & Single Line) */}
          <div className="text-center">
            {/* UPDATED: Smaller size, whitespace-nowrap, removed <br/> */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 uppercase whitespace-nowrap">
              {port.shortName} <span className="text-[#0EA5E9]">PORT</span>
            </h1>
          </div>

          {/* 2. COMPACT ACTION GRID (Arrivals/Departures) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ARRIVALS */}
            <Link
              href="/arrivals"
              className="group relative h-40 bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-300 flex flex-col justify-between p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <span className="text-slate-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#0EA5E9] transition-colors">
                  Inbound
                </span>
                <ArrowDownLeft className="w-5 h-5 text-slate-300 group-hover:text-[#0EA5E9] transition-colors" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase group-hover:text-[#0EA5E9] transition-colors">
                Arrivals
              </h2>
            </Link>

            {/* DEPARTURES */}
            <Link
              href="/departures"
              className="group relative h-40 bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-300 flex flex-col justify-between p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <span className="text-slate-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#0EA5E9] transition-colors">
                  Outbound
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#0EA5E9] transition-colors" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase group-hover:text-[#0EA5E9] transition-colors">
                Departures
              </h2>
            </Link>
          </div>

          {/* 3. SEARCH BAR */}
          <div className="w-full bg-white border border-slate-200 flex flex-col md:flex-row group hover:border-[#0EA5E9] transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="relative flex-grow">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-[#0EA5E9] transition-colors" />
              <input
                type="text"
                placeholder="QUICK SEARCH: VESSEL, GATE OR COMPANY..."
                className="w-full h-16 pl-16 pr-4 bg-transparent text-slate-900 font-mono text-sm uppercase placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button className="h-16 px-10 bg-slate-50 border-l border-slate-200 text-slate-900 font-black uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300 whitespace-nowrap text-xs">
              Track Vessel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
