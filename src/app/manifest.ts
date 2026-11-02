import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.displayName,
    short_name: site.shortName,
    description: "Guest house in Golf Estate, Kpone Barrier, Tema. Open 24/7. Call or WhatsApp to book.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#a8191b",
    lang: "en-GH",
    categories: ["travel", "lifestyle"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
