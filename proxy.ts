// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// --- INLINED DATA (Prevents Build & Runtime Errors) ---
const PORTS = [
  { key: "grpir", domain: "piraeus-port.gr" },
  { key: "grher", domain: "heraklionport.gr" },
  { key: "grjmk", domain: "mykonosport.gr" },
  { key: "grjtr", domain: "santoriniport.gr" },
  { key: "grpas", domain: "parosport.gr" },
  { key: "grjnx", domain: "naxosport.gr" },
  { key: "grtin", domain: "tinos-port.gr" },
  { key: "grmlo", domain: "milos-port.gr" },
  { key: "grrho", domain: "rhodesport.gr" },
  { key: "grkgs", domain: "kosport.gr" },
  { key: "grcfu", domain: "corfu-port.gr" },
  { key: "grzth", domain: "zanteport.gr" },
  { key: "grarg", domain: "kefaloniaport.gr" },
  { key: "grlef", domain: "lefkadaport.gr" },
];

function getTenantFromHost(host: string | null) {
  if (!host) return null;
  const normalized = host
    .toLowerCase()
    .split(":")[0]
    .replace(/^www\./, "");

  // 1. Match Prod
  const byDomain = PORTS.find((p) => p.domain === normalized);
  if (byDomain) return byDomain;

  // 2. Match Localhost
  const byDev = PORTS.find((p) => `${p.key}.localhost` === normalized);
  if (byDev) return byDev;

  return null;
}
// ------------------------------------------------------

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // --- SAFETY CHECK 1: IGNORE STATIC FILES MANUALLY ---
  // (Double protection if the matcher fails)
  if (
    path.startsWith("/_next") ||
    path.startsWith("/static") ||
    path.includes(".") // ignores files like .css, .ico, .png
  ) {
    return NextResponse.next();
  }

  const host = request.headers.get("host");
  const port = getTenantFromHost(host);

  // If domain is not mapped -> let Next.js continue
  if (!port) return NextResponse.next();

  // Rewrite URL to the dynamic folder
  if (!path.startsWith(`/${port.key}`)) {
    url.pathname = `/${port.key}${path}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// --- SAFETY CHECK 2: THE MATCHER (CRITICAL) ---
// This tells Next.js: "Don't run this file on CSS, JS, or Images"
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
