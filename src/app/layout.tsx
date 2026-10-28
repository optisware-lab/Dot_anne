import type { Metadata, Viewport } from "next";
import { Gloock, Archivo } from "next/font/google";
import { site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const display = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sans = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-sans",
});

const title = "DOT ANNE HOME LODGE | Guest House in Golf Estate, Tema (Kpone Barrier)";
const description =
  "Quiet, home-style rooms at 473 Golf Estate, off BOST Road near Kpone Barrier, Tema. Private bathrooms, free Wi-Fi, on-site parking. Open 24/7. Call or WhatsApp +233 24 349 0990 to book.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | DOT ANNE HOME LODGE" },
  description,
  applicationName: site.name,
  keywords: [
    "lodge in Tema",
    "guest house Tema",
    "Kpone Barrier lodge",
    "Golf Estate Tema accommodation",
    "hotel near BOST Road",
    "bed and breakfast Tema",
    "Kpone accommodation",
    "24 hour lodge Tema",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "DOT ANNE HOME LODGE, Golf Estate, Tema" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
  other: {
    "geo.region": "GH-AA",
    "geo.placename": "Tema",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A2C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
