// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const portId = getTenantFromHost(host);

  // Debugging: Check your Vercel logs to see exactly what is happening
  // console.log(`Middleware: ${host} -> ${portId}`);

  // 1. If no tenant found (and default fallback failed), let Next.js handle it (usually 404)
  if (!portId) return NextResponse.next();

  const url = request.nextUrl.clone();

  // 2. Rewrite Logic
  // If the URL is already rewritten (e.g. /grpir/departures), skip to avoid loops
  if (url.pathname.startsWith(`/${portId}`)) {
    return NextResponse.next();
  }

  // Rewrite: /departures -> /grpir/departures
  url.pathname = `/${portId}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  // Standard Next.js exclusion list + sitemap
  matcher: ["/((?!api/|_next/|_static/|favicon.ico|robots.txt|sitemap.xml).*)"],
};
