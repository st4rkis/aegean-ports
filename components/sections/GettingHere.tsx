"use client";

import {
  Car,
  Bus,
  MapPin,
  Footprints,
  ArrowRight,
  Navigation,
  Clock,
} from "lucide-react";

export default function GettingHere() {
  return (
    <section className="w-full bg-[#020617] border-b border-white/5 py-24 px-6 relative overflow-hidden">
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Logistics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Access <span className="text-[#0EA5E9]">Vectors</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl text-lg font-light leading-relaxed">
            Select your mode of transport for real-time routing, parking
            availability, and gate access protocols.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. PRIORITY TRANSFER (The "Upsell" - Taxi) */}
          <div className="bg-[#0EA5E9] p-1 flex flex-col h-full group">
            <div className="bg-[#020617] h-full p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <Car className="w-12 h-12 text-[#0EA5E9]" />
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 z-10">
                Private <br /> Transfer
              </h3>
              <div className="flex items-center gap-2 text-[#0EA5E9] font-mono text-xs uppercase tracking-widest mb-8 z-10">
                <span className="w-2 h-2 bg-[#0EA5E9] animate-pulse rounded-full" />
                High Availability
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 z-10">
                Direct terminal drop-off. Bypass parking queues. Pre-authorized
                port entry.
              </p>

              <div className="mt-auto z-10">
                <a
                  href="https://www.aegeantaxi.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-between w-full bg-[#0EA5E9] text-black font-bold text-xs uppercase tracking-widest py-4 px-6 hover:bg-white transition-colors"
                >
                  <span>Book Vehicle</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#0EA5E9] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          {/* 2. PUBLIC TRANSIT (Bus) */}
          <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col h-full group hover:border-[#0EA5E9]/50 transition-colors">
            <div className="mb-6 flex justify-between items-start">
              <Bus className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono text-green-500 border border-green-500/30 bg-green-500/10 px-2 py-1 uppercase">
                On Schedule
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Bus & Metro
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              X96 Express and Metro Line 3 connections to city center and
              airport.
            </p>

            <div className="mt-auto space-y-3">
              <div className="flex justify-between text-xs font-mono uppercase text-gray-400 border-b border-white/5 pb-2">
                <span>Next X96</span>
                <span className="text-white">04 min</span>
              </div>
              <div className="flex justify-between text-xs font-mono uppercase text-gray-400 border-b border-white/5 pb-2">
                <span>Next Metro</span>
                <span className="text-white">12 min</span>
              </div>
              <button className="w-full text-left text-[#0EA5E9] text-xs font-bold uppercase tracking-widest mt-4 hover:text-white transition-colors flex items-center gap-2">
                View Full Timetable <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 3. PRIVATE VEHICLE (Parking Data) */}
          <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col h-full group hover:border-[#0EA5E9]/50 transition-colors">
            <div className="mb-6 flex justify-between items-start">
              <Car className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono text-yellow-500 border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 uppercase">
                Limited Spots
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Parking Zones
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Short-term and long-term secure parking zones near Gates E1-E3.
            </p>

            <div className="mt-auto">
              <div className="mb-4">
                <div className="flex justify-between text-xs font-mono uppercase text-gray-400 mb-1">
                  <span>Zone P1 (Short)</span>
                  <span className="text-red-500">95% Full</span>
                </div>
                <div className="w-full h-1 bg-[#333]">
                  <div className="h-full bg-red-500 w-[95%]" />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-xs font-mono uppercase text-gray-400 mb-1">
                  <span>Zone P2 (Long)</span>
                  <span className="text-green-500">40% Full</span>
                </div>
                <div className="w-full h-1 bg-[#333]">
                  <div className="h-full bg-green-500 w-[40%]" />
                </div>
              </div>
              <button className="w-full text-left text-[#0EA5E9] text-xs font-bold uppercase tracking-widest mt-4 hover:text-white transition-colors flex items-center gap-2">
                Navigate to P2 <Navigation className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 4. PEDESTRIAN (Walking) */}
          <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col h-full group hover:border-[#0EA5E9]/50 transition-colors">
            <div className="mb-6 flex justify-between items-start">
              <Footprints className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 uppercase">
                Gate Access
              </span>
            </div>

            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Walk to Gate
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Estimated walking times from Metro station to primary departure
              gates.
            </p>

            <div className="mt-auto space-y-3">
              <div className="flex justify-between text-xs font-mono uppercase text-gray-400 border-b border-white/5 pb-2">
                <span>To Gate E8</span>
                <span className="text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 5 min
                </span>
              </div>
              <div className="flex justify-between text-xs font-mono uppercase text-gray-400 border-b border-white/5 pb-2">
                <span>To Gate E1</span>
                <span className="text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 25 min
                </span>
              </div>
              <button className="w-full text-left text-[#0EA5E9] text-xs font-bold uppercase tracking-widest mt-4 hover:text-white transition-colors flex items-center gap-2">
                Download Port Map <MapPin className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
