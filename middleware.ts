// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const port = getTenantFromHost(host);

  // 1. If domain is not mapped -> let Next.js continue normally
  if (!port) return NextResponse.next();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  // 2. Prevent infinite loops: only rewrite if we haven't already
  if (!path.startsWith(`/${port.key}`)) {
    url.pathname = `/${port.key}${path}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
