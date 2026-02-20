# 🎯 Uniform Font Fallback Strategy

## CSS Variables for Consistent Font Stacks

### Font Stack Variables

The following CSS variables define consistent fallback font families used throughout the application:

```css
/* Display Stack - Bold, Impactful (Headlines, Logo) */
--font-stack-display: var(--font-handjet),
                     'Arial Black',
                     'Impact',
                     'Compacta',
                     'Franklin Gothic Heavy',
                     'Helvetica Neue',
                     Arial,
                     sans-serif;

/* Body Stack - Readable, Clean (Body text, Subheadline) */
--font-stack-body: var(--font-handjet),
                 'Helvetica Neue',
                 'Arial',
                 'Verdana',
                 'Geneva',
                 'Tahoma',
                 sans-serif;

/* Secondary Stack - Alternative (Space Grotesk usage) */
--font-stack-secondary: var(--font-space-grotesk),
                      'Arial Black',
                      'Helvetica Neue',
                      'Verdana',
                      Arial,
                      sans-serif;

/* Condensed Stack - For compact text (if needed) */
--font-stack-condensed: var(--font-handjet),
                       'Arial Narrow',
                       'Helvetica Condensed',
                       'Impact',
                       'Compacta',
                       sans-serif;
```

### Usage in Utility Classes

| Class | Font Stack | Weight | Usage |
|-------|------------|--------|-------|
| `.font-display` | `--font-stack-display` | - | Bold display text |
| `.font-logo` | `--font-stack-display` | 900 | Logo/branding |
| `.font-headline` | `--font-stack-display` | 900 | Headlines |
| `.font-body` | `--font-stack-body` | 600 | Body text |
| `.font-subheadline` | `--font-stack-body` | 400 | Subheadline |
| `.font-semibold` | `--font-stack-body` | 600 | Emphasis |
| `.font-space` | `--font-stack-secondary` | - | Space Grotesk |
| `.font-condensed` | `--font-stack-condensed` | - | Compact text |

### Fallback Font Availability

| Font | Windows | macOS | Linux | Android | iOS |
|------|---------|-------|-------|---------|-----|
| Arial Black | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Impact | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Compacta | ❌ | ❌ | ❌ | ❌ | ❌ |
| Franklin Gothic Heavy | ✅ | ❌ | ❌ | ❌ | ❌ |
| Helvetica Neue | ⚠️ | ✅ | ⚠️ | ✅ | ✅ |
| Arial | ✅ | ✅ | ✅ | ✅ | ✅ |
| Verdana | ✅ | ✅ | ✅ | ✅ | ✅ |
| Geneva | ❌ | ✅ | ❌ | ❌ | ✅ |
| Tahoma | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Arial Narrow | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Helvetica Condensed | ❌ | ✅ | ❌ | ❌ | ❌ |

Legend:
- ✅ = Widely available
- ⚠️ = May not be available on all systems
- ❌ = Rarely available

### Why These Fallbacks?

#### Display Stack (Bold, Impactful)
```
Handjet → Arial Black → Impact → Compacta → Franklin Gothic Heavy → Helvetica Neue → Arial → sans-serif
```

**Rationale:**
- **Arial Black**: Ultra-bold, widely available, perfect for headlines
- **Impact**: Classic bold font, retro feel, good backup
- **Compacta**: Condensed bold, retro/pixel vibe (if available)
- **Franklin Gothic Heavy**: Heavy display font (Windows)
- **Helvetica Neue**: Clean, professional fallback
- **Arial**: Universal fallback

#### Body Stack (Readable, Clean)
```
Handjet → Helvetica Neue → Arial → Verdana → Geneva → Tahoma → sans-serif
```

**Rationale:**
- **Helvetica Neue**: Modern, readable, widely available
- **Arial**: Universal fallback, similar to Helvetica
- **Verdana**: Highly readable, optimized for screen
- **Geneva**: macOS legacy font (still available)
- **Tahoma**: Readable sans-serif, Windows optimized

#### Condensed Stack (Compact)
```
Handjet → Arial Narrow → Helvetica Condensed → Impact → Compacta → sans-serif
```

**Rationale:**
- **Arial Narrow**: Condensed alternative when space is limited
- **Helvetica Condensed**: macOS condensed font
- **Impact**: Bold condensed fallback

### Font Fallback Behavior

```
┌─────────────────────────────────────────────────────────┐
│  BROWSER FONT LOADING                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Check: Is Handjet available?                       │
│     ├─ Yes → Use Handjet ✅                            │
│     └─ No  → Continue to fallback                      │
│                                                         │
│  2. Check: Is Arial Black available?                  │
│     ├─ Yes → Use Arial Black ✅                        │
│     └─ No  → Continue to fallback                      │
│                                                         │
│  3. Check: Is Impact available?                        │
│     ├─ Yes → Use Impact ✅                             │
│     └─ No  → Continue to fallback                      │
│                                                         │
│  ... (continues through stack)                          │
│                                                         │
│  Final: Use system sans-serif ✅                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Best Practices for Font Fallbacks

1. **Always include generic family**
   ```css
   font-family: 'Custom Font', sans-serif;  /* ✅ Good */
   font-family: 'Custom Font';               /* ❌ Bad */
   ```

2. **Order by preference**
   ```css
   /* Best → Good → Acceptable → Universal */
   font-family: Handjet, Arial Black, Impact, sans-serif;
   ```

3. **Use quotes for multi-word names**
   ```css
   font-family: 'Arial Black', sans-serif;  /* ✅ Correct */
   font-family: Arial Black, sans-serif;     /* ✅ Also works */
   ```

4. **Match font characteristics**
   - Bold fonts with bold fallbacks
   - Condensed with condensed fallbacks
   - Display fonts with display fallbacks

5. **Test with fonts disabled**
   ```javascript
   // Chrome DevTools → Network → Disable cache
   // Block: fonts.googleapis.com, fonts.gstatic.com
   // Verify fallback renders correctly
   ```

### Testing Font Fallbacks

**Method 1: Disable Google Fonts**
```bash
# Block fonts in DevTools
# Network tab → Disable cache → Block fonts.gstatic.com
```

**Method 2: Override with DevTools**
```css
/* In DevTools → Elements → Styles */
body {
  font-family: 'Fake Font', 'Arial Black', sans-serif !important;
}
```

**Method 3: Browser Extensions**
- Font blocker extensions
- User CSS override

### Visual Comparison

| Font Stack | Sample (Aa) | Characteristics |
|------------|-------------|----------------|
| Handjet (primary) | **Aa** | Pixel-inspired, retro |
| Arial Black | **Aa** | Ultra-bold, impact |
| Impact | **Aa** | Condensed, bold |
| Helvetica Neue | **Aa** | Clean, modern |
| Arial | **Aa** | Universal, neutral |
| Verdana | **Aa** | Readable, wide |

### Troubleshooting

**Fonts look different on some devices?**

1. Check what's actually loading:
   ```css
   /* Add temporarily to debug */
   * {
     font-family: inherit !important;
   }
   ```

2. View computed font in DevTools:
   ```
   DevTools → Elements → Computed → "Rendered Fonts"
   ```

3. Test on real devices:
   - Windows (Chrome, Edge, Firefox)
   - macOS (Safari, Chrome, Firefox)
   - iOS (Safari, Chrome)
   - Android (Chrome, Firefox)

**Fallback not triggering?**

- Check if variable is defined: `var(--font-stack-display)`
- Verify syntax: commas between fonts, quotes on multi-word names
- Ensure generic family is last: `sans-serif`

---

*Last updated: 2026-02-20*
*Related files: app/globals.css, app/layout.tsx*
