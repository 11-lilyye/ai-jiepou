import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const onGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = onGitHubPages && repository && !repository.endsWith(".github.io")
  ? `/${repository}`
  : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
