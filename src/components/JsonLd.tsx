import { site, confirmedAmenities, rooms } from "@/config/site";

/** LodgingBusiness structured data. Built only from confirmed facts in config/site.ts. */
export function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "BedAndBreakfast"],
    "@id": `${site.url}/#lodge`,
    name: site.name,
    url: site.url,
    telephone: site.phone.tel,
    image: [
      `${site.url}/images/property/exterior-courtyard.jpg`,
      `${site.url}/images/property/bedroom-double.jpg`,
      `${site.url}/images/property/bathroom-shower.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
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
    containsPlace: rooms
      .filter((r) => r.show)
      .map((r) => ({ "@type": "HotelRoom", name: r.name, ...(r.bed ? { bed: r.bed } : {}) })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.tel,
      contactType: "reservations",
      availableLanguage: ["English"],
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  };

  if (site.rating.show) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    };
  }
  if (site.checkIn) data.checkinTime = site.checkIn;
  if (site.checkOut) data.checkoutTime = site.checkOut;
  if (site.email) data.email = site.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
