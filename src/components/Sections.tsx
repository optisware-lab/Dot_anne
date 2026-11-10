import Image from "next/image";
import Link from "next/link";
import { amenities, confirmedAmenities, gallery, photos, shownRooms, site, whatsappLink } from "@/config/site";
import type { Faq } from "@/content/faq";
import { BookButton } from "./Booking";
import { RollNumber } from "./RollNumber";
import {
  IconArrow,
  IconBell,
  IconChat,
  IconCheckCircle,
  IconChevron,
  IconClock,
  IconExternal,
  IconHome,
  IconMap,
  IconPhone,
  IconPin,
  IconRoute,
  IconStar,
  IconStarHalf,
  amenityIcon,
} from "./Icons";

/* ------------------------------------------------------------------ */
/* Inner page hero with breadcrumbs                                    */
/* ------------------------------------------------------------------ */

export function PageHero({
  title,
  lede,
  crumbs,
  photo = photos.hallway,
  children,
}: {
  title: string;
  lede?: string;
  crumbs: { name: string; path: string }[];
  photo?: { src: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="dark page-hero" aria-labelledby="page-title">
      <div className="dark__photo">
        <Image src={photo.src} alt="" fill priority sizes="100vw" quality={60} />
      </div>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i < crumbs.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 id="page-title">{title}</h1>
        {lede && <p>{lede}</p>}
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why choose: four pillars                                            */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    icon: IconClock,
    label: "Front desk",
    title: "Round-the-clock service",
    text: "Open 24 hours a day, every day. Landing late or leaving before sunrise, there is always someone to call and someone to let you in.",
    foot: "Always staffed",
    footClass: "label--red",
  },
  {
    icon: IconRoute,
    label: "Location",
    title: "A convenient Tema location",
    text: "Within the Golf Estate & Rasta Village Enclave, just off BOST Road at Kpone Barrier: a calm base for work or family visits in Tema and Kpone.",
    foot: "Golf Estate & Rasta Village Enclave",
    footClass: "label--royal",
  },
  {
    icon: IconHome,
    label: "Home-style",
    title: "Comfortable, home-style rooms",
    text: "Calm, air-conditioned rooms with fresh white linen and their own bathroom, for a night, a business trip or a short break.",
    foot: "Private bathrooms",
    footClass: "label--red",
  },
  {
    icon: IconChat,
    label: "Direct booking",
    title: "Simple, direct booking",
    text: "No booking engine and no middleman. Call the front desk or send a WhatsApp message and get an answer from the lodge itself.",
    foot: site.phone.local,
    footClass: "label--royal",
  },
];

export function Pillars({ heading = "A Comfortable Stay, Whenever You Need It", as = "h2" }: { heading?: string; as?: "h2" | "h3" }) {
  const H = as;
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <H id="why-title" data-reveal="mask">
              {heading}
            </H>
          </div>
          <p>
            A guest house in a quiet residential estate, run with the care of a home, for business travellers, late arrivals,
            couples and anyone needing a dependable room in Tema.
          </p>
        </div>
        <div className="grid-4" data-reveal="stagger">
          {pillars.map((p) => (
            <article key={p.title} className="card card--hover pillar">
              <div>
                <span className="pillar__icon">
                  <p.icon size={24} />
                </span>
                <span className="label">{p.label}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
              <div className="pillar__foot">
                <span className={`label ${p.footClass}`}>{p.foot}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Rooms                                                               */
/* ------------------------------------------------------------------ */

export function RoomCard({ roomId, headingLevel = "h3" }: { roomId: string; headingLevel?: "h2" | "h3" }) {
  const r = shownRooms.find((x) => x.id === roomId)!;
  const H = headingLevel;
  const confirmed = new Set<string>(confirmedAmenities.map((a) => a.id));
  const features = [
    ...(r.bed ? [{ key: "bed", label: r.bed, Icon: IconHome }] : []),
    ...r.features
      .filter((f) => confirmed.has(f))
      .map((f) => ({ key: f, label: amenities.find((a) => a.id === f)!.label, Icon: amenityIcon[f] })),
  ];
  return (
    <article className="card card--hover room-card" id={r.id}>
      <div className="room-card__media" data-reveal="shutter">
        <Image src={r.photos[0].src} alt={r.photos[0].alt} fill sizes="(min-width: 960px) 55vw, 100vw" />
        {r.tag && <span className="tag tag--red">{r.tag}</span>}
      </div>
      <div className="room-card__body">
        <H>{r.name}</H>
        <p>{r.summary}</p>
        <ul className="feature-grid">
          {features.map(({ key, label, Icon }) => (
            <li key={key}>
              <Icon size={16} />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="room-card__foot">
        <div className="price-row">
          <span className="label">Rate</span>
          <strong>{r.price ?? "Ask for today’s rate"}</strong>
        </div>
        <BookButton room={r.name} className="btn btn--navy btn--block">
          Inquire about this room
        </BookButton>
      </div>
    </article>
  );
}

export function HowToBook() {
  return (
    <aside className="card steps">
      <h3>Booking takes two minutes</h3>
      <p>No sign-up, no card, no middleman. You talk to the lodge directly.</p>
      <ol data-reveal="stagger">
        <li>
          <div>
            <strong>Send your dates</strong>
            <span>Use the booking form, WhatsApp or a call to {site.phone.local}.</span>
          </div>
        </li>
        <li>
          <div>
            <strong>Get today’s rate</strong>
            <span>The front desk confirms availability and the price for your stay.</span>
          </div>
        </li>
        <li>
          <div>
            <strong>Arrive at any hour</strong>
            <span>The desk is open 24/7, so late arrivals and early departures are fine.</span>
          </div>
        </li>
      </ol>
      <div className="steps__actions">
        <BookButton className="btn btn--red btn--block">Book your stay</BookButton>
        <a className="btn btn--ghost-dark btn--block" href={whatsappLink()} target="_blank" rel="noopener">
          <IconChat size={18} />
          WhatsApp the desk
        </a>
      </div>
    </aside>
  );
}

export function RoomsSection({ more = true }: { more?: boolean }) {
  return (
    <section className="section section--low" aria-labelledby="rooms-title">
      <div className="wrap">
        <div className="sec-head sec-head--plain">
          <div>
            <h2 id="rooms-title" data-reveal="mask">
              Rooms &amp; Accommodation
            </h2>
            <p className="lede" style={{ marginTop: "0.5rem" }}>
              Clean, quiet rooms with a private bathroom and free Wi-Fi. Rates depend on your dates and length of stay;
              the front desk confirms them directly.
            </p>
          </div>
        </div>
        <div className="room-feature">
          {shownRooms.map((r) => (
            <RoomCard key={r.id} roomId={r.id} />
          ))}
          <HowToBook />
        </div>
        {more && (
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="text-link" href="/rooms">
              Room details, photos and what&rsquo;s included <IconArrow size={16} />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery bento                                                       */
/* ------------------------------------------------------------------ */

export function GalleryBento({ heading = "Visual Lodge Gallery", link = true }: { heading?: string; link?: boolean }) {
  const [a, b, ...rest] = gallery;
  const cells = [
    { p: a, cls: "shot--a", sizes: "(min-width: 760px) 66vw, 100vw" },
    { p: b, cls: "shot--b", sizes: "(min-width: 760px) 33vw, 100vw" },
    ...rest.slice(0, 3).map((p) => ({ p, cls: "shot--c", sizes: "(min-width: 760px) 33vw, 100vw" })),
  ];
  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 id="gallery-title" data-reveal="mask">
              {heading}
            </h2>
          </div>
          <p>Every photo was taken at the lodge: the building, the reception, the guest rooms and the private bathrooms.</p>
        </div>
        <div className="bento">
          {cells.map(({ p, cls, sizes }) => (
            <figure key={p.src} className={`shot ${cls}`} data-reveal="shutter">
              <Image src={p.src} alt={p.alt} fill sizes={sizes} />
              <figcaption>
                <span className="label">{p.place}</span>
                <strong>{p.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        {link && (
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="text-link" href="/gallery">
              See all photos <IconArrow size={16} />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Rating + what's included                                            */
/* ------------------------------------------------------------------ */

export function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const total = 5;
  return (
    <span className="stars" aria-hidden="true">
      {Array.from({ length: total }, (_, i) =>
        i < full ? <IconStar key={i} size={20} filled /> : i === full && half ? <IconStarHalf key={i} size={20} /> : <IconStar key={i} size={20} />,
      )}
    </span>
  );
}

export function RatingAmenities() {
  return (
    <section className="section section--high" aria-labelledby="rating-title">
      <div className="wrap rating-layout">
        <div>
          <span className="label label--red">Rated by guests on {site.rating.source}</span>
          <h2 id="rating-title" data-reveal="mask">
            Guest rating &amp; what&rsquo;s included
          </h2>
          <p className="lede">
            Guests rate Dot Anne Home Lodge {site.rating.value} out of 5 across {site.rating.count} reviews on Google Maps.
            Read them in full before you book.
          </p>
          {site.rating.show && (
            <div className="card score" data-reveal="roll">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <RollNumber className="score__num tabular" value={site.rating.value.toFixed(1)} />
                <div>
                  <Stars value={site.rating.value} />
                  <span className="label" style={{ display: "block", marginTop: 4 }}>
                    Out of 5 · {site.rating.source}
                  </span>
                </div>
              </div>
              <div className="score__count">
                <strong className="tabular">
                  <RollNumber value={String(site.rating.count)} />
                </strong>
                <span className="label">Reviews</span>
              </div>
            </div>
          )}
          <p style={{ marginTop: "1rem" }}>
            <a className="text-link" href={site.rating.url} target="_blank" rel="noopener">
              Read the reviews on Google <IconExternal size={14} />
            </a>
          </p>
        </div>
        <div>
          <h3 className="included-title">Amenities &amp; services</h3>
          <div className="grid-3 amenity-grid-3" data-reveal="stagger">
            {confirmedAmenities.map((a) => {
              const Icon = amenityIcon[a.id];
              return (
                <div key={a.id} className="card amenity">
                  <span className="pillar__icon">
                    <Icon size={24} />
                  </span>
                  <h4>{a.label}</h4>
                  <p>{a.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Location                                                            */
/* ------------------------------------------------------------------ */

export function LocationBlock({ headingId = "location-title", heading = "Location & Access Guide", as = "h2" }: { headingId?: string; heading?: string; as?: "h2" | "h1" }) {
  const H = as;
  return (
    <div className="location-layout">
      <div>
        <H id={headingId} data-reveal="mask">
          {heading}
        </H>
        <p className="lede">Within the Golf Estate &amp; Rasta Village Enclave, reached from Kpone Barrier and just off BOST Road.</p>

        <div className="address-card">
          <span className="label">Lodge address</span>
          <address>Golf Estate &amp; Rasta Village Enclave, Kpone Barrier, off BOST Road, Tema, Greater Accra, Ghana</address>
          <div className="address-card__gps">
            <IconPin size={20} />
            <div>
              <span className="label">GhanaPost GPS address</span>
              <strong className="tabular">{site.address.gps}</strong>
            </div>
          </div>
          <p className="address-card__po">
            <span className="label">Postal address</span> {site.address.poBox}
          </p>
        </div>

        <ul className="checks" data-reveal="stagger">
          <li>
            <IconCheckCircle size={18} />
            <span>Head for Kpone Barrier in Tema; the Golf Estate &amp; Rasta Village Enclave sits just off BOST Road.</span>
          </li>
          <li>
            <IconCheckCircle size={18} />
            <span>Give your taxi or ride-hailing driver the GPS address {site.address.gps}, or search “Dot Anne Home Lodge” in Google Maps.</span>
          </li>
          <li>
            <IconCheckCircle size={18} />
            <span>Call the desk on {site.phone.local} at any hour and we will guide you or your driver in.</span>
          </li>
        </ul>

        <div className="btn-row">
          <a className="btn btn--navy" href={site.directionsUrl} target="_blank" rel="noopener">
            <IconMap size={18} />
            Get directions
          </a>
          <a className="btn btn--soft" href={`tel:${site.phone.tel}`}>
            <IconPhone size={18} />
            Call for directions
          </a>
        </div>
      </div>

      <div className="map" data-reveal="shutter">
        <a className="map__fallback" href={site.mapsUrl} target="_blank" rel="noopener">
          <IconPin size={28} />
          Open the map in Google Maps
        </a>
        <iframe
          title="Map showing Dot Anne Home Lodge in the Golf Estate & Rasta Village Enclave, Kpone Barrier, Tema"
          src={site.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map__pin">
          <span className="map__pin-icon">
            <IconBell size={18} />
          </span>
          <div>
            <strong>Dot Anne Home Lodge</strong>
            <span>Golf Estate &amp; Rasta Village, Tema</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq" data-reveal="stagger">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <IconChevron size={22} />
          </summary>
          <div>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ items, heading = "Frequently Asked Questions", more = true }: { items: Faq[]; heading?: string; more?: boolean }) {
  return (
    <section className="section section--low" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <div>
            <h2 id="faq-title" data-reveal="mask">
              {heading}
            </h2>
            <p className="lede" style={{ marginTop: "0.5rem" }}>
              Check-in, rates, parking and directions, answered.
            </p>
          </div>
        </div>
        <FaqList items={items} />
        {more && (
          <p className="faq__more">
            <Link className="text-link" href="/faq">
              All questions &amp; answers <IconArrow size={16} />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                              */
/* ------------------------------------------------------------------ */

export function CtaBanner({ heading = "Planning a stay in Tema?" }: { heading?: string }) {
  return (
    <section className="dark cta" aria-labelledby="cta-title">
      <span className="cta__glow cta__glow--a" aria-hidden="true" />
      <span className="cta__glow cta__glow--b" aria-hidden="true" />
      <div className="wrap">
        <h2 id="cta-title" data-reveal="mask">
          {heading}
        </h2>
        <p>Talk to the front desk now to check availability, ask a question or arrange a late arrival.</p>
        <div className="hero__ctas">
          <BookButton className="btn btn--red btn--lg">Book your stay</BookButton>
          <a className="btn btn--ghost-dark btn--lg" href={`tel:${site.phone.tel}`}>
            <IconPhone size={18} />
            Call {site.phone.display}
          </a>
          <a className="btn btn--light btn--lg" href={whatsappLink()} target="_blank" rel="noopener">
            <IconChat size={18} />
            WhatsApp us
          </a>
        </div>
        <div className="cta__meta">
          <span>
            <IconPin size={16} /> Golf Estate &amp; Rasta Village, Tema
          </span>
          <span>
            <IconClock size={16} /> Desk open 24/7
          </span>
          {site.rating.show && (
            <span>
              <IconStar size={16} /> {site.rating.value} / 5 on Google
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
