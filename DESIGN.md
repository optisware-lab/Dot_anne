---
name: DOT ANNE HOME LODGE
description: Tema coastal architectural hospitality. Night-navy photo heroes, cool white surfaces, crimson for booking only.
colors:
  navy-950: "#011d35"
  navy-900: "#0f2942"
  navy-700: "#314863"
  royal: "#1e3a8a"
  maritime: "#2563eb"
  red: "#d32f2f"
  red-hover: "#c62828"
  red-active: "#b71c1c"
  red-on-dark: "#ffb3ac"
  white: "#ffffff"
  surface: "#faf8ff"
  surface-low: "#f2f3ff"
  surface-mid: "#eaedff"
  surface-high: "#e2e7ff"
  surface-top: "#dae2fd"
  ink: "#131b2e"
  ink-2: "#49607c"
  ink-3: "#5d6f86"
  on-dark: "#ffffff"
  on-dark-2: "#c9d4ee"
  line: "#e2e7ff"
typography:
  display:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
  button:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.02em"
rounded:
  chip: "4px"
  btn: "6px"
  tile: "8px"
  card: "10px"
  dialog: "14px"
  circle: "50%"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
  section: "clamp(3.5rem, 2.5rem + 4vw, 6rem)"
  gutter: "clamp(1.25rem, 3vw, 1.5rem)"
  maxw: "1320px"
components:
  button-book:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-book-hover:
    backgroundColor: "{colors.red-hover}"
  button-book-active:
    backgroundColor: "{colors.red-active}"
  button-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-navy-hover:
    backgroundColor: "{colors.red}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy-900}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.surface-low}"
  button-soft:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  card-dark:
    backgroundColor: "{colors.navy-950}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0.7rem 0.9rem"
    height: "48px"
  input-focus:
    backgroundColor: "{colors.white}"
  tag:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.chip}"
    padding: "0.3rem 0.6rem"
  nav-link-current:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.4rem 0.7rem"
---

# Design System: DOT ANNE HOME LODGE

## Overview

**Creative North Star: "The Harbour Night Desk"**

A small Tema lodge presented with the clarity of a port authority notice and the warmth of a front desk that never closes. Every page opens on a night-navy band laid over a real photograph of the lodge, desaturated through a luminosity blend and pulled down by a navy gradient, then steps onto cool, faintly blue-white surfaces where cards, specs and forms sit in a disciplined 12-column world (1320px max). Headings are uppercase Space Grotesk set tight; reading text is Hanken Grotesk at a relaxed 1.625 leading.

Colour does a job or stays out. Navy carries structure and trust (heroes, the dialog head, the How-to-book panel, mobile menu, dark CTA band). Crimson means "book": it fills the booking buttons and the location pin and almost nothing else. Royal and maritime blues handle links, icons and focus. The surfaces are a five-step cool-white ladder, so sections are separated by tone, not ornament.

This world was adopted from the Google Stitch design "Tema Coastal Architectural Hospitality" and then grounded in the property: real photographs instead of renders, inline SVG line icons instead of an icon font, and no testimonial or badge furniture. The Google rating appears as a measured score card linking out to the reviews.

**Key Characteristics:**
- Night-navy photo heroes (luminosity-blended photo, navy gradient from bottom and left) on every page.
- Cool white surface ladder (#faf8ff → #dae2fd) for section rhythm; hairline #e2e7ff dividers.
- Uppercase Space Grotesk headings at -0.02em to -0.03em; Hanken Grotesk body.
- Crimson reserved for booking actions; navy and royal for everything structural.
- Restrained corners (4 / 6 / 10px), soft ambient shadows, gentle lift on hover.
- Direct-contact devices are first-class: front-desk phone in the header, WhatsApp preview bubble, mobile action bar.

## Colors

A maritime palette: deep navies and cool blue-whites, with one hot crimson that only ever says "book".

### Primary
- **Booking Crimson** (red): fill of every booking CTA ("Book Your Stay", dialog submit, action-bar Book), the map pin disc and the room "tag" chip. Hover deepens to **Harbour Brick** (red-hover); press to **Signal Red** (red-active), which also serves as the error colour, the star colour and red text labels on light surfaces.
- **Coral Lamp** (red-on-dark): the crimson tint used where red must read on navy: the current page in the mobile menu and alternating trust-bar icons.

### Secondary
- **Harbour Night** (navy-950): the dark band. Hero and page-hero base, CTA band, booking-dialog head, How-to-book panel, contact preview panel, mobile menu.
- **Classic Navy** (navy-900): navy buttons, outline-button stroke, room tags, photo captions, field focus border, selected thumbnail border, checklist ticks, `accent-color`.
- **Slate Navy** (navy-700): scrollbar thumb; quiet structural tone.

### Tertiary
- **Royal Ink** (royal): text links, feature and amenity icons, `label--royal`, FAQ summary hover, copy button.
- **Maritime Blue** (maritime): focus rings (2px outline) and the 3px input focus halo at 18% alpha. Never a fill.

### Neutral
- **Cool Paper** (surface): page background and translucent header base.
- **Mist** (surface-low): alternating section tone, footer, input fill, address card, nav hover.
- **Haze** (surface-mid): icon tiles, image placeholders, info notes, soft buttons.
- **Tide** (surface-high): rating section tone, current nav item, map placeholder; doubles as the **Hairline** (line) colour.
- **Fog Blue** (surface-top): input stroke, selection highlight, light-button hover.
- **Pure White** (white): cards, FAQ items, dialog body, chips on light sections.
- **Night Ink** (ink): headings and body text. **Slate Ink** (ink-2): secondary copy, labels, ledes. **Muted Slate** (ink-3): optional-field hints.
- **On-dark** / **Pale Steel** (on-dark-2): primary and secondary text on navy. Dividers on navy use white at 12%.

### Named Rules
**The Crimson Means Book Rule.** A crimson fill marks a booking action (or the lodge's own map pin). Navigation, decoration, section backgrounds and secondary buttons never take a crimson fill. The navy button turns crimson on hover because it is itself a booking action ("Inquire about this room").

**The Tone-Not-Line Rule.** Sections separate by stepping the surface ladder (surface → surface-low → surface-high → white), not by rules or ornaments. Hairlines are for inside a block: section heads, card footers, spec rows.

## Typography

**Display Font:** Space Grotesk (with Helvetica Neue, Arial)
**Body Font:** Hanken Grotesk (with Helvetica Neue, Arial, system-ui)

**Character:** Space Grotesk in uppercase gives the architectural, signage-like voice of a harbour city; Hanken Grotesk keeps descriptions and forms calm and highly legible. Weights loaded: 500/600/700 head, 400/600/700 body.

### Hierarchy
- **Display** (600, clamp 2.25–3.5rem, 1.08, -0.03em, uppercase): home hero h1 only.
- **Headline** (600, clamp 1.75–2.5rem, 1.12, -0.02em, uppercase): section h2, page-hero h1 (max 22ch), CTA band, room names on the Rooms page.
- **Headline small** (600, clamp 1.5–2rem): h2 inside long-form prose.
- **Title** (600, 1.5rem): room-card names, How-to-book heading, dialog heading. **Title small** (600, 1.25rem): pillar h3, address, score count.
- **Body large** (400, 1.125rem, 1.6): ledes on light and dark; ledes cap at 42–44rem.
- **Body** (400, 1rem, 1.625): running text; prose column max 44rem at 1.0625rem.
- **Body small** (0.875rem): feature lists, step notes, footer base (0.8125rem).
- **Label** (700, 0.75rem, 0.1em, uppercase, ink-2): names a value: trust-bar items, "Rate", spec terms, field labels (0.06em), "Lodge address", "Reviews".
- **Button** (600, 0.9375rem, 0.02em, sentence case).

### Named Rules
**The Uppercase Heading Rule.** Every h1–h4, FAQ summary, step title, gallery caption and mobile-menu link is uppercase Space Grotesk 600 with negative tracking. Body copy, buttons and links are never uppercase.

**The Label Names A Value Rule.** A tracked-caps label sits beside or above the datum it names (a time, an address, a rate, a code). It does not introduce a heading.

**The Tabular Figures Rule.** Phone numbers, ratings, review counts and the live clock use `tabular-nums`.

## Layout

A centred `.wrap` container: max 1320px plus a fluid gutter (1.25–1.5rem). Sections pad vertically by `--section` (3.5–6rem). The header is fixed, 80px (64px under 640px), translucent cool paper with a 16px backdrop blur; main content offsets by the header height.

Grids: 12-column bento for the gallery (8+4 then 4+4+4), 4-up pillars, 3-up and 2-up card grids, and asymmetric splits of 7fr/5fr (featured room + How-to-book, contact form + preview) and 5fr/7fr (rating + amenities, address + map). Grids collapse to 2 columns at 1080px and 1 column at 640px; splits stack at 960px; bento cells become 4:3 tiles at 760px. Section heads are a flex row (heading left, short supporting paragraph right, ≤28rem) closed by a hairline, or centred for FAQ and CTA.

Desktop nav collapses to a hamburger at 1240px; the full-screen navy mobile menu sits below the header. Under 760px a fixed three-button action bar (Call, WhatsApp, Book) slides up once the hero is passed; under 640px the header's phone and Book button hide in its favour.

Spacing steps: 0.25 / 0.5 / 1 / 1.5 / 2.5 / 4rem. Card padding is 1.5rem; card grids gap 1.5rem; bento gaps 1rem.

## Elevation & Depth

A light hybrid: tonal surfaces carry most separation, and three soft navy-tinted shadows add lift. Depth on dark bands comes from the photograph and gradient, not shadows.

### Shadow Vocabulary
- **Rest** (`0 1px 3px rgb(15 23 42 / 0.05), 0 1px 2px rgb(15 23 42 / 0.03)`): cards and FAQ items at rest.
- **Lift** (`0 8px 24px -4px rgb(15 23 42 / 0.08), 0 4px 8px -2px rgb(15 23 42 / 0.04)`): card hover (with -2px translate), framed photos, the map and its pin.
- **Dialog** (`0 24px 48px -16px rgb(1 29 53 / 0.35)`): the booking dialog only, over a `rgb(15 23 42 / 0.65)` scrim with 3px blur.
- **Crimson glow** (`0 6px 16px -6px rgb(211 47 47 / 0.55)`, hover `0 10px 22px -8px … / 0.6`): booking buttons only.

### Named Rules
**The Rest-Then-Lift Rule.** Cards are nearly flat at rest and lift only on hover (Lift shadow, translateY(-2px), image scale 1.03–1.04 over 0.7s).

## Shapes

Restrained, architectural corners: 4px for chips, tags, nav items and the copy button; 6px for buttons and inputs; 8px for icon tiles, thumbnails, notes and the map pin card; 10px for cards, photos, bento tiles, FAQ items and the map; 14px for the booking dialog. Circles are reserved for icon discs (trust bar, map pin, step numbers, the dialog close button) and status dots. Borders are 1px hairlines (#e2e7ff on light, white 12% on navy); buttons carry a 1.5px stroke slot so outline and filled variants share a size.

## Components

### Buttons
Confident, compact, never pill-shaped.
- **Shape:** gently squared (6px); min-height 48px (42px small, 54px large); 0.75rem × 1.5rem padding; icon gap 0.5em.
- **Book (crimson):** red fill, white text, crimson glow; hover red-hover with a deeper glow; active red-active and `scale(0.98)`.
- **Navy:** navy-900 fill for room inquiries; hover turns crimson.
- **Outline:** 1.5px navy stroke, navy text, transparent; hover Mist fill.
- **Ghost on dark:** white 8% fill, white 32% stroke, on heroes and the CTA band (phone call-outs).
- **Light / Soft:** white or Haze fills for secondary actions on dark and light bands respectively.
- **Text link:** royal, 600, 1px underline at 35% alpha; hover becomes Signal Red with a full-strength underline.

### Chips
- **Tag:** navy-900 (or crimson for room status) 4px chip, 0.6875rem 700 caps at 0.1em, pinned top-left on room media and as photo captions.
- **Area chip:** white, 1px hairline, 4px, navy-900 600 text, for neighbourhood lists.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** white on light bands; Harbour Night for the How-to-book and contact preview panels.
- **Shadow Strategy:** Rest, Lift on hover (see Elevation).
- **Border:** 1px hairline.
- **Internal Padding:** 1.5rem; card footers split off by a hairline.
- **Pillar card:** 48px Haze icon tile (8px) that flips to navy/white on card hover.
- **Room card:** 16:10 media, title, two-column feature list with royal icons, footer with rate row and full-width navy button.

### Inputs / Fields
- **Style:** Mist fill, 1px Fog Blue stroke, 6px, 48px tall; uppercase 0.75rem labels at 0.06em; optional hints in Muted Slate, sentence case.
- **Focus:** fill turns white, border Classic Navy, 3px maritime halo at 18%.
- **Error:** Signal Red border and 0.8125rem 600 message.

### Navigation
Header: wordmark (uppercase Space Grotesk 1.25rem over 0.625rem tracked sub-line), centred link row in 0.875rem 600 ink-2 with 4px-rounded hover (Mist) and current (Tide) pills, then a two-line "Direct desk 24/7" phone and a small Book button. Shadow deepens once scrolled. Mobile: hamburger opens a Harbour Night sheet of uppercase 1.375rem links divided by white-12% hairlines, current link in Coral Lamp, stacked call/WhatsApp/book actions below. Footer: Mist band, four columns (1.4fr / 1fr ×3), a live "open now" line, hairline base row.

### Photo Hero (signature)
`.dark` band: navy-950 base, photo at 62% opacity with `mix-blend-mode: luminosity`, overlaid by a bottom-up and left-to-right navy gradient; copy left-aligned, max 50rem. The home hero fills the viewport (≤820px) and ends in a translucent trust bar of four icon-disc + label + value items; inner pages use a shorter page hero with slash breadcrumbs. On load the headline opens from a mask (900ms expo), the line and actions rise in at 380/480ms, the trust bar follows 60ms apart, and the photo settles from scale 1.08; all settled by ~1.2s. As the hero scrolls away the photo sinks and dims while the copy lifts (CSS scroll timeline, static where unsupported). The home hero background crossfades through four lodge photos (courtyard, guest room, garden, lounge): 6s hold, 1.6s in-out crossfade, each photo easing in from scale 1.08 over 7.6s; it waits for the next photo to load, pauses off screen, in hidden tabs and via a small pause button (plain "1/4" count), and stays on the courtyard for reduced motion.

### Motion
Tokens: `--ease-out` (0.22,1,0.36,1) for UI under 600ms; `--ease-expo` (0.16,1,0.3,1) for reveals of 800ms+; `--ease-in-out` (0.76,0,0.24,1) for wipes; `--ease-soft` for photo settles; `--ease-exit` only for things leaving. Durations: press 140ms, hover 180ms, UI 240ms, reveal 800ms, photo opening 1150ms; list stagger 70ms, capped at four steps. Entrances fire once via `[data-reveal]` and vary by content: `mask` (headings), `shutter` (photos open from a clip and settle from 1.12), `stagger` (lists, cards, FAQ rows), `roll` (the rating and review count roll up digit by digit), `rise` (single prose blocks). Feedback: buttons scale to 0.97 on press; link arrows nudge 3px and nav underlines draw in on hover (pointer devices only). The booking dialog enters in 260–300ms and leaves in 160ms; FAQ answers open to their real height; the phone menu's links cascade 30ms apart. Every hidden start state sits under `html.js` and `prefers-reduced-motion: no-preference`, so reduced-motion and no-JS visitors get the finished page.

### Booking Dialog and WhatsApp Preview (signature)
Native `<dialog>`, 560px max, 14px radius, Harbour Night head with a circular close button, white scrolling body holding the shared booking form; the form composes a WhatsApp message. On the Contact page the same form sits beside a sticky navy preview panel showing the message in a WhatsApp-green bubble (#e7ffdb, 12/12/3/12px corners) above direct-contact rows.

### Gallery Bento
12-column grid of 10px photo tiles with a bottom navy gradient and an uppercase caption over a place label.

## Do's and Don'ts

### Do:
- **Do** open every page on the navy photo hero with a real photograph of the lodge, luminosity-blended at 62% under the navy gradient.
- **Do** keep crimson fills for booking actions (red #d32f2f, hover #c62828, active #b71c1c).
- **Do** separate sections by stepping the cool surface ladder, and use #e2e7ff hairlines inside blocks.
- **Do** set headings in uppercase Space Grotesk 600 with -0.02em tracking; body in Hanken Grotesk 400 at 1.625.
- **Do** keep corners at 4 / 6 / 10px (14px for the dialog) and buttons at a 48px minimum height.
- **Do** use inline SVG line icons from the shared icon set, coloured royal or navy on light surfaces.
- **Do** use tabular figures for phone numbers, rates, ratings and times.

### Don't:
- **Don't** use crimson for navigation, decoration or section backgrounds.
- **Don't** use pill-shaped or fully rounded buttons.
- **Don't** use AI-rendered or stock imagery in place of the lodge's own photographs.
- **Don't** use an icon font (Material Symbols or similar) or emoji/glyph icons.
- **Don't** add testimonial carousels or award/verification badges; the rating stays a score card that links to Google.
- **Don't** put a tracked-caps label or a pill chip above a heading as a kicker.
- **Don't** give every block the same fade-up, use bounce or elastic easing, run decorative loops (pulsing dots), animate layout properties, or hide content without the `html.js` + reduced-motion guard.
