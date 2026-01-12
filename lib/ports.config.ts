// lib/ports.config.ts

// 1. DEFINE TYPES
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

// String references for Icons (Map these in your component)
export type IconKey =
  | "Car"
  | "Bus"
  | "Train"
  | "Ship"
  | "ParkingSquare"
  | "MapPin"
  | "Anchor"
  | "Navigation";

export interface TransportMode {
  id: string;
  title: string;
  desc: string;
  icon: IconKey;
  href: string;
  isExternal: boolean;
  highlight?: boolean;
}

export interface PortConfig {
  key: PortKey;
  name: string;
  shortName: string;
  domain: string;
  city: string;
  country: string;
  locode: string;
  description: string;
  // NEW: Google Maps Embed URL
  mapEmbedUrl: string;
  // NEW: Transport Logistics Data
  transport: {
    desc: string;
    modes: TransportMode[];
  };
}

// 2. REAL WORLD DATA POPULATION
export const PORTS: PortConfig[] = [
  {
    key: "PIR",
    name: "Piraeus Port",
    shortName: "Piraeus",
    domain: "piraeus-port.gr",
    city: "Athens",
    country: "Greece",
    locode: "GRPIR",
    description:
      "The largest passenger port in Europe and the primary maritime gateway for the Aegean, serving over 20 million passengers annually.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.9419,23.6361&hl=en&z=14&output=embed",
    transport: {
      desc: "Accessible via the National Motorway Network and integrated urban rail systems. The terminal serves as a primary intermodal hub connecting the city center via Metro Line 3 and Athens Airport via the X96 Express.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Priority lane access. Direct terminal drop-off.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "Metro Line 3",
          desc: "Direct link to Airport & Syntagma Sq.",
          icon: "Train",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Bus X96",
          desc: "24/7 Express from Athens Airport.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "04",
          title: "Parking Zones",
          desc: "P1 (Short) & P2 (Long Term) capacity.",
          icon: "ParkingSquare",
          href: "/parking",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "HER",
    name: "Heraklion Port",
    shortName: "Heraklion",
    domain: "heraklionport.gr",
    city: "Heraklion",
    country: "Greece",
    locode: "GRHER",
    description:
      "Crete's central maritime hub, acting as a critical junction for international cruise lines and the primary link to the Cyclades and Piraeus.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=35.3498,25.1553&hl=en&z=14&output=embed",
    transport: {
      desc: "Located directly in Heraklion city, the port connects to the National Road (VOAK). It is 5km from Nikos Kazantzakis Airport (HER) via the coastal avenue.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Direct to Hersonissos / Elounda resorts.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "City Bus",
          desc: "Blue Bus line to Airport & Knossos.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "KTEL Station",
          desc: "Intercity bus hub located 200m away.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "04",
          title: "Port Parking",
          desc: "Secure long-term zone inside terminal.",
          icon: "ParkingSquare",
          href: "/parking",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "JMK",
    name: "Mykonos Port",
    shortName: "Mykonos",
    domain: "mykonosport.gr",
    city: "Mykonos",
    country: "Greece",
    locode: "GRJMK",
    description:
      "The Tourlos 'New Port' is a global luxury destination hub, facilitating high-speed ferry logistics and international cruise arrivals.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.4650,25.3220&hl=en&z=14&output=embed",
    transport: {
      desc: "The New Port (Tourlos) is located 2km north of Mykonos Town. Walking is not recommended due to heavy traffic and lack of sidewalks. Sea Bus or Transfer is required.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Essential pre-booked van service.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "Sea Bus",
          desc: "Water shuttle to Old Port (Chora).",
          icon: "Ship",
          href: "/seabus",
          isExternal: false,
        },
        {
          id: "03",
          title: "KTEL Bus",
          desc: "Scheduled connection to Fabrika terminal.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "04",
          title: "Water Taxi",
          desc: "Private boat transfer to south beaches.",
          icon: "Anchor",
          href: "/watertaxi",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "JTR",
    name: "Santorini Port",
    shortName: "Santorini",
    domain: "santoriniport.gr",
    city: "Santorini",
    country: "Greece",
    locode: "GRJTR",
    description:
      "Athinios Port is the principal ferry terminal of Santorini, managing complex logistics at the base of the caldera cliffs for global travelers.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=36.3860,25.4320&hl=en&z=14&output=embed",
    transport: {
      desc: "Athinios is located at the bottom of the caldera cliffs. Access is via a steep, winding switchback road. Traffic congestion is severe during arrivals.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Vital for navigating the switchbacks.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Local bus to Fira Central Station.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Cable Car",
          desc: "Located at Old Port (Cruise travelers only).",
          icon: "Navigation",
          href: "/cruise",
          isExternal: false,
        },
        {
          id: "04",
          title: "Car Rental",
          desc: "Pick-up points available at port exit.",
          icon: "Car",
          href: "/rentals",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "PAS",
    name: "Paros Port",
    shortName: "Paros",
    domain: "parosport.gr",
    city: "Paros",
    country: "Greece",
    locode: "GRPAS",
    description:
      "Situated in the heart of Parikia, this port is the central transit artery for the Cyclades, connecting the mainland to the central Aegean.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.0868,25.1494&hl=en&z=14&output=embed",
    transport: {
      desc: "Parikia Port is centrally located. Passengers can walk directly into the Chora. Transport is needed for Naoussa, Golden Beach, or Antiparos.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Direct route to Naoussa / East Coast.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Main terminal located right at the pier.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Water Taxi",
          desc: "Frequent connections to Antiparos.",
          icon: "Ship",
          href: "/antiparos",
          isExternal: false,
        },
        {
          id: "04",
          title: "Walking",
          desc: "Immediate access to Parikia Old Town.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "JNX",
    name: "Naxos Port",
    shortName: "Naxos",
    domain: "naxosport.gr",
    city: "Naxos",
    country: "Greece",
    locode: "GRJNX",
    description:
      "A major commercial and passenger hub in the Cyclades, serving the agricultural and tourism heart of the island under the Temple of Apollo.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.1096,25.3721&hl=en&z=14&output=embed",
    transport: {
      desc: "The port is located on the edge of Naxos Town (Chora), connected by a causeway to the Temple of Apollo (Portara).",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Best for Agios Prokopios / Plaka.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Bus station located at port exit.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Port Parking",
          desc: "Limited municipal parking nearby.",
          icon: "ParkingSquare",
          href: "/parking",
          isExternal: false,
        },
        {
          id: "04",
          title: "Walking",
          desc: "Direct access to Old Market & Castle.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "TIN",
    name: "Tinos Port",
    shortName: "Tinos",
    domain: "tinos-port.gr",
    city: "Tinos",
    country: "Greece",
    locode: "GRTIN",
    description:
      "A significant religious and cultural maritime center, managing heavy seasonal traffic for the Church of Panagia Evangelistria.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.5352,25.1588&hl=en&z=14&output=embed",
    transport: {
      desc: "The New Port handles all vehicle ferries, located just outside Tinos Chora. A short walk or transfer is required to reach the town center.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Direct route to villages/hotels.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Connects port to main villages.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Taxi Stand",
          desc: "Rank located at the passenger exit.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
        {
          id: "04",
          title: "Walking",
          desc: "10-15 min walk to Church of Panagia.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "MLO",
    name: "Milos Port",
    shortName: "Milos",
    domain: "milos-port.gr",
    city: "Milos",
    country: "Greece",
    locode: "GRMLO",
    description:
      "Adamas Port is one of the Mediterranean's largest natural harbors, serving the volcanic island's tourism and mining industries.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=36.7264,24.4455&hl=en&z=14&output=embed",
    transport: {
      desc: "Adamas is the main port and hub of Milos. Transport is essential to reach the capital Plaka, Pollonia, or the Sarakiniko lunar landscapes.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To Pollonia & Sarakiniko beaches.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Central stop at Adamas square.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Rent a Car",
          desc: "Numerous agencies at port front.",
          icon: "Car",
          href: "/rentals",
          isExternal: false,
        },
        {
          id: "04",
          title: "Taxi",
          desc: "Rank located at ferry pier.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "RHO",
    name: "Rhodes Port",
    shortName: "Rhodes",
    domain: "rhodesport.gr",
    city: "Rhodes",
    country: "Greece",
    locode: "GRRHO",
    description:
      "The central gateway to the Dodecanese, Rhodes Tourist Port serves international routes to Turkey and the southeastern Aegean islands.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=36.4430,28.2280&hl=en&z=14&output=embed",
    transport: {
      desc: "The Tourist Port is located just outside the UNESCO Medieval City walls. It serves ferries and cruise ships, with easy access to the New Town.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To Lindos, Faliraki & Resorts.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "Walking",
          desc: "Direct entry to Old Town via gates.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
        {
          id: "03",
          title: "Taxi",
          desc: "Main rank at port entrance.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
        {
          id: "04",
          title: "Rent a Car",
          desc: "Available at commercial quay.",
          icon: "Car",
          href: "/rentals",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "KGS",
    name: "Kos Port",
    shortName: "Kos",
    domain: "kosport.gr",
    city: "Kos",
    country: "Greece",
    locode: "GRKGS",
    description:
      "A strategic maritime link in the Dodecanese, Kos Port facilitates both domestic Greek routes and international connections to the Asia Minor coast.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=36.9000,27.2830&hl=en&z=14&output=embed",
    transport: {
      desc: "Kos Port is located beneath the Castle of the Knights. The terrain is flat, making it bike-friendly, though transfers are needed for remote resorts.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To Kardamena / Kefalos.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "Cycling",
          desc: "Bike paths connect port to town.",
          icon: "Navigation",
          href: "/cycling",
          isExternal: false,
        },
        {
          id: "03",
          title: "City Bus",
          desc: "Stops near the castle entrance.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "04",
          title: "Walking",
          desc: "Immediate access to Kos Town.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "CFU",
    name: "Corfu Port",
    shortName: "Corfu",
    domain: "corfu-port.gr",
    city: "Corfu",
    country: "Greece",
    locode: "GRCFU",
    description:
      "The Ionian Sea’s primary international gateway, managing significant passenger traffic between Greece, Italy, and the Adriatic coast.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=39.6307,19.9104&hl=en&z=14&output=embed",
    transport: {
      desc: "The New Port connects Corfu to Igoumenitsa and Italy. It is located 3km west of Corfu Old Town, so walking with luggage is not recommended.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To resorts / Old Town hotels.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "City Bus #15",
          desc: "Express to Airport & Center.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Taxi",
          desc: "Available at terminal exit.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
        {
          id: "04",
          title: "Port Shuttle",
          desc: "Internal shuttle to distant gates.",
          icon: "Bus",
          href: "/terminals",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "ZTH",
    name: "Zakynthos Port",
    shortName: "Zakynthos",
    domain: "zanteport.gr",
    city: "Zakynthos",
    country: "Greece",
    locode: "GRZTH",
    description:
      "The main commercial and passenger harbor of the Ionian south, acting as the vital link between the Peloponnese and the Ionian islands.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=37.7850,20.9000&hl=en&z=14&output=embed",
    transport: {
      desc: "Located in Zakynthos Town. While Solomos Square is walkable, transport is required for major tourist areas like Laganas, Tsilivi, or Vasilikos.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To Laganas / Tsilivi / Vassilikos.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "Taxi Rank",
          desc: "Located at the ferry pier exit.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
        {
          id: "03",
          title: "KTEL Bus",
          desc: "Central station is 1km away.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "04",
          title: "Walking",
          desc: "Access to town promenade.",
          icon: "MapPin",
          href: "/map",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "ARG",
    name: "Kefalonia Port",
    shortName: "Kefalonia",
    domain: "kefaloniaport.gr",
    city: "Kefalonia",
    country: "Greece",
    locode: "GRARG",
    description:
      "Serving the island's capital Argostoli and the deep-water hub of Sami, it is a key terminal for western Greek maritime logistics.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=38.1809,20.4880&hl=en&z=14&output=embed",
    transport: {
      desc: "Ferries from the mainland often dock at Sami or Poros, while cruise ships dock at Argostoli. Distances are significant; vehicle transport is essential.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "Between Sami/Poros & Argostoli.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Connects ports to the capital.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Rent a Car",
          desc: "Recommended for island exploration.",
          icon: "Car",
          href: "/rentals",
          isExternal: false,
        },
        {
          id: "04",
          title: "Taxi",
          desc: "Available at all port terminals.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
      ],
    },
  },
  {
    key: "LEF",
    name: "Lefkada Port",
    shortName: "Lefkada",
    domain: "lefkadaport.gr",
    city: "Lefkada",
    country: "Greece",
    locode: "GRLEF",
    description:
      "A premier Ionian yachting and ferry hub, facilitating essential connections to Ithaca and Kefalonia via the Nydri and Vasiliki terminals.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=38.7058,20.7098&hl=en&z=14&output=embed",
    transport: {
      desc: "Lefkada is connected to the mainland by bridge. Ferries to other islands depart from Nydri (East) or Vasiliki (South), not Lefkada Town.",
      modes: [
        {
          id: "01",
          title: "Private Transfer",
          desc: "To Nydri / Vasiliki ports.",
          icon: "Car",
          href: "https://www.aegeantaxi.com",
          isExternal: true,
          highlight: true,
        },
        {
          id: "02",
          title: "KTEL Bus",
          desc: "Regular service to Nydri.",
          icon: "Bus",
          href: "/directions",
          isExternal: false,
        },
        {
          id: "03",
          title: "Taxi",
          desc: "Available for port transfers.",
          icon: "Car",
          href: "/taxi",
          isExternal: false,
        },
        {
          id: "04",
          title: "Car Access",
          desc: "Drive directly to ferry ramps.",
          icon: "ParkingSquare",
          href: "/parking",
          isExternal: false,
        },
      ],
    },
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

// Lookup by port key
export const portByKey: Record<string, PortConfig> = PORTS.reduce(
  (map, port) => {
    map[port.key] = port;
    return map;
  },
  {} as Record<string, PortConfig>
);
