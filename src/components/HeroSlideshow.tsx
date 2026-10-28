"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/config/site";

const HOLD_MS = 6000; // time each photo stays before the next crossfade

/**
 * Hero background that slowly crossfades through real photos of the lodge.
 * - The first photo is server-rendered and visible on the first frame.
 * - Never fades to a photo that has not finished loading.
 * - Pauses off screen, in a hidden tab, on request (pause button) and for reduced motion.
 */
export function HeroSlideshow({ slides }: { slides: (Photo & { position?: string })[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const imgs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Only run while the hero is on screen and the tab is visible.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && !document.hidden), { threshold: 0.15 });
    io.observe(el);
    const onVis = () => setVisible(!document.hidden && el.getBoundingClientRect().bottom > 0);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = !paused && !reduced && visible && slides.length > 1;

  const advance = useCallback(() => {
    setActive((i) => {
      const next = (i + 1) % slides.length;
      const img = imgs.current[next];
      // Wait for the next photo to be decoded so the fade never reveals a blank frame.
      return img && img.complete && img.naturalWidth > 0 ? next : i;
    });
  }, [slides.length]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(advance, HOLD_MS);
    return () => window.clearInterval(id);
  }, [running, advance]);

  return (
    <>
    <div ref={rootRef} className="dark__photo hero-slides" data-running={running || undefined}>
      {slides.map((s, i) => (
        <div key={s.src} className={`hero-slide${i === active ? " is-active" : ""}${i === 0 ? " is-first" : ""}`} aria-hidden="true">
          <Image
            ref={(el) => {
              imgs.current[i] = el;
            }}
            src={s.src}
            alt=""
            fill
            sizes="100vw"
            quality={70}
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? undefined : "lazy"}
            style={{ objectPosition: s.position ?? "50% 45%" }}
          />
        </div>
      ))}
    </div>
      {slides.length > 1 && !reduced && (
        <button
          type="button"
          className="hero-slides__toggle"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play background photos" : "Pause background photos"}
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
            </svg>
          )}
          <span className="hero-slides__count tabular">
            {active + 1}/{slides.length}
          </span>
        </button>
      )}
    </>
  );
}
