import Image from "next/image";
import { gallery, photos } from "@/config/site";
import { pages } from "@/config/seo";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, galleryNode, pageGraph } from "@/lib/schema";
import { CtaBanner, PageHero } from "@/components/Sections";

export const metadata = pageMetadata("gallery");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

const layout = ["shot--a", "shot--b", "shot--c", "shot--c", "shot--c", "shot--b"];

export default function GalleryPage() {
  const p = pages.gallery;
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.garden}
        lede="Real photos of Dot Anne Home Lodge in Golf Estate, Tema: the courtyard and building, a guest room, the lounge and the private bathrooms."
      />
      <section className="section" aria-label="Photos">
        <div className="wrap">
          <div className="bento">
            {gallery.map((ph, i) => (
              <figure key={ph.src} data-reveal="shutter" className={`shot ${layout[i] ?? "shot--c"}`} style={i === 5 ? { gridColumn: "span 12", height: "auto", aspectRatio: "21 / 9" } : undefined}>
                <Image src={ph.src} alt={ph.alt} fill sizes={i === 0 || i === 5 ? "(min-width: 760px) 66vw, 100vw" : "(min-width: 760px) 33vw, 100vw"} priority={i < 2} />
                <figcaption>
                  <span className="label">{ph.place}</span>
                  <strong>{ph.caption}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--ink-2)", fontSize: "0.875rem" }}>
            All photos were taken at the lodge. Rooms may vary slightly; ask the front desk for details about the room you book.
          </p>
        </div>
      </section>
      <CtaBanner heading="Like what you see?" />
      <JsonLdScript data={pageGraph({ path: p.path, title: p.title, description: p.description, crumbs, extra: [galleryNode()] })} />
    </>
  );
}
