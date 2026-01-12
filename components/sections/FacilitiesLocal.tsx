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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// --- FIX: IMPORT ALL REQUIRED SWIPER CSS ---
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { usePort } from "@/context/PortContext";

export default function FacilitiesLocal() {
  const { port } = usePort();

  const facilities = [
    {
      icon: Wifi,
      title: "Public Wi-Fi",
      status: "Operational",
      sub: "Network: PORT_FREE_WIFI",
      desc: "High-speed internet access available throughout all terminal buildings and departure gates.",
    },
    {
      icon: Banknote,
      title: "ATMs / Banking",
      status: "Available",
      sub: "Piraeus Bank, Alpha Bank",
      desc: "24/7 cash withdrawal points located near Gate E7 and the central ticket office.",
    },
    {
      icon: Briefcase,
      title: "Luggage Storage",
      status: "Open 06:00-22:00",
      sub: "Secure Lockers @ Terminal A",
      desc: "Short and long-term storage options for passengers. X-ray screening required.",
    },
    {
      icon: Accessibility,
      title: "PRM Assistance",
      status: "On Request",
      sub: "Wheelchair ramps at all gates",
      desc: "Dedicated personnel for passengers with reduced mobility. Please request 48h in advance.",
    },
    {
      icon: CheckCircle2,
      title: "Ticket Booths",
      status: "Open",
      sub: "Central Agencies & Gate Kiosks",
      desc: "Official agency counters for last-minute bookings and ticket printing.",
    },
    {
      icon: Activity,
      title: "First Aid",
      status: "Standby",
      sub: "Medical Unit near Gate E3",
      desc: "Emergency medical assistance available during port operational hours.",
    },
  ];

  const pois = [
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
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200 py-24 px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* --- LEFT COL: MAIN FACILITIES (Swiper) --- */}
        <div className="lg:col-span-8 min-w-0">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Port <span className="text-[#0EA5E9]">Facilities</span>
              </h2>

              {/* Main Fac Navigation */}
              <div className="flex gap-2">
                <button className="fac-prev w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="fac-next w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed max-w-3xl border-l-4 border-slate-100 pl-6">
              The {port?.shortName || "Port"} terminal is equipped with
              essential services to ensure a smooth transition. From banking and
              connectivity to accessibility support, verify operational status
              below.
            </p>
          </div>

          {/* MAIN SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".fac-next",
              prevEl: ".fac-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="w-full h-[320px]"
          >
            {facilities.map((item, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="h-full bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#0EA5E9] hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group cursor-pointer">
                  {/* Top: Icon & Status */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-slate-50 text-slate-400 group-hover:text-[#0EA5E9] group-hover:bg-[#0EA5E9]/5 transition-colors">
                      <item.icon className="w-8 h-8" />
                    </div>

                    <div className="flex items-center gap-2 px-2 py-1 bg-slate-50 border border-slate-100">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Title & Sub */}
                  <div className="mt-6">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#0EA5E9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-4">
                      {item.sub}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Bar Accent */}
                  <div className="w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-[#0EA5E9] transition-all duration-500 mt-auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- RIGHT COL: POINTS OF INTEREST (Swiper) --- */}
        <div className="lg:col-span-4 min-w-0">
          <div className="bg-slate-50 border border-slate-200 p-8 h-full relative overflow-hidden flex flex-col">
            {/* Decorative Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-50" />

            {/* Right Col Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                  Points of interest
                </h3>

                {/* POI Navigation Buttons */}
                <div className="flex gap-1">
                  <button className="poi-prev w-8 h-8 bg-white border border-slate-200 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] transition-all">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="poi-next w-8 h-8 bg-white border border-slate-200 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-200 bg-white px-2 py-1">
                  Radius: 800m
                </span>
              </div>

              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Essential supply points located within walking distance.
              </p>
            </div>

            {/* POI SWIPER (Fixed Height Added) */}
            <div className="w-full mb-6">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1.1}
                navigation={{
                  nextEl: ".poi-next",
                  prevEl: ".poi-prev",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                className="w-full h-[240px]" // Explicit height prevents collapse/white screen
              >
                {pois.map((spot, idx) => (
                  <SwiperSlide key={idx} className="h-full">
                    {/* POI CARD */}
                    <div className="h-full bg-white border border-slate-200 p-6 flex flex-col justify-between group hover:border-[#0EA5E9] transition-all cursor-pointer">
                      {/* Top: Icon & Dist */}
                      <div className="flex justify-between items-start mb-4">
                        <spot.icon className="w-8 h-8 text-slate-300 group-hover:text-[#0EA5E9] transition-colors" />
                        <span className="text-[10px] font-bold text-slate-900 bg-slate-50 border border-slate-100 px-2 py-1 uppercase">
                          {spot.dist}
                        </span>
                      </div>

                      {/* Bottom: Info */}
                      <div>
                        <span className="block text-lg font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0EA5E9] transition-colors mb-1">
                          {spot.name}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">
                          {spot.type}
                        </span>
                      </div>

                      {/* Hover Line */}
                      <div className="w-full h-0.5 bg-slate-100 mt-4 group-hover:bg-[#0EA5E9] transition-colors" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button className="w-full mt-auto border-2 border-[#0EA5E9] text-[#0EA5E9] py-4 text-xs font-black uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>Open Sector Map</span>
              <MapPin className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
