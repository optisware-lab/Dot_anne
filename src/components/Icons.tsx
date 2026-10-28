import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconPhone = (p: P) => (
  <Base {...p}>
    <path d="M5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 7.7 7.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
  </Base>
);

/** Chat bubble used for WhatsApp actions (always labelled "WhatsApp" in text). */
export const IconChat = (p: P) => (
  <Base {...p}>
    <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5Z" />
    <path d="M9.2 8.6c0 3 2.2 5.6 5.4 6.3l1-1.2-1.8-1-1 .8a4 4 0 0 1-2.2-2.3l.8-1-1-1.8-1.2.2Z" />
  </Base>
);

export const IconClock = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const IconPin = (p: P) => (
  <Base {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </Base>
);

export const IconStar = ({ filled = false, ...p }: P & { filled?: boolean }) => (
  <Base {...p} fill={filled ? "currentColor" : "none"}>
    <path d="m12 3.8 2.5 5.1 5.6.8-4 4 1 5.5-5.1-2.7-5 2.7 1-5.5-4.1-4 5.6-.8L12 3.8Z" />
  </Base>
);

export const IconStarHalf = (p: P) => (
  <Base {...p}>
    <path d="m12 3.8 2.5 5.1 5.6.8-4 4 1 5.5-5.1-2.7-5 2.7 1-5.5-4.1-4 5.6-.8L12 3.8Z" />
    <path d="M12 3.8v13.7l-5 2.7 1-5.5-4.1-4 5.6-.8L12 3.8Z" fill="currentColor" />
  </Base>
);

export const IconWifi = (p: P) => (
  <Base {...p}>
    <path d="M2.5 9a14 14 0 0 1 19 0" />
    <path d="M5.8 12.4a9.3 9.3 0 0 1 12.4 0" />
    <path d="M9.1 15.7a4.6 4.6 0 0 1 5.8 0" />
    <circle cx="12" cy="19" r=".6" fill="currentColor" />
  </Base>
);

export const IconShower = (p: P) => (
  <Base {...p}>
    <path d="M5 21V7a3.5 3.5 0 0 1 7 0" />
    <path d="M9 8.5h6" />
    <path d="M10 12v.01M13 12v.01M16 12v.01M11.5 15v.01M14.5 15v.01M13 18v.01M16 18v.01" strokeWidth={2} />
  </Base>
);

export const IconCar = (p: P) => (
  <Base {...p}>
    <path d="M4 16.5V12l2-5h12l2 5v4.5" />
    <path d="M3 12h18v4.5H3z" />
    <path d="M6 16.5V19M18 16.5V19" />
    <circle cx="7" cy="14.2" r=".6" fill="currentColor" />
    <circle cx="17" cy="14.2" r=".6" fill="currentColor" />
  </Base>
);

export const IconBell = (p: P) => (
  <Base {...p}>
    <path d="M4 17.5h16" />
    <path d="M5.5 17.5a6.5 6.5 0 0 1 13 0" />
    <path d="M12 9.5V8M10.5 8h3" />
  </Base>
);

export const IconSnow = (p: P) => (
  <Base {...p}>
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
  </Base>
);

export const IconCup = (p: P) => (
  <Base {...p}>
    <path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Z" />
    <path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16" />
  </Base>
);

export const IconTv = (p: P) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="12" rx="1" />
    <path d="M9 20.5h6" />
  </Base>
);

export const IconBox = (p: P) => (
  <Base {...p}>
    <rect x="6" y="3.5" width="12" height="17" rx="1" />
    <path d="M6 9.5h12M9 6.5v1M9 12.5v2" />
  </Base>
);

export const IconBed = (p: P) => (
  <Base {...p}>
    <path d="M3 18V6M3 14h18v4M21 14v-2.5a3 3 0 0 0-3-3h-7v5.5" />
    <circle cx="7" cy="11" r="1.8" />
  </Base>
);

export const IconUsers = (p: P) => (
  <Base {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6a3 3 0 0 1 0 5.6M18 19a5.5 5.5 0 0 0-2.5-4.6" />
  </Base>
);

export const IconCalendar = (p: P) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </Base>
);

export const IconRoute = (p: P) => (
  <Base {...p}>
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16" />
  </Base>
);

export const IconHome = (p: P) => (
  <Base {...p}>
    <path d="M4 11 12 4.5 20 11" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </Base>
);

export const IconCompass = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Base>
);

export const IconMap = (p: P) => (
  <Base {...p}>
    <path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5l-6-2Z" />
    <path d="M9 4.5v13M15 6.5v13" />
  </Base>
);

export const IconCheckCircle = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.5 12.3 2.4 2.4 4.6-5" />
  </Base>
);

export const IconInfo = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5M12 8v.01" strokeWidth={2} />
  </Base>
);

export const IconArrow = (p: P) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const IconChevron = (p: P) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const IconMenu = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconClose = (p: P) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const IconCopy = (p: P) => (
  <Base {...p}>
    <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
    <path d="M15.5 8.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3" />
  </Base>
);

export const IconCheck = (p: P) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);

export const IconExternal = (p: P) => (
  <Base {...p}>
    <path d="M14 4.5h5.5V10M19.5 4.5 11 13M18 14v4.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H10" />
  </Base>
);

export const IconCamera = (p: P) => (
  <Base {...p}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4V8Z" />
    <circle cx="12" cy="13" r="3.5" />
  </Base>
);

export const amenityIcon = {
  bathroom: IconShower,
  wifi: IconWifi,
  parking: IconCar,
  desk: IconBell,
  ac: IconSnow,
  breakfast: IconCup,
  tv: IconTv,
  fridge: IconBox,
} as const;
