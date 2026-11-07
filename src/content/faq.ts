import { site } from "@/config/site";

/**
 * FAQ answers. Confirmed facts only; questions are phrased the way guests
 * search ("lodge open at night Tema", "how to find Golf Estate Kpone").
 * `home: true` items also appear on the home page.
 */
export type Faq = { q: string; a: string; home?: boolean; topic: "booking" | "stay" | "location" };

export const faqs: Faq[] = [
  {
    q: "Is the front desk open 24/7?",
    a: `Yes. The front desk at Dot Anne Home Lodge is open 24 hours a day, 7 days a week. Arriving late at night or leaving before sunrise is no problem: call ${site.phone.display} on the way and someone will be ready for you.`,
    home: true,
    topic: "stay",
  },
  {
    q: "Where exactly is Dot Anne Home Lodge?",
    a: "Within the Golf Estate & Rasta Village Enclave, Kpone Barrier, off BOST Road, Tema, Greater Accra, Ghana. Search “Dot Anne Home Lodge” in Google Maps, or share the map pin with your taxi or ride-hailing driver.",
    home: true,
    topic: "location",
  },
  {
    q: "How do I find the lodge from Kpone Barrier?",
    a: `The Golf Estate & Rasta Village Enclave sits just off BOST Road in the Kpone Barrier area of Tema. Search "Dot Anne Home Lodge" in Google Maps, or call the front desk on ${site.phone.display} and we will guide you or your driver in.`,
    topic: "location",
  },
  {
    q: "How do I book a room?",
    a: `Call or WhatsApp the front desk on ${site.phone.display}. Send your dates and the number of guests and the lodge will confirm availability and the rate. You can also use the booking form on this website, which writes the WhatsApp message for you.`,
    home: true,
    topic: "booking",
  },
  {
    q: "Can I book directly on WhatsApp?",
    a: `Yes. WhatsApp ${site.phone.display} with your dates, number of guests and preferred room, and the lodge will reply with availability and the rate.`,
    topic: "booking",
  },
  {
    q: "How much is a room per night?",
    a: "Rates depend on the room and your dates. Call or send a WhatsApp message for today's rate; you get the price directly from the lodge.",
    home: true,
    topic: "booking",
  },
  {
    q: "Is there parking at the lodge?",
    a: "Yes. Guests can park inside the lodge compound.",
    home: true,
    topic: "stay",
  },
  {
    q: "Do rooms have a private bathroom and Wi-Fi?",
    a: "Yes. Rooms have their own bathroom with a shower, and Wi-Fi is free for guests.",
    home: true,
    topic: "stay",
  },
  {
    q: "Are the rooms air-conditioned?",
    a: "Yes. Rooms have wall-mounted air conditioning, and the rooms shown in our photos also have a flat-screen TV, a mini fridge, and a kettle with cups for hot drinks. An iron and ironing table are available for guests.",
    home: true,
    topic: "stay",
  },
  {
    q: "Do you have a conference hall?",
    a: `Yes. The lodge has a conference hall for meetings, workshops and small events. Call or WhatsApp ${site.phone.display} to book it and ask for the rate.`,
    topic: "stay",
  },
  {
    q: "Is there a laundry service?",
    a: "Yes. Laundry is available for guests. Ask the front desk for details when you check in.",
    topic: "stay",
  },
  {
    q: "Can I check in late at night?",
    a: `Yes. Because the desk is staffed around the clock you can arrive at any hour. Let the lodge know your arrival time when you book, or call ${site.phone.display} on the way.`,
    topic: "stay",
  },
  {
    q: "Which areas is the lodge close to?",
    a: "The lodge is within the Golf Estate & Rasta Village Enclave, off BOST Road in the Kpone Barrier area of Tema. It is a convenient base if you are visiting Kpone, Golf City, Tema Community 25, Ashaiman or the Tema industrial and port areas.",
    topic: "location",
  },
];

export const homeFaqs = faqs.filter((f) => f.home);
