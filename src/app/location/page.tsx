import { photos, site } from "@/config/site";
import { pages } from "@/config/seo";
import { faqs } from "@/content/faq";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, pageGraph } from "@/lib/schema";
import { BookButton } from "@/components/Booking";
import { CtaBanner, FaqSection, LocationBlock, PageHero } from "@/components/Sections";

export const metadata = pageMetadata("location");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Location & Directions", path: "/location" },
];

export default function LocationPage() {
  const p = pages.location;
  const locFaqs = faqs.filter((f) => f.topic === "location");
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.exterior}
        lede={`473 Golf Estate, Kpone Barrier, off BOST Road, Tema. Plus Code ${site.address.plusCode}. Open 24 hours, so you can arrive at any time.`}
      />

      <section className="section" aria-labelledby="map-title">
        <div className="wrap">
          <LocationBlock headingId="map-title" heading="Address, Plus Code & Map" />
        </div>
      </section>

      <section className="section section--low" aria-labelledby="getting-title">
        <div className="wrap split split--top">
          <div className="prose">
            <h2 id="getting-title">Getting to the lodge</h2>
            <p>
              <strong>By taxi or ride-hailing.</strong> Set the destination to “Dot Anne Home Lodge” or paste the Plus Code{" "}
              {site.address.plusCode} Tema into the app. If the driver is unsure in Golf Estate, call the desk on{" "}
              {site.phone.display} and hand the phone over.
            </p>
            <p>
              <strong>Driving yourself.</strong> Head for Kpone Barrier in Tema. Golf Estate sits just off BOST Road; follow
              Google Maps to plot 473, and park inside the compound.
            </p>
            <p>
              <strong>Arriving late.</strong> The front desk is staffed 24 hours. Send a WhatsApp with your expected arrival time
              and someone will be at the gate.
            </p>
          </div>
          <div className="prose">
            <h2>Nearby neighbourhoods</h2>
            <p>
              The lodge is in the Kpone Barrier area of Tema, in the Kpone-Katamanso district of Greater Accra, inside the
              residential Golf Estate just off BOST Road.
            </p>
            <p>
              It is a convenient base if you are visiting Kpone, Golf City, Tema Community 25 or Ashaiman, or working in the
              Tema industrial and port areas. Not sure how far your appointment is? Call the desk and ask.
            </p>
            <div className="btn-row" style={{ marginTop: "1.5rem" }}>
              <BookButton className="btn btn--red">Book a room near Kpone Barrier</BookButton>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={locFaqs} heading="Directions questions" more />
      <CtaBanner heading="Need help finding us?" />
      <JsonLdScript
        data={pageGraph({ path: p.path, title: p.title, description: p.description, crumbs })}
      />
    </>
  );
}
