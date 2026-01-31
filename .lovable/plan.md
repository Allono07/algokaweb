

# Algoka AI Agency Landing Page

## Overview
A visually stunning, animated landing page for Algoka AI agency featuring a rocket journey through space with progressive stage labels (BUILD → SOLVE → THINK), CSS-based clouds, flickering flame effects, and a twinkling star field background.

---

## Layout Structure

### Desktop View
- **Left 65-70%**: Rocket animation area with curved SVG motion path and three progressive labels
- **Right 30-35%**: Brand content section with heading, subheading, and CTA button
- **Bottom**: CSS-generated clouds with parallax drift effect
- **Background**: Dark space blue (#03214A) with animated star field

### Mobile View
- Vertically stacked layout
- Centered text content at top
- Scaled-down rocket animation below
- Shorter motion path for compact screens
- Hamburger menu for navigation

---

## Components to Build

### 1. Navbar
- Logo "ALGOKA" on the left
- Navigation items: HOME, ABOUT, PROJECTS, CONTACT (placeholder links)
- Mobile: Collapsible hamburger menu

### 2. Landing Section
- Full-screen hero area
- Split layout with animation zone and content zone

### 3. Rocket Component
- Custom CSS/SVG comic-style rocket matching the reference aesthetic
- Subtle floating idle animation
- Tilts based on trajectory direction
- Follows SVG curved motion path using Framer Motion

### 4. Flame Component
- Pure CSS/SVG animated flame (no images)
- Flickering animation with scale, opacity, and blur
- Intensifies on rocket hover

### 5. Clouds Component
- CSS/SVG-based cloud shapes
- Horizontal drifting animation
- Gentle scaling for depth
- Parallax movement (slower than rocket)

### 6. Stage Labels
- Three labels: BUILD (bottom), SOLVE (middle), THINK (top)
- Positioned along the curved rocket path
- Progressive reveal as rocket reaches each point
- Highlight effect on hover

### 7. StarField Background
- CSS-generated stars using radial gradients/pseudo-elements
- Subtle twinkling animation

---

## Animations (Framer Motion + CSS)

1. **Rocket Motion Path**: Smooth curved trajectory from bottom-left to top-center
2. **Flame Flicker**: Continuous CSS animation with scale/blur/opacity
3. **Cloud Drift**: Slow horizontal movement with slight scaling
4. **Star Twinkle**: Random opacity changes on stars
5. **Label Reveal**: Fade-in and scale-up as rocket passes each stage
6. **Idle Float**: Gentle up-down bobbing when rocket is stationary

### Trigger Behavior
- Auto-plays on page load
- Can replay on scroll back into view or user interaction

---

## Interactivity

- **Rocket hover**: Flame intensity increases
- **Label hover**: Stage highlights with glow effect
- **CTA button**: Hover state with subtle animation
- **Navigation links**: Underline animation on hover

---

## File Structure
```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   ├── Landing/
│   │   ├── Landing.tsx
│   │   └── Landing.css
│   ├── Rocket/
│   │   ├── Rocket.tsx
│   │   └── Rocket.css
│   ├── Flame/
│   │   ├── Flame.tsx
│   │   └── Flame.css
│   ├── Clouds/
│   │   ├── Clouds.tsx
│   │   └── Clouds.css
│   └── StarField/
│       ├── StarField.tsx
│       └── StarField.css
└── pages/
    └── Index.tsx
```

---

## Technical Notes

- **Framer Motion** will be added for motion path animations and scroll-triggered effects
- All visual elements (rocket, flame, clouds) built with pure CSS/SVG - no external images
- Props-based animation state control for reusability
- Smooth easing with cubic-bezier curves throughout
- Fully responsive with mobile-first considerations

