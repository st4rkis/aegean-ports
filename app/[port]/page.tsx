// app/[ports]/page.tsx
import { portByKey } from "@/lib/ports.config";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Ship,
  ArrowRight,
  MapPin,
  Navigation,
  ShieldCheck,
  Server,
} from "lucide-react";

// 1. Define Props for Next.js 16
type Props = {
  params: Promise<{ ports: string }>;
};

export default async function PortHome({
  params,
}: {
  params: Promise<{ port: string }>;
}) {
  const { port } = await params;
  const code = port.toUpperCase();
  const portConfig = portByKey[code];

  return (
    <main className="bg-[#111] min-h-screen">
      {" "}
      {/* <div className="relative w-full bg-[#050505] text-white pt-24">
        <div className="min-h-[calc(100dvh-6rem)] flex flex-col justify-center relative px-6 overflow-hidden border-b border-white/5">
   
          <div className="absolute bottom-[-20%] left-[-10%] w-200 h-200 bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none" />

          <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)] blur-[120px] pointer-events-none" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex items-center gap-4 my-8">
              <div className="h-px w-12 bg-[#F97316]" />
              <span className="text-[#F97316] font-mono text-xs font-bold uppercase tracking-[0.3em]">
                System Online
              </span>
            </div>

            <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter mb-8 leading-[0.8] text-white">
              {port.name.toUpperCase()} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F97316] to-[#7c2d12]">
                PORTAL
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light border-l-2 border-[#333] pl-6">
                {port.description}
              </p>

              <div className="hidden md:block text-right">
                <div className="text-[#333] font-mono text-sm uppercase tracking-widest mb-1">
                  Grid Coordinates
                </div>
                <div className="text-white font-mono text-xl tracking-widest">
                  37.9429° N, 23.6469° E
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Departures",
                  sub: "Live Traffic",
                  icon: Ship,
                  href: "/departures",
                },
                {
                  title: "Terminal Map",
                  sub: "Sector Data",
                  icon: MapPin,
                  href: "/terminals",
                },
                {
                  title: "Access Gate",
                  sub: "Logistics",
                  icon: Navigation,
                  href: "/directions",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative overflow-hidden bg-[#111] border border-white/10 p-8 hover:border-[#F97316]/50 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-[#F97316] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>

                  <item.icon className="w-8 h-8 text-gray-500 mb-12 group-hover:text-white transition-colors" />

                  <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-1 group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
                    {item.sub}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-white/20 transition-all group">
              <ShieldCheck className="w-10 h-10 text-[#333] group-hover:text-[#F97316] transition-colors mb-6" />
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                Security Protocols
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Access authorized luggage storage zones and checkpoint data.
              </p>
              <Link
                href="/essentials"
                className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-[#F97316] transition-colors"
              >
                Access Data &rarr;
              </Link>
            </div>

            <div className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-white/20 transition-all group">
              <Server className="w-10 h-10 text-[#333] group-hover:text-[#F97316] transition-colors mb-6" />
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                Ferry Logistics
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Synchronized timetables for inter-island and mainland
                connections.
              </p>
              <Link
                href="/schedules"
                className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-[#F97316] transition-colors"
              >
                View Timetable &rarr;
              </Link>
            </div>

            <div className="bg-white text-black p-10 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">
                  Priority Transfer
                </h3>
                <p className="text-gray-600 mb-8 font-medium">
                  Bypass the queue. Secure a direct vector to your destination.
                </p>
                <a
                  href="https://www.aegeantaxi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-2 border-black px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F97316] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
