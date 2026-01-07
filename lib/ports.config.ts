// lib/ports.config.ts
export interface PortData {
  id: string;
  key: string;
  name: string;
  shortName: string;
  domain: string;
  seoTitle: string;
  description: string;
  themeColor: string;
}

export const PORTS: PortData[] = [
  // ... (Your full list of ports: grpir, grher, etc. - keep your existing list)
  {
    id: "grpir",
    key: "grpir",
    name: "Piraeus Port",
    shortName: "Piraeus",
    domain: "piraeus-port.gr",
    seoTitle: "Piraeus Port Guide",
    description: "Main Athens port serving the Aegean islands.",
    themeColor: "#0C1A47",
  },
  // ... ensure at least grpir is here for the fallback
];

export function getTenantFromHost(host: string | null): PortData | null {
  if (!host) return null;
  const normalized = host
    .toLowerCase()
    .split(":")[0]
    .replace(/^www\./, "");

  const byDomain = PORTS.find((p) => p.domain === normalized);
  if (byDomain) return byDomain;

  const byDev = PORTS.find((p) => `${p.key}.localhost` === normalized);
  if (byDev) return byDev;

  return null;
}
