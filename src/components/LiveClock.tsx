"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

function tema() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: site.hours.timeZone,
  }).format(new Date());
}

/** "Open now · 23:14 in Tema". The desk is always open, so the clock is the proof. */
export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(tema());
    const id = window.setInterval(() => setTime(tema()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  return time ? (
    <>
      Open now · <time suppressHydrationWarning>{time}</time> in Tema
    </>
  ) : (
    <>Open 24 hours</>
  );
}
