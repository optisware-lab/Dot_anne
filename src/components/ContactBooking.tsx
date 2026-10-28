"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { BookingForm } from "./BookingForm";
import { IconChat, IconClock, IconPhone, IconPin } from "./Icons";

/** Contact page: booking form beside a live preview of the WhatsApp message and the direct lines. */
export function ContactBooking() {
  const [msg, setMsg] = useState("");
  return (
    <div className="book-layout">
      <div className="card book-panel">
        <h2 style={{ fontSize: "var(--t-md)", marginBottom: "1.25rem" }}>Reservation inquiry</h2>
        <BookingForm idPrefix="pg" onMessage={setMsg} />
      </div>
      <aside className="preview" aria-label="Your message and direct contacts">
        <span className="label">Your WhatsApp message</span>
        <div className="bubble">
          <pre>{msg || "…"}</pre>
        </div>
        <span className="label" style={{ marginTop: "0.5rem" }}>
          Or reach the desk directly
        </span>
        <ul className="direct-list">
          <li>
            <a href={`tel:${site.phone.tel}`}>
              <IconPhone size={20} />
              <div>
                <strong className="tabular">{site.phone.display}</strong>
                <span>Call the front desk</span>
              </div>
            </a>
          </li>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener">
              <IconChat size={20} />
              <div>
                <strong>WhatsApp</strong>
                <span>Same number, any time</span>
              </div>
            </a>
          </li>
          <li>
            <a href={site.directionsUrl} target="_blank" rel="noopener">
              <IconPin size={20} />
              <div>
                <strong>473 Golf Estate, Tema</strong>
                <span>Plus Code {site.address.plusCode} · get directions</span>
              </div>
            </a>
          </li>
          <li>
            <div className="direct-item">
              <IconClock size={20} />
              <div>
                <strong>{site.hours.label}</strong>
                <span>Late arrivals welcome</span>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
