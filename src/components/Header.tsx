"use client";

import { useEffect, useRef, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { IconClose, IconMenu, IconPhone } from "./Icons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in view.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Menu: lock scroll, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const f = menuRef.current.querySelectorAll<HTMLElement>("a,button");
        const a = f[0], b = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); }
        else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="site-header__bar wrap">
        <a href="#top" className="wordmark" aria-label={`${site.name}, back to top`}>
          <span className="wordmark__name">Dot Anne</span>
          <span className="wordmark__sub">Home Lodge · Tema</span>
        </a>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={active === l.href ? "location" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="header-call" href={`tel:${site.phone.tel}`}>
            <IconPhone size={16} />
            <span>{site.phone.local}</span>
          </a>
          <a className="btn btn--gold btn--sm" href="#contact">
            Book your stay
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__actions">
          <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
            Book on WhatsApp
          </a>
          <a className="btn btn--line-light" href={`tel:${site.phone.tel}`}>
            Call {site.phone.local}
          </a>
          <p className="mobile-menu__note">Front desk open 24 hours, every day.</p>
        </div>
      </div>
    </header>
  );
}
