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
