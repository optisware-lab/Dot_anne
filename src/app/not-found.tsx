import Link from "next/link";
import { site } from "@/config/site";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <span className="label label--red">404</span>
      <h1>This page isn&rsquo;t here</h1>
      <p className="lede">The link may be old. Here is where you can go instead.</p>
      <div className="btn-row" style={{ justifyContent: "center" }}>
        <Link className="btn btn--red" href="/">
          Go to the home page
        </Link>
        <Link className="btn btn--outline" href="/rooms">
          See the rooms
        </Link>
        <a className="btn btn--soft" href={`tel:${site.phone.tel}`}>
          Call {site.phone.local}
        </a>
      </div>
    </section>
  );
}
