import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignora erros de lint durante o build
    ignoreDuringBuilds: true,}
};

export default nextConfig;
