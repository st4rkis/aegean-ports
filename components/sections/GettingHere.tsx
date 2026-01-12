"use client";

import { Car, Bus, MapPin, ParkingSquare, ArrowRight } from "lucide-react";
import { usePort } from "@/context/PortContext";

export default function GettingHere() {
  const { port } = usePort();

  const modes = [
    {
      id: "01",
      title: "Private Transfer",
      desc: "Priority lane access. Direct terminal drop-off.",
      icon: Car,
      href: "https://www.aegeantaxi.com",
      isExternal: true,
      // REVERTED TO BRAND BLUE [#0EA5E9]
      textBase: "text-[#0EA5E9]",
      borderBase: "border-slate-200",
      hoverClass: "group-hover:bg-slate-50 group-hover:border-[#0EA5E9]",
      iconColor: "text-[#0EA5E9]",
      btnDefault: "border-slate-200 text-slate-300",
      btnHover:
        "group-hover:bg-[#0EA5E9] group-hover:border-[#0EA5E9] group-hover:text-white",
    },
    {
      id: "02",
      title: "Public Transit",
      desc: "Metro Line 3 & Express Bus X96 connections.",
      icon: Bus,
      href: "/directions",
      isExternal: false,
      textBase: "text-slate-900",
      borderBase: "border-slate-200",
      hoverClass: "group-hover:bg-slate-50 group-hover:border-slate-900",
      iconColor: "text-slate-400 group-hover:text-slate-900",
      btnDefault: "border-slate-200 text-slate-300",
      btnHover:
        "group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white",
    },
    {
      id: "03",
      title: "Parking Zones",
      desc: "Real-time capacity for P1 (Short) & P2 (Long).",
      icon: ParkingSquare,
      href: "/parking",
      isExternal: false,
      textBase: "text-slate-900",
      borderBase: "border-slate-200",
      hoverClass: "group-hover:bg-slate-50 group-hover:border-slate-900",
      iconColor: "text-slate-400 group-hover:text-slate-900",
      btnDefault: "border-slate-200 text-slate-300",
      btnHover:
        "group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white",
    },
    {
      id: "04",
      title: "Gate Access",
      desc: "Pedestrian routes and inter-terminal shuttle.",
      icon: MapPin,
      href: "/terminals",
      isExternal: false,
      textBase: "text-slate-900",
      borderBase: "border-slate-200",
      hoverClass: "group-hover:bg-slate-50 group-hover:border-slate-900",
      iconColor: "text-slate-400 group-hover:text-slate-900",
      btnDefault: "border-slate-200 text-slate-300",
      btnHover:
        "group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white",
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-24 px-6 border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4"></div>
            <h2 className="text-4xl md:text-5xl  font-black tracking-tighter uppercase leading-none text-slate-900">
              Getting <span className="text-[#0EA5E9]">To</span> <br />
            </h2>
          </div>
          <div className="max-w-sm text-right hidden md:block"></div>
        </div>

        {/* --- MINIMAL LIST GRID --- */}
        <div className="flex flex-col border-t border-slate-200">
          {modes.map((mode) => (
            <a
              key={mode.id}
              href={mode.href}
              target={mode.isExternal ? "_blank" : "_self"}
              rel={mode.isExternal ? "nofollow noopener noreferrer" : undefined}
              className={`
                group relative flex flex-col md:flex-row md:items-center justify-between 
                py-10 border-b ${mode.borderBase} transition-all duration-300
                ${mode.hoverClass}
              `}
            >
              {/* Left: ID & Title */}
              <div className="flex items-center gap-8 md:gap-12 z-10 px-4 md:px-0">
                <span
                  className={`text-xs font-mono font-bold opacity-40 ${mode.textBase}`}
                >
                  /{mode.id}
                </span>
                <h3
                  className={`text-3xl md:text-4xl font-bold uppercase tracking-tighter transition-colors duration-300 ${mode.textBase}`}
                >
                  {mode.title}
                </h3>
              </div>

              {/* Middle: Description (Centered desktop) */}
              <div className="mt-4 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 px-4 md:px-0">
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                  {mode.desc}
                </p>
              </div>

              {/* Right: Icon & Arrow */}
              <div className="mt-6 md:mt-0 flex items-center gap-6 self-end md:self-auto z-10 px-4 md:px-0">
                <mode.icon
                  className={`w-6 h-6 transition-colors duration-300 ${mode.iconColor}`}
                />

                <div
                  className={`
                   w-12 h-12 border flex items-center justify-center 
                   transition-all duration-300 rounded-none
                   ${mode.btnDefault} ${mode.btnHover}
                `}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Line Accent (Left Edge) */}
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-current scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top ${mode.textBase}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
