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

  // --- LOCALHOST MAPPINGS (Add these to test locally) ---
  "grher.localhost:3000": "grher",
  "grpir.localhost:3000": "grpir",
  "grjmk.localhost:3000": "grjmk",
  "grcfu.localhost:3000": "grcfu",
  // ... add others if needed
};

export function getTenantFromHost(host: string): string | null {
  // 1. Check direct match first (Handles "grher.localhost:3000" exactly)
  if (PORT_DOMAINS[host]) {
    return PORT_DOMAINS[host];
  }

  // 2. Clean Host (Remove port numbers for production domains)
  // e.g., "heraklionport.gr:443" -> "heraklionport.gr"
  const domain = host.split(":")[0];

  // 3. Return Tenant ID (or default to 'grpir' if completely unknown)
  return PORT_DOMAINS[domain] || "grpir";
}
