import Image from "next/image";
import Link from "next/link";
import { photos, site } from "@/config/site";
import { pages } from "@/config/seo";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, pageGraph } from "@/lib/schema";
import { IconArrow } from "@/components/Icons";
import { CtaBanner, PageHero, Pillars, RatingAmenities } from "@/components/Sections";

export const metadata = pageMetadata("about");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

export default function AboutPage() {
  const p = pages.about;
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.lounge}
        lede="A small, home-style guest house in the quiet Golf Estate at Kpone Barrier, Tema, with a front desk that answers at any hour."
      />

      <section className="section" aria-labelledby="story-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="story-title" data-reveal="mask">
              A home-style lodge in Golf Estate
            </h2>
            <p>
              Dot Anne Home Lodge is a guest house and bed &amp; breakfast at No. 473, Golf Estate, in the Kpone Barrier area of
              Tema, Greater Accra. The rooms sit around a paved courtyard with palms and flower beds, behind the compound gate
              and away from the main road.
            </p>
            <p>
              We keep it simple: a clean room, your own bathroom with a shower, free Wi-Fi, a place to park inside the
              compound, and a front desk that answers the phone and the gate 24 hours a day.
            </p>
            <p>
              Guests come for work in Tema and Kpone, to visit family, or to rest before an early start. You book by talking
              to the lodge directly, by phone or WhatsApp on {site.phone.display}.
            </p>
            <p>
              <Link className="text-link" href="/rooms">
                See the rooms <IconArrow size={16} />
              </Link>
            </p>
          </div>
          <figure className="photo" data-reveal="shutter">
            <Image src={photos.exterior.src} alt={photos.exterior.alt} fill sizes="(min-width: 960px) 50vw, 100vw" />
            <figcaption>{photos.exterior.caption}</figcaption>
          </figure>
        </div>
      </section>

      <Pillars heading="Why guests choose Dot Anne" />
      <RatingAmenities />
      <CtaBanner />
      <JsonLdScript data={pageGraph({ path: p.path, title: p.title, description: p.description, crumbs, type: "AboutPage" })} />
    </>
  );
}
