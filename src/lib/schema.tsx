import { confirmedAmenities, gallery, shownRooms, site } from "@/config/site";
import { nearbyAreas } from "@/config/seo";

/**
 * schema.org JSON-LD, built only from confirmed facts in config/site.ts.
 * Everything links to one LodgingBusiness node (#lodge) so Google sees a
 * single entity across every page.
 */

const abs = (path: string) => `${site.url}${path}`;
const LODGE = abs("/#lodge");
const WEBSITE = abs("/#website");

export function lodgeNode() {
  const node: Record<string, unknown> = {
    "@type": "BedAndBreakfast",
    "@id": LODGE,
    name: site.displayName,
    alternateName: [site.name, site.shortName, "Dot Anne Lodge Tema"],
    description:
      "Home-style guest house and bed & breakfast at 473 Golf Estate, Kpone Barrier, off BOST Road, Tema, Ghana. Private bathrooms, free Wi-Fi, on-site parking and a front desk open 24 hours.",
    url: abs("/"),
    telephone: site.phone.tel,
    image: gallery.map((p) => abs(p.src)),
    logo: abs("/icon.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    sameAs: [site.mapsUrl, ...site.sameAs],
    areaServed: nearbyAreas.map((name) => ({ "@type": "Place", name: `${name}, Greater Accra, Ghana` })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: confirmedAmenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.tel,
      contactType: "reservations",
      areaServed: "GH",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://wa.me/${site.whatsapp.number}`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: { "@type": "LodgingReservation", name: "Room booking request" },
    },
    containsPlace: shownRooms.map((r) => roomNode(r.id)),
    knowsLanguage: "en",
    currenciesAccepted: "GHS",
  };
  // No aggregateRating: the 4.2 / 47 comes from Google Maps, and Google's rules forbid marking up
  // ratings collected on another site. The rating is shown on the page with a link to Google instead.
  if (site.checkIn) node.checkinTime = site.checkIn;
  if (site.checkOut) node.checkoutTime = site.checkOut;
  if (site.email) node.email = site.email;
  if (site.paymentAccepted.length) node.paymentAccepted = site.paymentAccepted.join(", ");
  return node;
}

export function roomNode(id: string) {
  const r = shownRooms.find((x) => x.id === id);
  if (!r) return null;
  const node: Record<string, unknown> = {
    "@type": "HotelRoom",
    "@id": abs(`/rooms#${r.id}`),
    name: r.name,
    description: r.summary,
    containedInPlace: { "@id": LODGE },
    image: r.photos.map((p) => abs(p.src)),
    amenityFeature: r.features
      .map((f) => confirmedAmenities.find((a) => a.id === f))
      .filter(Boolean)
      .map((a) => ({ "@type": "LocationFeatureSpecification", name: a!.label, value: true })),
  };
  if (r.bed) node.bed = { "@type": "BedDetails", typeOfBed: r.bed, numberOfBeds: 1 };
  if (r.sleeps) node.occupancy = { "@type": "QuantitativeValue", maxValue: r.sleeps };
  return node;
}

type Crumb = { name: string; path: string };

export function pageGraph(opts: {
  path: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
  type?: string;
  extra?: Record<string, unknown>[];
}) {
  const url = abs(opts.path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": WEBSITE,
      url: abs("/"),
      name: site.displayName,
      alternateName: site.shortName,
      inLanguage: "en-GH",
      publisher: { "@id": LODGE },
    },
    lodgeNode(),
    {
      "@type": opts.type ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      inLanguage: "en-GH",
      isPartOf: { "@id": WEBSITE },
      about: { "@id": LODGE },
      primaryImageOfPage: { "@type": "ImageObject", url: abs(gallery[0].src) },
      ...(opts.crumbs ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
  ];
  if (opts.crumbs) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    });
  }
  if (opts.extra) graph.push(...opts.extra);
  return { "@context": "https://schema.org", "@graph": graph };
}

export function faqNode(items: { q: string; a: string }[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": abs(`${path}#faq`),
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function galleryNode() {
  return {
    "@type": "ImageGallery",
    "@id": abs("/gallery#images"),
    name: "Photos of Dot Anne Home Lodge",
    about: { "@id": LODGE },
    image: gallery.map((p) => ({
      "@type": "ImageObject",
      contentUrl: abs(p.src),
      caption: p.alt,
      width: p.w,
      height: p.h,
      creditText: site.displayName,
      copyrightNotice: site.displayName,
    })),
  };
}

export function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
