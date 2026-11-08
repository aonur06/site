import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost",
    "localhost:3000",
    "172.20.10.3",
    "172.20.10.3:3000",
    "192.168.1.124",
    "192.168.1.124:3000",
  ],
};

export default nextConfig;
