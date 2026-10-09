---
name: RIAH SL
description: Calm, corporate engineering firm. Night-navy heroes over a Freetown photo, tinted neutrals, light headings, one yellow spark.
colors:
  fg: "#0f172a"
  fg-muted: "#475569"
  fg-subtle: "#56657c"
  fg-inverse: "#ffffff"
  fg-inverse-muted: "#cbd5e1"
  surface: "#ffffff"
  surface-alt: "#eaf0fb"
  surface-strong: "#d6e0f2"
  line: "#d6e0f2"
  night: "#0b1733"
  night-deep: "#070f24"
  accent: "#2563eb"
  accent-strong: "#1d4ed8"
  signal: "#facc15"
  signal-hover: "#fde047"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.25
  h4:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  eyebrow:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    textTransform: uppercase
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.6
  small:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    lineHeight: 1.5
  caption:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  pill: "9999px"
spacing:
  base: "4px"
  gutter: "16px / 24px ≥640 / 32px ≥1024"
  section: "64px / 96px ≥1024"
  section-sm: "48px / 64px ≥1024"
  header: "72px"
  container: "1280px"
  container-narrow: "768px"
  measure: "608px"
elevation:
  sm: "0 4px 20px rgb(15 23 42 / .12)"
  md: "0 16px 32px -12px rgb(37 99 235 / .25)"
motion:
  ease-out: "cubic-bezier(.2,.7,.2,1)"
  fast: "150ms"
  base: "400ms"
---

# Design System: RIAH SL

Tokens live in `src/app/tokens.css`. Components live in `src/components/ui/`.
How we got here: `docs/design-dna.md` (study of infosys.com's structure) and
`docs/adr/0001-design-system-refactor.md`.

## Overview

A calm, corporate engineering firm. Every page opens on an inset night-navy
card over a dusk photo of Freetown. Below it, full-bleed bands alternate
white, pale blue-grey and navy. Each band follows the same recipe: optional
eyebrow, then title, then one-line lead, then at most one action, then a grid.
Colour is restrained. Blue tints the neutrals and marks links. Sign yellow is
a single spark per page. The brand's personality now lives in the flat
pictograms, not in painted fields.

## Colour

- **Text:** `fg` for primary text, `fg-muted` for leads and body copy on
  cards, `fg-subtle` for meta only. On dark bands use `fg-inverse` and
  `fg-inverse-muted`. Never pure black.
- **Surfaces:** `surface` (white) and `surface-alt` (blue-tinted) for light
  bands and cards. `night` and `night-deep` for heroes, showcase bands and the
  closing call.
- **Accent:** `accent` / `accent-strong` for links, technical subtitles and
  focus. Never use them as a band.
- **Signal yellow:** the one most important action on a page (the hero
  "Request a consultation", "Discuss a sponsorship", "Send message"), the
  focus ring and text selection. No yellow bands, no yellow headings.
- **Tone classes:** `.tone-light`, `.tone-alt`, `.tone-dark` and `.tone-deep`
  set `--fg`, `--fg-muted`, `--link`, `--solid-*` and `--hairline`. `Section`
  applies them, so headings, text and buttons pick the right colours on any
  band.
- All text/background pairs pass WCAG AA. The ratios are in
  `docs/design-dna.md`.

## Typography

- Geist for headings, at weight 300 (display, h1) or 500/600 (h2 to h4).
  Weight carries the hierarchy more than size does.
- Atkinson Hyperlegible Next for everything read, at a 17px body size (kept
  above 16px for legibility on low-end phones).
- **Plain name first:** a service is named in plain words ("Software checked
  before it goes live"), with its technical name as an `accent-strong` label.

## Layout

- `Container`: 1280px, with 16 / 24 / 32px gutters. `narrow` is 768px.
- `Section`: full-bleed band, 64px vertical padding (96px at lg and up), or
  48 / 64px for `size="sm"`.
- Detail sections use a 5/7 split (text left, list or cards right). Overview
  sections use a centred `SectionHead`.
- Grids: 1 column, then 2 from 640, then 3 or 4 from 1024. Gaps are 16px,
  24px at lg.
- Heroes: an inset rounded `lg` card inside an 8 / 12px `night-deep` frame.
  The header floats clear over it and frosts once the page scrolls.

## Components

- **Button:** `signal` (once per page) / `solid` (ink on light, white on
  dark) / `outline` / `link`. Every variant except `signal` has a trailing
  arrow. Radius `sm`, 44px or 52px tall.
- **Card / CardLink:** white panel with a `line` ring, radius `md`, padding
  24 / 32px. `CardLink` lifts 4px and gains `shadow-md` on hover. The `glass`
  look is for cards on night bands.
- **PageHero:** eyebrow, `h1` at weight 300, lead, optional pictogram, over a
  dimmed version of the hero photo.
- **SubNav:** sticky frosted strip of in-page jump links under the header.
- **ClosingCall:** a `night-deep` band with one white solid action.
- **Pictogram:** flat, slate-outlined icons. They're the brand's main colour
  carrier now.

## Motion

Content rises 12px and fades in over 400ms with a staggered delay. Hovers use
150ms colour or translate changes. Nothing bounces.
`prefers-reduced-motion` turns off the rise animation.

## Imagery

`public/hero/freetown-dusk.jpg` is an AI-generated placeholder. Replace it
with a real photo of RIAH's work when one exists, and never present it as a
real photo. It always sits under a navy overlay that is heaviest where text
sits.
