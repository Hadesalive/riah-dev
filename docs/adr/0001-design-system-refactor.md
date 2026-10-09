# ADR 0001: Design system refactor (structure from infosys.com, RIAH brand kept)

- Status: accepted, implemented across all pages
- Date: 2026-10-09
- Related: `docs/design-dna.md`

## Context

The client found the "painted agent kiosk" look too bright: full bright-blue,
yellow and green bands, showcard lettering and painted boards. They pointed to
infosys.com as the reference for the feel they want. We studied that site's
structure (scales, rhythm, hierarchy, how sparingly it uses colour) and wrote
it up in `docs/design-dna.md`.

## Decision

1. **One token source.** `src/app/tokens.css` (a Tailwind v4 `@theme` block)
   holds colour, type scale, layout widths, gutters, section spacing, radius,
   shadow and motion. `.tone-light` / `.tone-alt` / `.tone-dark` / `.tone-deep`
   set `--fg`, `--fg-muted`, `--link`, `--solid-*` and `--hairline`, so text
   and buttons adapt to whatever band they sit on.
2. **Base components** in `src/components/ui/`: `Container`, `Section`,
   `Heading` + `Eyebrow`, `Text`, `Button` (signal / solid / outline / link),
   `Card` + `CardLink`, `SectionHead`.
3. **Type:** Geist for headings, weights 300 and 500. Atkinson Hyperlegible
   Next stays for body text at 17px (we kept 17px rather than Infosys's 16px
   so it reads well on low-end phones).
4. **Colour:** neutrals tinted with RIAH's kiosk blue, dark bands in RIAH
   navy (`night`), blue only for links and focus, and sign yellow as a single
   "spark": the one primary hero CTA per page. Green appears only in
   pictograms.
5. **Hero media:** a photo under a navy overlay. For now it's an AI-generated
   placeholder (`public/hero/freetown-dusk.jpg`, made with Figma AI) until the
   client supplies a real photo. It replaced the hand-drawn rays/hills/mast
   mural, which the owner rejected.
6. **Rollout:** home page, header and footer first, so the client could check
   it, then every inner page. The legacy kiosk utilities (`board`, `sign`,
   `shade`, `brush-in`), `ButtonLink`, `SignBand`, the Bowlby One font and the
   legacy `@theme` colours have been deleted. `DESIGN.md` now documents the
   new system.

## Adapted from infosys.com

- The section recipe: eyebrow, then title, then one-line lead, then a single
  CTA, then a grid. Light and dark bands alternate.
- A floating header, clear over the hero and frosted once scrolled. Nav links
  sit in a translucent pill.
- A huge light-weight display headline. Text tiers are tinted, never pure
  black.
- An inset rounded hero card holding media under a dark overlay.
- Primary CTAs as solid ink/white rather than the accent colour. Card shadows
  tinted with the brand hue.
- A link-column footer.

## Deliberately not copied

- Infosys logo, wordmark, tagline, copy, mascot, imagery, 3D renders, icons.
- Their violet/indigo palette. RIAH's own blue does the tinting.
- The 1700px container (RIAH stays at 1280px), the burger-only menu, the "Ask
  Leon" assistant, and carousels (they hide content RIAH's grids can show).

## Consequences

- The hero image is AI-generated. It's a placeholder and should not be
  presented as a real photo of RIAH's work.
- Contrast: every text/background token pair passes WCAG AA. `fg-subtle` was
  darkened to `#56657C` so it clears 4.5:1 on `surface-alt`.
