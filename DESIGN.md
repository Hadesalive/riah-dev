---
name: RIAH SL
description: A painted agent kiosk for an engineering firm. Flat paint boards, showcard lettering, plain words.
colors:
  kiosk: "#2563eb"
  kiosk-deep: "#1d4ed8"
  kiosk-ink: "#1e3a8a"
  sign: "#facc15"
  sign-bright: "#fde047"
  sign-deep: "#ca8a04"
  ink: "#0f172a"
  ink-soft: "#334155"
  board-muted: "#cbd5e1"
  money: "#10b981"
  wall: "#f8fafc"
  white: "#ffffff"
  mark: "#3b4a9c"
typography:
  display:
    fontFamily: "Bowlby One, Atkinson Hyperlegible Next, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Bowlby One, Atkinson Hyperlegible Next, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  title:
    fontFamily: "Bowlby One, Atkinson Hyperlegible Next, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  title-sm:
    fontFamily: "Bowlby One, Atkinson Hyperlegible Next, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.43
rounded:
  board: "6px"
  control: "6px"
  pill: "9999px"
spacing:
  frame: "12px"
  frame-sm: "16px"
  board-gap: "16px"
  board-pad: "28px"
  board-pad-lg: "40px"
  band: "80px"
  band-lg: "112px"
  container: "1280px"
components:
  button-sign:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-sign-hover:
    backgroundColor: "{colors.sign-bright}"
  button-sign-active:
    backgroundColor: "{colors.sign-deep}"
  button-sign-lg:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 28px"
    height: "56px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-ink-hover:
    backgroundColor: "{colors.ink-soft}"
  button-outline-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.kiosk-ink}"
  button-outline-dark-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  input:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "{colors.white}"
  nav-fascia:
    backgroundColor: "{colors.kiosk}"
    textColor: "{colors.white}"
    height: "72px"
  board-kiosk:
    backgroundColor: "{colors.kiosk}"
    textColor: "{colors.white}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad-lg}"
  board-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad-lg}"
  board-money:
    backgroundColor: "{colors.money}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad-lg}"
  board-sign:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad-lg}"
  board-whitewash:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad}"
---

# Design System: RIAH SL

## Overview

**Creative North Star: "The Painted Agent Kiosk"**

riah.dev is built like the hand-painted mobile-money and telecom kiosks of Freetown: a shopfront you understand from across the street. Whole bands of the page are flat paint fields (kiosk blue, sign yellow, slate, emerald, whitewash), and the content sits on painted boards inside them. The big words are showcard lettering with a painter's drop shade; everything a visitor has to read is a highly legible sans at a generous size.

Density is low and the voice is loud but plain. Each band says one thing in sign lettering, explains it in a sentence or two of body copy, and offers one obvious next step, almost always the yellow button. Hierarchy comes from paint and scale, not from hairlines, cards-in-cards or decoration. Authored flat pictograms with slate outlines do the work photographs would do elsewhere; the system carries no photography and no invented proof.

The world rejects the pale hairline list page and the SaaS dark hero with an icon-card grid. Depth is painted, not rendered: a pinstripe inside each board, a faint brush grain, and a drop shade under lettering.

**Key Characteristics:**
- Paint fields own full-width bands; boards sit inside them on a 12-16px frame.
- Showcard display lettering (Bowlby One) with a hard drop shade, mixed case for legibility.
- Atkinson Hyperlegible Next for every word that must be read.
- One primary action colour: sign yellow with an ink keyline.
- Flat, slate-outlined pictograms, one per service, sector or product.
- Lettering brushes in once, left to right, on load.

## Colors

Four paint tins plus whitewash, taken from the brand brief and pushed to full saturation so every band reads at a distance.

### Primary
- **Kiosk Blue** (kiosk): the dominant paint. Header fascia, the opening signboard on every page, the services band, the ministries board. White and sign yellow are the only text colours allowed on it.
- **Kiosk Deep** (kiosk-deep): the wall behind a blue signboard (the frame around the hero and inner-page sign bands) and the services band field. Also the hover fill for blue header controls.
- **Kiosk Ink** (kiosk-ink): link and technical-subtitle colour on light boards, the mobile menu panel, and the hover text on the light outline button.

### Secondary
- **Sign Yellow** (sign): lettering on blue and slate boards, the primary button, the focus ring, text selection, the "How a project runs" band, and the active nav underline.
- **Sign Bright** (sign-bright): hover fill for yellow buttons only.
- **Sign Deep** (sign-deep): pressed state of yellow buttons and the drop shade for ink lettering on a yellow band.

### Tertiary
- **Money Emerald** (money): money, health and "it worked" boards: the health sector, messaging and payments, the closing call, the sent-message badge. Text on it is always ink.

### Neutral
- **Slate Ink** (ink): body text, outlines on pictograms and buttons, dark boards (menu board, hospitality, licensing band, footer), and the default drop shade.
- **Ink Soft** (ink-soft): secondary body text on light surfaces; hover fill for the ink button.
- **Board Muted** (board-muted): secondary text on slate boards and the footer.
- **Whitewash Wall** (wall): page background, light bands, featured service boards, input fields.
- **White** (white): light boards on whitewash, chips, text on blue and slate.
- **Brand Indigo** (mark): reserved for the RIAH logo mark (public/brand). The site places the white mono logo on the blue fascia and slate footer; indigo is not a UI colour.

### Named Rules
**The Paint Tin Rule.** A band or board is one flat paint from the five tins (kiosk, sign, ink, money, wall/white). No gradients, no tints between tins, no translucent glass.

**The Readable Pairs Rule.** Ink text on yellow, emerald, whitewash and white; white or yellow text on blue and slate. Never white on yellow or emerald, never yellow on whitewash.

**The One Yellow Button Rule.** The primary action is the yellow button with an ink keyline. Secondary actions are outline or ink buttons, never a second yellow.

## Typography

**Display Font:** Bowlby One (with Atkinson Hyperlegible Next, sans-serif fallback), loaded as `--font-showcard` and used through `--font-sign`.
**Body Font:** Atkinson Hyperlegible Next (with ui-sans-serif, system-ui), loaded as `--font-body`.

**Character:** A heavy showcard face that reads like brush lettering on a kiosk wall, paired with a sans designed for low-vision legibility. The sign shouts the headline; the sans explains it in plain words.

### Hierarchy
- **Display** (400, clamp(3rem, 7.4vw, 6rem), 0.98): the home signboard only ("Networks. Servers. SMS. Payments."), one word per line.
- **Headline** (400, clamp(2.25rem, 4.6vw, 3.75rem), 0.98): inner-page sign bands and section headings on the home page.
- **Title** (400, clamp(1.75rem, 3vw, 2.5rem), 0.98): per-service and per-sector band headings, the closing call, the contact sign.
- **Title Small** (400, 1.5rem to 1.875rem, 0.98): board titles (sector boards, menu board heading, step names, mobile menu items, prose h2). This is the floor for showcard.
- **Lead** (400-500, 1.25rem, 1.625): the one or two sentences that follow a sign. Up to 2xl on the home hero.
- **Body** (400, 1.0625rem, 1.6): running copy; long-form prose at 1.125rem with a 42rem measure.
- **Card title** (700, 1.25rem, 1.25): small titles on whitewash boards are body bold, not showcard.
- **Label** (700, 0.875rem): chips, technical subtitles under a plain-language name, menu-board details.

### Named Rules
**The Sign Scale Rule.** Showcard appears only at sign scale (1.5rem and up) and only on headings. Anything smaller, or anything read as a sentence, is Atkinson Hyperlegible Next.

**The Mixed Case Rule.** Sign lettering is set in sentence or title case for readers who are not specialists. The only uppercase lettering is the five project step names (Audit, Design, Test, Deploy, Support).

**The Plain Name First Rule.** A service is named in plain words first ("Software checked before it goes live"), with its technical name as a bold label beneath it.

## Layout

The page is a stack of full-bleed paint bands. Content is held in a 1280px container with 16px side padding on mobile, 24px at sm, 32px at lg. Bands breathe at 80px vertical padding, 96-112px at lg.

Signboards are framed: the band paints a 12px edge (16px from sm) of a deeper paint around a board, so the board reads as a sign mounted on a wall. Boards in a set sit 16px apart on a 2-column (md) or 4-column (lg) grid. Large signboards split 7fr / 5fr (sign plus menu board) or 5fr / 7fr (heading plus list) at lg and stack below it.

Long inner pages (services, industries) add a sticky slate sub-nav under the header that lists each section with its pictogram and scrolls horizontally on small screens. Each section is then its own paint band, alternating tins.

## Elevation & Depth

Depth is painted. A board is flat paint with an inner pinstripe (2px outline inset 10px, 25-55% of a contrasting colour) and a faint multiply brush grain (10% on paint, 3.5% on whitewash). Lettering carries the sign painter's drop shade. Soft shadows appear only where something is physically lifted off the wall: the sticky header, the menu board on the hero, and pictograms on bands.

### Shadow Vocabulary
- **Drop shade** (`text-shadow: 0.055em 0.06em 0 var(--shade, #0f172a)`): every shaded sign. Shade colour is chosen against the paint: ink on blue, kiosk on whitewash, sign-deep on yellow, wall on emerald, black on slate.
- **Fascia lift** (`box-shadow: 0 6px 18px -8px rgba(15,23,42,0.45)`): the sticky header over content.
- **Menu board lift** (`box-shadow: 0 24px 40px -18px rgba(2,6,23,0.7)`): the slate menu board hung on the blue hero signboard.
- **Pictogram lift** (`filter: drop-shadow(0 8px 10px rgba(15,23,42,0.25))`, 0.25-0.35 alpha): large pictograms standing on a band.
- **Chip press** (`box-shadow: inset 0 -2px 0 rgba(15,23,42,0.15)`): the painted edge on white chips.

### Named Rules
**The Shade Belongs To Lettering Rule.** The hard offset shade is a sign-painting device for showcard lettering. Boards and buttons get a pinstripe or an ink keyline, never a hard offset box shadow.

**The Painted Depth Rule.** Boards are flat at rest. Interactive boards lift 4px on hover; they do not gain a shadow.

## Shapes

Corners are slightly softened, like a cut and primed board: 6px on boards, buttons and inputs. Pills (fully rounded) are reserved for chips, step-number discs and status badges. Rules inside boards are dashed (menu board rows, licensing list), the licensing list hangs from a 4px yellow top rule, and its "Supplied and installed" leader is a 3px dotted line, as on a painted price list. The footer opens with a three-stripe band in kiosk, sign and money: the kiosk's paint tins.

## Components

### Buttons
Painted sign buttons: flat paint with the painter's ink keyline, bold body type, no shadow.
- **Shape:** gently rounded (6px), 2px border.
- **Sign (primary):** sign yellow, ink text, ink border. 44px tall with 20px side padding at 0.95rem; large size 56px tall, 28px padding, 1.125rem.
- **Hover / Active:** fill moves to sign bright, pressed to sign deep; 150ms colour transition. Focus uses the global ring.
- **Ink:** slate fill, white text, hovers to ink soft.
- **Outline light:** 80% white border and white text on blue; fills white with kiosk-ink text on hover.
- **Outline dark:** ink border and text on light paint; fills ink on hover.

### Chips
- **Style:** white pill, ink bold 0.875rem text, 4px 12px padding, an inset 2px painted bottom edge.
- **State:** static labels on home sector boards; on the industries page they become links that swap between ink and white or white and yellow on hover, depending on the band.

### Cards / Containers (Boards)
- **Corner Style:** 6px.
- **Background:** one tin per board. Sets mix tins deliberately (health on money, fintech on sign, government on kiosk, hospitality on ink).
- **Shadow Strategy:** none at rest; see Elevation & Depth.
- **Border:** the inner pinstripe, set per board through `--pin` (white at 50-55% on blue, ink at 30-35% on yellow and emerald, yellow or white at 30-55% on slate, kiosk at 25-45% on white and whitewash).
- **Internal Padding:** 28px, 40px from sm; signboards 48px at sm and up.
- **Hover:** linked boards translate up 4px over 200ms.

### Inputs / Fields
- **Style:** whitewash fill, 2px ink border at 25% opacity, 6px corners, 12px 16px padding, 1rem text. Labels sit above in body bold.
- **Focus:** border turns kiosk blue, fill turns white, and a 3px kiosk outline at 30% sits flush.
- **Error / Disabled:** the submit button drops to 60% opacity while sending.

### Navigation
- **Fascia:** sticky, 72px, kiosk blue, white mono logo left, yellow "Request a consultation" right. Links are body semibold white; hover and the current page turn sign yellow, and the current page carries a 3px yellow underline bar.
- **Mobile:** below lg the links collapse behind a 44px menu button. The panel is kiosk ink with a 4px yellow top rule; items are showcard at 1.5rem in white, the current page in yellow, divided by 15% white rules, with a full-width large yellow button at the end.
- **Section sub-nav:** sticky slate bar under the fascia with pictogram plus short name per section, white text that turns yellow on hover.
- **Footer:** slate, three paint-tin stripes on top, white mono logo, yellow email link, column titles in body bold white, links in board muted turning yellow on hover.

### Signboard
The opening of every page: a blue board framed by kiosk deep, yellow shaded sign lettering that brushes in once (clip-path reveal left to right, 0.9s, cubic-bezier(0.16, 1, 0.3, 1), 0.16s stagger per line, disabled under reduced motion), a white lead sentence, and either a large pictogram (inner pages) or the slate menu board (home).

### Menu Board
A slate board with a yellow pinstripe and a lifted shadow, titled in white showcard, listing services as rows divided by dashed rules: 44px pictogram, bold white name that turns yellow on hover, board-muted detail line.

### Pictograms
Authored flat SVGs on a 64px grid: 3px slate outlines with round joins, fills only from the paint tins and whitewash. Shown at 44-56px in lists, 80-96px on boards, 96-144px on bands. Always decorative (aria-hidden) next to a text label.

### Step Line
Numbered white discs (64px, 4px ink border, showcard numerals) joined by a 4px ink rule, horizontal at lg and vertical below. Step names are the one uppercase sign.

## Do's and Don'ts

### Do:
- **Do** give every band one paint from the five tins and frame signboards with a 12-16px edge of deeper paint.
- **Do** set headings in showcard with the drop shade, choosing the shade colour against the paint (ink on blue, kiosk on whitewash, sign deep on yellow, wall on emerald, black on slate).
- **Do** use Atkinson Hyperlegible Next for anything read as a sentence, and body bold for small titles.
- **Do** name services in plain words first, technical name second as a bold label.
- **Do** pair every service, sector or product with its authored flat pictogram: 3px slate outline, tin fills.
- **Do** keep the yellow button with ink keyline as the single primary action in any view.
- **Do** keep the global focus ring (3px sign-yellow outline, 3px offset, 6px ink halo) on every interactive element.

### Don't:
- **Don't** set showcard below 1.5rem or use it for running copy.
- **Don't** set sign lettering in all caps beyond the project step names.
- **Don't** put white text on yellow or emerald, or yellow text on whitewash.
- **Don't** use gradients, glass, or tints between paint tins on bands or boards.
- **Don't** put hard offset box shadows on boards or buttons; the hard shade belongs to lettering.
- **Don't** use stock photography or invented client logos, metrics or testimonials; pictograms carry the imagery.
- **Don't** reuse the pale hairline list or the dark SaaS hero with an icon-card grid.
