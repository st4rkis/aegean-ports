import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "./lib/ports.config";

export default function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // 1. Skip Next.js internals and static assets
  // If we don't do this, it tries to load /grpir/_next/... which fails
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.includes(".") || // skips files like favicon.ico, robot.txt
    url.pathname.startsWith("/api") // optional: skip API routes if they are global
  ) {
    return NextResponse.next();
  }

  // 2. Identify Tenant
  const portId = getTenantFromHost(hostname);

  console.log("Proxy Request:", hostname, "-> Port:", portId);

  if (!portId) {
    return NextResponse.next();
  }

  // 3. Rewrite Logic
  url.pathname = `/${portId}${url.pathname}`;
  console.log("Rewriting to:", url.pathname);

  return NextResponse.rewrite(url);
}
