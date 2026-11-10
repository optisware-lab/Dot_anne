import type { Metadata } from "next";
import { site } from "@/config/site";
import { keywords, pages, type PageKey } from "@/config/seo";

/** Per-page metadata: title, description, canonical, Open Graph, Twitter, keywords. */
export function pageMetadata(key: PageKey, image = "/images/og.jpg"): Metadata {
  const p = pages[key];
  return {
    title: { absolute: p.title },
    description: p.description,
    keywords: Array.from(new Set([...p.keywords, ...keywords.brand])),
    alternates: { canonical: p.path },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: p.path,
      siteName: site.displayName,
      title: p.title,
      description: p.description,
      images: [{ url: image, width: 1200, height: 630, alt: `${site.displayName}, Golf Estate & Rasta Village Enclave, Tema` }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [image] },
  };
}
