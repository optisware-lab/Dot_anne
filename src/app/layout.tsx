import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import { site } from "@/config/site";
import { BookingProvider } from "@/components/Booking";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ActionBar } from "@/components/ActionBar";
import { Reveal } from "@/components/Reveal";
import "./globals.css";

const head = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-head",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Dot Anne Home Lodge | Guest House in Golf Estate, Tema", template: "%s | Dot Anne Home Lodge" },
  description:
    "Affordable, quiet lodge at Golf Estate, Kpone Barrier, off BOST Road, Tema. Private bathrooms, free Wi-Fi, parking, 24/7 desk.",
  applicationName: site.displayName,
  authors: [{ name: site.displayName, url: site.url }],
  creator: site.displayName,
  publisher: site.displayName,
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, address: true, email: false },
  appleWebApp: { title: site.shortName, capable: true, statusBarStyle: "default" },
  // TODO(owner): paste the Google Search Console / Bing verification codes here after launch.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  other: {
    "geo.region": "GH-AA",
    "geo.placename": "Tema, Kpone Barrier",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
    "business:contact_data:street_address": site.address.street,
    "business:contact_data:locality": site.address.city,
    "business:contact_data:region": site.address.region,
    "business:contact_data:country_name": site.address.country,
    "business:contact_data:phone_number": site.phone.tel,
    "place:location:latitude": String(site.geo.lat),
    "place:location:longitude": String(site.geo.lng),
  },
};

export const viewport: Viewport = {
  themeColor: "#a8191b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so motion start states never apply without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Reveal />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <BookingProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <ActionBar />
        </BookingProvider>
      </body>
    </html>
  );
}
