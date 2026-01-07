import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

// EXPORT MUST BE NAMED 'proxy' (Not 'middleware')
export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const port = getTenantFromHost(host);

  // If domain is not mapped -> let Next.js continue normally
  if (!port) return NextResponse.next();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  // If path doesn't already contain port key -> inject it
  if (!path.startsWith(`/${port.key}`)) {
    url.pathname = `/${port.key}${path}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Exact matcher from your working app
  matcher: [
    "/((?!_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
