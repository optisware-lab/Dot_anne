"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { BookingForm } from "./BookingForm";
import { IconCalendar, IconClose } from "./Icons";

type Ctx = { open: (room?: string) => void };
const BookingCtx = createContext<Ctx>({ open: () => {} });

export function useBooking() {
  return useContext(BookingCtx);
}

/** Holds the booking dialog for the whole site. Any BookButton can open it. */
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [room, setRoom] = useState<string | undefined>();
  const [key, setKey] = useState(0);

  const open = useCallback((r?: string) => {
    opener.current = document.activeElement as HTMLElement | null;
    setRoom(r);
    setKey((k) => k + 1);
    const d = ref.current;
    if (d && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, []);

  const close = useCallback(() => ref.current?.close(), []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
      opener.current?.focus?.();
    };
    const onClick = (e: MouseEvent) => {
      if (e.target === d) d.close(); // backdrop click
    };
    // Backstop: some browsers ignore Escape on a dialog until the user has interacted inside it.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && d.open) {
        e.preventDefault();
        d.close();
      }
    };
    d.addEventListener("close", onClose);
    d.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      d.removeEventListener("close", onClose);
      d.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <dialog ref={ref} className="booking-dialog" aria-labelledby="booking-title">
        <div className="booking-dialog__head">
          <div>
            <span className="label">Front desk · open 24 hours</span>
            <h2 id="booking-title">Reservation inquiry</h2>
          </div>
          <button type="button" className="icon-btn" onClick={close} aria-label="Close booking form">
            <IconClose size={20} />
          </button>
        </div>
        <div className="booking-dialog__body">
          <BookingForm key={key} initialRoom={room} idPrefix="dlg" onSent={close} />
        </div>
      </dialog>
    </BookingCtx.Provider>
  );
}

export function BookButton({
  room,
  className = "btn btn--red",
  children,
  icon = true,
}: {
  room?: string;
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
}) {
  const { open } = useBooking();
  return (
    <button type="button" className={className} onClick={() => open(room)} aria-haspopup="dialog">
      {icon && <IconCalendar size={18} />}
      {children}
    </button>
  );
}
