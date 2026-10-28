---
name: DOT ANNE HOME LODGE
description: The estate plan sheet for Plot 473, Golf Estate, Tema. Four inks on drafting paper.
colors:
  green-950: "#0f2118"
  green-900: "#142a1f"
  green-800: "#1e3a2c"
  green-700: "#2b4d3c"
  green-600: "#3d634f"
  green-200: "#c9d6cc"
  on-green-2: "#cfd6cb"
  gold-300: "#ddc595"
  gold-400: "#cfb07a"
  gold-500: "#c4a266"
  gold-600: "#b8955a"
  gold-700: "#8a6c38"
  ivory-50: "#fbf8f1"
  ivory-100: "#f5f0e4"
  ivory-200: "#ece4d2"
  ivory-300: "#ddd2bb"
  ink-900: "#24272b"
  ink-700: "#45423b"
  ink-500: "#6b6558"
typography:
  display:
    fontFamily: "Gloock, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.3vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gloock, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.7rem + 2.1vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gloock, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.07rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 72"
rounded:
  hairline: "2px"
  marker: "50%"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  s-9: "6rem"
  section: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  gutter: "clamp(16px, 4vw, 48px)"
components:
  button-gold:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.green-900}"
    rounded: "{rounded.hairline}"
    padding: "0.875rem 1.375rem"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-400}"
    textColor: "{colors.green-900}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.green-800}"
    rounded: "{rounded.hairline}"
    padding: "0.875rem 1.375rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.green-800}"
    textColor: "{colors.ivory-100}"
  button-line-light:
    backgroundColor: "transparent"
    textColor: "{colors.ivory-100}"
    rounded: "{rounded.hairline}"
    padding: "0.875rem 1.375rem"
    height: "48px"
  input-field:
    backgroundColor: "{colors.ivory-100}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 0.875rem"
    height: "48px"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.gold-300}"
    rounded: "{rounded.hairline}"
    padding: "0.25rem 0.625rem"
    height: "32px"
  title-block:
    backgroundColor: "{colors.green-800}"
    textColor: "{colors.ivory-100}"
    width: "min(100%, 640px)"
  booking-slip:
    backgroundColor: "{colors.ivory-50}"
    textColor: "{colors.ink-900}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
---

# Design System: DOT ANNE HOME LODGE

## Overview

**Creative North Star: "The Estate Plan"**

The site is the plan sheet for one plot, No. 473 Golf Estate. Ivory drafting paper is the ground; forest green is the land and fills the big fields (the hero title block, the location sheet, the booking preview, the footer); muted gold is reserved for survey hairlines, the route line, plot markers and the primary action; charcoal is the ink. Everything is drawn with hairline rules, registration ticks and labelled cells, as a surveyor would letter a sheet, not as a hotel brochure would decorate a page.

Density is calm and generous: one strict 12-column grid, large section breathing room, content arranged as plan legends, spec tables and schedules rather than cards. Real photographs of the lodge are pinned to the sheet as plates, with corner ticks and a caption strip. Motion is plan ink: lines draw with stroke-dashoffset, plates wipe in with clip-path, all on one ease-out-expo curve, once, and every piece of content is visible with motion off.

**Key Characteristics:**
- Four inks only: forest green, ivory, gold, charcoal.
- Hairline rules (1px gold at partial strength) do the structural work that borders, cards and shadows do elsewhere.
- Labelled cells in condensed caps carry data (Plot, Estate, Plus Code, Front desk).
- Corner registration ticks frame title blocks and photo plates.
- Near-square corners (2px) throughout.
- Gloock serif headlines in forest green; Archivo variable sans for everything else.

## Colors

A restricted four-ink palette, each ink in a short ramp, with gold confined to lines and the one primary action.

### Primary
- **Brand Forest** (green-800): The land. Headline color on ivory, the hero title block, location sheet, booking preview panel, mobile menu, outline-button stroke, input underline, and `theme-color`.
- **Night Forest** (green-900): Footer ground, the course sheet behind the route map, and text on gold fills.
- **Deep Forest** (green-950): Road casing on the route map only.
- **Moss** (green-700): Photo placeholder ground and scrollbar thumb.

### Secondary
- **Survey Gold** (gold-500): The primary action fill and the home plot marker. Nothing else is filled gold.
- **Field Gold** (gold-400): Gold on green: the route line, control rings, north arrow, primary hover fill.
- **Pale Gold** (gold-300): Labels and values lettered on green (cell labels, address terms, copy button), selection highlight, ticks on the title block.
- **Hairline Gold** (gold-600): Rules on ivory (via the `--rule` mix at 55% and `--rule-strong` at full), link underlines, focus outline, FAQ chevrons.
- **Ink Gold** (gold-700): The only gold allowed as small text on ivory (AA): wordmark sub-line, spec-table terms, direct-line label.

### Neutral
- **Drafting Paper** (ivory-100): Page ground, header, input fields, text on green.
- **Sheet Shade** (ivory-200): Alternating "sheet" sections.
- **Light Paper** (ivory-50): The booking slip, legend marks, headlines and values on green, the WhatsApp bubble.
- **Plate Ground** (ivory-300): Photo placeholders and input side strokes.
- **Charcoal Ink** (ink-900): Body text.
- **Warm Ink** (ink-700): Secondary text on ivory (ledes, descriptions).
- **Faded Ink** (ink-500): Tertiary, large text only.
- **Sage Text** (on-green-2): Secondary text on green.
- **Sage Mist** (green-200): Defined; the estate-plot tint on the map derives from it.

### Named Rules
**The Four Inks Rule.** Green, ivory, gold, charcoal. No fifth hue enters the system; the only exceptions are functional signals (the live "open" dot and form-error red) and they never decorate.

**The Gold Is Survey Rule.** Gold appears only as hairlines, the route, plot markers, labels on green, and the one primary button. Never a gold background panel, never gold body text on ivory below gold-700.

**The Land Is Green Rule.** Large fields of colour are forest green and they are architectural (title block, location sheet, slip preview, footer). Ivory is paper; green is land; nothing else gets a field.

## Typography

**Display Font:** Gloock (with Iowan Old Style, Georgia, serif)
**Body Font:** Archivo variable, width axis (with Helvetica Neue, Arial, system-ui)
**Label Font:** Archivo at condensed width (`wdth` 72)

**Character:** A high-contrast editorial serif set at weight 400 for every heading, against a plain, sturdy grotesque that narrows into condensed caps when it letters a plan cell. The serif speaks; the sans labels and informs.

### Hierarchy
- **Display** (400, clamp 2.25rem to 3.75rem, 1.04): The hero headline inside the title block only, max 16ch.
- **Headline** (400, step-4, 1.08): Section h2s. Location and FAQ questions also use Gloock (FAQ summaries at step-1); the direct phone number is set in Gloock at step-3 with tabular figures.
- **Title** (400, step-2 to step-3, 1.15): Legend h3s at step-2; room name at step-3; big cell values at 1.75rem.
- **Lede** (400, step-1, 1.5): Section intros in Warm Ink, 40 to 58ch.
- **Body** (400, step-0, 1.6): Running text, max about 48 to 62ch.
- **Label** (600, 0.75rem, 0.12em, uppercase, `wdth` 72): Cell labels, spec-table and address terms, schedule terms, footer column heads, map labels. The wordmark sub-line uses the same lettering at 0.6875rem / 0.16em.

### Named Rules
**The Lettered Cell Rule.** Condensed caps labels name a value that sits directly beside or beneath them (a cell, a definition term, a map feature). They are never placed above a section heading as decoration.

**The One Weight Serif Rule.** Gloock is set at 400 only. Emphasis comes from size and the green ink, not weight.

## Layout

One strict 12-column grid inside a 1320px max container with a fluid gutter (16px to 48px). Sections are split asymmetrically along that grid (5/6 cols, 7/4, 6/5, 4/7 with a column of air between), and collapse to a single column at 960px. Section padding is fluid (`section` token); section heads sit max 46rem wide with clamp(2.5rem, 5vw, 4rem) below.

Spacing follows an 8pt-derived scale (s-1 to s-9). Data is laid out as ruled rows: legends, spec tables (7.5rem term column), schedules, address blocks, numbered controls, each row separated by a hairline rather than boxed.

Header is fixed at 76px, shrinking to 64px on scroll; nav collapses to a full-height green menu at 1100px. On phones (760px) the hero photo becomes a 16:10 band with the title block overlapping it by 56px at full width, the desktop "desk" cell is replaced by an open-now line under the lede, and a fixed bottom action bar (Call / WhatsApp) slides up after the hero. Hit targets are 44px minimum, buttons 48px.

## Elevation & Depth

Mostly flat paper. Depth comes from tonal fields (ivory vs sheet shade vs green) and hairline rules, with soft green-tinted shadows reserved for objects that sit on the sheet: the hero title block, photo plates, the booking slip, the scrolled header and the mobile action bar.

### Shadow Vocabulary
- **Pinned** (`box-shadow: 0 1px 2px rgb(20 42 31 / 0.08), 0 6px 18px -8px rgb(20 42 31 / 0.18)`): Photo plates and the booking slip.
- **Plate Lift** (`box-shadow: 0 2px 4px rgb(20 42 31 / 0.08), 0 24px 48px -20px rgb(20 42 31 / 0.35)`): The hero title block over the photograph (dropped on phones).
- **Gold Press** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.35) inset, 0 8px 20px -10px rgb(20 42 31 / 0.55)`): The gold primary button; deepens on hover.

### Named Rules
**The Pinned Not Floating Rule.** Shadows are soft, green-tinted and short; they say "pinned to the sheet", never "floating card". Ruled lists and sections carry no shadow.

## Shapes

Near-square everything: a 2px radius on buttons, inputs and the copy button; images, plates, title blocks, the slip and section fields are square. Circles appear only as plan markers (numbered route controls, the live dot). The recurring geometry is the survey frame: an inner 1px hairline inset 10px from the edge of green fields, and corner registration ticks (16px arms, 1.5px stroke) at the four corners of title blocks and photo plates. The route map adds a 48px grid, dashed estate boundary and rounded road strokes.

**The Survey Frame Rule.** A framed object gets the 10px inset hairline and/or corner ticks, not a thicker border or a rounded card.

## Components

### Buttons
Confident, flat, slightly pressed.
- **Shape:** Near-square (2px), min-height 48px (42px small, 54px large), 600 weight, 1rem.
- **Primary (gold):** Survey Gold fill, Night Forest text, Gold Press shadow; hover shifts to Field Gold with a deeper shadow; active nudges down 1px.
- **Line (on ivory):** 1px Brand Forest stroke and text; hover fills green with ivory text.
- **Line light (on green):** ivory stroke at 55% mix; hover firms the stroke and adds an 8% ivory wash.
- **Focus:** 2px Hairline Gold outline, 3px offset (global).
- **Text link:** Brand Forest text at weight 600 with a Hairline Gold underline that thickens to 2px on hover.

### Inputs / Fields
- **Style:** Drafting Paper fill, 1px Plate Ground sides, a 1.5px Brand Forest underline (the ruled line you write on), 2px radius, 48px min height. Labels sit above in Brand Forest, weight 600, 0.9375rem.
- **Hover / Focus:** Hover lightens to ivory-50; focus goes white with a Hairline Gold border and a 3px gold-500 halo at 35%.
- **Error:** Border turns brick red with a 500-weight message below.

### Navigation
Ivory bar, wordmark left (Gloock name over condensed caps sub-line in Ink Gold), links in charcoal at weight 500, 0.9375rem, with a gold hairline that draws in from the left on hover and stays under the current item, phone number and small gold button right. Below 1100px a 44px menu toggle opens a full green sheet with Gloock links on gold rules.

### Title Block (signature)
A forest-green sheet block with an inset hairline frame and gold corner ticks, holding the Gloock display headline, a sage lede, the button pair, and a bottom row of ruled cells (label in Pale Gold condensed caps, value in Light Paper; one big Gloock value). Used for the hero; the same cell grammar repeats in the slip preview and the address block.

### Photo Plate (signature)
A real photograph pinned to the sheet: Pinned shadow, ivory corner ticks and a faint ivory inset frame, and a green 82% caption strip along the bottom in slightly condensed (`wdth` 80) 0.8125rem text. Reveals with a clip-path wipe.

### Ruled Lists
Legends, spec tables, schedules, address blocks and route controls share one pattern: a strong gold top rule, lighter gold row rules, a fixed term column in condensed caps, values in 500 weight. Legend rows carry a 56px square ivory mark with a 1.5px line icon. Route controls carry 28px gold-ringed numbers; the destination is filled gold.

### Booking Slip
An ivory-50 sheet with a strong gold border and Pinned shadow, split 7:5 into fields and a green preview panel that composes the WhatsApp message live in a chat bubble (the bubble's 10px/2px tail radius imitates WhatsApp and is the one rounded shape in the system). Stacks to fields-then-preview below 900px.

### Route Sheet
Night Forest map on a 48px hairline grid with a radial vignette, ivory roads on dark casings, dashed estate outline, and a gold route that draws from Kpone Barrier to No. 473 while numbered controls light in sequence.

## Do's and Don'ts

### Do:
- **Do** keep to the four inks; use gold-700 when gold must be small text on ivory, gold-300 when it letters green.
- **Do** separate content with hairline rules (`--rule` for rows, `--rule-strong` for the top of a ruled list) instead of boxes.
- **Do** letter data with condensed caps labels (0.75rem, 600, 0.12em, `wdth` 72) placed beside or above their value.
- **Do** frame real photographs as plates with corner ticks and a caption strip.
- **Do** animate with `cubic-bezier(0.16, 1, 0.3, 1)` once, as ink drawing or clip-path reveals, and leave everything visible under reduced motion.
- **Do** keep corners at 2px and hit targets at 44px or more.

### Don't:
- **Don't** fill any panel or background with gold; gold fills belong to the primary button and the home plot marker only.
- **Don't** set a centred headline directly over a full-bleed photo; headlines sit in a green title block or on the paper.
- **Don't** lay out features as rows of equal cards; use ruled legends, spec tables and schedules.
- **Don't** put condensed caps labels above section headings as kickers or eyebrows.
- **Don't** use stock imagery presented as the lodge, or round cards, pill buttons and heavy floating shadows.
- **Don't** bold Gloock; it is set at 400.
