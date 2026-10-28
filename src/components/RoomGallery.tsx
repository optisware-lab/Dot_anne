"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = { src: string; alt: string; w: number; h: number };

export function RoomGallery({ photos, label }: { photos: Photo[]; label: string }) {
  const [i, setI] = useState(0);
  const current = photos[i];

  return (
    <div className="gallery">
      <figure className="plate gallery__main" data-reveal>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="gallery__img"
        />
        <figcaption className="plate__caption">
          <span>{label}</span>
          <span className="tabular">
            {String(i + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
      {photos.length > 1 && (
        <ul className="gallery__thumbs" aria-label={`${label} photos`}>
          {photos.map((p, k) => (
            <li key={p.src}>
              <button
                type="button"
                className="gallery__thumb"
                aria-pressed={k === i}
                aria-label={`Show photo ${k + 1}: ${p.alt}`}
                onClick={() => setI(k)}
              >
                <Image src={p.src} alt="" fill sizes="160px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
