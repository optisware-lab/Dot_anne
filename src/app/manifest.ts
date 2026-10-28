import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.displayName,
    short_name: site.shortName,
    description: "Guest house in Golf Estate, Kpone Barrier, Tema. Open 24/7. Call or WhatsApp to book.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8ff",
    theme_color: "#011d35",
    lang: "en-GH",
    categories: ["travel", "lifestyle"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
