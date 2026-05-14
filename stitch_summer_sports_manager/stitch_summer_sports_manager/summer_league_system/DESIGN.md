---
name: Summer League System
colors:
  surface: '#f9fbe5'
  surface-dim: '#d9dcc6'
  surface-bright: '#f9fbe5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f5df'
  surface-container: '#eef0da'
  surface-container-high: '#e8ead4'
  surface-container-highest: '#e2e4cf'
  on-surface: '#1a1d10'
  on-surface-variant: '#444933'
  inverse-surface: '#2f3223'
  inverse-on-surface: '#f0f3dd'
  outline: '#747a60'
  outline-variant: '#c4c9ac'
  surface-tint: '#516600'
  primary: '#516600'
  on-primary: '#ffffff'
  primary-container: '#cdfd00'
  on-primary-container: '#5b7200'
  inverse-primary: '#add500'
  secondary: '#516600'
  on-secondary: '#ffffff'
  secondary-container: '#d1ee77'
  on-secondary-container: '#566c00'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#ebebeb'
  on-tertiary-container: '#6a6a6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5f400'
  primary-fixed-dim: '#add500'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#d1ee77'
  secondary-fixed-dim: '#b6d25f'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9fbe5'
  on-background: '#1a1d10'
  surface-variant: '#e2e4cf'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system captures the heat and adrenaline of summer competition through a high-energy, "Acid-Sport" aesthetic. The visual narrative balances professional tournament administration with a hyper-modern, tech-forward energy that feels fresh and unconventional.

The style is **Modern Corporate with a High-Velocity Edge**, utilizing a vibrant lime-driven palette that suggests movement, energy, and the outdoor turf. This shift creates a premium "new-age athletics" feel. It focuses on momentum, using card-based containers to organize complex athletic data into digestible, action-oriented views against a sophisticated, warm neutral backdrop. The interface feels professional and intense, echoing the focus of elite athletes in a modern digital era.

## Colors

The palette is driven by the high-visibility pairing of **Acid Lime** and **Moss Green**, balanced by a deep **Onyx Black** and anchored by **Stone Gray**.

*   **Acid Lime (#CDFD00):** Used for primary actions, navigation, and active states. It represents the high-energy, "on-the-field" aspect of the app.
*   **Moss Green (#688012):** Used for secondary elements and complementary branding to ground the vibrancy of the lime.
*   **Onyx Black (#000000):** A tertiary accent used for high-contrast details, sharp borders, or premium informational elements that require maximum visual weight.
*   **Stone Gray (#767967):** The dominant neutral color to ensure the UI feels grounded and sophisticated rather than stark, providing a warmer professional base.

## Typography

The typography strategy employs a "Scale and Impact" approach. **Montserrat** provides the muscle for the design system; its geometric, bold construction is reminiscent of stadium signage and jersey numbers. For long-form tournament rules and player rosters, **Inter** provides exceptional legibility and a neutral, professional contrast.

Large headlines should use heavy weights (700-800) with slightly tightened letter-spacing to create a sense of urgency and importance. Labels and small metadata should utilize uppercase styling to reinforce the sporty, authoritative aesthetic.

## Layout & Spacing

This design system uses a **Fluid Grid** with a strict 8px rhythm. 

*   **Mobile:** 4-column layout with 16px side margins. Content cards generally span the full width to maximize readability of match scores.
*   **Desktop:** 12-column grid with a maximum content width of 1280px. Layouts favor a "Dashboard" feel with a fixed sidebar for tournament navigation and a fluid main content area.
*   **Spacing Rhythm:** Use 24px (md) for spacing between unrelated sections and 12px (sm) for elements within a single card or component group.

## Elevation & Depth

To maintain a clean and professional look, depth is achieved through **Tonal Separation** and high-contrast accents rather than heavy traditional shadows.

*   **Level 0 (Background):** Warm Stone Neutral (#767967 based surfaces).
*   **Level 1 (Cards):** Refined neutral surfaces (using the surface-container variables) that provide a subtle lift. The presence of Onyx Black accents provides sharp definition where tonal separation is insufficient.
*   **Level 2 (Hover/Active):** Slight lightening of the container surface and an Acid Lime-colored outer glow to indicate interactivity.
*   **Interactive Overlays:** Modal windows use a backdrop blur (10px) to maintain the energy while focusing the user on the task.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to keep the vibe friendly and approachable, even within the high-energy environment. 

*   **Standard Cards:** 1rem (16px) corner radius.
*   **Buttons & Inputs:** 0.5rem (8px) corner radius to provide a sturdier, more "pro" appearance.
*   **Icons & Avatars:** Circular or heavily rounded (12px) containers to echo the shape of sports equipment.

## Components

### Buttons & Inputs
*   **Primary Button:** Solid Acid Lime with dark Moss Green Montserrat bold text. High-visibility and impactful.
*   **Secondary Button:** Ghost style with a Moss Green border and text.
*   **Input Fields:** Light neutral background with a 1px border that turns Acid Lime on focus.

### Cards & Lists
*   **Match Cards:** Feature a left-hand accent border in Onyx Black or Acid Lime for "Live" matches. Use tonal separation to distinguish cards from the neutral background.
*   **Team Rosters:** List items with 8px vertical spacing, using thin-line neutral separators.

### Icons
*   **Sport Icons:** Thin-line icons (1.5pt stroke) with rounded terminals. Each icon should be housed in a circular Moss Green or Onyx Black background when used as a category header.
*   **Navigation:** Minimalist line icons to keep the interface focused on the tournament data.

### Tournament-Specific Components
*   **Score Badge:** High-visibility pill-shaped container using Acid Lime background and dark neutral text for the leading score.
*   **Bracket Node:** Clean neutral cards connected by 2px thick Moss Green lines, emphasizing the path to the championship.