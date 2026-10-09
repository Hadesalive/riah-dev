# Design DNA: structure borrowed from infosys.com, mapped onto RIAH SL

Status: **draft for approval** (Phase 2). Nothing in the codebase has changed yet.

This is a study of *how* infosys.com is built (its scales, rhythm, hierarchy
and restraint), restated in RIAH's own colours, fonts and content. No Infosys
logos, imagery, illustrations, icons or copy are used anywhere.

## How this was measured

- Measured on 2026-10-09 in a real Chrome session (Claude in Chrome) using
  `getComputedStyle` tallies across every visible element, plus a visual
  scroll-through of the homepage and `/services.html`. Raw numbers are in
  `scripts/infosys-raw.json`.
- Playwright was blocked by Akamai ("Access Denied"). I did not try to get
  around the block, and those captures were thrown away.
- **Gap:** the browser window could not go below about 1347px, so desktop
  values are measured (1800px and 1347px) but **768px and 390px values are
  inferred**, not measured. Phase 4 screenshots of RIAH will cover all three
  widths.

## What makes it feel polished (summary)

1. **Restraint in colour.** About 95% of the page is white, a pale blue-grey and
   a near-black navy. The brand accent shows up in only two or three places.
2. **Two type families, few sizes, light weights.** The display text is huge
   but *light* (weight 300), and headings are weight 500. Nothing is bold and
   loud at the same time.
3. **Text is never pure black.** Primary text is a deep tinted navy and
   secondary text is a muted slate-indigo. That alone makes it read as
   "corporate".
4. **A predictable section recipe.** Centred title, then a one-line lead,
   then at most one CTA, then a grid. Repeated down the page.
5. **Bands alternate:** pale, white, black, pale, dark, white. Each band is
   full-bleed with generous vertical padding (75px).
6. **Media does the emotional work**, not paint or colour: a full-bleed photo
   or 3D render under a dark overlay, with the cards in rounded white panels.

## Tokens

### Type

| Infosys (measured) | Role | Proposed RIAH token |
|---|---|---|
| Geist 126/126 w300, -1px (about 7vw, 94px at 1347px) | Hero display | `display`: `clamp(2.75rem, 7vw, 6.5rem)` / 1.0, w300, -0.02em |
| (inner-page hero titles, light) | Page title | `h1`: `clamp(2.25rem, 5vw, 4rem)` / 1.05, w300, -0.02em |
| Geist 32/38.4 w500, -1px | Section title | `h2`: `clamp(1.75rem, 2.6vw, 2.25rem)` / 1.2, w500, -0.02em |
| Geist 24/28.8 w500 | Card title | `h3`: `1.5rem` / 1.2, w500 |
| Geist 20/24 w600, +0.5px | Small card title | `h4`: `1.25rem` / 1.2, w600 |
| Geist 18/21.6 w500, +1px, UPPERCASE | Eyebrow | `eyebrow`: `0.8125rem` / 1.2, w600, +0.08em, uppercase |
| Inter 20/1.5 | Lead paragraph | `lead`: `1.25rem` / 1.5, w400 |
| Inter 16/25.6 | Body | `body`: `1rem` / 1.6, w400 (RIAH currently uses 17px, see Q3) |
| Inter 14 / 13 w600 | Small text, chip | `small`: `0.875rem` / 1.45; `caption`: `0.8125rem` / 1.4, w600 |

**Pairing logic:** a geometric display sans for headings (Geist) and a neutral
workhorse sans for reading (Inter). Weight carries the hierarchy (300, then
500, then 600) more than size jumps do.

**Font proposal for RIAH:**
- **Headings: Geist.** It's free (SIL OFL) and in `next/font/google`. It's the
  same family Infosys uses, but Geist is a public open-source font made by
  Vercel, not an Infosys brand asset. If you'd rather not share a typeface
  with them, use **Manrope** or **Plus Jakarta Sans**.
- **Body: keep Atkinson Hyperlegible Next.** It's already part of RIAH's
  identity, it's built for legibility, and it plays the same neutral role as
  Inter.
- **Bowlby One** (the current showcard lettering) gets demoted. See Q1.

### Spacing

Infosys values (5, 8, 10, 12, 16, 30, 50, 75) are Bootstrap-ish rather than a
strict grid. The rhythm under them is about 8px for components and about 25px
steps for sections (50/75). RIAH would normalise to an **8px base**:

`1:4 · 2:8 · 3:12 · 4:16 · 6:24 · 8:32 · 12:48 · 16:64 · 20:80 · 24:96 · 32:128`

| Use | Infosys | RIAH |
|---|---|---|
| Section padding, main | 75px | `section-y`: 64px mobile, 96px ≥1024 |
| Section padding, secondary | 50px | `section-y-sm`: 48px mobile, 64px ≥1024 |
| Title, then lead | about 16px | 16px |
| Lead, then CTA | about 24px | 24px |
| Head block, then grid | about 48px | 48px |
| Card padding | 16 to 24px | 24px, 32px ≥768 |
| Grid gap | 16 to 24px | 16px mobile, 24px ≥768 |

### Containers, gutters, breakpoints

- Infosys: a 1700px container with 12px padding, and cards inset about 26px
  inside that. It's very wide because it's tuned for 1800px screens.
- RIAH: keep **Tailwind's breakpoints** (640 / 768 / 1024 / 1280 / 1536). Infosys
  uses Bootstrap's (576 / 768 / 992 / 1200 / 1400), which are close enough that
  copying them buys nothing.
- `container`: max-width **1280px** (RIAH's current `max-w-7xl`). That's right
  for RIAH's amount of content. Gutters: 16px under 640, 24px from 640, 32px
  from 1024.
- `container-narrow`: 768px for centred section heads and long text.
- `hero-inset`: the hero sits in a full-width band with **8px padding mobile,
  12px desktop** and a rounded media card inside. That's Infosys's 10px-padded
  hero card, and RIAH already does something similar with its board frame.

### Radius, elevation, borders, motion

| Token | Infosys | RIAH |
|---|---|---|
| `radius-xs` | 2 to 5px (chips) | 4px |
| `radius-sm` | 8px (buttons) | 8px |
| `radius-md` | 10px (cards) | 12px |
| `radius-lg` | 15 to 16px (hero, big cards) | 20px |
| `radius-pill` | 50px (nav pill) | 9999px |
| `shadow-sm` | 0 4px 22px rgba(0,0,0,.25) on media | `0 4px 20px rgb(15 23 42 / .12)` |
| `shadow-md` | 0 15px 22px rgba(118,95,184,.3), tinted with the brand hue | `0 16px 32px -12px rgb(37 99 235 / .25)` (tinted kiosk blue) |
| Border | 1 to 2px hairlines `#D1DCEB` | `1px` `--line` (see colour) |
| `ease-out` | `ease` | `cubic-bezier(.2,.7,.2,1)` |
| `dur-fast` | .15 to .2s (hover) | 150ms |
| `dur-base` | .5s (reveal, carousel) | 400ms |

The tinted shadow is worth taking: Infosys tints card shadows with its brand
violet, and RIAH would tint with kiosk blue. Reveals use fade plus a small
translate, and nothing bounces. `prefers-reduced-motion` turns off all reveals.

### Colour system

**Infosys structure (measured share of text and background usage):**

| Layer | Infosys | Role |
|---|---|---|
| Text, primary | `#0E0A42` (81 uses) | deep tinted navy, never black |
| Text, secondary | `#444C79` (39) | muted indigo-slate, 8.2:1 on white |
| Text, inverse | `#FFFFFF` (31) | on dark bands and media |
| Surface, base | `#FFFFFF` | cards, white bands |
| Surface, alt | `#E9EEF7` | pale blue-grey band (most common band colour) |
| Surface, alt-strong | `#D1DCEB` | stronger band, borders |
| Surface, dark | `#000` / `#141414` | showcase and promo bands |
| Chip / tag | `#1A1552` with white text | small navy tags ("Case study") |
| Accent | `#2E62F5` (2 uses) plus a violet word highlight | links, focus, one highlighted word |

That's one hue family (indigo) for neutrals, 3 surface tints, 3 text tiers,
and one accent used about twice per page. The CTAs are **black or white, not
the accent colour**.

**Proposed RIAH version, using RIAH's blue as the tinting hue:**

| Token | Value | Use | Contrast |
|---|---|---|---|
| `text` | `#0F172A` ink | primary text on light | 17.9:1 on white, 15.6:1 on `surface-alt` |
| `text-muted` | `#475569` | secondary text, leads | 7.6:1 on white, 6.6:1 on `surface-alt` |
| `text-subtle` | `#64748B` | captions, meta only | 4.8:1 on white (AA, keep it ≥14px) |
| `text-inverse` | `#FFFFFF` | on dark | 17.7:1 on `night` |
| `text-inverse-muted` | `#CBD5E1` | leads on dark | 11.9:1 on `night` |
| `surface` | `#FFFFFF` | cards, white bands | |
| `surface-alt` | `#EAF0FB` (kiosk-tinted) | main alternate band | |
| `surface-alt-strong` | `#D6E0F2` | stronger band, hairlines (`line`) | |
| `night` | `#0B1733` | dark bands (instead of Infosys's black) | |
| `night-deep` | `#070F24` | footer bottom, hero frame | |
| `accent` | `#2563EB` kiosk | links, focus ring, active nav, one highlighted word | 5.2:1 on white |
| `accent-strong` | `#1D4ED8` | link hover, links on `surface-alt` | 5.9:1 on `surface-alt` |
| `signal` | `#FACC15` sign yellow | **brand spark, at most one use per viewport** | ink on it 11.7:1, on night 11.6:1 |
| `money` | `#10B981` | pictogram detail only | |

**Accent usage rules:**
1. CTAs follow Infosys: **solid ink button on light bands, solid white
   button on dark bands.** Secondary CTAs are outline buttons. Tertiary CTAs
   are underlined text links with an arrow.
2. **Sign yellow is a spark, not a field.** It's used for the single most
   important CTA on a page (the hero "Request a consultation"), the focus
   ring, and the small details in the pictograms. No yellow bands, no yellow
   headlines.
3. No full-bleed bright-blue or green bands. Blue becomes the *tint* of the
   neutrals plus link colour. That directly answers the client's "too bright"
   complaint.
4. At most one highlighted word per page in `accent`, like Infosys's single
   violet word in a section title.

## Layout and hierarchy patterns

**P1. Header.** Infosys: floating, transparent over the hero. A round menu
button and logo on the left, a translucent white pill nav in the centre
(`rgba(255,255,255,.6)` with backdrop blur), a dark pill CTA on the right. It
becomes a frosted bar on scroll, and the full menu is behind the burger.
*RIAH adaptation:* a sticky header, **transparent over dark heroes and frosted
`night/80` with blur once scrolled**, 72px tall, then 64px when scrolled. RIAH
has only 6 nav items, so they stay inline at 1024px and up (no mega-menu). The
centred nav links sit in a subtle pill, and the CTA is on the right. Mobile
keeps the existing full-width drawer.

**P2. Home hero.** Infosys: an inset rounded media card filling the viewport,
a dark overlay, one centred light-weight headline, almost nothing else.
*RIAH adaptation:* an inset rounded `night` card about 85vh tall. Media is the
existing mural (rays, hills and mast) until RIAH has real photography, then a
photo under a `night` overlay. The `display` headline is white weight 300.
Keep RIAH's lead line and 2 CTAs (yellow primary, white outline secondary).
"What we do" moves out of the hero into P4 below. The hero stays left-aligned
rather than centred, because RIAH has a sub-line and CTAs that Infosys's hero
doesn't.

**P3. Inner-page hero.** Infosys: an inset card with artwork fading to white,
a breadcrumb at top-left, a light-weight title at the bottom.
*RIAH adaptation:* `SignBand` becomes `PageHero`: an inset `night` card about
320 to 420px tall, a breadcrumb or eyebrow, an `h1` weight 300 in white, a lead
in `text-inverse-muted`, and an optional pictogram on the right at
lg and up.

**P4. Section head.** It's the same recipe every time: an optional `eyebrow`,
then `h2`, then a `lead` in `text-muted` (max 60ch), then an optional single
CTA. It's **centred** for overview sections and **left-aligned with a 5/7
split** for detail sections (services, industries), which matches the 5/7
grids RIAH already uses.

**P5. Card grid.** White `surface` cards, `radius-md`, `shadow-md` on hover
only. Inside: a media or pictogram area, then an `h3` and body, then a text
link with an arrow pinned to the bottom. Columns: 1 below 640, 2 from 640,
3 from 1024 (4 only for compact link cards). Infosys raises the middle card in
its 3-up row; RIAH can use that once, in the featured-services row.

**P6. Showcase band (dark).** `night` band, centred section head in inverse
colours, a row of cards. Infosys uses a horizontal scroller here. RIAH uses it
for "How a project runs", where the 5 steps become cards on `night` instead of
the current yellow band.

**P7. Link grid.** Infosys's "Industries and services": 4 columns of underlined
links on `surface-alt`. RIAH uses it for the other services and for the
industries list on the home page.

**P8. Split promo.** A dark band, with eyebrow, h2, lead and one white CTA on
the left and media on the right. RIAH uses it for licensing ("We also supply
the software") and for `ClosingCall`, replacing the green board.

**P9. Footer.** White, with 4 link columns. Column headings are about 20px
weight 500 in `text-muted`, and links are 16px with a hairline underline,
over a bottom bar with legal links and copyright.
*RIAH adaptation:* keep the big "Write to us" email (RIAH's own idea; set it
in Geist 300 rather than showcard yellow) above 3 columns: Services,
Company, Legal. Light `surface` background with a `night-deep` bottom bar. The
3-stripe paint-tin bar goes (or becomes a 2px accent line, see Q1).

**CTA hierarchy.**
| Level | Look | Example |
|---|---|---|
| Primary (once per page) | solid `signal` yellow, ink text, `radius-sm`, 48px | hero "Request a consultation" |
| Primary (elsewhere) | solid ink (light bands) or white (dark bands) with a trailing arrow ↗ | "See licensing", "Send" |
| Secondary | 1px outline in the current text colour | "See all services" |
| Tertiary | underlined text link with an arrow, `accent` | "More about networks →" |

**Section rhythm for the home page:**
`hero (night, inset) → sectors (surface) → services (surface-alt) →
how a project runs (night) → licensing (surface, split) → closing call (night-deep, split) → footer (surface)`.
That alternates light and dark the way Infosys does, and never has two dark
bands in a row (except closing call into the footer bar, which is fine).

## Mapping table

| RIAH page / component | Today | Adopts |
|---|---|---|
| `header.tsx` | solid ink bar, yellow active state | P1 (transparent then frosted, accent active underline) |
| `page.tsx`, hero | navy board + mural + menu board | P2; the menu board moves to the next section as a P5 grid |
| `page.tsx`, "Who we work for" | 4 painted colour boards | P4 centred + P5 2×2 white cards (pictogram, h3, chips as `caption` tags) |
| `page.tsx`, "From the cable to the code" | blue band, wall boards | P4 split + P5 (2 featured raised cards + 3-col) on `surface-alt` |
| `page.tsx`, "How a project runs" | yellow band, numbered timeline | P6 on `night`, 5 step cards |
| `page.tsx`, licensing | ink band, dotted price list | P8 split on `surface`: list right, eyebrow + h2 + CTA left |
| `closing-call.tsx` | green board | P8 on `night-deep`, white primary CTA |
| `sign-band.tsx` | blue board, showcard title | P3 `PageHero` |
| `services/page.tsx` | coloured bands per service | P3 + repeated P4 split (5/7) alternating `surface` / `surface-alt` + P8 for the "buying software too" board |
| `industries/page.tsx` | coloured bands per sector | P3 + P4 split alternating surfaces + `dl` styled as a P5 list |
| `about/page.tsx` | showcard h2 + white boards | P3 + P4 split + P5 2-col |
| `licensing/page.tsx` | 3 painted boards | P3 + P5 3-col white cards |
| `sponsorships/page.tsx` | ink and yellow boards + cards | P3 + P8 (how sponsors help) + highlighted card for the funding need (white with an `accent` top rule, not yellow) + P5 3-col |
| `contact/page.tsx` | blue board + white form board | P3 + 5/7 split: details on `surface-alt`, form card on `surface` |
| `contact-form.tsx` | wall inputs | inputs `surface`, 1px `line` border, `radius-sm`, 48px, accent focus ring |
| `prose-page.tsx` (privacy, terms) | SignBand + prose | P3 compact + `container-narrow` prose in Atkinson |
| `footer.tsx` | ink, big yellow email, stripe | P9 |
| `button.tsx` | 4 painted variants, 2px ink keyline | CTA hierarchy above: `signal`, `solid`, `outline`, `link`, each with light/dark awareness |
| `pictogram.tsx` | coloured icons | unchanged (they're RIAH's illustration language and carry the brand colour now that the bands don't) |
| `hero-backdrop.tsx` | mural | kept as P2 media until there's photography |
| `globals.css` `board`, `shade`, `sign`, `brush-in` | painted-kiosk utilities | retired, apart from anything kept under Q1 |
| `DESIGN.md` | painted-kiosk system | rewritten to the new tokens in Phase 3 |

## Not copied, on purpose

- Infosys logo, wordmark, the "Navigate your next" line or any copy, their
  mascot, 3D renders and photography, their icons.
- Their violet/indigo brand hue. RIAH's neutrals are tinted with RIAH's blue
  instead.
- The 1700px ultra-wide container. RIAH stays at 1280px.
- The burger-only full-screen menu and "Ask Leon" AI pill.
- Carousels. Infosys uses several, but they hide content, and RIAH's content
  fits in grids.

## Open questions for your approval

1. **How much of the painted-kiosk identity survives?** Recommended: Bowlby
   One and the pinstripe/brush-grain boards are retired. The kiosk character
   lives on only in the pictograms, the hero mural and yellow as a single
   spark. The alternative is to keep Bowlby One for the hero `display` line
   only. That's more distinctive, but it fights the calm the client is asking
   for.
2. **Heading font:** Geist (same family as Infosys, free) or Manrope / Plus
   Jakarta Sans (free, and avoids sharing a typeface with the reference)?
3. **Body size:** move from 17px to Infosys-style 16px, or keep 17px for
   legibility on low-end phones (recommended: keep 17px)?
4. **Photography:** does the client have photos of their installs, team or
   offices? It's the single biggest gap between the two sites. Without photos,
   the hero keeps the mural.
5. **Scope:** the whole site in Phase 3 (header, footer, all 10 pages), or the
   home page first for a client check-in before the rest?
