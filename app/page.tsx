import Link from "next/link";
import { PORTS } from "@/lib/ports.config";
import { Anchor } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Anchor className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-900">Aegean Ports</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time information and logistics for major Greek ports across the
            Aegean and Ionian seas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTS.map((port) => (
            <Link
              key={port.key}
              href={`/${port.key.toLowerCase()}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {port.shortName}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {port.city}, {port.country}
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {port.locode}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {port.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                  View Port Details
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              About Aegean Ports
            </h3>
            <p className="text-gray-600">
              Access comprehensive port information including live operations,
              terminal facilities, transport logistics, and real-time updates for
              {PORTS.length} major Greek ports. Essential information for
              travelers, operators, and maritime professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
