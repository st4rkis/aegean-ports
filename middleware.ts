import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

// On Next 16.0.10, this import is less likely to crash the build
export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const port = getTenantFromHost(host);

  if (!port) return NextResponse.next();

  const url = request.nextUrl.clone();
  const path = url.pathname;

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
