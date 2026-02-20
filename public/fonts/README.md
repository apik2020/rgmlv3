# 📁 Font Structure Documentation

## RGM VOL.3 - Font Directory Structure

This directory contains local font files and documentation for the RGM VOL.3 project.

---

## 📂 Directory Structure

```
public/
└── fonts/
    ├── handjet/              # Handjet font files (Primary)
    │   ├── Handjet-400.woff2
    │   ├── Handjet-600.woff2
    │   ├── Handjet-700.woff2
    │   └── Handjet-900.woff2
    │
    ├── space-grotesk/        # Space Grotesk font files (Alternative)
    │   ├── SpaceGrotesk-400.woff2
    │   ├── SpaceGrotesk-500.woff2
    │   └── SpaceGrotesk-700.woff2
    │
    ├── variable/             # Variable font versions (if available)
    │   ├── Handjet-Variable.woff2
    │   └── SpaceGrotesk-Variable.woff2
    │
    └── README.md             # This file
```

---

## 🔤 Fonts in Use

### 1. Handjet (Primary Font)

**Designer:** Typonautz
**Style:** Pixel-inspired, geometric sans-serif
**Usage:** Headlines, Body, Logo, UI elements

**Weights Available:**
- 400 (Regular) - Subheadline
- 600 (SemiBold) - Body text
- 700 (Bold) - Emphasis
- 900 (Black) - Headlines, Logo

**Subsets:** Latin, Latin-Extended

---

### 2. Space Grotesk (Alternative Font)

**Designer:** Florian Karsten
**Style:** Geometric sans-serif
**Usage:** Alternative/Secondary (currently underutilized)

**Weights Available:**
- 400 (Regular)
- 500 (Medium)
- 700 (Bold)

**Subsets:** Latin

---

## 🎨 Color Palette (CSS Variables)

```css
/* Neo-brutalism Design Token System - Retro/Vintage Palette */
--color-bg-cream: #F5E6D3;
--color-ink-black: #3E2723;
--color-accent-red: #E65D1B;
--color-accent-yellow: #C89400;      /* WCAG AA compliant */
--color-accent-violet: #007A3D;      /* WCAG AA compliant */
--color-white: #FDF6E3;
--color-accent-olive: #4A7020;       /* WCAG AA compliant */
```

---

## 📋 Font Usage Classes

```css
/* Font Family Classes */
.font-space      /* Space Grotesk */
.font-logo       /* Handjet 900 */
.font-headline   /* Handjet 900 */
.font-subheadline /* Handjet 400 */
.font-semibold   /* Handjet 600 */
.font-body       /* Handjet 600 */
```

---

## 🌐 Current Setup (Google Fonts)

The project currently uses Google Fonts via Next.js optimization:

```typescript
// app/layout.tsx
const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
});
```

---

## 📥 How to Download Fonts Locally

### Option 1: Google Fonts Download

1. Visit [Google Fonts - Handjet](https://fonts.google.com/specimen/Handjet)
2. Click "Download family"
3. Extract weights: 400, 600, 700, 900
4. Convert to WOFF2 using [CloudConvert](https://cloudconvert.com/otf-to-woff2)
5. Place in `public/fonts/handjet/`

### Option 2: Using Font Squirrel

1. Visit [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
2. Upload the OTF/TTF files
3. Select "Expert" mode
4. Choose WOFF2 format
5. Download and extract to respective folders

### Option 3: Command Line (using pyftsubset)

```bash
# Install fonttools
pip install fonttools brotli

# Subset and convert to WOFF2
pyftsubset Handjet.ttf \
  --output-file=Handjet-400.woff2 \
  --flavor=woff2 \
  --layout-features='*' \
  --unicode-range='U+0000-00FF,U+0100-024F'
```

---

## 🔧 Switching to Local Fonts

### Quick Start Method (Recommended)

Use the pre-configured files:

```typescript
// app/layout.tsx
import "./globals-local-fonts.css"; // Instead of "./globals.css"

// Remove Google Fonts imports
// import { Space_Grotesk, Handjet } from "next/font/google";
```

### Manual Method

#### Step 1: Update `app/layout.tsx`

Replace Google Fonts import with local font configuration:

```typescript
import { Handjet, Space_Grotesk } from "next/font/local";

const handjet = Handjet({
  src: [
    {
      path: "../../public/fonts/handjet/Handjet-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/handjet/Handjet-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/handjet/Handjet-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/handjet/Handjet-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-handjet",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  src: [
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
```

### Alternative: Using `fonts.css` Only

If you want to keep using `globals.css` but just add @font-face declarations:

```css
/* In app/globals.css, add at the top: */
@import '../public/fonts/fonts.css';
```

Then update font-family references to use the local names:
- `'Handjet Local'` instead of `var(--font-handjet)`
- `'Space Grotesk Local'` instead of `var(--font-space-grotesk)`

### Step 2: Remove Google Fonts Preconnect (Optional)

If switching fully to local, remove these from `app/layout.tsx`:

```typescript
// Remove these lines
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## 📊 Font File Size Estimates

| Font | Weight | Size (WOFF2) | Loaded by Default |
|------|--------|--------------|-------------------|
| Handjet | 400 | ~40KB | Yes |
| Handjet | 600 | ~42KB | Yes |
| Handjet | 700 | ~44KB | No |
| Handjet | 900 | ~46KB | Yes |
| Space Grotesk | 400 | ~28KB | No |
| Space Grotesk | 500 | ~30KB | No |
| Space Grotesk | 700 | ~32KB | No |

**Total (critical):** ~172KB

---

## 🚀 Performance Considerations

### Using Google Fonts (Current)
- ✅ CDN distributed
- ✅ Automatic optimization by Next.js
- ✅ Preload hints available
- ❌ External dependency
- ❌ Cannot customize glyphs

### Using Local Fonts (Alternative)
- ✅ No external dependency
- ✅ Full control over subsets
- ✅ Can use variable fonts
- ❌ Self-hosting required
- ❌ Need to manage updates

---

## 📝 Font Checklist

- [x] Font directory structure created
- [x] Documentation created
- [ ] Local font files downloaded
- [ ] WOFF2 conversion completed
- [ ] Local font configuration tested
- [ ] Performance audit completed
- [ ] Fallback fonts verified

---

## 📚 Resources

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)
- [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [WOFF2 Converter](https://cloudconvert.com/otf-to-woff2)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

*Last updated: 2026-02-20*
*Project: RGM VOL.3 - Ramadhan Level UP*
