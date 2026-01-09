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
  Wind,
  AlertTriangle,
  Ticket,
  Coffee,
  HelpCircle,
  Bus,
  Search,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { port } = usePort();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Departures", href: "/departures", icon: Calendar },
    { label: "Terminals", href: "/terminals", icon: MapPin },
    { label: "Getting There", href: "/directions", icon: Bus },
    { label: "Tickets", href: "/tickets", icon: Ticket },
    { label: "Facilities", href: "/facilities", icon: Coffee },
    { label: "Help", href: "/help", icon: HelpCircle },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
        {/* --- LEVEL 1: UTILITY BAR (Helsinki Style: Top Strip) --- */}
        <div className="bg-[#050505] border-b border-white/5 h-12 flex items-center justify-between px-6 lg:px-12 relative z-50">
          {/* Left: Operational Status */}
          <div className="flex items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2 hover:text-[#0EA5E9] cursor-pointer transition-colors">
              <Wind className="w-3.5 h-3.5" />
              <span>24km/h NNE</span>
            </div>
            <div className="flex items-center gap-2 text-[#0EA5E9] animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Service Normal</span>
            </div>
          </div>

          {/* Right: Secondary Links */}
          <div className="hidden md:flex items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link href="/cargo" className="hover:text-white transition-colors">
              Cargo
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <button className="hover:text-[#0EA5E9] transition-colors flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
          </div>
        </div>

        {/* --- LEVEL 2: MAIN AUTHORITY BAR (Helsinki Style: Tall & Solid) --- */}
        <div
          className={`
            w-full h-24 lg:h-28 transition-all duration-300 border-b
            ${
              isScrolled
                ? "bg-[#020617]/95 backdrop-blur-md border-white/10 shadow-2xl"
                : "bg-[#020617] border-white/5"
            }
          `}
        >
          <div className="h-full px-6 lg:px-12 flex items-center justify-between max-w-[1800px] mx-auto">
            {/* 1. BRAND IDENTITY (Large & Blocky) */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="w-14 h-14 bg-[#0EA5E9] flex items-center justify-center text-black shadow-[0_0_30px_rgba(14,165,233,0.3)] group-hover:scale-105 transition-transform duration-300">
                <Anchor className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-white font-black text-2xl lg:text-3xl leading-none uppercase tracking-tighter group-hover:text-[#0EA5E9] transition-colors">
                  PORT OF {port?.shortName || "PORT"}
                </span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em] mt-1">
                  digital portal
                </span>
              </div>
            </Link>

            {/* 2. MAIN NAVIGATION (Spacious & Bold) */}
            <nav className="hidden xl:flex items-center gap-8 h-full">
              <Link
                href="/"
                className={`
                    h-full flex items-center text-sm font-bold uppercase tracking-widest border-b-4 border-transparent hover:text-white transition-all
                    ${
                      pathname === "/"
                        ? "text-white border-[#0EA5E9]"
                        : "text-gray-400 hover:border-white/20"
                    }
                  `}
              >
                Live
              </Link>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                        h-full flex items-center text-sm font-bold uppercase tracking-widest border-b-4 transition-all
                        ${
                          isActive
                            ? "text-white border-[#0EA5E9]"
                            : "text-gray-400 border-transparent hover:text-white hover:border-white/20"
                        }
                      `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* 3. ACTION AREA (Right Aligned) */}
            <div className="flex items-center gap-6 pl-6 border-l border-white/10 h-14">
              {/* Search Icon (Typical in Port Headers) */}
              <button className="hidden xl:flex items-center justify-center w-12 h-12 text-white hover:text-[#0EA5E9] transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Primary CTA */}
              <Link
                href="/plan"
                className="hidden md:flex items-center gap-3 bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-white transition-colors"
              >
                <span>Plan Trip</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-white hover:text-[#0EA5E9] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE DRAWER (Full Screen Overlay) --- */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#020617] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="h-full flex flex-col px-6 pt-40 pb-10 overflow-y-auto">
          <div className="flex flex-col space-y-2 mb-auto border-t border-white/10">
            {[
              { label: "Live Dashboard", href: "/", icon: Ship },
              ...navLinks,
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-6 text-xl font-black text-white uppercase tracking-tighter hover:text-[#0EA5E9] border-b border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-6 h-6 text-gray-600 group-hover:text-[#0EA5E9] transition-colors" />
                  {link.label}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white" />
              </Link>
            ))}
          </div>

          {/* Mobile Footer Area */}
          <div className="space-y-6 pt-8">
            <a
              href="https://www.aegeantaxi.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#0EA5E9] text-black font-black text-sm uppercase tracking-widest p-5 hover:bg-white transition-colors"
            >
              <span>Book Transfer</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
