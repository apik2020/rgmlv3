#!/bin/bash

# ============================================================================
# Font Download Script for RGM VOL.3
# ============================================================================
#
# NOTE: Google Fonts has changed their URL structure. Direct downloads
# from gstatic.com now return HTML error pages instead of font files.
#
# MANUAL DOWNLOAD INSTRUCTIONS:
#
# Option 1: Google Fonts Website
# 1. Visit https://fonts.google.com/specimen/Handjet
# 2. Click "Download family" button
# 3. Extract and find files: Handjet-Regular.ttf, Handjet-SemiBold.ttf, etc.
# 4. Convert to WOFF2 using https://cloudconvert.com/ttf-to-woff2
# 5. Place in public/fonts/handjet/
#
# Option 2: Using gdown (if you have Google Drive links)
# 1. Install: brew install gdown
# 2. Download from shared Google Drive
#
# Option 3: Keep using Google Fonts CDN (Recommended)
# The project is already configured to use Google Fonts via Next.js,
# which is optimized and works perfectly. Self-hosting is optional.
#
# ============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}🔤 RGM VOL.3 - Font Setup${NC}"
echo ""

echo -e "${YELLOW}Current Setup: Using Google Fonts (Optimized)${NC}"
echo -e "${BLUE}The project already uses Google Fonts via Next.js optimization.${NC}"
echo -e "${BLUE}This is the recommended approach for performance.${NC}"
echo ""

echo -e "${YELLOW}📋 Font Structure Status:${NC}"
echo ""

HANDJET_COUNT=$(ls -1 public/fonts/handjet/*.woff2 2>/dev/null | wc -l | tr -d ' ')
SPACE_COUNT=$(ls -1 public/fonts/space-grotesk/*.woff2 2>/dev/null | wc -l | tr -d ' ')

echo -e "  Handjet: ${HANDJET_COUNT}/4 files"
echo -e "  Space Grotesk: ${SPACE_COUNT}/3 files"
echo ""

if [ "$HANDJET_COUNT" -lt 4 ] || [ "$SPACE_COUNT" -lt 3 ]; then
    echo -e "${RED}⚠ Local font files not found${NC}"
    echo ""
    echo -e "${YELLOW}To download fonts manually:${NC}"
    echo ""
    echo -e "${BLUE}1. Download Handjet:${NC}"
    echo -e "   https://fonts.google.com/specimen/Handjet"
    echo -e "   → Click 'Download family'"
    echo -e "   → Extract .ttf files"
    echo -e "   → Convert to .woff2: https://cloudconvert.com/ttf-to-woff2"
    echo -e "   → Rename: Handjet-Regular.ttf → Handjet-400.woff2"
    echo -e "   → Place in: public/fonts/handjet/"
    echo ""
    echo -e "${BLUE}2. Download Space Grotesk:${NC}"
    echo -e "   https://fonts.google.com/specimen/Space+Grotesk"
    echo -e "   → Same process as above"
    echo -e "   → Place in: public/fonts/space-grotesk/"
    echo ""
    echo -e "${YELLOW}Or continue using Google Fonts (recommended):${NC}"
    echo -e "  The project is already configured with Google Fonts"
    echo -e "  No additional setup needed!"
else
    echo -e "${GREEN}✓ Local fonts found!${NC}"
    echo ""
    echo -e "${YELLOW}To switch to local fonts:${NC}"
    echo -e "  1. See lib/fonts-local.ts for instructions"
    echo -e "  2. Update app/layout.tsx imports"
fi

echo ""
echo -e "${GREEN}🎉 Done!${NC}"
