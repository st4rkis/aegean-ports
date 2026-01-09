"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  Anchor,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { usePort } from "@/context/PortContext";

export default function FooterFAQ() {
  const { port } = usePort();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // DYNAMIC YEAR
  const currentYear = new Date().getFullYear();

  const faqs = [
    {
      q: "Boarding Cut-off Times",
      a: "Passengers must be at the gate 30 minutes prior to departure. Vehicles require 60 minutes for loading procedures. Late arrivals may be denied boarding per port authority regulations.",
    },
    {
      q: "E-Ticket Validation",
      a: "Digital boarding passes are accepted at all gates. Ensure your screen brightness is maxed for scanning. Printed copies are required only for non-EU subsidized routes.",
    },
    {
      q: "Luggage Protocols",
      a: "Large luggage must be stowed in the vessel's designated garage racks. Only hand luggage (max 10kg) is permitted in the passenger lounges. Porters are available at Gate E7.",
    },
    {
      q: "Weather Cancellations",
      a: "Sailing bans are issued by the Central Port Authority when winds exceed 8 Beaufort. Alerts are pushed to the 'Live Dashboard' on this portal immediately.",
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24">
      {/* --- PART 1: TACTICAL FAQ --- */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#0EA5E9]" />
              <span className="text-[#0EA5E9] font-mono text-xs font-bold uppercase tracking-[0.3em]">
                Help Desk
              </span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              <span className="text-[#0EA5E9]">FAQ</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Common operational procedures and passenger regulations.
            </p>
            <Link
              href="/help"
              className="group inline-flex items-center gap-2 border border-slate-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-900 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            >
              <span>Access Knowledge Base</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-slate-200 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left group hover:bg-white transition-colors px-4 -mx-4 rounded-none"
                >
                  <span
                    className={`text-lg font-bold uppercase tracking-wider transition-colors ${
                      openIndex === idx
                        ? "text-slate-900"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {item.q}
                  </span>
                  <div
                    className={`p-1 border transition-colors ${
                      openIndex === idx
                        ? "border-[#0EA5E9] text-[#0EA5E9] bg-white"
                        : "border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                    }`}
                  >
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out px-4 -mx-4 ${
                    openIndex === idx
                      ? "max-h-40 opacity-100 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-500 text-sm font-light leading-relaxed max-w-3xl border-l-2 border-[#0EA5E9] pl-4">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 2: THE WHITE AUTHORITY FOOTER --- */}
      <div className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0EA5E9] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Anchor className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg leading-none uppercase tracking-tighter">
                  PORT OF {port?.shortName || "PORT"}
                </span>
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.3em] mt-1">
                  Digital Portal
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Official maritime portal for passenger logistics, commercial
              traffic, and port security operations.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-slate-50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-slate-100 pb-2 inline-block">
              System Links
            </h4>
            <ul className="space-y-3">
              {[
                "Live Dashboard",
                "Departures",
                "Arrivals",
                "Harbor Map",
                "Security Gates",
              ].map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-slate-500 text-sm hover:text-[#0EA5E9] hover:pl-1 transition-all"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-slate-100 pb-2 inline-block">
              Logistics
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.aegeantaxi.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-slate-500 text-sm hover:text-[#0EA5E9] hover:pl-1 transition-all"
                >
                  Private Transfers
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 text-sm hover:text-[#0EA5E9] hover:pl-1 transition-all"
                >
                  Public Bus Schedules
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-500 text-sm hover:text-[#0EA5E9] hover:pl-1 transition-all"
                >
                  Parking Availability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-slate-100 pb-2 inline-block">
              Contact Ops
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0EA5E9] mt-0.5" />
                <span className="text-slate-500 text-sm">
                  Terminal Administration Bldg,
                  <br /> Gate E1, 18531
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span className="text-slate-500 text-sm">+30 210 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0EA5E9]" />
                <span className="text-slate-500 text-sm">
                  ops@portauthority.gr
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest">
            © {currentYear} Port Authority System. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-slate-400 text-[10px] uppercase tracking-widest hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-400 text-[10px] uppercase tracking-widest hover:text-slate-900"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-400 text-[10px] uppercase tracking-widest hover:text-slate-900"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
