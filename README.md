# DOT ANNE HOME LODGE website

Single-page Next.js site for DOT ANNE HOME LODGE, 473 Golf Estate, Kpone Barrier, off BOST Road, Tema.
Built to turn Google searches into phone calls and WhatsApp booking chats.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Deploys as-is to Vercel, Netlify or any Node host. Set `NEXT_PUBLIC_SITE_URL` to the real domain
(for example `https://www.dotannelodge.com`) so canonical links, the sitemap and social previews point at it.
Until then the site uses its Vercel address, https://dot-anne.vercel.app. Every push to `main` redeploys it automatically.

## Edit business details

Everything factual lives in **`src/config/site.ts`**: phone, WhatsApp number, address, Plus Code, map links,
rating, check-in/out times, amenities and rooms. The page reads only from there.

- **Amenities** appear only when `confirmed: true`. Air conditioning, breakfast, TV and mini fridge are listed
  on Google Maps or visible in photos but are switched off until you confirm them.
- **Rooms** appear only when `show: true`. Only the Deluxe Double Room (the type the lodge listed on Booking.com)
  is shown. Standard Room and Executive Suite are placeholders, hidden until you fill them in.
- **Prices** stay `null` until you add a real rate (for example `"GH₵ 450 / night"`). Until then the site says
  "Call or WhatsApp for today's rate".
- **Rating**: update `rating.value`, `rating.count` and `asOf` when the Google numbers change, or set
  `show: false` to hide it.
- **FAQ** answers are in `src/components/Faq.tsx`.

## Photos

All photos are of the lodge itself, taken from its public Google Maps listing. See
`public/images/property/SOURCES.md` for each file's origin.

To replace a photo, save the new one over the same file name in `public/images/property/` (JPG, about
2000 px wide). To add photos to a room, add entries to that room's `photos` list in `src/config/site.ts`.

## Before launch: owner checklist

1. Confirm the lodge owns the six photos (or replace them). Guest uploads on Google belong to the guest.
2. Remove the three 3D-render images from the Google Maps listing; they are not the lodge.
3. Confirm or switch on: air conditioning, breakfast, TV, mini fridge.
4. Add room rates, check-in/check-out times and any other room types.
5. Set the real domain in `NEXT_PUBLIC_SITE_URL`.
6. Add a booking email in `site.email` if you have one.
7. After launch, add the website link to the Google Business Profile and submit the sitemap
   (`/sitemap.xml`) in Google Search Console.

## Pages

| Page | Path | Targets searches like |
|---|---|---|
| Home | / | lodge in Tema, guest house Tema, Golf Estate accommodation |
| Rooms | /rooms | rooms in Tema, deluxe double room Tema, room rates |
| Gallery | /gallery | Dot Anne Home Lodge photos |
| About | /about | home-style / quiet guest house Tema |
| Location | /location | lodge at Kpone Barrier, hotel near BOST Road, nearby areas |
| FAQ | /faq | late check-in Tema, how to book |
| Contact | /contact | book lodge Tema, Dot Anne phone / WhatsApp |

Page titles, descriptions and keyword clusters live in `src/config/seo.ts`; FAQ answers in `src/content/faq.ts`.

## SEO included

- Separate pages, each with its own title (under 60 characters), description (under 155), H1, canonical URL and social card.
- Keywords used naturally in titles, headings, copy and image alt text (no hidden or stuffed keyword lists, which Google penalises).
- One linked schema.org graph on every page: Hotel / LodgingBusiness / BedAndBreakfast with address, geo, Plus Code map link,
  24h hours, phone, amenities, rating, areas served, booking action; plus WebSite, WebPage, BreadcrumbList, FAQPage,
  HotelRoom and ImageGallery where relevant.
- Sitemap with image entries, robots.txt, web manifest, `/llms.txt` (plain-text facts for AI search assistants),
  geo meta tags, AVIF/WebP images, a 404 page.
- Search Console / Bing verification: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

### What decides local ranking (do these after launch)

No website can promise position 1. For a lodge, Google's local results depend mostly on the **Google Business Profile**:

1. Add this website link to the Google Business Profile, and keep name, address and phone identical everywhere.
2. Upload the real photos there and remove the three 3D renders that are not the lodge.
3. Ask happy guests for Google reviews and reply to every review.
4. Pick the right categories (Lodge, Guest house, Bed & breakfast) and keep hours as "Open 24 hours".
5. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
6. List the lodge with the same details on Tripadvisor, Booking.com, Facebook and Ghana directories; add each link to
   `site.sameAs` in `src/config/site.ts`.

## Design

Design system notes are in `DESIGN.md`. Product facts and constraints are in `PRODUCT.md`.
