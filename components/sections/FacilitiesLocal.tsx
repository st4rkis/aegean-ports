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
  Activity,
} from "lucide-react";

export default function FacilitiesLocal() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-24 px-6 overflow-hidden">
      <div className="max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* --- LEFT COL: INTERNAL FACILITIES --- */}
        <div className="lg:col-span-2 min-w-0">
          {" "}
          {/* min-w-0 prevents flex blowout */}
          <div className="flex items-center gap-4 mb-10"></div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-12">
            Port <span className="text-[#0EA5E9]">Facilities</span>
          </h2>
          {/* THE SWIPER HYBRID: 
            - Mobile: flex + overflow-x-auto (Horizontal Scroll)
            - Desktop: grid + overflow-visible (Standard Grid)
          */}
          <div
            className="
            flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 
            lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0
            scrollbar-hide
          "
          >
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
                className="
                  shrink-0 w-[85vw] md:w-100 lg:w-auto snap-center 
                  flex items-start gap-6 p-6 border border-slate-200 bg-white 
                  hover:border-[#0EA5E9] transition-all shadow-sm hover:shadow-md group
                "
              >
                <div className="p-3 bg-slate-50 border border-slate-200 group-hover:border-[#0EA5E9] transition-colors">
                  <item.icon className="w-6 h-6 text-slate-400 group-hover:text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                    <span className="text-[10px] font-mono text-green-600 uppercase tracking-widest">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono uppercase">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COL: PERIMETER SCAN (10-min Radius) --- */}
        <div className="lg:col-span-1 bg-slate-50 border border-slate-200 p-8 relative overflow-hidden h-fit">
          {/* Decorative Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#0EA5E9] to-transparent opacity-50" />

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
              10-Min Perimeter
            </h3>
            <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-200 bg-white px-2 py-1">
              Radius: 800m
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
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
                className="flex items-center justify-between border-b border-slate-200 pb-4 last:border-0 group cursor-pointer hover:pl-2 transition-all"
              >
                <div className="flex items-center gap-4">
                  <spot.icon className="w-4 h-4 text-slate-400 group-hover:text-[#0EA5E9] transition-colors" />
                  <div>
                    <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider group-hover:text-[#0EA5E9] transition-colors">
                      {spot.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      {spot.type}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-600 bg-white border border-slate-200 px-2 py-1">
                  {spot.dist}
                </span>
              </div>
            ))}

            <button className="w-full mt-8 border border-[#0EA5E9] text-[#0EA5E9] py-4 text-xs font-black uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>Open Sector Map</span>
              <MapPin className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
