"use client";

import {
  Car,
  Bus,
  MapPin,
  ParkingSquare,
  ArrowRight,
  Train,
  Ship,
  Anchor,
  Navigation,
} from "lucide-react";
import { usePort } from "@/context/PortContext";
import { PORTS, IconKey } from "@/lib/ports.config";

// Map string keys from config back to Lucide components
const ICON_MAP: Record<IconKey, any> = {
  Car,
  Bus,
  Train,
  Ship,
  ParkingSquare,
  MapPin,
  Anchor,
  Navigation,
};

export default function GettingHere() {
  const { port } = usePort();

  // Find the active port configuration or fallback to Piraeus (PIR)
  // We check against port.code from context
  const activePort =
    port && PORTS.find((p) => p.key === port.key)
      ? PORTS.find((p) => p.key === port.key)!
      : PORTS.find((p) => p.key === "PIR")!;

  const { transport } = activePort;

  return (
    <section className="w-full bg-white text-slate-900 py-24 px-6 border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12">
          <div className="max-w-3xl">
            {/* UPDATED H2 Structure */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-slate-900 mb-6">
              Getting To{" "}
              <span className="text-[#0EA5E9]">{activePort.shortName}</span>
            </h2>

            {/* DYNAMIC DESCRIPTION from Config */}
            <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-slate-100 pl-6">
              {transport.desc}
            </p>
          </div>
        </div>

        {/* --- DYNAMIC LIST GRID --- */}
        <div className="flex flex-col border-t border-slate-200">
          {transport.modes.map((mode) => {
            const IconComponent = ICON_MAP[mode.icon] || MapPin;

            // Define styling based on 'highlight' flag (Blue vs Slate)
            const styles = mode.highlight
              ? {
                  textBase: "text-[#0EA5E9]",
                  borderBase: "border-slate-200",
                  hoverClass:
                    "group-hover:bg-slate-50 group-hover:border-[#0EA5E9]",
                  iconColor: "text-[#0EA5E9]",
                  btnDefault: "border-slate-200 text-slate-300",
                  btnHover:
                    "group-hover:bg-[#0EA5E9] group-hover:border-[#0EA5E9] group-hover:text-white",
                }
              : {
                  textBase: "text-slate-900",
                  borderBase: "border-slate-200",
                  hoverClass:
                    "group-hover:bg-slate-50 group-hover:border-slate-900",
                  iconColor: "text-slate-400 group-hover:text-slate-900",
                  btnDefault: "border-slate-200 text-slate-300",
                  btnHover:
                    "group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white",
                };

            return (
              <a
                key={mode.id}
                href={mode.href}
                target={mode.isExternal ? "_blank" : "_self"}
                rel={
                  mode.isExternal ? "nofollow noopener noreferrer" : undefined
                }
                className={`
                  group relative flex flex-col md:flex-row md:items-center justify-between 
                  py-10 border-b ${styles.borderBase} transition-all duration-300
                  ${styles.hoverClass}
                `}
              >
                {/* Left: ID & Title */}
                <div className="flex items-center gap-8 md:gap-12 z-10 px-4 md:px-0">
                  <span
                    className={`text-xs font-mono font-bold opacity-40 ${styles.textBase}`}
                  >
                    /{mode.id}
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-bold uppercase tracking-tighter transition-colors duration-300 ${styles.textBase}`}
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
                  <IconComponent
                    className={`w-6 h-6 transition-colors duration-300 ${styles.iconColor}`}
                  />

                  <div
                    className={`
                     w-12 h-12 border flex items-center justify-center 
                     transition-all duration-300 rounded-none
                     ${styles.btnDefault} ${styles.btnHover}
                  `}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Line Accent (Left Edge) */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 bg-current scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top ${styles.textBase}`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
