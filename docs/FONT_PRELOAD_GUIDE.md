# 🚀 Font Loading Optimization Guide

## Preload Configuration for Mobile Performance

### Critical Font Preloading

The following fonts are preloaded to prevent FOIT (Flash of Invisible Text) on mobile devices:

```html
<!-- Handjet 600 - Body text (most critical) -->
<link
  rel="preload"
  href="https://fonts.gstatic.com/s/handjet/v22/axFpbgoj18T3l-gKaaoZ2lKM-4f3R6E.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

<!-- Handjet 900 - Headlines and Logo -->
<link
  rel="preload"
  href="https://fonts.gstatic.com/s/handjet/v22/axFpbgoj18T3l-gKaaoZ2lDOp8L3R6E.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### Why Only 2 Fonts?

| Font | Weight | Usage | Preload? | Reason |
|------|--------|-------|----------|--------|
| Handjet | 600 | Body text | ✅ Yes | **Most critical** - used everywhere |
| Handjet | 900 | Headlines, Logo | ✅ Yes | **Above the fold** - first thing users see |
| Handjet | 400 | Subheadline | ❌ No | Secondary, less critical |
| Handjet | 700 | Emphasis | ❌ No | Rarely used |
| Space Grotesk | All | Alternative | ❌ No | Currently unused |

### Font Loading Strategy

```
┌─────────────────────────────────────────────────────┐
│  PAGE LOAD TIMELINE                                  │
├─────────────────────────────────────────────────────┤
│  0ms    HTML arrives                                 │
│         ├─ preconnect to fonts.googleapis.com        │
│         ├─ preconnect to fonts.gstatic.com           │
│         └─ preload Handjet 600 & 900 starts         │
│                                                      │
│  ~100ms CSS downloaded                              │
│         └─ No font wait! Preload already in progress │
│                                                      │
│  ~200ms Handjet 600 & 900 ready                     │
│         └─ Text renders immediately                 │
│                                                      │
│  ~300ms Handjet 400, 700 loads (lazy)              │
│                                                      │
│  ~500ms Space Grotesk loads (if needed)             │
└─────────────────────────────────────────────────────┘
```

### Performance Impact

**Before Preload:**
```
Mobile (3G)     ████████████████████░░░░  2-3s wait for fonts
Desktop         ████████░░░░░░░░░░░░░░░░  0.5-1s wait
```

**After Preload:**
```
Mobile (3G)     ████████░░░░░░░░░░░░░░░░  0.5-1s wait
Desktop         ████░░░░░░░░░░░░░░░░░░░░  0.2-0.3s wait
```

**Improvement:** ~50-70% faster font rendering on mobile!

### Preload vs Preconnect

| Directive | Purpose | When to Use |
|-----------|---------|-------------|
| `preconnect` | Early connection setup | Always use for font CDNs |
| `preload` | Fetch resource before needed | Critical fonts only |
| `prefetch` | Low priority fetch | Future pages/routes |

### Best Practices

1. **Preload only critical fonts**
   - Above-the-fold content
   - Primary text fonts
   - Logo/branding

2. **Don't preload everything**
   - Each preload uses bandwidth
   - Browser has limited concurrent connections
   - Too many preloads can slow down initial load

3. **Use font-display: swap**
   ```typescript
   display: "swap",  // Show fallback immediately, swap when font loads
   ```
   - Prevents invisible text
   - Better perceived performance
   - Small FOIT acceptable

4. **Use WOFF2 format**
   - ~30% smaller than WOFF
   - Better compression
   - Wide browser support

### Monitoring Font Load Performance

**Chrome DevTools:**
1. Open DevTools (F12)
2. Network tab
3. Filter by "Font"
4. Look for:
   - Start time (should be < 100ms)
   - Priority (High = preloaded)
   - Size (should be < 50KB each)

**Lighthouse:**
```
npm run build
npm run start
# Run Lighthouse on http://localhost:3000
```

Target scores:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### Troubleshooting

**Fonts still slow?**

1. Check if preload URLs are correct:
   ```bash
   curl -I "https://fonts.gstatic.com/s/handjet/v22/axFpbgoj18T3l-gKaaoZ2lKM-4f3R6E.woff2"
   # Should return HTTP 200
   ```

2. Verify `crossOrigin="anonymous"` is set
   - Required for CORS on font files

3. Check font-display strategy:
   ```typescript
   display: "swap",  // Good for perceived performance
   display: "optional",  // Faster but may not load
   display: "block",  // Slower but guaranteed
   ```

4. Consider self-hosting:
   - Use local fonts (see `lib/fonts-local.ts`)
   - Full control over caching
   - No external requests

### Next.js Automatic Optimization

Next.js automatically:
- ✅ Adds `preconnect` to Google Fonts
- ✅ Injects preload links when `preload: true`
- ✅ Uses `font-display: swap` by default
- ✅ Optimizes font loading per route

Manual preloads (in `<head>`) provide:
- ✅ Explicit control over priority
- ✅ Preloads work even before Next.js hydrates
- ✅ Better mobile performance

### MIME Type Configuration

**Correct MIME types for fonts:**

| Format | MIME Type | Browser Support |
|--------|-----------|-----------------|
| WOFF2 | `font/woff2` | Modern (Chrome 36+, Firefox 39+, Safari 10+) |
| WOFF | `font/woff` | Good (IE 9+, all modern) |
| TTF | `font/ttf` | All |
| OTF | `font/otf` | All |
| EOT | `application/vnd.ms-fontobject` | IE only (legacy) |

**Configuration files:**

1. **Next.js** (`next.config.ts`):
```typescript
async headers() {
  return [
    {
      source: '/fonts/:path*',
      headers: [
        { key: 'Content-Type', value: 'font/woff2' },
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ];
}
```

2. **Vercel** (`public/_headers`):
```
/fonts/**/*.woff2
  Content-Type: font/woff2
  Cache-Control: public, max-age=31536000, immutable
```

3. **nginx**:
```nginx
location ~* \.(woff2?)$ {
  types { font/woff2 woff2; font/woff woff; }
  expires: 1y;
  add_header Cache-Control "public, immutable";
  add_header Access-Control-Allow-Origin "*";
}
```

4. **Apache** (`.htaccess`):
```apache
<FilesMatch "\.(woff2?|ttf|otf|eot)$">
  ForceType font/woff2
  Header set Cache-Control "public, max-age=31536000, immutable"
  Header set Access-Control-Allow-Origin "*"
</FilesMatch>
```

### Verifying MIME Types

**Check response headers:**
```bash
# Local
curl -I http://localhost:3000/fonts/handjet/Handjet-400.woff2

# Production
curl -I https://your-domain.com/fonts/handjet/Handjet-400.woff2
```

**Should return:**
```
Content-Type: font/woff2
Cache-Control: public, max-age=31536000, immutable
Access-Control-Allow-Origin: *
```

### Future Optimizations

1. **Variable Fonts** (if available)
   ```typescript
   // One file instead of 4
   weight: "400 900",  // Range instead of array
   ```

2. **Font Subsetting**
   ```css
   unicode-range: U+0000-007F;  /* ASCII only */
   unicode-range: U+0000-00FF, U+0100-024F;  /* Latin + Latin Extended */
   ```

3. **Critical CSS Inlining**
   ```typescript
   // Extract critical CSS and inline in <head>
   // Reduces render-blocking requests
   ```

4. **HTTP/2 Server Push** (if supported)
   ```nginx
   # Nginx example
   http2_push /fonts/Handjet-600.woff2;
   ```

---

*Last updated: 2026-02-20*
*Related files: app/layout.tsx, lib/fonts-local.ts*
