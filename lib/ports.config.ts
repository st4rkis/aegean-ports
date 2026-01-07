// lib/ports.config.ts

// 1. Define the Interface to match PortContext
export interface PortData {
  id: string; // Used by Context (was 'key')
  key: string; // Used by Middleware
  name: string;
  shortName: string; // Used by Header
  domain: string;
  seoTitle: string;
  description: string;
  themeColor: string;
}

// 2. Export the Data
export const PORTS: PortData[] = [
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
  {
    id: "grher",
    key: "grher",
    name: "Heraklion Port",
    shortName: "Heraklion",
    domain: "heraklionport.gr",
    seoTitle: "Heraklion Port Guide",
    description: "The primary gateway to Crete.",
    themeColor: "#8E44AD",
  },
  {
    id: "grjmk",
    key: "grjmk",
    name: "Mykonos Port",
    shortName: "Mykonos",
    domain: "mykonosport.gr",
    seoTitle: "Mykonos Port Guide",
    description: "Ferry and cruise terminal for Mykonos.",
    themeColor: "#0077BE",
  },
  {
    id: "grjtr",
    key: "grjtr",
    name: "Santorini Port",
    shortName: "Santorini",
    domain: "santoriniport.gr",
    seoTitle: "Santorini Athinios Port",
    description: "Main ferry port of Santorini.",
    themeColor: "#00AEEF",
  },
  {
    id: "grpas",
    key: "grpas",
    name: "Paros Port",
    shortName: "Paros",
    domain: "parosport.gr",
    seoTitle: "Paros Port Guide",
    description: "Parikia main port hub.",
    themeColor: "#FFFFFF",
  },
  {
    id: "grjnx",
    key: "grjnx",
    name: "Naxos Port",
    shortName: "Naxos",
    domain: "naxosport.gr",
    seoTitle: "Naxos Port Guide",
    description: "Ferry gateway to Naxos.",
    themeColor: "#F4D03F",
  },
  {
    id: "grtin",
    key: "grtin",
    name: "Tinos Port",
    shortName: "Tinos",
    domain: "tinos-port.gr",
    seoTitle: "Tinos Port Guide",
    description: "Religious and holiday destination port.",
    themeColor: "#27AE60",
  },
  {
    id: "grmlo",
    key: "grmlo",
    name: "Milos Port",
    shortName: "Milos",
    domain: "milos-port.gr",
    seoTitle: "Milos Port Guide",
    description: "Adamas port serving Milos.",
    themeColor: "#E74C3C",
  },
  {
    id: "grrho",
    key: "grrho",
    name: "Rhodes Port",
    shortName: "Rhodes",
    domain: "rhodesport.gr",
    seoTitle: "Rhodes Port Guide",
    description: "Major Dodecanese hub.",
    themeColor: "#D35400",
  },
  {
    id: "grkgs",
    key: "grkgs",
    name: "Kos Port",
    shortName: "Kos",
    domain: "kosport.gr",
    seoTitle: "Kos Port Guide",
    description: "Harbor serving Kos island.",
    themeColor: "#C0392B",
  },
  {
    id: "grcfu",
    key: "grcfu",
    name: "Corfu Port",
    shortName: "Corfu",
    domain: "corfu-port.gr",
    seoTitle: "Corfu Port Guide",
    description: "International and domestic terminal.",
    themeColor: "#2ECC71",
  },
  {
    id: "grzth",
    key: "grzth",
    name: "Zakynthos Port",
    shortName: "Zakynthos",
    domain: "zanteport.gr",
    seoTitle: "Zakynthos Port Guide",
    description: "Main port of Zante.",
    themeColor: "#16A085",
  },
  {
    id: "grarg",
    key: "grarg",
    name: "Kefalonia Port",
    shortName: "Kefalonia",
    domain: "kefaloniaport.gr",
    seoTitle: "Kefalonia Port Guide",
    description: "Serving Sami, Poros, and Argostoli.",
    themeColor: "#2980B9",
  },
  {
    id: "grlef",
    key: "grlef",
    name: "Lefkada Port",
    shortName: "Lefkada",
    domain: "lefkadaport.gr",
    seoTitle: "Lefkada Port Guide",
    description: "Marina and Nydri connections.",
    themeColor: "#3498DB",
  },
];

// 3. Helper Function
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
