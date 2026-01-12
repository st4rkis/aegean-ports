"use client";

import {
  Calendar,
  Users,
  Search,
  Ship,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Anchor,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function TicketOperators() {
  const operators = [
    {
      name: "Blue Star Ferries",
      logo: null,
      logoText: "BLUE STAR",
      routes: "Cyclades / Dodecanese",
      bg: "bg-[#004C97]",
    },
    {
      name: "Minoan Lines",
      logo: null,
      logoText: "MINOAN",
      routes: "Crete / Italy",
      bg: "bg-[#E30613]",
    },
    {
      name: "Hellenic Seaways",
      logo: null,
      logoText: "HELLENIC SEAWAYS",
      routes: "Saronic / Sporades",
      bg: "bg-[#0057B8]",
    },
    {
      name: "Attica Group",
      logo: null,
      logoText: "ATTICA GROUP",
      routes: "Parent Company",
      bg: "bg-[#8A1538]",
    },
    {
      name: "Fast Ferries",
      logo: null,
      logoText: "FAST FERRIES",
      routes: "Andros / Tinos / Mykonos",
      bg: "bg-[#D6001C]",
    },
    {
      name: "Saronic Ferries",
      logo: null,
      logoText: "SARONIC",
      routes: "Aegina / Poros",
      bg: "bg-[#00AEEF]",
    },
  ];

  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-24 px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* --- LEFT COL: MINIMAL BOOKING ENGINE --- */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="bg-white p-10 shadow-2xl shadow-slate-200/50 border-l-4 border-[#0EA5E9]">
            {/* Minimal Header */}
            <div className="mb-10">
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-2 block">
                Ticketing
              </span>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Start Your <br /> Journey
              </h3>
            </div>

            {/* Premium Form Interface */}
            <div className="space-y-8">
              {/* Destination Input */}
              <div className="group relative">
                <input
                  type="text"
                  placeholder="WHERE TO?"
                  className="w-full h-14 bg-transparent border-b-2 border-slate-200 text-xl font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#0EA5E9] transition-all uppercase px-0"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                  <Search className="w-5 h-5 text-[#0EA5E9]" />
                </div>
              </div>

              {/* Date & Pax Row */}
              <div className="grid grid-cols-2 gap-8 pt-2">
                <div className="group relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                    Departing
                  </label>
                  <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2 cursor-pointer group-hover:border-slate-400 transition-colors">
                    <span className="text-sm font-bold text-slate-900 uppercase">
                      Select Date
                    </span>
                    <Calendar className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                    Passengers
                  </label>
                  <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2 cursor-pointer group-hover:border-slate-400 transition-colors">
                    <span className="text-sm font-bold text-slate-900 uppercase">
                      1 Traveler
                    </span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full h-16 bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-[#0EA5E9] transition-colors flex items-center justify-between px-8 mt-8 group">
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT COL: OPERATOR SWIPER --- */}
        <div className="lg:col-span-8 relative">
          {/* Section Title */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
                Authorized <span className="text-[#0EA5E9]">Carriers</span>
              </h2>
            </div>
            {/* Custom Nav Buttons for Swiper */}
            <div className="hidden md:flex gap-2">
              <button className="swiper-prev-btn w-14 h-14 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-next-btn w-14 h-14 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* The Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.8 }, // Show nearly 3 cards
            }}
            className="w-full h-[500px]"
          >
            {operators.map((op, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="h-full bg-white border border-slate-200 flex flex-col justify-between group hover:border-[#0EA5E9] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* TOP: Brand Color Stripe */}
                  <div className={`h-2 w-full ${op.bg}`} />

                  {/* LOGO AREA (Centered & Large) */}
                  <div className="flex-1 flex flex-col items-center justify-center p-10 relative z-10">
                    {/* Background Index Number */}
                    <span className="absolute top-4 right-4 text-8xl font-black text-slate-50 leading-none select-none z-0">
                      {idx + 1}
                    </span>

                    {op.logo ? (
                      // Image Logo Logic (Kept for future safety)
                      <div className="relative w-48 h-24 z-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={op.logo}
                          alt={op.name}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    ) : (
                      // Text Fallback (Active for all now)
                      <div className="z-10 text-center">
                        <Anchor className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h4 className="text-4xl font-black text-slate-300 uppercase tracking-tighter leading-none group-hover:text-slate-900 transition-colors">
                          {op.logoText}
                        </h4>
                      </div>
                    )}
                  </div>

                  {/* BOTTOM: Info Section */}
                  <div className="p-8 border-t border-slate-100 bg-slate-50/50 group-hover:bg-white transition-colors">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#0EA5E9] transition-colors leading-none">
                      {op.name}
                    </h4>

                    <div className="flex items-center gap-3 text-slate-500 mb-6">
                      <Ship className="w-4 h-4 text-[#0EA5E9]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wide">
                        {op.routes}
                      </span>
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      <span>View Fleet</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Bar Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#0EA5E9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
