import Image from "next/image";
import { Header } from "@/components/Header";
import { LiveClock } from "@/components/LiveClock";
import { Reveal } from "@/components/Reveal";
import { RoomGallery } from "@/components/RoomGallery";
import { BookingSlip } from "@/components/BookingSlip";
import { CopyButton } from "@/components/CopyButton";
import { Faq, faqs } from "@/components/Faq";
import { ActionBar } from "@/components/ActionBar";
import {
  IconArrow,
  IconBell,
  IconChat,
  IconClock,
  IconExternal,
  IconPhone,
  IconPin,
  IconStar,
} from "@/components/Icons";
import { amenities, confirmedAmenities, photos, rooms, site, whatsappLink } from "@/config/site";

export default function Home() {
  const shownRooms = rooms.filter((r) => r.show);
  const confirmed = new Set<string>(confirmedAmenities.map((a) => a.id));
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <Reveal />

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero__photo">
            <Image
              src={photos.exterior.src}
              alt={photos.exterior.alt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={80}
            />
          </div>

          <div className="hero__inner wrap">
            <div className="title-block">
              <div className="title-block__main">
                <h1 id="hero-title">Comfortable, Safe &amp; Affordable Accommodation in Golf Estate, Tema</h1>
                <p className="title-block__lede">
                  Experience quiet, home-style lodging off BOST Road with 24/7 service and convenient access to Kpone Barrier.
                </p>
                <p className="title-block__status">
                  <LiveClock />
                </p>
                <div className="title-block__actions" id="hero-actions">
                  <a className="btn btn--gold btn--lg" href="#contact">
                    Book Your Stay Now
                    <IconArrow size={18} />
                  </a>
                  <a className="btn btn--line-light btn--lg" href={`tel:${site.phone.tel}`}>
                    <IconPhone size={18} />
                    Call Front Desk
                  </a>
                </div>
              </div>
              <div className="title-block__cells">
                <div>
                  <span className="cell-label">Plot</span>
                  <span className="cell-value cell-value--big tabular">{site.address.plot}</span>
                </div>
                <div>
                  <span className="cell-label">Estate</span>
                  <span className="cell-value">Golf Estate, Kpone Barrier, Tema</span>
                </div>
                <div className="title-block__desk">
                  <span className="cell-label">Front desk</span>
                  <span className="cell-value">
                    <LiveClock />
                    <br />
                    <a href={`tel:${site.phone.tel}`} className="tabular" style={{ color: "inherit" }}>
                      {site.phone.display}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="hero__credit">Photographed at the lodge</p>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <section className="info-strip" aria-label="Quick information">
          <ul className="wrap">
            <li>
              <IconClock size={26} />
              <div>
                <strong>{site.hours.short}</strong>
                <span>Arrive at any hour</span>
              </div>
            </li>
            <li>
              <IconPin size={26} />
              <div>
                <strong>Golf Estate, Tema</strong>
                <span>Off BOST Road, Kpone Barrier</span>
              </div>
            </li>
            {site.rating.show && (
              <li>
                <IconStar size={26} />
                <a href={site.rating.url} target="_blank" rel="noopener">
                  <strong className="tabular">{site.rating.value.toFixed(1)} / 5 rating</strong>
                  <span>
                    {site.rating.count}+ reviews on {site.rating.source}
                  </span>
                </a>
              </li>
            )}
            <li>
              <IconChat size={26} />
              <a href={whatsappLink()} target="_blank" rel="noopener">
                <strong>Call or WhatsApp</strong>
                <span className="tabular">{site.phone.display}</span>
              </a>
            </li>
          </ul>
        </section>

        {/* ---------------- Why choose ---------------- */}
        <section className="section" aria-labelledby="why-title">
          <div className="wrap why">
            <div className="why__intro">
              <h2 id="why-title">A Comfortable Stay, Whenever You Need It</h2>
              <p>
                A small guest house in a quiet residential estate, run like a home. Clean rooms, a private bathroom, and a
                person at the desk whenever you arrive.
              </p>
            </div>

            <ul className="legend">
              <li data-reveal="fade">
                <span className="legend__mark"><IconClock size={24} /></span>
                <div>
                  <h3>Round-the-clock service</h3>
                  <p>
                    Open 24 hours a day, every day. Landing late or leaving before sunrise, there is always someone to
                    call and someone to let you in.
                  </p>
                </div>
              </li>
              <li data-reveal="fade">
                <span className="legend__mark"><IconPin size={24} /></span>
                <div>
                  <h3>A convenient Tema location</h3>
                  <p>
                    At Golf Estate, just off BOST Road near Kpone Barrier, for work, family visits or an overnight stop
                    in the Tema and Kpone area.
                  </p>
                </div>
              </li>
              <li data-reveal="fade">
                <span className="legend__mark"><IconBell size={24} /></span>
                <div>
                  <h3>Comfortable, home-style hospitality</h3>
                  <p>
                    A calm compound with a paved courtyard, palms and flower beds. Simple, restful rooms for a night, a
                    business trip or a short break.
                  </p>
                </div>
              </li>
              <li data-reveal="fade">
                <span className="legend__mark"><IconChat size={24} /></span>
                <div>
                  <h3>Simple, direct booking</h3>
                  <p>
                    No booking engine and no middleman. Call the front desk or send a WhatsApp message and get an answer
                    from the lodge itself.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- Rooms ---------------- */}
        <section id="rooms" className="section section--sheet" aria-labelledby="rooms-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="rooms-title">Rooms &amp; Accommodation</h2>
              <p>Every photo here was taken at the lodge. Ask the front desk for today&rsquo;s availability and rate.</p>
            </div>

            {shownRooms.map((room) => (
              <article key={room.id} className="room" aria-labelledby={`${room.id}-name`}>
                <RoomGallery photos={room.photos} label={room.name} />
                <div className="room__spec">
                  <h3 id={`${room.id}-name`}>{room.name}</h3>
                  <p>{room.summary}</p>
                  <dl className="spec-table">
                    {room.bed && (
                      <div>
                        <dt className="cell-label">Bed</dt>
                        <dd>{room.bed}</dd>
                      </div>
                    )}
                    {room.sleeps && (
                      <div>
                        <dt className="cell-label">Sleeps</dt>
                        <dd>Up to {room.sleeps} guests</dd>
                      </div>
                    )}
                    <div>
                      <dt className="cell-label">Bathroom</dt>
                      <dd>Private, with shower</dd>
                    </div>
                    <div>
                      <dt className="cell-label">Also</dt>
                      <dd>
                        {room.features
                          .filter((f) => confirmed.has(f) && f !== "bathroom")
                          .map((f) => amenities.find((x) => x.id === f)!.label)
                          .join(" · ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="cell-label">Rate</dt>
                      <dd>{room.price ?? "Call or WhatsApp for today’s rate"}</dd>
                    </div>
                  </dl>
                  <div className="room__actions">
                    <a
                      className="btn btn--gold"
                      href={whatsappLink(`Hello ${site.name}, is the ${room.name} available? What is the rate per night?`)}
                      target="_blank"
                      rel="noopener"
                    >
                      <IconChat size={18} />
                      Ask about this room
                    </a>
                    <a className="btn btn--line" href={`tel:${site.phone.tel}`}>
                      <IconPhone size={18} />
                      Call
                    </a>
                  </div>
                  <p className="room__more">
                    Travelling as a group or staying longer? Call the desk and the lodge will tell you which rooms are
                    free for your dates.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- Amenities ---------------- */}
        <section id="amenities" className="section" aria-labelledby="amenities-title">
          <div className="wrap amenities">
            <figure className="plate amenities__photo" data-reveal>
              <Image src={photos.lounge.src} alt={photos.lounge.alt} fill sizes="(min-width: 960px) 45vw, 100vw" />
              <figcaption className="plate__caption">
                <span>Guest lounge</span>
                <span>Main house</span>
              </figcaption>
            </figure>

            <div className="amenities__list">
              <h2 id="amenities-title">What&rsquo;s included</h2>
              <p>The basics a good night needs, confirmed by the lodge.</p>
              <dl className="schedule">
                {confirmedAmenities.map((a) => (
                  <div key={a.id}>
                    <dt className="cell-label">{a.label}</dt>
                    <dd>{a.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------------- About ---------------- */}
        <section id="about" className="section section--sheet" aria-labelledby="about-title">
          <div className="wrap about">
            <div className="about__text">
              <h2 id="about-title">A home-style lodge in Golf Estate</h2>
              <p>
                Dot Anne Home Lodge is a small guest house at No. 473, Golf Estate, in the Kpone Barrier area of Tema.
                The rooms sit around a paved courtyard with palms and flower beds, behind the compound gate and away
                from the main road.
              </p>
              <p>
                We keep it simple: a clean room, your own bathroom, Wi-Fi, a safe place to park and a front desk that
                answers at any hour. Guests come for work in Tema and Kpone, to visit family, or to rest before an early
                start.
              </p>
              <p>
                <a className="text-link" href="#contact">
                  Ask about your dates <IconArrow size={16} />
                </a>
              </p>
            </div>
            <figure className="plate about__photo" data-reveal>
              <Image
                src={photos.garden.src}
                alt={photos.garden.alt}
                fill
                sizes="(min-width: 960px) 42vw, 100vw"
                style={{ objectPosition: "50% 60%" }}
              />
              <figcaption className="plate__caption">
                <span>Flower beds</span>
                <span>Room wing</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------- Location ---------------- */}
        <section id="location" className="section location" aria-labelledby="location-title">
          <div className="wrap location__grid">
            <div className="location__info">
              <h2 id="location-title">Find us at No.&nbsp;473, Golf&nbsp;Estate</h2>
              <p className="location__lede">
                Off BOST Road in the Kpone Barrier area of Tema. If you are coming by taxi or ride-hailing, send the
                driver the Plus Code or call the desk and we will guide you in.
              </p>

              <dl className="address-block">
                <div>
                  <dt className="cell-label">Address</dt>
                  <dd>
                    473 Golf Estate, Kpone Barrier, off BOST Road, Tema, Greater Accra, Ghana
                  </dd>
                </div>
                <div>
                  <dt className="cell-label">Plus Code</dt>
                  <dd>
                    <span className="tabular">{site.address.plusCode} BOST Road, Tema</span>
                    <CopyButton value={`${site.address.plusCode} Tema`} label="Copy" />
                  </dd>
                </div>
                <div>
                  <dt className="cell-label">Front desk</dt>
                  <dd>
                    <a href={`tel:${site.phone.tel}`} className="tabular">{site.phone.display}</a>
                    <span>{site.hours.label}</span>
                  </dd>
                </div>
              </dl>

              <div className="location__actions">
                <a className="btn btn--gold" href={site.directionsUrl} target="_blank" rel="noopener">
                  Get directions
                  <IconArrow size={18} />
                </a>
                <a className="btn btn--line-light" href={site.mapsUrl} target="_blank" rel="noopener">
                  Open in Google Maps
                  <IconExternal size={16} />
                </a>
              </div>
            </div>

            <div className="course" data-reveal="draw">
              <div className="course__sheet">
                <svg viewBox="0 0 560 400" role="img" aria-labelledby="course-title course-desc">
                  <title id="course-title">How to reach the lodge</title>
                  <desc id="course-desc">
                    Schematic route: from the Kpone Barrier junction, along BOST Road, into Golf Estate, to plot 473.
                  </desc>
                  <g className="north" transform="translate(40 44)">
                    <path d="M0 -18 L7 6 L0 1 L-7 6 Z" />
                    <text y="24">N</text>
                  </g>

                  <path className="estate" d="M300 40 H530 V250 H360 L300 200 Z" />
                  <text className="map-label" x="516" y="236" textAnchor="end">Golf Estate</text>

                  {/* Roads: dark edge under, light road over */}
                  <path className="road road--main road--edge" d="M-10 340 C 140 336, 380 352, 570 330" />
                  <path className="road road--main" d="M-10 340 C 140 336, 380 352, 570 330" />
                  <path className="road road--side road--edge" d="M170 338 C 200 270, 250 230, 320 196 S 430 120, 470 70" />
                  <path className="road road--side" d="M170 338 C 200 270, 250 230, 320 196 S 430 120, 470 70" />
                  <path className="road road--side road--edge" d="M352 178 L 420 150" />
                  <path className="road road--side" d="M352 178 L 420 150" />

                  <text className="map-label map-label--road" transform="translate(206 248) rotate(-46)">BOST Road</text>
                  <text className="map-label" x="60" y="376">Kpone Barrier</text>

                  <path
                    className="route"
                    pathLength={1}
                    d="M170 338 C 200 270, 250 230, 320 196 L 352 178 L 420 150"
                  />

                  <g className="ctrl">
                    <circle cx="170" cy="338" r="13" />
                    <text x="170" y="338">1</text>
                  </g>
                  <g className="ctrl">
                    <circle cx="242" cy="244" r="13" />
                    <text x="242" y="244">2</text>
                  </g>
                  <g className="ctrl">
                    <circle cx="340" cy="186" r="13" />
                    <text x="340" y="186">3</text>
                  </g>
                  <g className="ctrl ctrl--home">
                    <circle cx="428" cy="146" r="17" />
                    <text x="428" y="146">473</text>
                  </g>
                  <text className="map-label" x="452" y="126" style={{ fill: "var(--gold-300)" }}>Dot Anne</text>
                </svg>
                <div className="course__meta">
                  <span className="cell-label">Schematic · not to scale</span>
                  <span className="cell-label">{site.address.plusCode}</span>
                </div>
              </div>

              <ol className="controls" aria-label="Directions">
                <li>
                  <span className="controls__num">1</span>
                  <strong>Kpone Barrier</strong>
                  <span>The well-known junction closest to the lodge.</span>
                </li>
                <li>
                  <span className="controls__num">2</span>
                  <strong>BOST Road</strong>
                  <span>Golf Estate sits just off this road.</span>
                </li>
                <li>
                  <span className="controls__num">3</span>
                  <strong>Golf Estate</strong>
                  <span>Ask for No. 473, or call the desk to be guided.</span>
                </li>
                <li>
                  <span className="controls__num">4</span>
                  <strong>No. 473</strong>
                  <span>Dot Anne Home Lodge. Plus Code {site.address.plusCode}.</span>
                </li>
              </ol>
            </div>

            <div className="map-frame">
              <a className="map-frame__fallback" href={site.mapsUrl} target="_blank" rel="noopener">
                <IconPin size={28} />
                <span>Open the map in Google Maps</span>
                <span className="cell-label">{site.address.plusCode} · Tema</span>
              </a>
              <iframe
                title="Map showing Dot Anne Home Lodge in Golf Estate, Tema"
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ---------------- Booking ---------------- */}
        <section id="contact" className="section section--sheet" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="booking-head">
              <div>
                <h2 id="contact-title">Book your stay</h2>
                <p>
                  Fill in your dates and we&rsquo;ll write the WhatsApp message for you. The lodge replies with
                  availability and the rate. Prefer to talk? Call the front desk, day or night.
                </p>
              </div>
              <div className="direct">
                <span className="cell-label">Front desk · 24 hours</span>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                <a href={whatsappLink()} target="_blank" rel="noopener" className="text-link" style={{ fontFamily: "var(--ff-sans)", fontSize: "1rem" }}>
                  <IconChat size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <BookingSlip />
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="section" aria-labelledby="faq-title">
          <div className="wrap faq">
            <div className="faq__head">
              <h2 id="faq-title">Good to know</h2>
            </div>
            <Faq />
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="#top" className="wordmark" aria-label={`${site.name}, back to top`}>
                <span className="wordmark__name">Dot Anne</span>
                <span className="wordmark__sub">Home Lodge · Tema</span>
              </a>
              <p className="footer-tag">Quiet, home-style rooms in Golf Estate, Tema. Open 24 hours, every day.</p>
            </div>
            <div>
              <h2>Visit</h2>
              <address>
                473 Golf Estate, Kpone Barrier
                <br />
                off BOST Road, Tema
                <br />
                Greater Accra, Ghana
                <br />
                Plus Code {site.address.plusCode}
              </address>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li><a href={`tel:${site.phone.tel}`} className="tabular">{site.phone.display}</a></li>
                <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href={site.directionsUrl} target="_blank" rel="noopener">Directions</a></li>
                {site.rating.show && <li><a href={site.rating.url} target="_blank" rel="noopener">Google reviews</a></li>}
              </ul>
            </div>
            <div>
              <h2>Explore</h2>
              <ul>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#amenities">Amenities</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#contact">Book</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span>© {year} {site.name}. All photos taken at the lodge.</span>
            <span>{site.hours.label}</span>
          </div>
        </div>
      </footer>

      {/* Mobile: booking always one tap away */}
      <ActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
