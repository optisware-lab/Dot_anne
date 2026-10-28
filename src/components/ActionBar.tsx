"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { useBooking } from "./Booking";
import { IconCalendar, IconChat, IconPhone } from "./Icons";

/** Phone-only Call / WhatsApp / Book bar. Slides in once the page's first screen has scrolled away. */
export function ActionBar() {
  const [show, setShow] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`action-bar${show ? " is-shown" : ""}`} aria-label="Quick contact" aria-hidden={!show}>
      <a className="btn btn--outline" href={`tel:${site.phone.tel}`} tabIndex={show ? 0 : -1}>
        <IconPhone size={18} />
        Call
      </a>
      <a className="btn btn--soft" href={whatsappLink()} target="_blank" rel="noopener" tabIndex={show ? 0 : -1}>
        <IconChat size={18} />
        WhatsApp
      </a>
      <button type="button" className="btn btn--red" onClick={() => open()} tabIndex={show ? 0 : -1}>
        <IconCalendar size={18} />
        Book
      </button>
    </nav>
  );
}
