# Semilla Café & Coworking — Design System

**Last updated:** April 2026  
**Location:** Laureles, Medellín, Colombia

---

## About the Brand

**Semilla Café & Coworking** is a "coffice" (café + office) concept in Medellín's Laureles neighborhood. It blends specialty coffee culture with professional coworking infrastructure. The name *Semilla* (seed) reflects the idea that ideas grow naturally in this space — an ecosystem where innovation and community flourish organically.

The brand positions itself at the intersection of:
- High-quality specialty coffee
- Professional coworking / flexible workspace
- Community building for "Change Makers" — tech-adjacent creatives aged 27–32
- Sustainability and organic growth metaphors

**Key audiences:** Digital nomads, freelancers, startup teams, local Laureles residents, and tech/digital marketing professionals.

---

## Sources

- **Brand package:** `Semilla_brand/05_PAQUETE FINAL/` (local mounted codebase)
  - Brand manual (PDF): `03_MANUAL/MANUAL_SEMILLA_LOWRES.pdf`
  - Logo source (AI + SVG): `04_LOGOTIPO/`
  - Typography: `05_TIPOGRAFIAS/BETM/`
  - Brand applications: `06_PIEZAS/` (coffee bag, business cards, presentation)
- **Menu PDF:** `Semilla_brand/Semilla_Menu_2026MOB.pdf`
- **Uploaded logo PNGs:** `uploads/Recurso 1–16 SEMILLA.png`
- **Uploaded fonts:** `uploads/Betm-*.otf`

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Language:** Spanish-primary, but aspirational English is used in the brand concept layer (e.g. "Change Makers", "Freedom Seekers", "Coffice", "Emilla coworking"). English terms are mixed freely with Spanish — a deliberate cosmopolitan tone.
- **Person:** Speaks directly to the community, using *you* framing implicitly (e.g., "un asiento en la mesa").
- **Tone:** Warm, confident, understated. Not loud or exclamation-heavy. More editorial than salesy.
- **Casing:** ALL CAPS for brand wordmark, category labels, and headings ("CAFÉ & COWORKING", "MED COL"). Mixed case for body copy. Never emoji in formal materials.
- **Metaphors:** Organic, growth-based — seeds, roots, nature. The "S" mark references a coffee bean fused with plant growth.
- **Vibe:** "This is your seat at the table." — inclusive but aspirational.
- **No emoji** in brand-aligned design materials.
- **Copy is concise and direct.** Long paragraphs are avoided; ideas are expressed as short, precise fragments.

### Example phrasings
- "Un asiento en la mesa"
- "Café & Coworking — MED COL"
- "Ideas that grow by nature"
- "Change Makers"
- "Coffice" (portmanteau trademark concept)
- "Freedom Seekers"

---

## VISUAL FOUNDATIONS

### Color
Five-color system derived from the brand SVG (`#st0–st4`):

| Role | Name | Hex |
|------|------|-----|
| Dark primary | Forest Green | `#10312B` |
| Secondary green | Olive | `#4A4F31` |
| Warm accent | Gold / Tan | `#C8A977` |
| Background | Cream | `#FBF3E7` |
| Reverse | White | `#FFFFFF` |
| Maximum contrast | Black | `#000000` |

The Forest Green (`#10312B`) and Cream (`#FBF3E7`) pairing is the dominant brand combination. Gold (`#C8A977`) is the warm accent used for emphasis and backgrounds in lifestyle applications.

### Typography
- **Single typeface system:** Betm (custom/licensed sans-serif), all weights from Thin (100) to ExtraBlack (950).
- **Display:** Betm Black / ExtraBlack, all-caps, wide letter-spacing (0.22em) — used for SEMILLA wordmark.
- **Subhead / tagline:** Betm Light / Regular, all-caps, wide letter-spacing — "CAFÉ & COWORKING", "MED COL".
- **Body:** Betm Light / Regular, normal tracking, 15–16px.
- **No secondary typeface.** Betm's range covers all roles from ultra-light to extreme-black.

### Backgrounds
- Flat solid color preferred: Cream, Forest Green, Olive, Gold, or Black.
- No gradients. No texture overlays. No photography backgrounds (at least not in brand identity system).
- Cards are simple flat-colored rectangles; no complex shadows or layered backgrounds.

### Spacing & Layout
- Clean, generous whitespace. The brand feels airy despite dark colors.
- Logo placement: centered, with significant clear space around it.
- Layout: symmetrical centering preferred for brand marks; asymmetric grids for editorial content.

### Shape & Form
- **Circle motif:** The logomark is always enclosed in a circle. This circle motif may appear elsewhere (badge treatments, etc.).
- **Corner radii:** Not a dominant design feature. UI elements may use small radius (4–8px) or none.
- **Border:** Thin strokes at brand-weight; the logo circle uses a consistent stroke width.

### Iconography & Illustration
- No decorative icons in the core brand identity. The S-mark icon is the only icon.
- The "SEMILLA circular badge" version (Recurso 15 / Logo sol blanco) suggests a seal/stamp visual language for secondary marks.

### Animation
- No evidence of animation in brand materials. Restrained, static design language.
- If animated, expect: slow fades, no bounce, no scale-pop. Very quiet motion.

### Hover / Interaction States
- Likely: opacity reduction to ~70% for hover on dark buttons. Color inversion for inverse states.
- Press state: subtle darkening of color, no scale shrink.

### Cards & Components
- Clean, bordered containers. No heavy box-shadow.
- Light shadow: `0 2px 12px rgba(16,49,43,0.08)`.
- Border: 1px solid forest green or cream variant.
- Radius: 0 (preferred for brand fidelity) or minimal (4px).

### Imagery
- Warm-toned lifestyle photography implied by business model (café, workspace).
- Imagery color vibe: warm, golden-hour, natural light. Not cool or desaturated.
- No grainy film look in existing brand materials.

---

## ICONOGRAPHY

- **Primary mark:** S-in-circle logomark (assets/logo-icon-*). Available in 5 color combinations.
- **Full wordmark:** "SEMILLA / CAFÉ & COWORKING / MED COL" stacked vertical lockup (assets/logo-full-*).
- **Badge mark:** Circular text badge "SEMILLA · CAFÉ & COWORKING ·" around the S-mark (assets/logo-badge-forest.png).
- **No icon library** is defined in the brand package. For UI design, use a stroke-weight icon system (e.g. Lucide or Feather, 1.5px stroke) in Forest Green or Olive color.
- **No emoji** in brand-aligned materials.

### Asset inventory (`assets/`)
| File | Usage |
|------|-------|
| `logo-icon-black.png` | Icon on white |
| `logo-icon-black-filled.png` | Bolder icon on white |
| `logo-icon-white-on-black.png` | Icon on black bg |
| `logo-icon-white-on-gold.png` | Icon on gold bg |
| `logo-icon-white-on-forest.png` | Icon on forest green bg |
| `logo-icon-white-on-olive.png` | Icon on olive bg |
| `logo-icon-olive-on-cream.png` | Icon on cream bg |
| `logo-full-black.png` | Full wordmark, black |
| `logo-full-black-wide.png` | Full wordmark, black, wider |
| `logo-full-white-on-black.png` | Full wordmark, white on black |
| `logo-full-white-on-gold.png` | Full wordmark, white on gold |
| `logo-full-white-on-forest.png` | Full wordmark, white on forest green |
| `logo-full-white-on-olive.png` | Full wordmark, white on olive |
| `logo-full-olive-on-cream.png` | Full wordmark, olive on cream |
| `logo-badge-forest.png` | Circular badge mark, white on forest |

---

## File Index

```
/
├── README.md                  ← This file
├── colors_and_type.css        ← CSS variables: colors, type, spacing, shadows
├── SKILL.md                   ← Agent skill definition
├── fonts/                     ← Betm OTF files (all weights)
├── assets/                    ← Logo PNGs in all color variants
├── preview/                   ← Design System tab cards
│   ├── colors-brand.html
│   ├── colors-semantic.html
│   ├── type-scale.html
│   ├── type-weights.html
│   ├── spacing-tokens.html
│   ├── shadows-radii.html
│   ├── logos-primary.html
│   ├── logos-color.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-badges.html
│   └── components-forms.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html         ← Website UI kit (homepage)
        ├── Header.jsx
        ├── Hero.jsx
        ├── MenuSection.jsx
        ├── CoworkingSection.jsx
        └── Footer.jsx
```
