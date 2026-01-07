// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // 1. Identify Tenant (Handles www, localhost, and production)
  const portId = getTenantFromHost(host);

  // Debugging (Check Vercel logs if 404s persist)
  // console.log(`Proxy: ${host} -> ${portId}`);

  // 2. If no tenant found, let Next.js handle it normally
  if (!portId) return NextResponse.next();

  const url = request.nextUrl.clone();

  // 3. Prevent Infinite Loops
  // If path already starts with the ID, don't rewrite again
  if (url.pathname.startsWith(`/${portId}`)) {
    return NextResponse.next();
  }

  // 4. Rewrite Logic
  // e.g. piraeus-port.gr/departures -> /grpir/departures
  url.pathname = `/${portId}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  // Matches your specific exclusion list format
  matcher: ["/((?!api/|_next/|_static/|favicon.ico|robots.txt|sitemap.xml).*)"],
};
