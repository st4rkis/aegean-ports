// lib/port-data.ts

export interface PortData {
  id: string;
  name: string;
  shortName: string;
  seoTitle: string;
  description: string;
  themeColor: string; // e.g., for specific accents
}

export const PORTS_DATA: Record<string, PortData> = {
  // --- ATTICA ---
  grpir: {
    id: "grpir",
    name: "Piraeus Port",
    shortName: "Piraeus",
    seoTitle: "Piraeus Port (PIR) - Athens Ferry & Cruise Terminal Guide",
    description:
      "The largest passenger port in Europe. Your gateway to the Aegean islands and the main cruise hub of Athens.",
    themeColor: "#0C1A47", // Classic Navy
  },

  // --- CYCLADES ---
  grjmk: {
    id: "grjmk",
    name: "Mykonos Port",
    shortName: "Mykonos",
    seoTitle: "Mykonos New Port (Tourlos) - Ferry Schedules & Transfers",
    description:
      "Essential guide to Tourlos (New Port) and the Old Port. Taxi connections, sea buses, and ferry departures.",
    themeColor: "#0077BE", // Mykonos Blue
  },
  grjtr: {
    id: "grjtr",
    name: "Santorini Port",
    shortName: "Santorini",
    seoTitle: "Santorini (Athinios) Port - Ferry & Tender Guide",
    description:
      "Navigating Athinios Port and the Old Port (Skala). Cable car info, donkey rides, and transfer tips to Fira.",
    themeColor: "#00AEEF",
  },
  grpas: {
    id: "grpas",
    name: "Paros Port",
    shortName: "Paros",
    seoTitle: "Paros Port (Parikia) - Connections to Antiparos & Naxos",
    description:
      "Complete guide to Parikia port. Windmill schedules, luggage storage, and connections to Pounta.",
    themeColor: "#FFFFFF", // White/Blue mix typically
  },
  grjnx: {
    id: "grjnx",
    name: "Naxos Port",
    shortName: "Naxos",
    seoTitle: "Naxos Port - Ferry Gateway to the Cyclades",
    description:
      "Located directly in Chora. Information on the Portara view, ferry gates, and local bus connections.",
    themeColor: "#F4D03F",
  },
  grmlo: {
    id: "grmlo",
    name: "Milos Port",
    shortName: "Milos",
    seoTitle: "Milos Port (Adamas) - Sarakiniko & Kimolos Connections",
    description:
      "Your arrival point at Adamas. Tips for boat rentals, bus loops, and exploring the lunar landscapes.",
    themeColor: "#E74C3C",
  },
  grtin: {
    id: "grtin",
    name: "Tinos Port",
    shortName: "Tinos",
    seoTitle: "Tinos Port - Religious Tourism & Ferry Guide",
    description:
      "Guide to the main passenger terminal. Access to the Church of Panagia Evangelistria and village buses.",
    themeColor: "#27AE60",
  },

  // --- IONIAN ---
  grcfu: {
    id: "grcfu",
    name: "Corfu Port",
    shortName: "Corfu",
    seoTitle: "Corfu Port - Ferries to Igoumenitsa, Paxos & Italy",
    description:
      "International ferry terminal guide. Connections to Bari/Ancona and local hydrofoils to Paxos.",
    themeColor: "#2ECC71",
  },
  grzth: {
    id: "grzth",
    name: "Zakynthos Port",
    shortName: "Zakynthos",
    seoTitle: "Zakynthos Port - Ferries to Kyllini & Kefalonia",
    description:
      "Main town port guide. Information on Levante Ferries schedules and connections to Skinari.",
    themeColor: "#16A085",
  },
  grarg: {
    id: "grarg",
    name: "Kefalonia Port",
    shortName: "Kefalonia",
    seoTitle: "Kefalonia Ports (Poros, Sami, Argostoli) Guide",
    description:
      "Navigating the multiple ports of Kefalonia. Schedules for Poros-Kyllini and Sami-Patras routes.",
    themeColor: "#2980B9",
  },
  grlef: {
    id: "grlef",
    name: "Lefkada Port",
    shortName: "Lefkada",
    seoTitle: "Lefkada Marina & Nydri Port Guide",
    description:
      "Guide to Nydri departures for Meganisi and Scorpio. Marina services and mainland bridge access.",
    themeColor: "#3498DB",
  },

  // --- CRETE & DODE ---
  grher: {
    id: "grher",
    name: "Heraklion Port",
    shortName: "Heraklion",
    seoTitle: "Heraklion Port - Ferries to Santorini & Athens",
    description:
      "The sea gateway to Crete. High-speed Seajets schedules, Minoan Lines terminals, and Knossos access.",
    themeColor: "#8E44AD",
  },
  grrho: {
    id: "grrho",
    name: "Rhodes Port",
    shortName: "Rhodes",
    seoTitle: "Rhodes Port (Tourist & Commercial) Guide",
    description:
      "Mandraki and Commercial port guide. Dodecanese connections and excursions to Symi/Marmaris.",
    themeColor: "#D35400",
  },
  grkgs: {
    id: "grkgs",
    name: "Kos Port",
    shortName: "Kos",
    seoTitle: "Kos Port - Ferries to Bodrum & Kalymnos",
    description:
      "Main harbor guide. Dolphin hydrofoils, castle views, and day trips to Turkey.",
    themeColor: "#C0392B",
  },

  // Fallback
  default: {
    id: "default",
    name: "Unknown Port",
    shortName: "Port",
    seoTitle: "Port Guide & Transfers",
    description: "Welcome to the port guide.",
    themeColor: "#0C1A47",
  },
};
