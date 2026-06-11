import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // IMPORTANTE: Isso ignora a etapa de linting durante o build de produção.
    // Use com cautela. O linting AINDA será executado quando você rodar
    // 'npm run dev' ou 'npm run lint'.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
