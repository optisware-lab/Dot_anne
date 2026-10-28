"use client";

import { useEffect } from "react";

/**
 * Adds `is-in` to every [data-reveal] element as it enters the viewport.
 * Content is visible by default; hidden states only apply once this runs
 * (html.js) and motion is allowed.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      // Anything already on screen shows at once.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) el.classList.add("is-in");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
