/**
 * Local Font Configuration for RGM VOL.3
 *
 * This file contains local font configuration for Next.js.
 * Use this to switch from Google Fonts to self-hosted fonts.
 *
 * INSTRUCTIONS:
 * 1. Run: npm run fonts:download  or  ./scripts/download-fonts.sh
 * 2. Replace imports in app/layout.tsx with these local imports
 * 3. Remove Google Fonts preconnect links
 */

import { Handjet as HandjetLocal, Space_Grotesk as SpaceGroteskLocal } from "next/font/local";

/**
 * Handjet Local Font Configuration
 *
 * Weights: 400, 600, 700, 900
 * Style: Pixel-inspired, geometric sans-serif
 * Usage: Primary font for headlines, body, logo
 */
export const handjetLocal = HandjetLocal({
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
  preload: true,
  fallback: [
    "Arial Black",
    "Impact",
    "Compacta",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

/**
 * Space Grotesk Local Font Configuration
 *
 * Weights: 400, 500, 700
 * Style: Geometric sans-serif
 * Usage: Alternative/Secondary font
 */
export const spaceGroteskLocal = SpaceGroteskLocal({
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
  preload: false,
  fallback: [
    "Arial Black",
    "Helvetica Neue",
    "Verdana",
    "Arial",
    "sans-serif",
  ],
});

/**
 * ============================================
 * HOW TO SWITCH FROM GOOGLE FONTS TO LOCAL
 * ============================================
 *
 * STEP 1: Download fonts
 *   Run: ./scripts/download-fonts.sh
 *
 * STEP 2: Update app/layout.tsx
 *
 *   BEFORE (Google Fonts):
 *   ----------------------
 *   import { Space_Grotesk, Handjet } from "next/font/google";
 *
 *   const handjet = Handjet({
 *     variable: "--font-handjet",
 *     subsets: ["latin", "latin-ext"],
 *     weight: ["400", "600", "700", "900"],
 *     display: "swap",
 *     preload: true,
 *   });
 *
 *   AFTER (Local Fonts):
 *   --------------------
 *   import { handjetLocal, spaceGroteskLocal } from "@/lib/fonts-local";
 *
 *   const handjet = handjetLocal;
 *   const spaceGrotesk = spaceGroteskLocal;
 *
 * STEP 3: Remove Google Fonts preconnect (optional)
 *
 *   Remove these lines from <head> in app/layout.tsx:
 *
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 *
 * STEP 4: Update package.json (optional)
 *
 *   Add a convenience script:
 *
 *   "scripts": {
 *     "fonts:download": "./scripts/download-fonts.sh"
 *   }
 *
 * STEP 5: Test
 *
 *   - Run: npm run dev
 *   - Check browser DevTools Network tab
 *   - Verify fonts are loaded from localhost
 *   - Check font rendering and weights
 *
 * ============================================
 * COMPARISON: GOOGLE FONTS vs LOCAL
 * ============================================
 *
 * Aspect                | Google Fonts    | Local Fonts
 * ----------------------|-----------------|--------------------
 * Setup difficulty      | Easy            | Medium
 * External dependency   | Yes             | No
 * CDN distribution      | Yes             | No
 * File size control     | Limited         | Full control
 * Subset customization  | Limited         | Full control
 * Performance           | Good (cached)   | Better (self-hosted)
 * Updates               | Automatic       | Manual
 * Privacy               | Google tracking | No external calls
 *
 * ============================================
 */

export default {
  handjetLocal,
  spaceGroteskLocal,
};
