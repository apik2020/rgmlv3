# 📋 Production-Ready Font Setup Checklist
## RGM VOL.3 - Ramadhan Level UP

Status: 🔄 In Progress
Last Updated: 2026-02-20

---

## ✅ CURRENT SETUP ANALYSIS

### Fonts in Use
| Font | Weights | Usage | Status |
|------|---------|-------|--------|
| **Handjet** | 600, 700, 900 | Headline, Body, Logo | ✅ Active |
| **Space Grotesk** | 400, 500, 700 | Alternative/Unused | ⚠️ Underutilized |

---

## 🔴 CRITICAL ISSUES TO FIX

### 1. **Duplicate Font Declarations** ⚠️ HIGH PRIORITY
**Location:** `app/globals.css:224-280`

**Issue:** Font utility classes are declared TWICE
- Once in `@layer utilities` (lines 224-253)
- Once outside the layer (lines 254-279)

**Impact:** Inconsistent rendering, CSS conflicts

**Fix Required:**
```css
/* Remove duplicate declarations outside @layer utilities */
/* Keep only the @layer utilities version (lines 224-253) */
```

**Status:** ⏳ TODO

---

### 2. **Font Weight Inconsistencies** ⚠️ MEDIUM PRIORITY

| Class | @layer utilities | Outside layer | Should be |
|-------|-----------------|---------------|-----------|
| `.font-logo` | 900 | 700 | **900** |
| `.font-subheadline` | 600 | 400 | **400** (body) |
| `.font-body` | 600 | 400 | **600** (consistent) |

**Fix Required:**
- Remove duplicate declarations (lines 254-279)
- Decide final weights for each class
- Document weight decisions

**Status:** ⏳ TODO

---

### 3. **Display Strategy Issue** ⚠️ LOW PRIORITY

**Current:** `display: "optional"`
- **Pros:** Faster FCP/ LCP
- **Cons:** FOUT (Flash of Unstyled Text) possible

**Consider:** `display: "swap"` for better perceived performance

**Status:** ⏳ TODO

---

## 📋 FULL CHECKLIST

### A. Google Fonts Configuration (`app/layout.tsx`)

- [x] **A1.** Preconnect to Google Fonts
  - [x] `fonts.googleapis.com`
  - [x] `fonts.gstatic.com` with `crossOrigin="anonymous"`

- [x] **A2.** Handjet Configuration
  - [x] Variable font setup: `--font-handjet`
  - [x] Subsets: `["latin"]`
  - [x] Weights: `["600", "700", "900"]`
  - [x] Preload: `true`
  - [ ] ⏳ Consider adding `["latin-ext"]` for broader character support

- [x] **A3.** Space Grotesk Configuration
  - [x] Variable font setup: `--font-space-grotesk`
  - [x] Subsets: `["latin"]`
  - [x] Weights: `["400", "500", "700"]`
  - [ ] ⏳ Unused - consider removing or implementing

- [ ] **A4.** Font Display Strategy
  - [ ] Review: `display: "optional"` vs `"swap"` vs `"block"`
  - [ ] Test on slow 3G connections
  - [ ] Document decision rationale

---

### B. CSS Font Setup (`app/globals.css`)

#### Variables (@layer utilities)
- [x] **B1.** `--font-space-grotesk` defined
- [x] **B2.** `--font-handjet` defined

#### Utility Classes
- [ ] **B3.** Remove duplicate declarations (lines 254-279)
- [ ] **B4.** Standardize font weights:

```css
/* Target configuration after fix */
.font-logo      { font-weight: 900; }  /* Max impact */
.font-headline  { font-weight: 900; }  /* Max impact */
.font-subheadline { font-weight: 400; }  /* Light contrast */
.font-semibold  { font-weight: 600; }  /* Medium emphasis */
.font-body      { font-weight: 600; }  /* Readable body */
```

#### Body Defaults
- [x] **B5.** Body font set: `var(--font-handjet), sans-serif`
- [x] **B6.** Body weight: `600`
- [x] **B7.** Body size: `18px` (desktop)
- [x] **B8.** Mobile size: `14px` (`@media (max-width: 768px)`)
- [x] **B9.** Line height: `1.4`
- [x] **B10.** Font smoothing enabled
  - [x] `-webkit-font-smoothing: antialiased`
  - [x] `-moz-osx-font-smoothing: grayscale`

---

### C. Font Fallback Strategy

- [ ] **C1.** Define fallback font stack
  ```css
  font-family: var(--font-handjet),
                'Arial Black',
                'Helvetica Neue',
                Arial,
                sans-serif;
  ```

- [ ] **C2.** Test with Google Fonts blocked
  - [ ] Disable internet connection
  - [ ] Verify fallback renders correctly
  - [ ] Check layout doesn't break

- [ ] **C3.** Consider system font alternatives
  ```css
  /* Possible fallbacks for pixel art vibe */
  - 'Courier New' for monospace fallback
  - 'Impact' for bold headlines
  - 'Verdana' for body readability
  ```

---

### D. Cross-Device Testing

#### Desktop Browsers
- [ ] **D1.** Chrome (Mac/Windows)
  - [ ] Font loads correctly
  - [ ] Weights render as expected
  - [ ] No FOUT/FoIT

- [ ] **D2.** Safari (Mac/iOS)
  - [ ] Test on macOS Safari
  - [ ] Test on iOS Safari
  - [ ] Verify font smoothing

- [ ] **D3.** Firefox (Mac/Windows)
  - [ ] Test rendering
  - [ ] Check weight interpretation

- [ ] **D4.** Edge (Windows)
  - [ ] Verify compatibility

#### Mobile Devices
- [ ] **D5.** iOS (iPhone/iPad)
  - [ ] Safari
  - [ ] Chrome

- [ ] **D6.** Android
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Samsung Internet

#### Connection Speeds
- [ ] **D7.** Fast WiFi
- [ ] **D8.** Slow 3G
- [ ] **D9.** Offline (fallback test)

---

### E. Performance Optimization

- [x] **E1.** Preconnect headers present
- [ ] **E2.** Check font file sizes
  - [ ] Handjet weights loaded
  - [ ] Consider `font-opt` for variable font optimization
- [ ] **E3.** Review `preload: true` necessity
- [ ] **E4.** Consider `font-display: swap` for above-the-fold content
- [ ] **E5.** Measure Core Web Vitals
  - [ ] LCP (Largest Contentful Paint)
  - [ ] FCP (First Contentful Paint)
  - [ ] CLS (Cumulative Layout Shift)

---

### F. Accessibility

- [ ] **F1.** Verify font contrast ratios (WCAG AA)
  - [ ] Normal text (4.5:1)
  - [ ] Large text (3:1)
  - [ ] Use contrast checker tool

- [ ] **F2. ** Test font resizing
  - [ ] 200% zoom in browsers
  - [ ] OS-level font size settings
  - [ ] No text overflow/cutoff

- [ ] **F3.** Screen reader testing
  - [ ] NVDA (Windows)
  - [ ] VoiceOver (Mac)
  - [ ] TalkBack (Android)

---

### G. Internationalization (Future)

- [ ] **G1.** Add Indonesian character support
  - [ ] Current: `["latin"]`
  - [ ] Consider: `["latin", "latin-ext"]`

- [ ] **G2.** Arabic script support (if needed for Quranic text)
  - [ ] Research Arabic-friendly fonts
  - [ ] Test RTL layout

---

## 🎯 ACTION ITEMS (Priority Order)

### High Priority 🔴
1. **[ ]** Remove duplicate font declarations in `globals.css`
2. **[ ]** Standardize `.font-logo` weight (900 vs 700 conflict)
3. **[ ]** Test on mobile devices (iOS Safari, Android Chrome)

### Medium Priority 🟡
4. **[ ]** Define fallback font stack
5. **[ ]** Test offline fallback behavior
6. **[ ]** Review `display: "optional"` vs `"swap"`

### Low Priority 🟢
7. **[ ]** Add `latin-ext` subset for broader support
8. **[ ]** Performance audit (LCP, FCP, CLS)
9. **[ ]] Accessibility contrast audit

---

## 📊 FONT USAGE SUMMARY

### Current Implementation
```tsx
// app/layout.tsx
handjet = Handjet({
  weight: ["600", "700", "900"],  // ✅ Good for retro/pixel style
  display: "optional",             // ⚠️ Consider "swap"
  preload: true,                   // ✅ Good for critical font
})

// Usage in page.tsx
className="font-headline"  // weight: 900
className="font-body"      // weight: 600
className="font-subheadline" // weight: 400/600 conflict
```

---

## 🛠️ QUICK FIX SCRIPT

Run this to fix duplicate declarations:

```bash
# Backup first
cp app/globals.css app/globals.css.backup

# Remove lines 254-279 from globals.css
# This removes duplicate font declarations
```

---

## 📚 REFERENCE LINKS

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts Display Strategy](https://developer.chrome.com/docs/lighthouse/performance/font-display/)
- [Web Font Loading Patterns](https://www.zachleat.com/web/web-fonts-loading-patterns/)
- [WCAG Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

---

## ✅ SIGN-OFF

When all items are complete:

- [ ] Developer self-review
- [ ] QA cross-browser testing
- [ ] Performance audit passed
- [ ] Accessibility audit passed
- [ ] Production deployment verified

---

*Last reviewed: 2026-02-20*
*Next review: After fixes completed*
