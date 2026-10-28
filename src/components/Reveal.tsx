"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `is-in` to each [data-reveal] element the first time it scrolls into view.
 * The hidden starting states only exist under html.js + no reduced motion (see globals.css),
 * so without this script the page is simply shown finished.
 *
 * Mask and shutter reveals start fully clipped, and a clipped element has no visible area,
 * so the observer would never see it. For those we watch the parent instead.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const targets = new Map<Element, HTMLElement[]>();
    for (const el of els) {
      const clipped = el.dataset.reveal === "mask" || el.dataset.reveal === "shutter";
      const watch = clipped && el.parentElement ? el.parentElement : el;
      targets.set(watch, [...(targets.get(watch) ?? []), el]);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          targets.get(e.target)?.forEach((el) => el.classList.add("is-in"));
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );
    targets.forEach((_, watch) => io.observe(watch));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
