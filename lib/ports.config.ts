// lib/ports.config.ts

export const PORT_DOMAINS: Record<string, string> = {
  // Cyclades
  "milos-port.gr": "grmlo",
  "naxosport.gr": "grjnx",
  "parosport.gr": "grpas",
  "mykonosport.gr": "grjmk",
  "santoriniport.gr": "grjtr",
  "tinos-port.gr": "grtin",

  // Ionian
  "zanteport.gr": "grzth",
  "kefaloniaport.gr": "grarg", // Argostoli
  "lefkadaport.gr": "grlef",
  "corfu-port.gr": "grcfu",

  // Dodecanese / Crete / Athens
  "heraklionport.gr": "grher",
  "kosport.gr": "grkgs",
  "rhodesport.gr": "grrho",
  "piraeus-port.gr": "grpir",

  // --- LOCALHOST MAPPINGS ---
  "grher.localhost:3000": "grher",
  "grpir.localhost:3000": "grpir",
  "grjmk.localhost:3000": "grjmk",
  "grcfu.localhost:3000": "grcfu",
};

export function getTenantFromHost(host: string): string | null {
  if (!host) return "grpir"; // Safety net

  // 1. Check direct match (Useful for localhost:3000)
  if (PORT_DOMAINS[host]) {
    return PORT_DOMAINS[host];
  }

  // 2. Clean Host logic
  const lowerHost = host.toLowerCase();

  // Remove port numbers (e.g. :3000)
  let domain = lowerHost.split(":")[0];

  // Remove 'www.' if present (CRITICAL FIX)
  domain = domain.replace("www.", "");

  // 3. Return Tenant ID (or default to 'grpir')
  return PORT_DOMAINS[domain] || "grpir";
}
