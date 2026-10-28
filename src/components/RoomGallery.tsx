"use client";

import Image from "next/image";
import { useState } from "react";
import type { Photo } from "@/config/site";

export function RoomGallery({ photos, label }: { photos: Photo[]; label: string }) {
  const [i, setI] = useState(0);
  const current = photos[i];

  return (
    <div>
      <figure className="photo" style={{ aspectRatio: "16 / 10" }} data-reveal="shutter">
        <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(min-width: 960px) 50vw, 100vw" />
        <figcaption>
          {label} · {i + 1}/{photos.length}
        </figcaption>
      </figure>
      {photos.length > 1 && (
        <ul className="thumbs" aria-label={`${label} photos`}>
          {photos.map((p, k) => (
            <li key={p.src}>
              <button type="button" className="thumb" aria-pressed={k === i} aria-label={`Show photo ${k + 1}: ${p.caption ?? p.alt}`} onClick={() => setI(k)}>
                <Image src={p.src} alt="" fill sizes="200px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
