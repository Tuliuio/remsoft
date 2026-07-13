import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emite uma pasta por rota com index.html dentro (ex.: /servicos/index.html),
  // servido nativamente pelo Apache do cPanel sem regras de rewrite.
  trailingSlash: true,
  images: {
    // Sem servidor pra otimizar imagens no export estático.
    unoptimized: true,
  },
};

export default nextConfig;
