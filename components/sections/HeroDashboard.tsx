"use client";

import { Search, Ship, MapPin, Navigation, ArrowRight } from "lucide-react";
import { usePort } from "@/context/PortContext";
import Link from "next/link";

export default function HeroDashboard() {
  const { port } = usePort();

  if (!port) return null;

  return (
    <div className="relative w-full bg-white text-slate-900 pt-12 pb-24 border-b border-slate-200 overflow-hidden">
      {/* --- CLEAN BACKGROUND (No Noise) --- */}
      {/* Very faint, large gradient to give 'atmosphere' without grain */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      {/* Subtle blue accent in top right (optional, extremely faint) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
        {/* --- SYSTEM STATUS --- */}

        {/* --- MAIN TITLE --- */}
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-12 leading-[0.8] text-slate-900 uppercase">
          {port.name} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#2563EB]">
            PORTAL
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* --- LEFT COL: DESCRIPTION & SEARCH --- */}
          <div className="lg:col-span-7">
            {/* INTEGRATED SEARCH MODULE (Clean & Sharp) */}
            <div className="bg-white border border-slate-200 p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group hover:border-[#0EA5E9] transition-all duration-300">
              <label className="text-[#0EA5E9] text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-4 block">
                Locate Your Vessel / Terminal
              </label>
              <div className="flex flex-col md:flex-row gap-0">
                <div className="relative flex-grow">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="SEARCH FERRY NAME, OPERATOR, OR DESTINATION..."
                    className="w-full bg-slate-50 border-y border-l border-slate-200 h-16 pl-14 pr-4 text-slate-900 font-mono text-sm focus:outline-none focus:border-[#0EA5E9] focus:bg-white transition-all uppercase placeholder:text-slate-400"
                  />
                </div>
                <button className="bg-[#0EA5E9] text-white h-16 px-10 font-black uppercase tracking-widest hover:bg-slate-900 transition-colors whitespace-nowrap">
                  Find
                </button>
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-[10px] text-slate-400 font-mono uppercase">
                <span className="text-slate-900 font-bold">Popular:</span>
                <button className="hover:text-[#0EA5E9] transition-colors underline decoration-slate-300 underline-offset-4">
                  Blue Star Delos
                </button>
                <button className="hover:text-[#0EA5E9] transition-colors underline decoration-slate-300 underline-offset-4">
                  Seajets World
                </button>
                <button className="hover:text-[#0EA5E9] transition-colors underline decoration-slate-300 underline-offset-4">
                  Minoan Palace
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT COL: COORDINATES (Desktop) --- */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end text-right">
            <div className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em] mb-2">
              Grid Reference
            </div>
            <div className="text-slate-900 font-mono text-2xl tracking-widest bg-slate-50 px-6 py-3 border-r-2 border-[#0EA5E9] border-y border-l border-slate-200">
              37.9429° N, 23.6469° E
            </div>
          </div>
        </div>

        {/* --- QUICK ACCESS CARDS (Clean Grid) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Departures",
              sub: "Live Traffic",
              icon: Ship,
              href: "/departures",
            },
            {
              title: "Terminal Map",
              sub: "Sector Data",
              icon: MapPin,
              href: "/terminals",
            },
            {
              title: "Access Gate",
              sub: "Logistics",
              icon: Navigation,
              href: "/directions",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative bg-white border border-slate-200 p-8 hover:border-[#0EA5E9] hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] transition-all duration-300"
            >
              {/* Top Right Arrow */}
              <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-[#0EA5E9] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>

              {/* Icon */}
              <item.icon className="w-8 h-8 text-slate-300 mb-12 group-hover:text-[#0EA5E9] transition-colors" />

              {/* Text */}
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-1 group-hover:text-[#0EA5E9] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                {item.sub}
              </p>

              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0EA5E9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
