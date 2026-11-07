/**
 * Search map for the site: what each page should rank for.
 *
 * Rules that keep rankings safe:
 * - Each page targets its own cluster; pages do not compete with each other.
 * - Keywords appear naturally in titles, headings, copy and alt text.
 *   Never paste keyword lists into visible text (Google treats that as spam).
 * - Only real places and real facts. No distances or claims we cannot back.
 */

/** Neighbourhoods and landmarks guests search from. Used in copy and schema `areaServed`. */
export const nearbyAreas = [
  "Kpone Barrier",
  "Golf Estate",
  "Rasta Village",
  "Golf City",
  "Kpone",
  "Tema Community 25",
  "Ashaiman",
  "Tema Industrial Area",
  "Tema Port",
] as const;

const brand = ["Dot Anne Home Lodge", "Dot Anne Lodge", "DOT ANNE HOME LODGE Tema", "Dot Anne guest house"];

const core = [
  "lodge in Tema",
  "guest house in Tema",
  "hotel in Tema",
  "bed and breakfast in Tema",
  "accommodation in Tema",
  "place to stay in Tema",
  "affordable lodge in Tema",
  "budget accommodation Tema",
  "Tema lodges",
  "Tema guest houses",
  "B&B Tema Ghana",
  "lodge Greater Accra",
];

const local = [
  "lodge at Kpone Barrier",
  "hotel near Kpone Barrier",
  "guest house Kpone Barrier",
  "accommodation in Golf Estate Tema",
  "Golf Estate lodge",
  "lodge in Rasta Village Tema",
  "guest house in Rasta Village Kpone",
  "accommodation in Golf Estate and Rasta Village",
  "Golf City Tema hotel",
  "lodge near BOST Road",
  "hotel off BOST Road Kpone",
  "Kpone accommodation",
  "lodge in Kpone",
  "hotel near Tema Community 25",
  "guest house near Ashaiman",
  "hotel near Tema Port",
  "accommodation near Tema Industrial Area",
  "Kpone-Katamanso hotels",
];

const intent = [
  "24 hour lodge in Tema",
  "late check-in hotel Tema",
  "overnight stay Tema",
  "short stay lodge Tema",
  "business travel accommodation Tema",
  "quiet guest house Tema",
  "safe accommodation Tema",
  "lodge with parking Tema",
  "room with private bathroom Tema",
  "lodge with free Wi-Fi Tema",
  "book lodge on WhatsApp Tema",
  "deluxe double room Tema",
  "conference hall in Tema",
  "lodge with conference room Kpone",
  "lodge with laundry service Tema",
];

export const keywords = { brand, core, local, intent, all: [...brand, ...core, ...local, ...intent] };

type PageSeo = { path: string; title: string; description: string; keywords: string[]; h1: string };

/** Titles stay under ~60 characters and descriptions under ~155 so Google shows them in full. */
export const pages = {
  home: {
    path: "/",
    title: "Dot Anne Home Lodge | Guest House in Golf Estate, Tema",
    description:
      "Affordable lodge in the Golf Estate & Rasta Village Enclave, Kpone Barrier, Tema. Private bathrooms, Wi-Fi, parking, 24/7 desk. Call 024 349 0990.",
    keywords: [...brand, ...core.slice(0, 8), ...local.slice(0, 6), ...intent.slice(0, 4)],
    h1: "Comfortable, Safe & Affordable Accommodation in Golf Estate, Tema",
  },
  rooms: {
    path: "/rooms",
    title: "Rooms & Rates | Deluxe Double Room in Tema | Dot Anne",
    description:
      "Deluxe double room with private shower, free Wi-Fi and parking at Dot Anne Home Lodge, Kpone Barrier, Tema. Ask for today's rate by WhatsApp or phone.",
    keywords: ["rooms in Tema", "deluxe double room Tema", "room rates Tema lodge", "hotel room Kpone Barrier", ...intent.slice(6, 12), ...core.slice(5, 9)],
    h1: "Rooms & Accommodation in Tema",
  },
  gallery: {
    path: "/gallery",
    title: "Photos of Dot Anne Home Lodge, Golf Estate, Tema",
    description:
      "Real photos of Dot Anne Home Lodge: the building, reception, air-conditioned rooms, private bathrooms and parking in the Golf Estate & Rasta Village Enclave.",
    keywords: ["Dot Anne Home Lodge photos", "Tema lodge pictures", "Golf Estate Tema guest house photos", "Rasta Village Tema lodge photos", "Kpone Barrier lodge rooms"],
    h1: "Photo Gallery",
  },
  about: {
    path: "/about",
    title: "About Dot Anne Home Lodge | Home-Style Lodge in Tema",
    description:
      "A home-style guest house in the Golf Estate & Rasta Village Enclave, Kpone Barrier, Tema. Air-conditioned rooms, private bathrooms, 24-hour front desk.",
    keywords: [...brand, "home-style lodge Tema", "guest house in Golf Estate Tema", "guest house in Rasta Village Tema", "quiet lodge Kpone Barrier", ...core.slice(0, 4)],
    h1: "About Dot Anne Home Lodge",
  },
  location: {
    path: "/location",
    title: "Location & Directions | Lodge at Kpone Barrier, Tema",
    description:
      "Find Dot Anne Home Lodge within the Golf Estate & Rasta Village Enclave, Kpone Barrier, off BOST Road, Tema. Directions, map and nearby areas.",
    keywords: [...local, "directions to Golf Estate Tema", "directions to Rasta Village Tema", "lodge near me Tema"],
    h1: "Location & Directions",
  },
  faq: {
    path: "/faq",
    title: "FAQ | Booking, Check-in & Directions | Dot Anne Lodge",
    description:
      "Answers about booking, late arrivals, rates, parking, Wi-Fi, the conference hall, laundry and finding Dot Anne Home Lodge at Kpone Barrier, Tema.",
    keywords: ["Tema lodge questions", "late check-in Tema", "how to book lodge Tema", ...intent.slice(0, 6)],
    h1: "Frequently Asked Questions",
  },
  contact: {
    path: "/contact",
    title: "Book a Room | Call or WhatsApp | Dot Anne Home Lodge Tema",
    description:
      "Book Dot Anne Home Lodge in Golf Estate, Tema: call or WhatsApp +233 24 349 0990, any time of day or night. Send your dates and get today's rate.",
    keywords: ["book lodge Tema", "book hotel Kpone Barrier", "Dot Anne Home Lodge phone number", "Tema lodge WhatsApp", ...intent.slice(10, 12)],
    h1: "Book Your Stay",
  },
} satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof pages;
