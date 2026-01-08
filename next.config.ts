import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  experimental: {
    // REMOVE turbo — it's no longer supported
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // REQUIRED so multi-domain works in dev
  allowedDevOrigins: [
    "http://pir.local:3000",
    "http://her.local:3000",
    "http://jmk.local:3000",
    "http://jtr.local:3000",
    "http://pas.local:3000",
    "http://jnx.local:3000",
    "http://tin.local:3000",
    "http://mlo.local:3000",
    "http://rho.local:3000",
    "http://kgs.local:3000",
    "http://cfu.local:3000",
    "http://zth.local:3000",
    "http://arg.local:3000",
    "http://lef.local:3000",
  ],
};

export default nextConfig;
