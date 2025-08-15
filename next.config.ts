import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Disable type checking during production builds.
    // Make sure to run `tsc --noEmit` as part of your CI/CD pipeline
    // to ensure type safety before deploying.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
