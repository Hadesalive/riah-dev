import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Short links to the Namecheap hosting panels. Temporary (307) so they can
  // be repointed if the hosting server changes.
  redirects() {
    return [
      {
        source: "/webmail",
        destination: "https://server366.web-hosting.com:2096",
        permanent: false,
      },
      {
        source: "/cpanel",
        destination: "https://server366.web-hosting.com:2083",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
