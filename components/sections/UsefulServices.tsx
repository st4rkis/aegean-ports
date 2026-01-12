"use client";

import { MapPin, ParkingSquare, Key, Car, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UsefulServices() {
  const services = [
    {
      title: "How to get to",
      desc: "Directions, bus routes, and maps to reach the port access gates easily.",
      icon: MapPin,
      bg: "bg-white",
      border: "border-slate-200",
      text: "text-slate-900",
      iconColor: "text-slate-400",
      btnBg: "bg-slate-50",
      btnText: "text-slate-900",
      btnBorder: "border-slate-200",
      hover: "hover:border-[#0EA5E9]",
      href: "/directions",
      btnLabel: "Get Directions",
    },
    {
      title: "Parking",
      desc: "Reserve your preferred spot online to smoothen your trip logistics.",
      icon: ParkingSquare,
      bg: "bg-white",
      border: "border-slate-200",
      text: "text-slate-900",
      iconColor: "text-slate-400",
      btnBg: "bg-slate-50",
      btnText: "text-slate-900",
      btnBorder: "border-slate-200",
      hover: "hover:border-[#0EA5E9]",
      href: "/parking",
      btnLabel: "Book a Spot",
    },
    {
      title: "Rent a Car",
      desc: "Find the best car rental deals from top authorized providers.",
      icon: Key,
      bg: "bg-white",
      border: "border-slate-200",
      text: "text-slate-900",
      iconColor: "text-slate-400",
      btnBg: "bg-slate-50",
      btnText: "text-slate-900",
      btnBorder: "border-slate-200",
      hover: "hover:border-[#0EA5E9]",
      href: "/car-rental",
      btnLabel: "View Offers",
    },
    {
      title: "Port Transfer",
      desc: "Pre-book your premium transfer for a hassle-free arrival.",
      icon: Car,
      // GOLD ACCENT (Deep Magma Aesthetic Requirement)
      bg: "bg-amber-400",
      border: "border-amber-500",
      text: "text-slate-900",
      iconColor: "text-slate-900",
      btnBg: "bg-slate-900",
      btnText: "text-white",
      btnBorder: "border-slate-900",
      hover: "hover:bg-amber-300",
      href: "https://www.aegeantaxi.com",
      isExternal: true,
      btnLabel: "Book Transfer",
    },
  ];

  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* --- Header Section (Matches TicketOperators Header) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Useful <span className="text-[#0EA5E9]">Services</span>
            </h2>
          </div>

          <div className="hidden md:block h-px flex-1 bg-slate-200 mx-12 mb-4" />
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex flex-col justify-between p-8 md:p-10
                ${item.bg} border ${item.border} 
                transition-all duration-300 group
                ${item.hover}
              `}
            >
              {/* Top Section */}
              <div>
                <div className="mb-8 flex justify-between items-start">
                  <item.icon
                    className={`w-10 h-10 ${item.iconColor} stroke-[1.5]`}
                  />
                  <ArrowRight
                    className={`w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${item.text}`}
                  />
                </div>

                <h3
                  className={`text-2xl font-black uppercase tracking-tighter mb-4 leading-none ${item.text}`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm font-medium leading-relaxed opacity-70 ${item.text}`}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom Section (Button) */}
              <div className="mt-10 pt-8 border-t border-black/5">
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`
                      w-full h-12 flex items-center justify-between px-5
                      ${item.btnBg} ${item.btnText} border ${item.btnBorder}
                      font-bold text-[10px] uppercase tracking-widest 
                      hover:brightness-110 transition-all
                    `}
                  >
                    <span>{item.btnLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      w-full h-12 flex items-center justify-between px-5
                      ${item.btnBg} ${item.btnText} border ${item.btnBorder}
                      font-bold text-[10px] uppercase tracking-widest 
                      hover:brightness-95 transition-all
                    `}
                  >
                    <span>{item.btnLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
