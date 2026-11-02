# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (user's choice, 2026-10-26). Static-exportable marketing site; no booking engine or backend.

## Users

- Business travellers and professionals working in Tema, Kpone and the port/industrial area who need a dependable overnight room.
- Transit travellers arriving late or leaving early, who need a lodge that answers the phone at any hour.
- Couples and adults wanting a quiet short stay; local and international visitors to Tema/Kpone.

Most arrive from a Google search ("lodge in Tema", "guest house Kpone Barrier", "Golf Estate accommodation") on a phone, often on mobile data, and want to know three things fast: where it is, what the room looks like, and how to reach someone now.

## Product Purpose

The website for DOT ANNE HOME LODGE, a guest house / bed-and-breakfast at 473 Golf Estate, Kpone Barrier, off BOST Road, Tema, Greater Accra, Ghana. It exists to turn search visitors into phone calls and WhatsApp booking conversations. Success = more calls to +233 24 349 0990, more WhatsApp chats, more direct bookings, and better local search visibility.

## Positioning

A quiet, home-style lodge in a residential estate off BOST Road, staffed 24 hours, booked by talking to a person (phone or WhatsApp) rather than through an OTA engine.

## Operating Context

- Booking happens by phone or WhatsApp on the same number (+233 24 349 0990 / 233243490990). No online payment, no availability engine.
- Open 24 hours, 7 days.
- Google Maps listing: "DOT ANNE HOME LODGE", Plus Code P275+W52 BOST ROAD, Tema; coordinates 5.7153015, 0.0082891; 4.2/5 from 47 reviews (as of Oct 2026).
- **Open question (2026-11-02):** the owner says the lodge has moved to a new building but has not yet given the new address. The site still shows 473 Golf Estate / P275+W52 until the new address, map pin and directions are supplied.
- Previously on Booking.com (listing now inactive) and Tripadvisor (no photos).

## Capabilities and Constraints

Confirmed by the owner (2026-10-26):
- Private bathrooms
- Free Wi-Fi
- On-site parking

Confirmed by the owner (2026-11-02), visible in the new room photos:
- Air conditioning
- Flat-screen TV
- Mini fridge, kettle and tea tray
- Iron and ironing table for guests

Listed by third parties, NOT yet confirmed by the owner (must stay off or be marked "to confirm"):
- Free / continental breakfast (Google Maps, Booking.com)
- "Deluxe Double Room" as a room type (Booking.com)

Unknown, must not be invented: room prices, room count, room categories beyond the above, check-in/out times, payment methods, distances to landmarks, security features, awards.

## Brand Commitments

- Name written as DOT ANNE HOME LODGE (wordmark may set it in mixed case for display, but the name is fixed).
- No official logo exists; a typographic wordmark is acceptable and must not be presented as an official logo.
- Visual design: started from the Google Stitch "Tema Coastal Architectural Hospitality" system (2026-10-28); colour order set by the owner on 2026-11-02: red dominant, then white, then light blue, dark blue rare (text ink only). Space Grotesk uppercase headings + Hanken Grotesk body. See DESIGN.md.
- Hero headline (client-pinned): "Comfortable, Safe & Affordable Accommodation in Golf Estate, Tema".

## Site Structure

Multi-page for search: / (home), /rooms, /gallery, /about, /location, /faq, /contact. Each page targets its own keyword cluster (src/config/seo.ts). No thin per-area doorway pages.

## Evidence on Hand

- Six owner photos of the current building (2026-11-02): two double rooms, a room with desk/TV/fridge/kettle, a room seen from the door, the hallway, the ironing station.
- Five earlier photos from the lodge's Google Maps listing that the owner says still show the lodge: front garden, a bedroom, two bathrooms, guest lounge. Owner must confirm rights before launch. Provenance in `public/images/property/SOURCES.md`.
- Removed everywhere (2026-11-02): the courtyard photo with the green-roofed bungalow and parked car, which shows a demolished building. Never use it again.
- Rating 4.2/5 from 47 Google reviews (owner-supplied, matches Google Maps Oct 2026).
- No testimonials, no prices, no room inventory, no certifications (e.g. Ghana Tourism Authority) on hand. Do not fabricate any of these. The Stitch comp included invented testimonials, a GTA badge and AI photos; all were deliberately left out.

## Product Principles

1. Every screen has a way to reach a person (call or WhatsApp) within one tap.
2. Show the real place. Real photos over stock; never present stock as the lodge.
3. Say only what is confirmed. Unconfirmed facts live in one config file, off by default.
4. Location clarity beats adjectives: estate, road, landmark, map, directions.
5. Fast on a phone on mobile data.

## Accessibility & Inclusion

WCAG 2.2 AA. Many visitors on mid-range Android phones over mobile data: performance budget is part of accessibility.
