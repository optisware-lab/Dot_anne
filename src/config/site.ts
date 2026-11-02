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
  // Live on Vercel. When you buy a domain, set NEXT_PUBLIC_SITE_URL in Vercel (or change this line).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dot-anne.vercel.app").replace(/\/$/, ""),
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
  // Confirmed by the owner on 2026-11-02 (visible in the new room photos):
  { id: "ac", label: "Air conditioning", detail: "Wall-mounted air conditioning in the rooms.", confirmed: true },
  { id: "tv", label: "Flat-screen TV", detail: "A wall-mounted flat-screen TV.", confirmed: true },
  { id: "fridge", label: "Mini fridge", detail: "A small fridge in the room for drinks and snacks.", confirmed: true },
  { id: "kettle", label: "Kettle & tea tray", detail: "Electric kettle with cups for hot drinks.", confirmed: true },
  { id: "iron", label: "Iron & ironing table", detail: "Press your clothes before a meeting or a night out.", confirmed: true },
  // Waiting for the owner to confirm:
  { id: "breakfast", label: "Breakfast", detail: "Breakfast served each morning.", confirmed: false },
] as const;

export type AmenityId = (typeof amenities)[number]["id"];

export type Photo = { src: string; alt: string; w: number; h: number; caption?: string; place?: string };

const P = {
  // Owner photos of the current building (2026-11-02)
  roomBed: {
    src: "/images/property/room-double-bed.jpg",
    alt: "Air-conditioned double room at Dot Anne Home Lodge, Tema, with a large bed, fresh white linen and orange curtains",
    w: 1964,
    h: 1104,
    caption: "Double room",
    place: "Guest room",
  },
  roomDesk: {
    src: "/images/property/room-desk-tv.jpg",
    alt: "Guest room with a flat-screen TV, work desk, armchair, mini fridge and kettle at Dot Anne Home Lodge",
    w: 1990,
    h: 1119,
    caption: "Desk, TV & fridge",
    place: "Guest room",
  },
  roomGold: {
    src: "/images/property/room-gold-curtains.jpg",
    alt: "Double room with gold curtains, air conditioning and a ceiling fan at Dot Anne Home Lodge, Golf Estate",
    w: 2000,
    h: 1125,
    caption: "Double room",
    place: "Guest room",
  },
  roomEntrance: {
    src: "/images/property/room-entrance-view.jpg",
    alt: "Spacious guest room seen from the door, with bed, desk, mini fridge and wall-mounted TV",
    w: 2000,
    h: 1124,
    caption: "Room from the door",
    place: "Guest room",
  },
  hallway: {
    src: "/images/property/hallway.jpg",
    alt: "Bright tiled hallway leading to the guest rooms at Dot Anne Home Lodge, Tema",
    w: 2000,
    h: 1125,
    caption: "Hallway",
    place: "Guest wing",
  },
  ironing: {
    src: "/images/property/ironing-station.jpg",
    alt: "Ironing table with an iron for guests at Dot Anne Home Lodge",
    w: 2000,
    h: 1126,
    caption: "Ironing station",
    place: "For guests",
  },
  // Earlier photos of rooms still in use (from the Google Maps listing)
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
    alt: "Double room at Dot Anne Home Lodge, Tema, with a double bed, wardrobe and ceiling fan",
    w: 2000,
    h: 1500,
    caption: "Double room",
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

/** Every real photo of the lodge, in gallery order (newest building photos first). */
export const gallery: Photo[] = [
  P.roomBed,
  P.roomDesk,
  P.hallway,
  P.roomGold,
  P.lounge,
  P.roomEntrance,
  P.bathroom,
  P.garden,
  P.ironing,
  P.bedroom,
  P.bathroom2,
];

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
      "A double bed with fresh white linen, air conditioning, your own bathroom with a shower, and a desk with a TV, mini fridge and kettle. Quiet and clean, for a night or a longer stay.",
    sleeps: 2 as number | null,
    bed: "Double bed",
    price: null as string | null, // e.g. "GH₵ 450 / night"
    features: ["bathroom", "ac", "wifi", "tv", "fridge", "kettle", "parking"] as AmenityId[],
    photos: [P.roomBed, P.roomDesk, P.roomEntrance, P.roomGold, P.bathroom, P.bathroom2] as Photo[],
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
