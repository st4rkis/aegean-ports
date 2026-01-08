// lib/ports.config.ts

// 1. DEFINE TYPES FIRST
export type PortKey =
  | "PIR"
  | "HER"
  | "JMK"
  | "JTR"
  | "PAS"
  | "JNX"
  | "TIN"
  | "MLO"
  | "RHO"
  | "KGS"
  | "CFU"
  | "ZTH"
  | "ARG"
  | "LEF";

export interface PortConfig {
  key: PortKey;
  name: string;
  domain: string;
  city: string;
  country: string;
  locode: string;
}

// 2. DEFINE DATA SECOND
export const PORTS: PortConfig[] = [
  {
    key: "PIR",
    name: "Piraeus Port",
    domain: "piraeus-port.gr",
    city: "Athens",
    country: "Greece",
    locode: "GRPIR",
  },
  {
    key: "HER",
    name: "Heraklion Port",
    domain: "heraklionport.gr",
    city: "Heraklion",
    country: "Greece",
    locode: "GRHER",
  },
  {
    key: "JMK",
    name: "Mykonos Port",
    domain: "mykonosport.gr",
    city: "Mykonos",
    country: "Greece",
    locode: "GRJMK",
  },
  {
    key: "JTR",
    name: "Santorini Port",
    domain: "santoriniport.gr",
    city: "Santorini",
    country: "Greece",
    locode: "GRJTR",
  },
  {
    key: "PAS",
    name: "Paros Port",
    domain: "parosport.gr",
    city: "Paros",
    country: "Greece",
    locode: "GRPAS",
  },
  {
    key: "JNX",
    name: "Naxos Port",
    domain: "naxosport.gr",
    city: "Naxos",
    country: "Greece",
    locode: "GRJNX",
  },
  {
    key: "TIN",
    name: "Tinos Port",
    domain: "tinos-port.gr",
    city: "Tinos",
    country: "Greece",
    locode: "GRTIN",
  },
  {
    key: "MLO",
    name: "Milos Port",
    domain: "milos-port.gr",
    city: "Milos",
    country: "Greece",
    locode: "GRMLO",
  },
  {
    key: "RHO",
    name: "Rhodes Port",
    domain: "rhodesport.gr",
    city: "Rhodes",
    country: "Greece",
    locode: "GRRHO",
  },
  {
    key: "KGS",
    name: "Kos Port",
    domain: "kosport.gr",
    city: "Kos",
    country: "Greece",
    locode: "GRKGS",
  },
  {
    key: "CFU",
    name: "Corfu Port",
    domain: "corfu-port.gr",
    city: "Corfu",
    country: "Greece",
    locode: "GRCFU",
  },
  {
    key: "ZTH",
    name: "Zakynthos Port",
    domain: "zanteport.gr",
    city: "Zakynthos",
    country: "Greece",
    locode: "GRZTH",
  },
  {
    key: "ARG",
    name: "Kefalonia Port",
    domain: "kefaloniaport.gr",
    city: "Kefalonia",
    country: "Greece",
    locode: "GRARG",
  },
  {
    key: "LEF",
    name: "Lefkada Port",
    domain: "lefkadaport.gr",
    city: "Lefkada",
    country: "Greece",
    locode: "GRLEF",
  },
];

// Lookup by domain
export function getPortByDomain(host: string | null): PortConfig | null {
  if (!host) return null;

  // Strip port and www
  const withoutPort = host.toLowerCase().split(":")[0];
  const normalized = withoutPort.replace(/^www\./, "");

  // 1) Match production domains
  const byDomain = PORTS.find((port) => port.domain === normalized);
  if (byDomain) return byDomain;

  // 2) Match local dev hosts like jmk.local, pas.local, etc.
  const byDevHost = PORTS.find(
    (port) => `${port.key.toLowerCase()}.local` === normalized
  );
  if (byDevHost) return byDevHost;

  return null;
}

// Lookup by airport key
export const portByKey: Record<string, PortConfig> = PORTS.reduce(
  (map, port) => {
    map[port.key] = port;
    return map;
  },
  {} as Record<string, PortConfig>
);
