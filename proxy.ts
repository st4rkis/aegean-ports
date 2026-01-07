import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "@/lib/ports.config";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  // 1. Try to get port from your config
  let port = getTenantFromHost(host);

  // 2. SAFETY NET: Force Piraeus on Localhost
  // If the config function returns null (e.g. cache issue), this forces it to work.
  if (!port && host?.includes("localhost")) {
    // We cast to 'any' here just to satisfy the key requirement for the rewrite
    port = { key: "grpir" } as any;
  }

  // If still no port, let Next.js handle the 404
  if (!port) return NextResponse.next();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  // 3. Rewrite the URL
  // Example: localhost:3000/ -> /grpir/
  if (!path.startsWith(`/${port.key}`)) {
    url.pathname = `/${port.key}${path}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
