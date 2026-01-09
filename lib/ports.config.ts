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
  description: string;
  shortName: string; // <--- ADDED THIS TO FIX THE ERROR
}

// 2. DEFINE DATA SECOND
export const PORTS: PortConfig[] = [
  {
    key: "PIR",
    name: "Piraeus Port",
    shortName: "Piraeus", // <--- ADDED
    domain: "piraeus-port.gr",
    city: "Athens",
    country: "Greece",
    locode: "GRPIR",
    description:
      "The largest passenger port in Europe and the primary maritime gateway for the Aegean, serving over 20 million passengers annually.",
  },
  {
    key: "HER",
    name: "Heraklion Port",
    shortName: "Heraklion", // <--- ADDED
    domain: "heraklionport.gr",
    city: "Heraklion",
    country: "Greece",
    locode: "GRHER",
    description:
      "Crete's central maritime hub, acting as a critical junction for international cruise lines and the primary link to the Cyclades and Piraeus.",
  },
  {
    key: "JMK",
    name: "Mykonos Port",
    shortName: "Mykonos", // <--- ADDED
    domain: "mykonosport.gr",
    city: "Mykonos",
    country: "Greece",
    locode: "GRJMK",
    description:
      "The Tourlos 'New Port' is a global luxury destination hub, facilitating high-speed ferry logistics and international cruise arrivals.",
  },
  {
    key: "JTR",
    name: "Santorini Port",
    shortName: "Santorini", // <--- ADDED
    domain: "santoriniport.gr",
    city: "Santorini",
    country: "Greece",
    locode: "GRJTR",
    description:
      "Athinios Port is the principal ferry terminal of Santorini, managing complex logistics at the base of the caldera cliffs for global travelers.",
  },
  {
    key: "PAS",
    name: "Paros Port",
    shortName: "Paros", // <--- ADDED
    domain: "parosport.gr",
    city: "Paros",
    country: "Greece",
    locode: "GRPAS",
    description:
      "Situated in the heart of Parikia, this port is the central transit artery for the Cyclades, connecting the mainland to the central Aegean.",
  },
  {
    key: "JNX",
    name: "Naxos Port",
    shortName: "Naxos", // <--- ADDED
    domain: "naxosport.gr",
    city: "Naxos",
    country: "Greece",
    locode: "GRJNX",
    description:
      "A major commercial and passenger hub in the Cyclades, serving the agricultural and tourism heart of the island under the Temple of Apollo.",
  },
  {
    key: "TIN",
    name: "Tinos Port",
    shortName: "Tinos", // <--- ADDED
    domain: "tinos-port.gr",
    city: "Tinos",
    country: "Greece",
    locode: "GRTIN",
    description:
      "A significant religious and cultural maritime center, managing heavy seasonal traffic for the Church of Panagia Evangelistria.",
  },
  {
    key: "MLO",
    name: "Milos Port",
    shortName: "Milos", // <--- ADDED
    domain: "milos-port.gr",
    city: "Milos",
    country: "Greece",
    locode: "GRMLO",
    description:
      "Adamas Port is one of the Mediterranean's largest natural harbors, serving the volcanic island's tourism and mining industries.",
  },
  {
    key: "RHO",
    name: "Rhodes Port",
    shortName: "Rhodes", // <--- ADDED
    domain: "rhodesport.gr",
    city: "Rhodes",
    country: "Greece",
    locode: "GRRHO",
    description:
      "The central gateway to the Dodecanese, Rhodes Tourist Port serves international routes to Turkey and the southeastern Aegean islands.",
  },
  {
    key: "KGS",
    name: "Kos Port",
    shortName: "Kos", // <--- ADDED
    domain: "kosport.gr",
    city: "Kos",
    country: "Greece",
    locode: "GRKGS",
    description:
      "A strategic maritime link in the Dodecanese, Kos Port facilitates both domestic Greek routes and international connections to the Asia Minor coast.",
  },
  {
    key: "CFU",
    name: "Corfu Port",
    shortName: "Corfu", // <--- ADDED
    domain: "corfu-port.gr",
    city: "Corfu",
    country: "Greece",
    locode: "GRCFU",
    description:
      "The Ionian Sea’s primary international gateway, managing significant passenger traffic between Greece, Italy, and the Adriatic coast.",
  },
  {
    key: "ZTH",
    name: "Zakynthos Port",
    shortName: "Zakynthos", // <--- ADDED
    domain: "zanteport.gr",
    city: "Zakynthos",
    country: "Greece",
    locode: "GRZTH",
    description:
      "The main commercial and passenger harbor of the Ionian south, acting as the vital link between the Peloponnese and the Ionian islands.",
  },
  {
    key: "ARG",
    name: "Kefalonia Port",
    shortName: "Kefalonia", // <--- ADDED
    domain: "kefaloniaport.gr",
    city: "Kefalonia",
    country: "Greece",
    locode: "GRARG",
    description:
      "Serving the island's capital Argostoli and the deep-water hub of Sami, it is a key terminal for western Greek maritime logistics.",
  },
  {
    key: "LEF",
    name: "Lefkada Port",
    shortName: "Lefkada", // <--- ADDED
    domain: "lefkadaport.gr",
    city: "Lefkada",
    country: "Greece",
    locode: "GRLEF",
    description:
      "A premier Ionian yachting and ferry hub, facilitating essential connections to Ithaca and Kefalonia via the Nydri and Vasiliki terminals.",
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

// Lookup by port key (Updated comment: was 'airport key')
export const portByKey: Record<string, PortConfig> = PORTS.reduce(
  (map, port) => {
    map[port.key] = port;
    return map;
  },
  {} as Record<string, PortConfig>
);
