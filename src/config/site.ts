/**
 * Business facts for DOT ANNE HOME LODGE.
 *
 * This is the one file to edit when details change. Anything marked
 * `confirmed: false` (or `show: false`) is NOT shown on the site until the
 * owner confirms it. Never add prices, room types, amenities, certifications
 * or reviews that are not real: invented claims hurt trust and search ranking.
 */

export const site = {
  name: "DOT ANNE HOME LODGE",
  displayName: "Dot Anne Home Lodge",
  shortName: "Dot Anne Lodge",
  type: "Guest House / Bed & Breakfast",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dotannelodge.com").replace(/\/$/, ""), // TODO(owner): set the real domain
  locale: "en_GH",

  phone: {
    display: "+233 24 349 0990",
    local: "024 349 0990",
    tel: "+233243490990",
  },
  whatsapp: {
    number: "233243490990", // international format, no + or spaces
    greeting: "Hello Dot Anne Home Lodge, I would like to book a room.",
  },
  email: null as string | null, // TODO(owner): add a booking email if you have one

  address: {
    street: "473 Golf Estate, Kpone Barrier, off BOST Road",
    plot: "473",
    estate: "Golf Estate",
    landmark: "Kpone Barrier",
    road: "BOST Road",
    city: "Tema",
    district: "Kpone-Katamanso",
    region: "Greater Accra",
    country: "Ghana",
    countryCode: "GH",
    plusCode: "P275+W52",
  },
  geo: { lat: 5.7153015, lng: 0.0082891 },
  googlePlaceCid: "0x10207f048a6b1501:0x61dc78658b8e6b25",
  mapsUrl:
    "https://www.google.com/maps/place/DOT+ANNE+HOME+LODGE/@5.7153015,0.0082891,17z/data=!3m1!4b1!4m6!3m5!1s0x10207f048a6b1501:0x61dc78658b8e6b25!8m2!3d5.7153015!4d0.0082891",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=5.7153015,0.0082891",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=DOT%20ANNE%20HOME%20LODGE%2C%20P275%2BW52%20Tema&z=16&output=embed",

  /** Other official listings of the lodge (used as schema.org `sameAs`). */
  sameAs: [
    "https://www.tripadvisor.com/Hotel_Review-g1202780-d18378995-Reviews-Dot_Anne_Home_Lodge-Tema_Greater_Accra.html",
  ],

  hours: {
    label: "Open 24 hours, every day",
    short: "Open 24/7",
    timeZone: "Africa/Accra",
  },

  rating: {
    show: true,
    value: 4.2,
    count: 47,
    source: "Google",
    // Link guests to the live reviews so the number can be checked.
    url: "https://www.google.com/maps/place/DOT+ANNE+HOME+LODGE/@5.7153015,0.0082891,17z/data=!4m8!3m7!1s0x10207f048a6b1501:0x61dc78658b8e6b25!8m2!3d5.7153015!4d0.0082891!9m1!1b1",
    asOf: "October 2026",
  },

  checkIn: null as string | null, // TODO(owner): e.g. "12:00"
  checkOut: null as string | null, // TODO(owner): e.g. "11:00"
  /** e.g. ["Cash", "Mobile Money"]. Empty until the owner confirms. */
  paymentAccepted: [] as string[],
} as const;

/** Amenities. Only `confirmed: true` items appear on the site. */
export const amenities = [
  { id: "bathroom", label: "Private bathroom", detail: "Every room has its own bathroom with a shower.", confirmed: true },
  { id: "wifi", label: "Free Wi-Fi", detail: "Wi-Fi for guests at no extra charge.", confirmed: true },
  { id: "parking", label: "On-site parking", detail: "Park inside the lodge compound.", confirmed: true },
  { id: "desk", label: "24-hour front desk", detail: "Someone answers the phone and the gate at any hour.", confirmed: true },
  // Listed by Google Maps / seen in photos, waiting for the owner to confirm:
  { id: "ac", label: "Air conditioning", detail: "Air-conditioned rooms.", confirmed: false },
  { id: "breakfast", label: "Breakfast", detail: "Breakfast served each morning.", confirmed: false },
  { id: "tv", label: "TV in room", detail: "Flat-screen TV.", confirmed: false },
  { id: "fridge", label: "Mini fridge", detail: "Small fridge in the room.", confirmed: false },
] as const;

export type AmenityId = (typeof amenities)[number]["id"];

export type Photo = { src: string; alt: string; w: number; h: number; caption?: string; place?: string };

const P = {
  exterior: {
    src: "/images/property/exterior-courtyard.jpg",
    alt: "Dot Anne Home Lodge in Golf Estate, Tema: green-roofed bungalow and two-storey guest block across the paved courtyard",
    w: 2400,
    h: 1800,
    caption: "The lodge from the courtyard",
    place: "Golf Estate compound",
  },
  garden: {
    src: "/images/property/garden-frontage.jpg",
    alt: "Flower beds along the guest room wing at Dot Anne Home Lodge, Kpone Barrier",
    w: 1600,
    h: 900,
    caption: "Flower beds",
    place: "Room wing",
  },
  bedroom: {
    src: "/images/property/bedroom-double.jpg",
    alt: "Deluxe double room at Dot Anne Home Lodge, Tema, with a double bed, wardrobe and ceiling fan",
    w: 2000,
    h: 1500,
    caption: "Deluxe Double Room",
    place: "Guest room",
  },
  bathroom: {
    src: "/images/property/bathroom-shower.jpg",
    alt: "Private en-suite bathroom with a glass shower enclosure and fresh towel at Dot Anne Home Lodge",
    w: 2000,
    h: 1500,
    caption: "Private bathroom",
    place: "En-suite",
  },
  bathroom2: {
    src: "/images/property/bathroom-vanity.jpg",
    alt: "Tiled private bathroom with a corner shower in a guest room at Dot Anne Home Lodge",
    w: 2000,
    h: 2667,
    caption: "Shower room",
    place: "En-suite",
  },
  lounge: {
    src: "/images/property/guest-lounge.jpg",
    alt: "Guest lounge with leather sofas and a TV at Dot Anne Home Lodge, Golf Estate",
    w: 2000,
    h: 1500,
    caption: "Guest lounge",
    place: "Main house",
  },
} satisfies Record<string, Photo>;

export const photos = P;

/** Every real photo of the lodge, in gallery order. */
export const gallery: Photo[] = [P.exterior, P.bedroom, P.lounge, P.garden, P.bathroom, P.bathroom2];

/**
 * Rooms. `show: false` keeps a room off the site.
 * `price` stays null until the owner supplies a real rate; the site then
 * says "Call or WhatsApp for today's rate" instead of a number.
 */
export const rooms = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    show: true,
    tag: "Listed room type",
    summary:
      "A double bed, wardrobe and your own bathroom with a shower. Quiet, simple and clean, for a night or a longer stay.",
    sleeps: 2 as number | null,
    bed: "Double bed",
    price: null as string | null, // e.g. "GH₵ 450 / night"
    features: ["bathroom", "wifi", "parking", "ac", "tv", "fridge"] as AmenityId[],
    photos: [P.bedroom, P.bathroom] as Photo[],
  },
  // Suggested categories from the brief. Not confirmed; hidden until the owner fills them in.
  { id: "standard", name: "Standard Room", show: false, tag: "", summary: "", sleeps: null, bed: "", price: null, features: [] as AmenityId[], photos: [] as Photo[] },
  { id: "executive", name: "Executive Suite", show: false, tag: "", summary: "", sleeps: null, bed: "", price: null, features: [] as AmenityId[], photos: [] as Photo[] },
];

export const shownRooms = rooms.filter((r) => r.show);

export function whatsappLink(message: string = site.whatsapp.greeting) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const confirmedAmenities = amenities.filter((a) => a.confirmed);
