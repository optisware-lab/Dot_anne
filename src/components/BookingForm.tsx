"use client";

import { useEffect, useMemo, useState } from "react";
import { shownRooms, site, whatsappLink } from "@/config/site";
import { IconChat, IconInfo, IconPhone } from "./Icons";

const roomOptions = [...shownRooms.map((r) => r.name), "Not sure yet / any room", "Longer stay or group"];

function today() {
  // Africa/Accra is UTC+0 all year
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso: string, n: number) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function pretty(iso: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
}

function nights(a: string, b: string) {
  if (!a || !b) return 0;
  return Math.round((new Date(`${b}T12:00:00Z`).getTime() - new Date(`${a}T12:00:00Z`).getTime()) / 86_400_000);
}

export function buildMessage(f: { name: string; room: string; checkIn: string; checkOut: string; guests: string; notes: string }) {
  const n = nights(f.checkIn, f.checkOut);
  const lines = [`Hello ${site.displayName}, I would like to book a room.`, ""];
  if (f.name.trim()) lines.push(`Name: ${f.name.trim()}`);
  lines.push(`Room: ${f.room}`);
  if (f.checkIn) lines.push(`Check-in: ${pretty(f.checkIn)}`);
  if (f.checkOut) lines.push(`Check-out: ${pretty(f.checkOut)}${n > 0 ? ` (${n} night${n > 1 ? "s" : ""})` : ""}`);
  lines.push(`Guests: ${f.guests}`);
  if (f.notes.trim()) lines.push(`Note: ${f.notes.trim()}`);
  lines.push("", "Is a room available, and what is the rate?");
  return lines.join("\n");
}

export function BookingForm({
  initialRoom,
  idPrefix = "bk",
  onSent,
  onMessage,
}: {
  initialRoom?: string;
  idPrefix?: string;
  onSent?: () => void;
  onMessage?: (msg: string) => void;
}) {
  const [min, setMin] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState(initialRoom && roomOptions.includes(initialRoom) ? initialRoom : roomOptions[0]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 guests");
  const [notes, setNotes] = useState("");
  const [tried, setTried] = useState(false);

  useEffect(() => {
    const t = today();
    setMin(t);
    setCheckIn((v) => v || t);
    setCheckOut((v) => v || addDays(t, 1));
  }, []);

  useEffect(() => {
    if (initialRoom && roomOptions.includes(initialRoom)) setRoom(initialRoom);
  }, [initialRoom]);

  const errIn = tried && !checkIn ? "Choose your check-in date." : checkIn && min && checkIn < min ? "That date has passed." : "";
  const errOut = tried && !checkOut ? "Choose your check-out date." : checkIn && checkOut && checkOut <= checkIn ? "Check-out must be after check-in." : "";

  const message = useMemo(() => buildMessage({ name, room, checkIn, checkOut, guests, notes }), [name, room, checkIn, checkOut, guests, notes]);

  useEffect(() => {
    onMessage?.(message);
  }, [message, onMessage]);

  const id = (s: string) => `${idPrefix}-${s}`;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (!checkIn || !checkOut || checkOut <= checkIn || (min && checkIn < min)) {
      document.getElementById(id(!checkIn || (min && checkIn < min) ? "in" : "out"))?.focus();
      return;
    }
    window.open(whatsappLink(message), "_blank", "noopener");
    onSent?.();
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor={id("name")}>
          Your name <span className="field__opt">optional</span>
        </label>
        <input id={id("name")} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="e.g. Kwame Mensah" />
      </div>

      <div className="field">
        <label htmlFor={id("room")}>Room</label>
        <select id={id("room")} value={room} onChange={(e) => setRoom(e.target.value)}>
          {roomOptions.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="field-row">
        <div className={`field${errIn ? " has-error" : ""}`}>
          <label htmlFor={id("in")}>Check-in</label>
          <input
            id={id("in")}
            type="date"
            min={min || undefined}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (e.target.value && (!checkOut || checkOut <= e.target.value)) setCheckOut(addDays(e.target.value, 1));
            }}
            aria-invalid={!!errIn}
            aria-describedby={errIn ? id("in-err") : undefined}
            required
          />
          {errIn && (
            <p id={id("in-err")} className="field__error">
              {errIn}
            </p>
          )}
        </div>
        <div className={`field${errOut ? " has-error" : ""}`}>
          <label htmlFor={id("out")}>Check-out</label>
          <input
            id={id("out")}
            type="date"
            min={checkIn ? addDays(checkIn, 1) : min || undefined}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            aria-invalid={!!errOut}
            aria-describedby={errOut ? id("out-err") : undefined}
            required
          />
          {errOut && (
            <p id={id("out-err")} className="field__error">
              {errOut}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={id("guests")}>Guests</label>
        <select id={id("guests")} value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4 or more (group)</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor={id("notes")}>
          Anything else <span className="field__opt">optional</span>
        </label>
        <textarea
          id={id("notes")}
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={280}
          placeholder="e.g. arriving around 11pm, company invoice, longer stay"
        />
      </div>

      <p className="note">
        <IconInfo size={16} />
        <span>
          Nothing is charged here. WhatsApp opens with your message ready; you press send and the lodge replies with availability
          and the rate.
        </span>
      </p>

      <div className="form__actions">
        <button type="submit" className="btn btn--red btn--lg">
          <IconChat size={18} />
          Send on WhatsApp
        </button>
        <a className="btn btn--navy btn--lg" href={`tel:${site.phone.tel}`}>
          <IconPhone size={18} />
          Call {site.phone.local}
        </a>
      </div>
    </form>
  );
}
