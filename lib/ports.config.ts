import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  async rewrites() {
    return [
      // ---------------------------------------------------------
      // 1. PIRAEUS (ATHENS)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "piraeus-port.gr" }],
        destination: "/grpir",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "piraeus-port.gr" }],
        destination: "/grpir/:path*",
      },
      // WWW variant
      {
        source: "/",
        has: [{ type: "host", value: "www.piraeus-port.gr" }],
        destination: "/grpir",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.piraeus-port.gr" }],
        destination: "/grpir/:path*",
      },

      // ---------------------------------------------------------
      // 2. HERAKLION (CRETE)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "heraklionport.gr" }],
        destination: "/grher",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "heraklionport.gr" }],
        destination: "/grher/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.heraklionport.gr" }],
        destination: "/grher",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.heraklionport.gr" }],
        destination: "/grher/:path*",
      },

      // ---------------------------------------------------------
      // 3. MYKONOS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "mykonosport.gr" }],
        destination: "/grjmk",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "mykonosport.gr" }],
        destination: "/grjmk/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.mykonosport.gr" }],
        destination: "/grjmk",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mykonosport.gr" }],
        destination: "/grjmk/:path*",
      },

      // ---------------------------------------------------------
      // 4. SANTORINI
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "santoriniport.gr" }],
        destination: "/grjtr",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "santoriniport.gr" }],
        destination: "/grjtr/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.santoriniport.gr" }],
        destination: "/grjtr",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.santoriniport.gr" }],
        destination: "/grjtr/:path*",
      },

      // ---------------------------------------------------------
      // 5. PAROS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "parosport.gr" }],
        destination: "/grpas",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "parosport.gr" }],
        destination: "/grpas/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.parosport.gr" }],
        destination: "/grpas",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.parosport.gr" }],
        destination: "/grpas/:path*",
      },

      // ---------------------------------------------------------
      // 6. NAXOS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "naxosport.gr" }],
        destination: "/grjnx",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "naxosport.gr" }],
        destination: "/grjnx/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.naxosport.gr" }],
        destination: "/grjnx",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.naxosport.gr" }],
        destination: "/grjnx/:path*",
      },

      // ---------------------------------------------------------
      // 7. TINOS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "tinos-port.gr" }],
        destination: "/grtin",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "tinos-port.gr" }],
        destination: "/grtin/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.tinos-port.gr" }],
        destination: "/grtin",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tinos-port.gr" }],
        destination: "/grtin/:path*",
      },

      // ---------------------------------------------------------
      // 8. MILOS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "milos-port.gr" }],
        destination: "/grmlo",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "milos-port.gr" }],
        destination: "/grmlo/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.milos-port.gr" }],
        destination: "/grmlo",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.milos-port.gr" }],
        destination: "/grmlo/:path*",
      },

      // ---------------------------------------------------------
      // 9. RHODES
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "rhodesport.gr" }],
        destination: "/grrho",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "rhodesport.gr" }],
        destination: "/grrho/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.rhodesport.gr" }],
        destination: "/grrho",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rhodesport.gr" }],
        destination: "/grrho/:path*",
      },

      // ---------------------------------------------------------
      // 10. KOS
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "kosport.gr" }],
        destination: "/grkgs",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kosport.gr" }],
        destination: "/grkgs/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.kosport.gr" }],
        destination: "/grkgs",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kosport.gr" }],
        destination: "/grkgs/:path*",
      },

      // ---------------------------------------------------------
      // 11. CORFU (KERKYRA)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "corfu-port.gr" }],
        destination: "/grcfu",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "corfu-port.gr" }],
        destination: "/grcfu/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.corfu-port.gr" }],
        destination: "/grcfu",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.corfu-port.gr" }],
        destination: "/grcfu/:path*",
      },

      // ---------------------------------------------------------
      // 12. ZANTE (ZAKYNTHOS)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "zanteport.gr" }],
        destination: "/grzth",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "zanteport.gr" }],
        destination: "/grzth/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.zanteport.gr" }],
        destination: "/grzth",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zanteport.gr" }],
        destination: "/grzth/:path*",
      },

      // ---------------------------------------------------------
      // 13. KEFALONIA (ARGOSTOLI)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "kefaloniaport.gr" }],
        destination: "/grarg", // Note: Using grarg for Argostoli
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kefaloniaport.gr" }],
        destination: "/grarg/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.kefaloniaport.gr" }],
        destination: "/grarg",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kefaloniaport.gr" }],
        destination: "/grarg/:path*",
      },

      // ---------------------------------------------------------
      // 14. LEFKADA
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "lefkadaport.gr" }],
        destination: "/grlef",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "lefkadaport.gr" }],
        destination: "/grlef/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.lefkadaport.gr" }],
        destination: "/grlef",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lefkadaport.gr" }],
        destination: "/grlef/:path*",
      },

      // ---------------------------------------------------------
      // LOCALHOST TESTING (Add other IDs as needed)
      // ---------------------------------------------------------
      {
        source: "/",
        has: [{ type: "host", value: "grpir.localhost" }],
        destination: "/grpir",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "grpir.localhost" }],
        destination: "/grpir/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "grher.localhost" }],
        destination: "/grher",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "grher.localhost" }],
        destination: "/grher/:path*",
      },
    ];
  },

  allowedDevOrigins: [
    "http://grpir.localhost:3000",
    "http://grher.localhost:3000",
    "http://grjmk.localhost:3000",
    "http://grjtr.localhost:3000",
    "http://grpas.localhost:3000",
    "http://grjnx.localhost:3000",
    "http://grtin.localhost:3000",
    "http://grmlo.localhost:3000",
    "http://grrho.localhost:3000",
    "http://grkgs.localhost:3000",
    "http://grcfu.localhost:3000",
    "http://grzth.localhost:3000",
    "http://grarg.localhost:3000",
    "http://grlef.localhost:3000",
  ],
};

export default nextConfig;
