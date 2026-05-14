---
name: Summer League Dark Mode
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#add500'
  primary: '#ffffff'
  on-primary: '#293500'
  primary-container: '#c5f400'
  on-primary-container: '#566c00'
  inverse-primary: '#516600'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c5f400'
  primary-fixed-dim: '#add500'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is an ultra-high-contrast, energetic framework designed for the intensity of competitive sports environments. The brand personality is aggressive, modern, and kinetic, optimized for low-light environments where visual impact is paramount. 

The style utilizes a **High-Contrast / Bold** aesthetic rooted in "Pitch Black" minimalism. By removing the traditional "Dark Grey" surfaces found in standard dark modes, the design system creates a dramatic stage for its vibrant accent. The visual language leans into speed and precision, using sharp typography and glowing accents to evoke the feeling of a night-time championship under stadium lights.

## Colors

The palette is anchored by a true black (#000000) canvas to maximize the luminance of the Neon Lime (#cdfd00) primary accent. 

- **Primary:** Neon Lime is used strictly for high-priority actions, active states, and critical branding elements.
- **Surface Strategy:** To maintain the "Pure Black" aesthetic, containers use deep obsidian shades (#121212) only when necessary for depth. 
- **Typography Contrast:** Primary text is pure white (#ffffff) for maximum legibility, while secondary metadata uses a mid-tone grey (#a0a0a0) to establish hierarchy without competing with the primary content.
- **Accents:** Use white as a secondary accent for borders and icons to maintain a clean, athletic look.

## Typography

The design system exclusively uses **Montserrat** to maintain an urban, geometric, and sporty feel. 

- **Weight Scaling:** Use ExtraBold (800) and Bold (700) for headlines to mimic the heavy impact of sports jerseys and scoreboard graphics.
- **Caps Strategy:** Use all-caps for labels and small navigational elements to enhance the energetic, "shouted" tone of the brand.
- **Readability:** On the pure black background, body text uses a slightly lighter weight (400) and generous line-height to prevent "ink bleed" visual fatigue.
- **Tracking:** Tighten letter-spacing on large display type for a more compact, aggressive appearance; loosen it on small uppercase labels for clarity.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Rhythm:** An 8px base grid drives all spatial decisions, ensuring a disciplined, athletic structure.
- **Negative Space:** Use generous "xl" spacing (48px+) between major sections to let the high-contrast elements breathe and prevent the black background from feeling cramped.
- **Alignment:** Content should predominantly be left-aligned to mirror the fast, left-to-right reading speed of sports stats and tickers.

## Elevation & Depth

This design system eschews traditional soft shadows in favor of **Tonal Layers** and **Neon Glows**. 

- **Layers:** Depth is achieved by placing #121212 surfaces on the #000000 background. Higher elevation is indicated by slightly lighter surfaces (#1f1f1f).
- **Outlines:** Instead of shadows, use 1px solid borders in #1f1f1f for passive elements and #cdfd00 for active/focused elements.
- **Glows:** For high-priority interactive components (like primary buttons), use a subtle, localized outer glow using the primary color (#cdfd00) with a 15-20% opacity to simulate the radiance of stadium neon.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the brand is aggressive, the slight rounding of corners provides a contemporary "pro-tech" finish. 
- **Buttons and Inputs:** Use the standard 4px (0.25rem) radius.
- **Cards:** Use 8px (0.5rem) for larger containers to create a clear structural distinction.
- **Data Points:** Small badges or tags should remain sharp or use the minimum 4px radius to maintain a technical, data-driven appearance.

## Components

- **Buttons:** Primary buttons are solid Neon Lime (#cdfd00) with black text. Secondary buttons are outlined in white or grey with white text. Use "Label-Bold" typography for button labels.
- **Input Fields:** Fields use a 1px border (#1f1f1f) on the black background. Upon focus, the border switches to Neon Lime with a subtle glow.
- **Cards:** Cards use a #121212 background with no shadow. Use a 1px border (#1f1f1f) to define the edge against the pure black page.
- **Chips/Badges:** Use high-contrast combinations—either Neon Lime background with black text for "Live" or "Active" states, or black background with a white border for neutral categories.
- **Lists:** Separate list items with a thin 1px line (#1f1f1f). Ensure interactive list items have a #1f1f1f hover state.
- **Scoreboards/Stats:** Specialized components should use high-weight Montserrat. Use Neon Lime for winning scores or highlighted player stats.