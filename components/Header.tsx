"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePort } from "@/context/PortContext";
import {
  Menu,
  X,
  Anchor,
  ChevronRight,
  Calendar,
  MapPin,
  Globe,
  Wind,
  AlertTriangle,
  Ticket,
  Coffee,
  HelpCircle,
  Bus,
  Search,
  Ship,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { port } = usePort();

  useEffect(() => {
    const handleScroll = () => {
      // 48px is the height of the top utility bar
      setIsScrolled(window.scrollY > 48);
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
      {/* CRITICAL FIX: 
        1. sticky: Stays in flow, pushes content down (no overlap).
        2. -top-12: This 48px negative margin matches the height of the utility bar.
           When you scroll down, the header moves up 48px and then "sticks", 
           effectively hiding the utility bar but keeping the main nav visible.
        3. z-50: Ensures it stays on top of everything.
      */}
      <header className="sticky -top-12 left-0 right-0 z-50 flex flex-col font-sans transition-all duration-300">
        {/* --- LEVEL 1: UTILITY BAR (h-12 = 48px) --- */}
        <div className="bg-slate-50 border-b border-slate-200 h-12 flex items-center justify-between px-6 lg:px-12 relative z-50">
          <div className="flex items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2 hover:text-[#0EA5E9] cursor-pointer transition-colors">
              <Wind className="w-3.5 h-3.5 text-slate-400" />
              <span>24km/h NNE</span>
            </div>
            <div className="flex items-center gap-2 text-[#0EA5E9] animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Service Normal</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
            <Link
              href="/contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>
            <Link href="/cargo" className="hover:text-black transition-colors">
              Cargo
            </Link>
            <div className="h-4 w-px bg-slate-300" />
            <button className="hover:text-[#0EA5E9] transition-colors flex items-center gap-2 text-slate-700">
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
          </div>
        </div>

        {/* --- LEVEL 2: MAIN BAR (Sticks to Top) --- */}
        <div
          className={`
            w-full h-24 lg:h-28 border-b bg-white transition-all duration-300
            ${
              isScrolled
                ? "border-slate-200 shadow-xl shadow-slate-900/5"
                : "border-slate-100"
            }
          `}
        >
          <div className="h-full px-6 lg:px-12 flex items-center justify-between max-w-[1800px] mx-auto">
            {/* 1. BRAND */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="w-14 h-14 bg-[#0EA5E9] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(14,165,233,0.3)] group-hover:scale-105 transition-transform duration-300">
                <Anchor className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-slate-900 font-black text-2xl lg:text-3xl leading-none uppercase tracking-tighter group-hover:text-[#0EA5E9] transition-colors">
                  PORT OF {port?.shortName || "PORT"}
                </span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em] mt-1">
                  digital portal
                </span>
              </div>
            </Link>

            {/* 2. NAVIGATION */}
            <nav className="hidden xl:flex items-center gap-8 h-full">
              <Link
                href="/"
                className={`
                    h-full flex items-center text-sm font-bold uppercase tracking-widest border-b-4 border-transparent transition-all
                    ${
                      pathname === "/"
                        ? "text-slate-900 border-[#0EA5E9]"
                        : "text-slate-500 hover:text-slate-900 hover:border-black"
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
                            ? "text-slate-900 border-[#0EA5E9]"
                            : "text-slate-500 border-transparent hover:text-slate-900 hover:border-black"
                        }
                      `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* 3. ACTION AREA */}
            <div className="flex items-center gap-6 pl-6 border-l border-slate-100 h-14">
              <button className="hidden xl:flex items-center justify-center w-12 h-12 text-slate-400 hover:text-[#0EA5E9] transition-colors">
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/plan"
                className="hidden md:flex items-center gap-3 bg-slate-900 text-white px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-[#0EA5E9] transition-colors shadow-lg shadow-slate-900/10"
              >
                <span>Plan Trip</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-slate-900 hover:text-[#0EA5E9] transition-colors"
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

      {/* --- MOBILE DRAWER --- */}
      <div
        className={`
          fixed inset-0 z-[60] bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-slate-100 rounded-full"
          >
            <X className="w-8 h-8 text-slate-900" />
          </button>
        </div>
        <div className="h-full flex flex-col px-6 pt-40 pb-10 overflow-y-auto">
          <div className="flex flex-col space-y-2 mb-auto border-t border-slate-100">
            {[
              { label: "Live Dashboard", href: "/", icon: Ship },
              ...navLinks,
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-6 text-xl font-black text-slate-900 uppercase tracking-tighter hover:text-[#0EA5E9] border-b border-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-6 h-6 text-slate-400 group-hover:text-[#0EA5E9] transition-colors" />
                  {link.label}
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#0EA5E9]" />
              </Link>
            ))}
          </div>

          <div className="space-y-6 pt-8">
            <a
              href="https://www.aegeantaxi.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#0EA5E9] text-white font-black text-sm uppercase tracking-widest p-5 hover:bg-slate-900 transition-colors"
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
