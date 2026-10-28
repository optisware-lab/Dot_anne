import Image from "next/image";
import { photos, site } from "@/config/site";
import { pages } from "@/config/seo";
import { homeFaqs } from "@/content/faq";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, pageGraph } from "@/lib/schema";
import { BookButton } from "@/components/Booking";
import { LiveClock } from "@/components/LiveClock";
import { IconCar, IconClock, IconPhone, IconPin, IconStar } from "@/components/Icons";
import { CtaBanner, FaqSection, GalleryBento, LocationBlock, Pillars, RatingAmenities, RoomsSection } from "@/components/Sections";

export const metadata = pageMetadata("home");

export default function Home() {
  const p = pages.home;
  return (
    <>
      {/* 1. Hero */}
      <section className="dark hero" aria-labelledby="hero-title">
        <div className="dark__photo">
          <Image src={photos.exterior.src} alt="" fill priority fetchPriority="high" sizes="100vw" quality={70} style={{ objectPosition: "50% 40%" }} />
        </div>
        <div className="hero__body">
          <div className="wrap">
            <div className="hero__copy">
              <span className="place-chip">
                <span className="dot dot--pulse" aria-hidden="true" />
                Golf Estate • Tema • Ghana
              </span>
              <h1 id="hero-title">{p.h1}</h1>
              <p className="hero__lede">
                Experience quiet, home-style lodging off BOST Road with 24/7 service and convenient access to Kpone Barrier.
              </p>
              <div className="hero__ctas">
                <BookButton className="btn btn--red btn--lg">Book Your Stay Now</BookButton>
                <a className="btn btn--ghost-dark btn--lg" href={`tel:${site.phone.tel}`}>
                  <IconPhone size={18} />
                  Front Desk: {site.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-bar">
          <ul className="wrap">
            <li>
              <span className="trust-bar__icon">
                <IconClock size={22} />
              </span>
              <div>
                <span className="label">Front desk</span>
                <strong>
                  <LiveClock />
                </strong>
              </div>
            </li>
            <li>
              <span className="trust-bar__icon">
                <IconPin size={22} />
              </span>
              <div>
                <span className="label">Location</span>
                <strong>Off BOST Road, Kpone Barrier</strong>
              </div>
            </li>
            {site.rating.show && (
              <li>
                <span className="trust-bar__icon">
                  <IconStar size={22} filled />
                </span>
                <a href={site.rating.url} target="_blank" rel="noopener">
                  <span className="label">Guest feedback</span>
                  <strong className="tabular">
                    {site.rating.value} / 5 ({site.rating.count} reviews)
                  </strong>
                </a>
              </li>
            )}
            <li>
              <span className="trust-bar__icon">
                <IconCar size={22} />
              </span>
              <div>
                <span className="label">Parking</span>
                <strong>On-site parking</strong>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Why choose */}
      <Pillars />

      {/* 3. Rooms */}
      <RoomsSection />

      {/* 4. Gallery */}
      <GalleryBento />

      {/* 5. Rating + what's included */}
      <RatingAmenities />

      {/* 6. Location */}
      <section className="section" aria-labelledby="location-title">
        <div className="wrap">
          <LocationBlock />
        </div>
      </section>

      {/* 7. FAQ */}
      <FaqSection items={homeFaqs} />

      {/* 8. Closing CTA */}
      <CtaBanner />

      <JsonLdScript
        data={pageGraph({
          path: p.path,
          title: p.title,
          description: p.description,
        })}
      />
    </>
  );
}
