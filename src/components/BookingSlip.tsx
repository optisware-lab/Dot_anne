"use client";

import { useEffect, useMemo, useState } from "react";
import { rooms, site, whatsappLink } from "@/config/site";
import { IconChat, IconPhone } from "./Icons";

function todayInTema() {
  // yyyy-mm-dd in Africa/Accra (UTC+0, no DST)
  return new Date().toISOString().slice(0, 10);
}

function prettyDate(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(d);
}

function addDays(iso: string, n: number) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

const roomOptions = [...rooms.filter((r) => r.show).map((r) => r.name), "Not sure yet"];

export function BookingSlip() {
  const [min, setMin] = useState("");
  const [name, setName] = useState("");
  const [arrive, setArrive] = useState("");
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState(roomOptions[0]);
  const [late, setLate] = useState(false);
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => setMin(todayInTema()), []);

  const dateError = touched && !arrive ? "Choose the date you will arrive." : arrive && min && arrive < min ? "That date has passed. Choose today or later." : "";

  const message = useMemo(() => {
    const lines = [`Hello ${site.name}, I would like to book a room.`, ""];
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (arrive) {
      lines.push(`Arriving: ${prettyDate(arrive)}${late ? " (late arrival)" : ""}`);
      lines.push(`Leaving: ${prettyDate(addDays(arrive, nights))} · ${nights} night${nights > 1 ? "s" : ""}`);
    } else {
      lines.push(`Dates: (to confirm)`);
    }
    lines.push(`Guests: ${guests}`);
    lines.push(`Room: ${room}`);
    if (note.trim()) lines.push(`Note: ${note.trim()}`);
    lines.push("", "Is a room available, and what is the rate?");
    return lines.join("\n");
  }, [name, arrive, nights, guests, room, late, note]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!arrive || (min && arrive < min)) {
      document.getElementById("arrive")?.focus();
      return;
    }
    window.open(whatsappLink(message), "_blank", "noopener");
  }

  return (
    <form className="slip" onSubmit={onSubmit} noValidate>
      <div className="slip__fields">
        <div className="field">
          <label htmlFor="name">Your name <span className="field__opt">optional</span></label>
          <input id="name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
        </div>

        <div className="field-row">
          <div className={`field${dateError ? " has-error" : ""}`}>
            <label htmlFor="arrive">Arriving</label>
            <input
              id="arrive"
              name="arrive"
              type="date"
              min={min || undefined}
              value={arrive}
              onChange={(e) => setArrive(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={!!dateError}
              aria-describedby={dateError ? "arrive-err" : undefined}
              required
            />
            {dateError && <p id="arrive-err" className="field__error">{dateError}</p>}
          </div>
          <div className="field">
            <label htmlFor="nights">Nights</label>
            <select id="nights" value={nights} onChange={(e) => setNights(Number(e.target.value))}>
              {Array.from({ length: 30 }, (_, k) => k + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="guests">Guests</label>
            <select id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="room">Room</label>
            <select id="room" value={room} onChange={(e) => setRoom(e.target.value)}>
              {roomOptions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        <label className="check">
          <input type="checkbox" checked={late} onChange={(e) => setLate(e.target.checked)} />
          <span>I&rsquo;ll arrive late at night</span>
        </label>

        <div className="field">
          <label htmlFor="note">Anything else <span className="field__opt">optional</span></label>
          <textarea id="note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} maxLength={240} placeholder="e.g. arriving from Kotoka airport around 11pm" />
        </div>

      </div>

      <aside className="slip__preview" aria-label="Your WhatsApp message">
        <p className="slip__preview-label">Your message to the lodge</p>
        <div className="bubble">
          <pre className="bubble__text">{message}</pre>
        </div>
        <dl className="slip__cells">
          <div>
            <dt className="cell-label">To</dt>
            <dd className="tabular">{site.phone.display}</dd>
          </div>
          <div>
            <dt className="cell-label">Desk</dt>
            <dd>Open 24 hours</dd>
          </div>
        </dl>
        <div className="slip__actions">
          <button type="submit" className="btn btn--gold btn--lg">
            <IconChat size={18} />
            Send on WhatsApp
          </button>
          <a className="btn btn--line-light" href={`tel:${site.phone.tel}`}>
            <IconPhone size={18} />
            Call {site.phone.local}
          </a>
        </div>
        <p className="slip__fine">
          Nothing is sent from this page. WhatsApp opens with your message ready; you press send. The lodge replies with availability and the rate.
        </p>
      </aside>
    </form>
  );
}
