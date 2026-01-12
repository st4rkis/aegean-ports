"use client";

import { Search, ArrowRight, Ship } from "lucide-react";
import { usePort } from "@/context/PortContext";
import Link from "next/link";

export default function HeroDashboard() {
  const { port } = usePort();

  if (!port) return null;

  return (
    <div className="relative w-full bg-slate-900 text-slate-900 border-b border-slate-200 overflow-hidden min-h-[calc(100dvh-7rem)] flex flex-col">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/port-bg-placeholder.jpg')] bg-cover bg-center" />
        {/* Darker Overlay: Increased opacity to 70% to ensure white text is strictly readable */}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* --- ABSOLUTE TOP ELEMENTS --- */}
      <div className="absolute top-8 right-6 lg:right-12 z-20 hidden lg:block text-right">
        <div className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">
          Grid Reference
        </div>
        <div className="text-white font-mono text-xs tracking-widest font-bold">
          37.9429° N, 23.6469° E
        </div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-6 w-full max-w-[1800px] mx-auto">
        {/* Vertical Stack: Title Group -> Control Box */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-12">
          {/* 1. PORT TITLE & DESCRIPTION */}
          <div className="text-center space-y-6">
            {/* H1: White & Blue */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase whitespace-nowrap drop-shadow-2xl">
              {port.shortName} <span className="text-[#0EA5E9]">PORT</span>
            </h1>

            {/* H2/Paragraph: Description text in White/Slate-200 */}
            <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              The primary maritime gateway connecting the mainland to the Aegean
              archipelago.
              <span className="hidden md:inline">
                {" "}
                Operational capacity for high-speed ferry logistics and
                commercial transit.
              </span>
            </p>
          </div>

          {/* 2. THE CONSOLIDATED "CONTROL BOX" */}
          <div className="w-full max-w-2xl bg-white border-l-4 border-[#0EA5E9] p-8 md:p-10 shadow-2xl rounded-none">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Check Ferry Status
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                Real-time tracking for arrivals, departures, and vessel logic.
              </p>
            </div>

            {/* Input Field */}
            <div className="relative mb-8 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0EA5E9] transition-colors" />
              <input
                type="text"
                placeholder="SEARCH VESSEL, GATE OR COMPANY..."
                className="w-full h-16 bg-slate-50 border border-slate-200 pl-12 pr-4 text-slate-900 font-bold uppercase tracking-wider text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0EA5E9] focus:bg-white transition-all rounded-none"
              />
            </div>

            {/* Action Links (Bottom Row) */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 border-t border-slate-100 pt-6">
              <Link
                href="/departures"
                className="group flex items-center gap-3 text-slate-900 hover:text-[#0EA5E9] transition-colors"
              >
                <div className="p-2 bg-slate-50 group-hover:bg-[#0EA5E9] transition-colors">
                  <Ship className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">
                  Departures
                </span>
                <ArrowRight className="w-4 h-4 ml-auto sm:ml-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/arrivals"
                className="group flex items-center gap-3 text-slate-900 hover:text-[#0EA5E9] transition-colors"
              >
                <div className="p-2 bg-slate-50 group-hover:bg-[#0EA5E9] transition-colors">
                  <Ship className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors rotate-180" />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">
                  Arrivals
                </span>
                <ArrowRight className="w-4 h-4 ml-auto sm:ml-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
