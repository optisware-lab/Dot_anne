"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: site.hours.timeZone,
});

/** "Open now · 23:14:07 in Tema", ticking every second in Tema's time zone. */
export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let timer: number;
    // Re-schedule on each tick, aligned to the start of the next real second, so it never drifts.
    const tick = () => {
      setTime(fmt.format(new Date()));
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    tick();
    // Catch up immediately when the visitor comes back to the tab.
    const onVisible = () => {
      if (!document.hidden) {
        window.clearTimeout(timer);
        tick();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return time ? (
    <span className="clock">
      <span>Open now</span>
      <span className="clock__sep" aria-hidden="true">
        {" · "}
      </span>
      <time className="tabular" suppressHydrationWarning>
        {time}
      </time>
    </span>
  ) : (
    <>Open 24 hours</>
  );
}
