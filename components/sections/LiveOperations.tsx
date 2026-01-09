"use client";

import { Video, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LiveOperations() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 px-6">
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
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Terminal <span className="text-[#0EA5E9]">Sector View</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 animate-pulse rounded-none" />
            Live Feed • UTC +2
          </div>
        </div>

        {/* --- MAIN CAMERA FEED (Full Width) --- */}
        <div className="flex flex-col gap-6">
          {/* Camera Frame - No Shadow, Sharp Corners, Flat Border */}
          <div className="relative aspect-video w-full bg-slate-100 border border-slate-200 group overflow-hidden rounded-none">
            {/* Placeholder for Video Feed */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559138867-2708307d1746?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />

            {/* Overlay UI: Top Left Label */}
            <div className="absolute top-0 left-0 flex items-center gap-3 bg-white border-r border-b border-slate-200 px-4 py-2 z-10">
              <Video className="w-3 h-3 text-red-600 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-slate-900 uppercase tracking-widest">
                CAM_01 • Main Basin
              </span>
            </div>

            {/* Overlay UI: Big "LIVE" Text */}
            <div className="absolute bottom-6 right-6 pointer-events-none">
              <span className="text-6xl md:text-8xl font-black text-white/10 select-none tracking-tighter">
                LIVE
              </span>
            </div>

            {/* Scanning Line Effect (Optional "Tech" feel) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] w-full animate-[scan_4s_linear_infinite] pointer-events-none opacity-50" />
          </div>

          {/* View More Action */}
          <div className="flex justify-between items-center border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-none" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Signal: Stable (1080p)
              </span>
            </div>

            <Link
              href="/cameras"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-[#0EA5E9] transition-colors"
            >
              <span>View All Sector Cameras</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
