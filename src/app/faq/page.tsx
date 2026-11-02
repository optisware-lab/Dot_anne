import { photos } from "@/config/site";
import { pages } from "@/config/seo";
import { faqs } from "@/content/faq";
import { pageMetadata } from "@/lib/meta";
import { JsonLdScript, faqNode, pageGraph } from "@/lib/schema";
import { CtaBanner, FaqList, PageHero } from "@/components/Sections";

export const metadata = pageMetadata("faq");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const groups = [
  { topic: "booking", title: "Booking & rates" },
  { topic: "stay", title: "Your stay" },
  { topic: "location", title: "Location & directions" },
] as const;

export default function FaqPage() {
  const p = pages.faq;
  return (
    <>
      <PageHero
        title={p.h1}
        crumbs={crumbs}
        photo={photos.roomGold}
        lede="Booking, late check-in, rates, parking, Wi-Fi and directions to Dot Anne Home Lodge at Kpone Barrier, Tema."
      />
      {groups.map((g, i) => (
        <section key={g.topic} className={`section${i % 2 ? " section--low" : ""}`} aria-labelledby={`faq-${g.topic}`}>
          <div className="wrap">
            <div className="sec-head sec-head--center" style={{ marginBottom: "1.5rem" }}>
              <div>
                <h2 id={`faq-${g.topic}`} data-reveal="mask">
                  {g.title}
                </h2>
              </div>
            </div>
            <FaqList items={faqs.filter((f) => f.topic === g.topic)} />
          </div>
        </section>
      ))}
      <CtaBanner heading="Still have a question?" />
      <JsonLdScript data={pageGraph({ path: p.path, title: p.title, description: p.description, crumbs, extra: [faqNode(faqs, p.path)] })} />
    </>
  );
}
