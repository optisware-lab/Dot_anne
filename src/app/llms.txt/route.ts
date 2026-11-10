import { confirmedAmenities, shownRooms, site } from "@/config/site";
import { nearbyAreas, pages } from "@/config/seo";
import { faqs } from "@/content/faq";

export const dynamic = "force-static";

/** Plain-text summary for AI search assistants (llmstxt.org). Confirmed facts only. */
export function GET() {
  const body = `# ${site.displayName}

> Guest house / bed & breakfast within the Golf Estate & Rasta Village Enclave, Kpone Barrier, off BOST Road, Tema, Greater Accra, Ghana. Front desk open 24 hours. Book by phone or WhatsApp: ${site.phone.display}.

## Facts
- Address: ${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.country}
- GhanaPost GPS address: ${site.address.gps}
- Coordinates: ${site.geo.lat}, ${site.geo.lng}
- Phone and WhatsApp: ${site.phone.display}
- Hours: ${site.hours.label}
- Rating: ${site.rating.value}/5 from ${site.rating.count} Google reviews (${site.rating.asOf})
- Amenities: ${confirmedAmenities.map((a) => a.label).join(", ")}
- Rooms: ${shownRooms.map((r) => r.name).join(", ")}
- Rates: not published; ask the front desk by phone or WhatsApp
- Nearby areas: ${nearbyAreas.join(", ")}
- Google Maps: ${site.mapsUrl}

## Pages
${Object.values(pages)
  .map((p) => `- [${p.title}](${site.url}${p.path}): ${p.description}`)
  .join("\n")}

## FAQ
${faqs.map((f) => `- ${f.q} ${f.a}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" } });
}
