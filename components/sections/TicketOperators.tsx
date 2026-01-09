"use client";

import {
  Ticket,
  Calendar,
  Users,
  Car,
  Search,
  Ship,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function TicketOperators() {
  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-24 px-6">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* --- LEFT COL: BOOKING ENGINE (The Tool) --- */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-slate-200 p-8 lg:p-12 h-full flex flex-col relative overflow-hidden group hover:border-[#0EA5E9] transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#0EA5E9] text-white">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                  Reservation <br /> System
                </h3>
              </div>
            </div>

            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Official ticketing gateway for all scheduled departures. Real-time
              availability for passengers and vehicles.
            </p>

            {/* Form Interface */}
            <div className="space-y-4 mt-auto">
              {/* Destination */}
              <div className="relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 absolute top-3 left-4">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="SELECT PORT (e.g. SYROS)"
                  className="w-full h-16 pt-6 pb-2 px-4 bg-slate-50 border border-slate-200 text-slate-900 font-bold uppercase placeholder:text-slate-300 focus:outline-none focus:border-[#0EA5E9] transition-colors rounded-none"
                />
              </div>

              {/* Date & Pax Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 absolute top-3 left-4">
                    Date
                  </label>
                  <div className="w-full h-16 pt-6 pb-2 px-4 bg-slate-50 border border-slate-200 text-slate-900 font-bold uppercase flex items-center justify-between cursor-pointer hover:border-slate-300">
                    <span>Today</span>
                    <Calendar className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 absolute top-3 left-4">
                    Pax
                  </label>
                  <div className="w-full h-16 pt-6 pb-2 px-4 bg-slate-50 border border-slate-200 text-slate-900 font-bold uppercase flex items-center justify-between cursor-pointer hover:border-slate-300">
                    <span>1 Adult</span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Vehicle Toggle */}
              <button className="w-full h-12 border border-slate-200 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors bg-white">
                <Car className="w-4 h-4" />
                <span>Add Vehicle</span>
              </button>

              {/* Submit */}
              <button className="w-full h-16 bg-[#0EA5E9] text-white font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-colors flex items-center justify-center gap-3">
                <span>Search Crossings</span>
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-slate-100 group-hover:border-[#0EA5E9] transition-colors duration-300" />
          </div>
        </div>

        {/* --- RIGHT COL: OPERATOR DIRECTORY (The Authority) --- */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#0EA5E9]" />
            <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Strategic Partners
            </span>
          </div>

          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-12">
            Authorized <span className="text-[#0EA5E9]">Carriers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Operator Cards */}
            {[
              {
                name: "Blue Star Ferries",
                type: "Conventional / High Speed",
                routes: "Cyclades, Dodecanese",
                status: "Active",
              },
              {
                name: "Seajets",
                type: "High Speed Catamarans",
                routes: "Cyclades, Crete",
                status: "Active",
              },
              {
                name: "Minoan Lines",
                type: "Cruise Ferries",
                routes: "Crete (Heraklion)",
                status: "Active",
              },
              {
                name: "Hellenic Seaways",
                type: "High Speed / Aero",
                routes: "Saronic, Sporades",
                status: "Active",
              },
              {
                name: "Fast Ferries",
                type: "Conventional",
                routes: "Andros, Tinos, Mykonos",
                status: "Scheduled",
              },
              {
                name: "Saronic Ferries",
                type: "Commuter",
                routes: "Aegina, Poros",
                status: "Active",
              },
            ].map((op, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 flex items-start justify-between group hover:border-[#0EA5E9] transition-all cursor-pointer"
              >
                <div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-1 group-hover:text-[#0EA5E9] transition-colors">
                    {op.name}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    {op.type}
                  </p>
                  <div className="flex items-center gap-2">
                    <Ship className="w-3 h-3 text-slate-300" />
                    <span className="text-xs text-slate-600 font-mono uppercase truncate max-w-[150px]">
                      {op.routes}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {op.status === "Active" ? (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-100">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                      <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">
                        Online
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-none" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        Sched
                      </span>
                    </div>
                  )}
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#0EA5E9] transition-colors mt-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/operators"
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#0EA5E9] flex items-center gap-2 transition-colors"
            >
              View All 14 Operators <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
