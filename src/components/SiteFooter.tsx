import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo logo--footer" aria-label={`${site.displayName}, home`}>
              <Image src="/images/logo/logo-full.png" alt={site.displayName} width={1000} height={759} sizes="220px" />
            </Link>
            <p style={{ marginTop: "1rem", maxWidth: "34ch" }}>
              Quiet, home-style guest house and bed &amp; breakfast in the Golf Estate &amp; Rasta Village Enclave, Kpone Barrier, Tema, Ghana.
            </p>
            <span className="open-line">
              <span className="dot dot--live dot--pulse" aria-hidden="true" />
              Reception open 24/7 · 365 days
            </span>
          </div>

          <div>
            <h2>Location &amp; Access</h2>
            <address>
              Golf Estate &amp;
              <br />
              Rasta Village Enclave
              <br />
              Kpone Barrier, off BOST Road
              <br />
              Tema, Greater Accra, Ghana
              <br />
              <strong style={{ color: "var(--ink)" }}>GPS: {site.address.gps}</strong>
            </address>
            <p style={{ marginTop: "0.75rem" }}>
              <Link className="text-link" href="/location">
                Directions &amp; map
              </Link>
            </p>
          </div>

          <div>
            <h2>Direct Inquiries</h2>
            <ul>
              <li>
                <a href={`tel:${site.phone.tel}`} className="tabular">
                  Tel: {site.phone.display}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  WhatsApp: {site.phone.display}
                </a>
              </li>
              {site.rating.show && (
                <li>
                  <a href={site.rating.url} target="_blank" rel="noopener">
                    Google reviews ({site.rating.value} / 5)
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact">Book a room</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Explore</h2>
            <ul>
              <li>
                <Link href="/rooms">Rooms in Tema</Link>
              </li>
              <li>
                <Link href="/gallery">Photo gallery</Link>
              </li>
              <li>
                <Link href="/about">About the lodge</Link>
              </li>
              <li>
                <Link href="/location">Lodge in Golf Estate &amp; Rasta Village</Link>
              </li>
              <li>
                <Link href="/faq">Questions &amp; answers</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>
            © {year} {site.displayName}, Tema, Ghana. All photos taken at the lodge.
          </span>
          <nav aria-label="Footer">
            <Link href="/faq">Questions &amp; answers</Link>
            <Link href="/location">Route map</Link>
            <Link href="/contact">Book a room</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
