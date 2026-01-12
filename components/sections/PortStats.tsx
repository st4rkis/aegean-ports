"use client";

import { ArrowUpRight, Anchor, Map, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { usePort } from "@/context/PortContext";

export default function PortStats() {
  const { port } = usePort();

  return (
    <section className="w-full bg-[#020617] py-24 px-6 relative overflow-hidden border-t border-slate-800">
      {/* Background Ambience (Deep Magma) */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#0EA5E9]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/50 to-transparent" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-2">
              Port <span className="text-[#0EA5E9]">Statistics</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-8">
              Traffic Intelligence & Connectivity Data
            </p>

            {/* NEW: Relevant Paragraph pulled from Config */}
            <p className="text-slate-400 text-lg leading-relaxed border-l-4 border-[#0EA5E9] pl-6 max-w-2xl">
              {port?.description ||
                "A strategic maritime gateway facilitating high-volume passenger and commercial transit across the Aegean archipelago. The terminal serves as a primary intermodal hub connecting the mainland to key island destinations."}
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-2 self-start md:self-end">
            <button className="stats-prev w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#0EA5E9] transition-colors cursor-pointer">
              <span>&lt;</span>
            </button>
            <div className="h-10 px-4 border border-slate-700 flex items-center justify-center text-slate-400 font-mono text-xs tracking-widest">
              FY 2024-25
            </div>
            <button className="stats-next w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#0EA5E9] transition-colors cursor-pointer">
              <span>&gt;</span>
            </button>
          </div>
        </div>

        {/* --- The Swiper --- */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".stats-next",
            prevEl: ".stats-prev",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }, // 3 Equal columns on desktop
          }}
          className="w-full h-[500px]"
        >
          {/* CARD 1: FERRY ARRIVALS */}
          <SwiperSlide className="h-full">
            <div className="h-full bg-[#0B1121] border border-slate-800 p-10 flex flex-col justify-between relative group hover:border-[#0EA5E9] transition-all duration-300">
              {/* Top Section */}
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[#0EA5E9] font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Anchor className="w-3 h-3" /> Vessel Movements
                  </span>
                </div>
                <div className="text-7xl font-black text-white tracking-tighter mb-2">
                  24.5<span className="text-[#0EA5E9]">k</span>
                </div>
                <p className="text-slate-400 font-medium text-sm uppercase tracking-wide">
                  Annual Ferry Arrivals
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto">
                <div className="inline-flex items-center gap-3 bg-slate-900 border border-slate-700 px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      Growth vs Prev. Year
                    </span>
                    <span className="text-[#0EA5E9] font-bold text-lg flex items-center gap-1 leading-none mt-1">
                      <ArrowUpRight className="w-4 h-4" /> +6.5%
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Decor */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Anchor className="w-40 h-40 text-white" />
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 2: CONNECTIVITY */}
          <SwiperSlide className="h-full">
            <div className="h-full bg-[#0B1121] border border-slate-800 p-10 flex flex-col justify-between relative group hover:border-[#0EA5E9] transition-all duration-300">
              {/* Top Section */}
              <div>
                <div className="mb-8">
                  <span className="text-[#0EA5E9] font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Connectivity Split
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full">
                  <div className="flex h-16 w-full mb-6">
                    <div className="h-full bg-[#0EA5E9] w-[95%] flex items-center justify-center text-white font-black text-xl">
                      95%
                    </div>
                    <div className="h-full bg-white w-[5%] flex items-center justify-center text-slate-900 font-black text-xs">
                      5%
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto border-t border-slate-800 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-[#0EA5E9] rounded-none" />
                      <span className="text-white font-bold text-sm uppercase">
                        Domestic
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs pl-4 block">
                      16.8M Travelers
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <div className="w-2 h-2 bg-white rounded-none" />
                      <span className="text-white font-bold text-sm uppercase">
                        Int'l
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs block">
                      0.6M Travelers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 3: DESTINATIONS */}
          <SwiperSlide className="h-full">
            <div className="h-full bg-[#0B1121] border border-slate-800 p-10 flex flex-col justify-between relative group hover:border-[#0EA5E9] transition-all duration-300">
              {/* Top Section */}
              <div>
                <span className="text-[#0EA5E9] font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Map className="w-3 h-3" /> Network Reach
                </span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mt-4 mb-2">
                  Island <br /> Connections
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                  Direct routes to Cyclades, Dodecanese, Crete & Saronic Gulf.
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto">
                <div className="flex items-end gap-2 h-32 border-b border-slate-800 pb-0">
                  <div className="flex-1 bg-slate-800 h-[40%] group-hover:bg-[#0EA5E9]/40 transition-colors duration-500" />
                  <div className="flex-1 bg-slate-800 h-[60%] group-hover:bg-[#0EA5E9]/60 transition-colors duration-500" />
                  <div className="flex-1 bg-slate-800 h-[30%] group-hover:bg-[#0EA5E9]/30 transition-colors duration-500" />
                  <div className="flex-1 bg-[#0EA5E9] h-[100%] relative group-hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold text-lg">
                      72
                    </span>
                  </div>
                  <div className="flex-1 bg-slate-800 h-[50%] group-hover:bg-[#0EA5E9]/50 transition-colors duration-500" />
                  <div className="flex-1 bg-slate-800 h-[75%] group-hover:bg-[#0EA5E9]/75 transition-colors duration-500" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2 uppercase">
                  <span>Cyclades</span>
                  <span>Crete</span>
                  <span>Dodecanese</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
