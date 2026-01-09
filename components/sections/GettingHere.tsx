"use client";

import {
  Car,
  Bus,
  MapPin,
  Footprints,
  ArrowRight,
  Navigation,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function GettingHere() {
  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-24 px-6 relative">
      {/* Background Grid (Faint) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Logistics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Access <span className="text-[#0EA5E9]">Vectors</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-lg font-light leading-relaxed">
            Real-time routing data for private vehicles, public transit
            synchronization, and gate access protocols.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. PRIORITY TRANSFER (The "Upsell" - High Contrast Black Card) */}
          <div className="bg-slate-900 p-8 flex flex-col h-full group relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <Car className="w-16 h-16 text-white" />
            </div>

            <div className="flex items-center gap-2 text-[#0EA5E9] font-mono text-[10px] uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#0EA5E9] animate-pulse rounded-none" />
              Fastest Route
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 z-10">
              Private <br /> Transfer
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 z-10 border-l-2 border-slate-700 pl-4">
              Direct terminal drop-off. Bypass parking queues. Pre-authorized
              port entry.
            </p>

            <div className="mt-auto z-10">
              <a
                href="https://www.aegeantaxi.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-between w-full bg-[#0EA5E9] text-white font-black text-xs uppercase tracking-widest py-5 px-6 hover:bg-white hover:text-slate-900 transition-colors"
              >
                <span>Book Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. PUBLIC TRANSIT (Bus/Metro) */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col h-full group hover:border-[#0EA5E9] transition-all duration-300">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-slate-50 text-slate-900">
                <Bus className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 uppercase tracking-wider">
                On Schedule
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">
              Bus & Metro
            </h3>
            <p className="text-slate-500 text-xs mb-8 leading-relaxed">
              X96 Express and Metro Line 3 connections to city center.
            </p>

            <div className="mt-auto space-y-4">
              {/* Data Row 1 */}
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-mono uppercase text-slate-400">
                  Next X96
                </span>
                <span className="font-bold text-slate-900">04 min</span>
              </div>
              {/* Data Row 2 */}
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-mono uppercase text-slate-400">
                  Next Metro
                </span>
                <span className="font-bold text-slate-900">12 min</span>
              </div>

              <button className="w-full text-left text-[#0EA5E9] text-[10px] font-black uppercase tracking-widest mt-4 hover:text-slate-900 transition-colors flex items-center gap-2">
                View Full Timetable <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 3. PRIVATE VEHICLE (Parking Data) */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col h-full group hover:border-[#0EA5E9] transition-all duration-300">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-slate-50 text-slate-900">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> High Load
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">
              Parking Zones
            </h3>
            <p className="text-slate-500 text-xs mb-8 leading-relaxed">
              Real-time capacity for short-term and long-term sectors.
            </p>

            <div className="mt-auto">
              {/* Zone 1 */}
              <div className="mb-5">
                <div className="flex justify-between text-[10px] font-mono uppercase text-slate-400 mb-2">
                  <span className="font-bold text-slate-700">
                    Zone P1 (Short)
                  </span>
                  <span className="text-orange-500 font-bold">95% Full</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100">
                  <div className="h-full bg-orange-500 w-[95%]" />
                </div>
              </div>
              {/* Zone 2 */}
              <div className="mb-4">
                <div className="flex justify-between text-[10px] font-mono uppercase text-slate-400 mb-2">
                  <span className="font-bold text-slate-700">
                    Zone P2 (Long)
                  </span>
                  <span className="text-green-500 font-bold">40% Full</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100">
                  <div className="h-full bg-green-500 w-[40%]" />
                </div>
              </div>

              <button className="w-full text-left text-[#0EA5E9] text-[10px] font-black uppercase tracking-widest mt-4 hover:text-slate-900 transition-colors flex items-center gap-2">
                Navigate to P2 <Navigation className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 4. PEDESTRIAN (Walking) */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col h-full group hover:border-[#0EA5E9] transition-all duration-300">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-slate-50 text-slate-900">
                <Footprints className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 uppercase tracking-wider">
                Gate Access
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">
              Walk to Gate
            </h3>
            <p className="text-slate-500 text-xs mb-8 leading-relaxed">
              Standard walking times from Metro station to departure points.
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-mono uppercase text-slate-400">
                  To Gate E8
                </span>
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0EA5E9]" /> 5 min
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-mono uppercase text-slate-400">
                  To Gate E1
                </span>
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0EA5E9]" /> 25 min
                </span>
              </div>

              <button className="w-full text-left text-[#0EA5E9] text-[10px] font-black uppercase tracking-widest mt-4 hover:text-slate-900 transition-colors flex items-center gap-2">
                Download Port Map <MapPin className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
