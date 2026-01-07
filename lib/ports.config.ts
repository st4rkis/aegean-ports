// lib/ports.config.ts

// 1. DEFINE TYPES FIRST
export type PortKey =
  | "grpir"
  | "grher"
  | "grjmk"
  | "grjtr"
  | "grpas"
  | "grjnx"
  | "grtin"
  | "grmlo"
  | "grrho"
  | "grkgs"
  | "grcfu"
  | "grzth"
  | "grarg"
  | "grlef";

export interface PortConfig {
  key: PortKey;
  name: string;
  shortName: string;
  domain: string;
  city: string;
  country: string;
  locode: string;
  seoTitle: string;
  description: string;
  themeColor: string;
}

// 2. DEFINE DATA SECOND
export const PORTS: PortConfig[] = [
  {
    key: "grpir",
    name: "Piraeus Port",
    shortName: "Piraeus",
    domain: "piraeus-port.gr",
    city: "Athens",
    country: "Greece",
    locode: "GRPIR",
    seoTitle: "Piraeus Port Authority Guide",
    description: "The largest port in Greece.",
    themeColor: "#0C1A47",
  },
  {
    key: "grher",
    name: "Heraklion Port",
    shortName: "Heraklion",
    domain: "heraklionport.gr",
    city: "Heraklion",
    country: "Greece",
    locode: "GRHER",
    seoTitle: "Heraklion Port Guide",
    description: "Gateway to Crete.",
    themeColor: "#8E44AD",
  },
  {
    key: "grjmk",
    name: "Mykonos Port",
    shortName: "Mykonos",
    domain: "mykonosport.gr",
    city: "Mykonos",
    country: "Greece",
    locode: "GRJMK",
    seoTitle: "Mykonos Port Guide",
    description: "Ferry terminal for Mykonos.",
    themeColor: "#0077BE",
  },
  {
    key: "grjtr",
    name: "Santorini Port",
    shortName: "Santorini",
    domain: "santoriniport.gr",
    city: "Santorini",
    country: "Greece",
    locode: "GRJTR",
    seoTitle: "Santorini Athinios Port",
    description: "Main ferry port.",
    themeColor: "#00AEEF",
  },
  {
    key: "grpas",
    name: "Paros Port",
    shortName: "Paros",
    domain: "parosport.gr",
    city: "Paros",
    country: "Greece",
    locode: "GRPAS",
    seoTitle: "Paros Port Guide",
    description: "Parikia main port hub.",
    themeColor: "#FFFFFF",
  },
  {
    key: "grjnx",
    name: "Naxos Port",
    shortName: "Naxos",
    domain: "naxosport.gr",
    city: "Naxos",
    country: "Greece",
    locode: "GRJNX",
    seoTitle: "Naxos Port Guide",
    description: "Ferry gateway to Naxos.",
    themeColor: "#F4D03F",
  },
  {
    key: "grtin",
    name: "Tinos Port",
    shortName: "Tinos",
    domain: "tinos-port.gr",
    city: "Tinos",
    country: "Greece",
    locode: "GRTIN",
    seoTitle: "Tinos Port Guide",
    description: "Religious destination port.",
    themeColor: "#27AE60",
  },
  {
    key: "grmlo",
    name: "Milos Port",
    shortName: "Milos",
    domain: "milos-port.gr",
    city: "Milos",
    country: "Greece",
    locode: "GRMLO",
    seoTitle: "Milos Port Guide",
    description: "Adamas port serving Milos.",
    themeColor: "#E74C3C",
  },
  {
    key: "grrho",
    name: "Rhodes Port",
    shortName: "Rhodes",
    domain: "rhodesport.gr",
    city: "Rhodes",
    country: "Greece",
    locode: "GRRHO",
    seoTitle: "Rhodes Port Guide",
    description: "Major Dodecanese hub.",
    themeColor: "#D35400",
  },
  {
    key: "grkgs",
    name: "Kos Port",
    shortName: "Kos",
    domain: "kosport.gr",
    city: "Kos",
    country: "Greece",
    locode: "GRKGS",
    seoTitle: "Kos Port Guide",
    description: "Harbor serving Kos.",
    themeColor: "#C0392B",
  },
  {
    key: "grcfu",
    name: "Corfu Port",
    shortName: "Corfu",
    domain: "corfu-port.gr",
    city: "Corfu",
    country: "Greece",
    locode: "GRCFU",
    seoTitle: "Corfu Port Guide",
    description: "International terminal.",
    themeColor: "#2ECC71",
  },
  {
    key: "grzth",
    name: "Zakynthos Port",
    shortName: "Zakynthos",
    domain: "zanteport.gr",
    city: "Zakynthos",
    country: "Greece",
    locode: "GRZTH",
    seoTitle: "Zakynthos Port Guide",
    description: "Main port of Zante.",
    themeColor: "#16A085",
  },
  {
    key: "grarg",
    name: "Kefalonia Port",
    shortName: "Kefalonia",
    domain: "kefaloniaport.gr",
    city: "Kefalonia",
    country: "Greece",
    locode: "GRARG",
    seoTitle: "Kefalonia Port Guide",
    description: "Serving Sami/Poros.",
    themeColor: "#2980B9",
  },
  {
    key: "grlef",
    name: "Lefkada Port",
    shortName: "Lefkada",
    domain: "lefkadaport.gr",
    city: "Lefkada",
    country: "Greece",
    locode: "GRLEF",
    seoTitle: "Lefkada Port Guide",
    description: "Marina connections.",
    themeColor: "#3498DB",
  },
];

// 3. DEFINE FUNCTIONS LAST
// This ensures 'PORTS' is already defined above before we search it.

export function getTenantFromHost(host: string | null): PortConfig | null {
  if (!host) return null;
  const withoutPort = host.toLowerCase().split(":")[0];
  const normalized = withoutPort.replace(/^www\./, "");

  // 1. Match Prod
  const byDomain = PORTS.find((p) => p.domain === normalized);
  if (byDomain) return byDomain;

  // 2. Match Localhost (Default to Piraeus)
  if (normalized === "localhost") {
    return PORTS.find((p) => p.key === "grpir") || null;
  }

  // 3. Match Dev Domains
  const byDevHost = PORTS.find((p) => `${p.key}.local` === normalized);
  if (byDevHost) return byDevHost;

  return null;
}

export const portByKey: Record<string, PortConfig> = PORTS.reduce(
  (map, port) => {
    map[port.key.toUpperCase()] = port;
    return map;
  },
  {} as Record<string, PortConfig>
);
