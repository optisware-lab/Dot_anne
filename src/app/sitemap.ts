import type { MetadataRoute } from "next";
import { gallery, promoVideo, site } from "@/config/site";
import { pages } from "@/config/seo";

const priority: Record<string, number> = { "/": 1, "/rooms": 0.9, "/contact": 0.9, "/location": 0.8, "/gallery": 0.7, "/faq": 0.7, "/about": 0.6 };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(pages).map((p) => ({
    url: `${site.url}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: priority[p.path] ?? 0.5,
    // Image sitemap entries help the real lodge photos show up in Google Images.
    images: p.path === "/" || p.path === "/gallery" ? gallery.map((g) => `${site.url}${g.src}`) : undefined,
    videos:
      p.path === "/" || p.path === "/gallery"
        ? [
            {
              title: promoVideo.title,
              thumbnail_loc: `${site.url}${promoVideo.poster}`,
              description: promoVideo.description,
              content_loc: `${site.url}${promoVideo.src}`,
              duration: 54,
            },
          ]
        : undefined,
  }));
}
