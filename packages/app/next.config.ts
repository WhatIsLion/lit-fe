import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@lion/ui'],
  reactStrictMode: true,
};

export default nextConfig;
