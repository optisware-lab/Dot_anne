import { confirmedAmenities, photos, shownRooms, site } from "@/config/site";
import { pages } from "@/config/seo";
import { faqs } from "@/content/faq";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, pageGraph, roomNode } from "@/lib/schema";
import { BookButton } from "@/components/Booking";
import { RoomGallery } from "@/components/RoomGallery";
import { IconChat } from "@/components/Icons";
import { whatsappLink } from "@/config/site";
import { CtaBanner, FaqSection, HowToBook, PageHero, RatingAmenities } from "@/components/Sections";

export const metadata = pageMetadata("rooms");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Rooms & Accommodation", path: "/rooms" },
];

export default function RoomsPage() {
  const p = pages.rooms;
  const roomFaqs = faqs.filter((f) => f.topic !== "location");
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.roomBed}
        lede="Quiet, clean rooms with a private bathroom, free Wi-Fi and parking inside the compound, at Golf Estate, Kpone Barrier."
      />

      {shownRooms.map((r) => (
        <section key={r.id} id={r.id} className="section" aria-labelledby={`${r.id}-title`}>
          <div className="wrap split split--top">
            <RoomGallery photos={r.photos} label={r.name} />
            <div>
              <span className="label label--red">{r.tag}</span>
              <h2 id={`${r.id}-title`} style={{ fontSize: "var(--t-xl)", marginTop: "0.5rem" }}>
                {r.name}
              </h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                {r.summary}
              </p>
              <dl className="spec">
                {r.bed && (
                  <div>
                    <dt>Bed</dt>
                    <dd>{r.bed}</dd>
                  </div>
                )}
                {r.sleeps && (
                  <div>
                    <dt>Sleeps</dt>
                    <dd>Up to {r.sleeps} guests</dd>
                  </div>
                )}
                <div>
                  <dt>Bathroom</dt>
                  <dd>Private, with shower</dd>
                </div>
                <div>
                  <dt>Included</dt>
                  <dd>{confirmedAmenities.filter((a) => a.id !== "bathroom").map((a) => a.label).join(" · ")}</dd>
                </div>
                <div>
                  <dt>Rate</dt>
                  <dd>{r.price ?? "Call or WhatsApp for today’s rate"}</dd>
                </div>
              </dl>
              <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                <BookButton room={r.name} className="btn btn--red btn--lg">
                  Book this room
                </BookButton>
                <a
                  className="btn btn--outline btn--lg"
                  href={whatsappLink(`Hello ${site.displayName}, is the ${r.name} available? What is the rate per night?`)}
                  target="_blank"
                  rel="noopener"
                >
                  <IconChat size={18} />
                  Ask on WhatsApp
                </a>
              </div>
              <p style={{ marginTop: "1.5rem", color: "var(--ink-2)" }}>
                Travelling as a group, staying longer, or need a different room? Call the desk on {site.phone.display} and the
                lodge will tell you which rooms are free for your dates.
              </p>
            </div>
          </div>
        </section>
      ))}

      <RatingAmenities />

      <section className="section section--low" aria-label="How to book">
        <div className="wrap split">
          <div className="prose" data-reveal="rise">
            <h2>Booking a room in Tema, the simple way</h2>
            <p>
              Dot Anne Home Lodge takes bookings directly: no booking engine, no card details and no hidden fees on this
              website. Send your dates on WhatsApp or call the front desk, and you get availability and the rate straight
              from the lodge.
            </p>
            <p>
              Because the desk is open 24 hours, late check-ins after a long drive or a late flight into Accra are routine.
              Tell the desk roughly when you will arrive and someone will be ready at the gate.
            </p>
          </div>
          <HowToBook />
        </div>
      </section>

      <FaqSection items={roomFaqs.slice(0, 6)} heading="Questions about rooms & rates" />
      <CtaBanner heading="Ready to book your room?" />

      <JsonLdScript
        data={pageGraph({
          path: p.path,
          title: p.title,
          description: p.description,
          crumbs,
          type: "CollectionPage",
          extra: shownRooms.map((r) => roomNode(r.id)!).filter(Boolean),
        })}
      />
    </>
  );
}
