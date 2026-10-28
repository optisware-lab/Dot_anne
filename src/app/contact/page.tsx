import { photos, site } from "@/config/site";
import { pages } from "@/config/seo";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, pageGraph } from "@/lib/schema";
import { ContactBooking } from "@/components/ContactBooking";
import { LocationBlock, PageHero } from "@/components/Sections";

export const metadata = pageMetadata("contact");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact & Booking", path: "/contact" },
];

export default function ContactPage() {
  const p = pages.contact;
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.bedroom}
        lede={`Fill in your dates and we will write the WhatsApp message for you, or call the front desk on ${site.phone.display}, day or night.`}
      />
      <section className="section section--low" aria-label="Booking form">
        <div className="wrap">
          <ContactBooking />
        </div>
      </section>
      <section className="section" aria-labelledby="contact-map">
        <div className="wrap">
          <LocationBlock headingId="contact-map" heading="Where to find us" />
        </div>
      </section>
      <JsonLdScript data={pageGraph({ path: p.path, title: p.title, description: p.description, crumbs, type: "ContactPage" })} />
    </>
  );
}
