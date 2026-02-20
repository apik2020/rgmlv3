/**
 * Local Font Configuration for RGM VOL.3
 *
 * This file contains local font configuration for Next.js.
 * Use this to switch from Google Fonts to self-hosted fonts.
 *
 * INSTRUCTIONS:
 * 1. Font files are downloaded in public/fonts/
 * 2. Replace imports in app/layout.tsx with these local imports
 * 3. Remove Google Fonts preconnect links
 *
 * Font Files (TTF format):
 * - Handjet: 400, 600, 700, 900
 * - Space Grotesk: 400, 500, 700
 */

import localFont from 'next/font/local';

/**
 * Handjet Local Font Configuration
 *
 * Weights: 400, 600, 700, 900
 * Style: Pixel-inspired, geometric sans-serif
 * Usage: Primary font for headlines, body, logo
 */
export const handjetLocal = localFont({
  src: [
    {
      path: '../../public/fonts/handjet/Handjet-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/handjet/Handjet-600.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/handjet/Handjet-700.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/handjet/Handjet-900.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-handjet',
  display: 'swap',
  preload: true,
  fallback: [
    'Arial Black',
    'Impact',
    'Compacta',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

/**
 * Space Grotesk Local Font Configuration
 *
 * Weights: 400, 500, 700
 * Style: Geometric sans-serif
 * Usage: Alternative/Secondary font
 */
export const spaceGroteskLocal = localFont({
  src: [
    {
      path: '../../public/fonts/space-grotesk/SpaceGrotesk-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/space-grotesk/SpaceGrotesk-500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/space-grotesk/SpaceGrotesk-700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: false,
  fallback: [
    'Arial Black',
    'Helvetica Neue',
    'Verdana',
    'Arial',
    'sans-serif',
  ],
});

/**
 * ============================================
 * HOW TO SWITCH FROM GOOGLE FONTS TO LOCAL
 * ============================================
 *
 * STEP 1: Font files are already downloaded!
 *   Located in: public/fonts/handjet/ & public/fonts/space-grotesk/
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
 * STEP 4: Test
 *
 *   - Run: npm run dev
 *   - Check browser DevTools Network tab
 *   - Verify fonts are loaded from /fonts/ path
 *   - Check font rendering and weights
 *
 * ============================================
 * FONT FILE SIZES (TTF format)
 * ============================================
 *
 * Handjet: 179KB per weight × 4 weights = 716KB total
 * Space Grotesk: 68KB per weight × 3 weights = 204KB total
 * Grand Total: 920KB
 *
 * For production, consider converting TTF → WOFF2:
 * - TTF: 920KB (current)
 * - WOFF2: ~280KB (estimated, ~70% smaller)
 *
 * Convert at: https://cloudconvert.com/ttf-to-woff2
 *
 * ============================================
 * COMPARISON: GOOGLE FONTS vs LOCAL
 * ============================================
 *
 * Aspect                | Google Fonts    | Local Fonts (TTF)
 * ----------------------|-----------------|--------------------
 * Setup difficulty      | Easy            | Medium
 * External dependency   | Yes             | No
 * File size             | ~280KB          | 920KB
 * CDN distribution      | Yes             | No
 * First load            | Fast (CDN)      | Slower
 * Subsequent loads      | Fast (cached)   | Fast (cached)
 * Privacy               | Google tracking | No external calls
 *
 * Recommendation: Use Google Fonts for production
 * (smaller file size + CDN caching). Local fonts are
 * good for offline/PWA or privacy-critical apps.
 *
 * ============================================
 */

export default {
  handjetLocal,
  spaceGroteskLocal,
};
