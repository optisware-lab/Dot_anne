"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { BookButton } from "./Booking";
import { IconArrow, IconChat, IconClose, IconMenu, IconPhone } from "./Icons";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Accommodation" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/location", label: "Location & Directions" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const f = menuRef.current.querySelectorAll<HTMLElement>("a,button");
        const a = f[0];
        const b = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          toggleRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          toggleRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__bar wrap">
        <Link href="/" className="logo" aria-label={`${site.displayName}, home`}>
          <Image src="/images/logo/logo-lockup.png" alt={site.displayName} width={1322} height={240} priority sizes="280px" />
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="desk-call" href={`tel:${site.phone.tel}`}>
            <span className="label">Direct desk 24/7</span>
            <strong>{site.phone.display}</strong>
          </a>
          <BookButton className="btn btn--red btn--sm" icon={false}>
            Book Your Stay
          </BookButton>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose size={24} /> : <IconMenu size={24} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                  <IconArrow size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__actions">
          <a className="btn btn--red btn--lg" href={whatsappLink()} target="_blank" rel="noopener">
            <IconChat size={18} />
            Book on WhatsApp
          </a>
          <a className="btn btn--ghost-dark btn--lg" href={`tel:${site.phone.tel}`}>
            <IconPhone size={18} />
            Call {site.phone.display}
          </a>
          <p className="mobile-menu__note">Front desk open 24 hours, every day.</p>
        </div>
      </div>
    </header>
  );
}
