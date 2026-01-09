"use client";

import {
  Wifi,
  Banknote,
  Briefcase,
  Accessibility,
  Coffee,
  Pill,
  ShoppingBag,
  Utensils,
  MapPin,
  CheckCircle2,
  Activity, // Used as a generic First Aid icon replacement
} from "lucide-react";

export default function FacilitiesLocal() {
  return (
    <section className="w-full bg-[#050505] border-b border-white/5 py-24 px-6">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* --- LEFT COL: INTERNAL FACILITIES (The Grid) --- */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Terminal Services
            </span>
          </div>

          <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-12">
            Facility <span className="text-[#0EA5E9]">Status</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Facility Cards */}
            {[
              {
                icon: Wifi,
                title: "Public Wi-Fi",
                status: "Operational",
                sub: "Network: PORT_FREE_WIFI",
              },
              {
                icon: Banknote,
                title: "ATMs / Banking",
                status: "Available",
                sub: "Piraeus Bank, Alpha Bank (Gate E7)",
              },
              {
                icon: Briefcase,
                title: "Luggage Storage",
                status: "Open 06:00-22:00",
                sub: "Secure Lockers @ Terminal A",
              },
              {
                icon: Accessibility,
                title: "PRM Assistance",
                status: "On Request",
                sub: "Wheelchair ramps at all gates",
              },
              {
                icon: CheckCircle2,
                title: "Ticket Booths",
                status: "Open",
                sub: "Central Agencies & Gate Kiosks",
              },
              {
                icon: Activity,
                title: "First Aid",
                status: "Standby",
                sub: "Medical Unit near Gate E3",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 p-6 border border-white/5 bg-[#0A0A0A] hover:border-[#0EA5E9]/30 transition-colors group"
              >
                <div className="p-3 bg-[#111] border border-white/10 group-hover:border-[#0EA5E9] transition-colors">
                  <item.icon className="w-6 h-6 text-gray-400 group-hover:text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COL: PERIMETER SCAN (10-min Radius) --- */}
        <div className="lg:col-span-1 bg-[#020617] border border-white/10 p-8 relative overflow-hidden">
          {/* Decorative Radar Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-20" />

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">
              10-Min Perimeter
            </h3>
            <span className="text-[10px] font-mono text-gray-500 uppercase border border-white/10 px-2 py-1">
              Radius: 800m
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
              Essential supply points located within walking distance of the
              main departure gates.
            </p>

            {[
              {
                icon: Coffee,
                name: "Everest Coffee",
                type: "Supplies / Food",
                dist: "2 min walk",
              },
              {
                icon: Pill,
                name: "Port Pharmacy",
                type: "Medical",
                dist: "5 min walk",
              },
              {
                icon: ShoppingBag,
                name: "Mini Market Express",
                type: "Essentials",
                dist: "3 min walk",
              },
              {
                icon: Utensils,
                name: "Goody's Burger",
                type: "Dining",
                dist: "4 min walk",
              },
            ].map((spot, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <spot.icon className="w-4 h-4 text-gray-600 group-hover:text-[#0EA5E9] transition-colors" />
                  <div>
                    <span className="block text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#0EA5E9] transition-colors">
                      {spot.name}
                    </span>
                    <span className="text-[10px] text-gray-600 font-mono uppercase">
                      {spot.type}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white bg-white/5 px-2 py-1">
                  {spot.dist}
                </span>
              </div>
            ))}

            <button className="w-full mt-8 border border-[#0EA5E9] text-[#0EA5E9] py-4 text-xs font-black uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-black transition-colors flex items-center justify-center gap-2">
              <span>Open Sector Map</span>
              <MapPin className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
