"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { IconChat, IconPhone } from "./Icons";

/**
 * Phone-only Call / WhatsApp bar. Appears once the hero's own buttons have
 * scrolled away, so the first screen never shows the same actions twice.
 */
export function ActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-actions");
    if (!target) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0), {
      threshold: 0,
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`action-bar${show ? " is-shown" : ""}`} aria-label="Quick contact" aria-hidden={!show}>
      <a className="btn btn--line" href={`tel:${site.phone.tel}`} tabIndex={show ? 0 : -1}>
        <IconPhone size={18} />
        Call
      </a>
      <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener" tabIndex={show ? 0 : -1}>
        <IconChat size={18} />
        WhatsApp
      </a>
    </nav>
  );
}
