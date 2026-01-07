"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePort } from "@/context/PortContext";
import {
  Menu,
  X,
  Anchor,
  Ship,
  Navigation,
  Info,
  ChevronRight,
  Calendar,
  MapPin,
  Globe,
  Phone,
} from "lucide-react";

export default function Header() {
  const { shortName } = usePort();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Departures", href: "/departures", icon: Ship },
    { label: "Schedules", href: "/schedules", icon: Calendar },
    { label: "Directions", href: "/directions", icon: Navigation },
    { label: "Terminals", href: "/terminals", icon: MapPin },
    { label: "Essentials", href: "/essentials", icon: Info },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-24 flex items-center
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          border-b
          ${
            isScrolled
              ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-white/5 shadow-2xl"
              : "bg-transparent border-transparent" // Totally clear when at top
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-between">
            {/* --- IDENTITY --- */}
            <Link
              href="/"
              className="group flex items-center gap-5 relative z-50"
            >
              <div className="relative flex items-center justify-center">
                {/* Icon Box: Sharp & Industrial */}
                <div className="bg-[#171717] border border-white/10 p-3.5 transform -skew-x-12 group-hover:border-[#F97316]/50 transition-colors duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] rounded-none">
                  <Anchor className="w-5 h-5 text-[#F97316] transform skew-x-12" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none uppercase font-mono group-hover:text-[#F97316] transition-colors">
                  {shortName}
                </span>
                <span className="text-[#525252] text-[10px] font-bold uppercase tracking-[0.3em] mt-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F97316] rounded-none animate-pulse shadow-[0_0_8px_#F97316]" />
                  Official Portal
                </span>
              </div>
            </Link>

            {/* --- DESKTOP NAV --- */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#171717]/50 p-1.5 rounded-none border border-white/5 backdrop-blur-md transform -skew-x-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 group transform skew-x-12 rounded-none
                      ${
                        isActive
                          ? "bg-white text-black"
                          : "text-[#737373] hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* --- DESKTOP CTA --- */}
            <div className="hidden lg:block">
              <a
                href="https://www.aegeantaxi.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="
                  group relative isolate overflow-hidden px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em]
                  transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]
                  transform -skew-x-12 rounded-none block
                "
              >
                <div className="relative z-10 flex items-center gap-3 transform skew-x-12">
                  <span>Transfer</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-white/40 skew-x-[-20deg]" />
              </a>
            </div>

            {/* --- MOBILE TOGGLE (Pure White) --- */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white hover:text-white transition-colors rounded-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#0A0A0A] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="h-full flex flex-col px-8 pt-32 pb-10">
          {/* Main Navigation */}
          <div className="flex flex-col space-y-6 mb-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-3xl font-black text-white uppercase tracking-tighter hover:text-[#F97316] transition-colors group"
              >
                <span className="w-2 h-2 bg-[#333] group-hover:bg-[#F97316] transition-colors rounded-none" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="space-y-6 border-t border-white/10 pt-8">
            <a
              href="https://www.aegeantaxi.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-[#F97316] text-black font-black text-sm uppercase tracking-widest p-5 hover:bg-white transition-colors rounded-none"
            >
              <span>Book Priority Transfer</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-4 border border-white/5 bg-white/5 rounded-none"
              >
                <Phone className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Contact
                </span>
              </Link>
              <Link
                href="/en"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-4 border border-white/5 bg-white/5 rounded-none"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  EN / GR
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-600 font-mono uppercase tracking-widest">
              <span>Port Authority System</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
