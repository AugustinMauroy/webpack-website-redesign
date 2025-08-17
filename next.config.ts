import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // We use biomejs
  eslint: {
    ignoreDuringBuilds: true,
  },
  // We check it on separated CI job
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Ensure that server-side code is also minified
    serverMinification: true,
    // Use Workers and Threads for webpack compilation
    webpackBuildWorker: true,
    // Execute parallel tracing of server builds
    parallelServerBuildTraces: true,
    // Execute parallel server compilation
    parallelServerCompiles: true,
  },
};

export default nextConfig;
