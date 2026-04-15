import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flycomm — AI-Powered Network Intelligence",
    short_name: "Flycomm",
    description:
      "AI-powered network intelligence for planning, optimization, and real-world connectivity insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c1222",
    theme_color: "#00a6f4",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
