#!/bin/bash

# ============================================================================
# Font Download Script for RGM VOL.3
# ============================================================================
# This script helps download and prepare local font files from Google Fonts
#
# Usage:
#   chmod +x scripts/download-fonts.sh
#   ./scripts/download-fonts.sh
# ============================================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directories
FONTS_DIR="public/fonts"
HANDJET_DIR="$FONTS_DIR/handjet"
SPACE_DIR="$FONTS_DIR/space-grotesk"
VARIABLE_DIR="$FONTS_DIR/variable"

echo -e "${GREEN}🔤 RGM VOL.3 - Font Download Script${NC}"
echo ""

# Create directories
echo -e "${YELLOW}📁 Creating font directories...${NC}"
mkdir -p "$HANDJET_DIR"
mkdir -p "$SPACE_DIR"
mkdir -p "$VARIABLE_DIR"

echo -e "${GREEN}✓ Directories created${NC}"
echo ""

# Check if required tools are installed
echo -e "${YELLOW}🔍 Checking required tools...${NC}"

if ! command -v wget &> /dev/null && ! command -v curl &> /dev/null; then
    echo -e "${RED}✗ Neither wget nor curl is installed${NC}"
    echo "Please install one of them:"
    echo "  brew install wget"
    echo "  brew install curl"
    exit 1
fi

if ! command -v pyftsubset &> /dev/null; then
    echo -e "${YELLOW}⚠ fonttools not installed (optional)${NC}"
    echo "Install with: pip install fonttools brotli"
fi

echo -e "${GREEN}✓ Tools check complete${NC}"
echo ""

# Font URLs (Google Fonts CDN)
echo -e "${YELLOW}📥 Downloading fonts from Google Fonts...${NC}"
echo ""

# Handjet weights
HANDJET_WEIGHTS=(
    "400"
    "600"
    "700"
    "900"
)

# Space Grotesk weights
SPACE_WEIGHTS=(
    "400"
    "500"
    "700"
)

# Download function
download_font() {
    local family=$1
    local weight=$2
    local output_dir=$3

    local url="https://fonts.gstatic.com/s/${family}/v1"
    local filename="${family^}-${weight}.woff2"

    case $family in
        "handjet")
            case $weight in
                "400") file="axFpbgoj18T3l-gKaaoZ2lDOp9L-3R6E" ;;
                "600") file="axFpbgoj18T3l-gKaaoZ2lKM-4f3R6E" ;;
                "700") file="axFpbgoj18T3l-gKaaoZ2lJM_4j3R6E" ;;
                "900") file="axFpbgoj18T3l-gKaaoZ2lDOp8L3R6E" ;;
            esac
            ;;
        "spacegrotesk")
            case $weight in
                "400") file="V8mDoQfxVT4Dvddr_yOwjYGQOo8P76g" ;;
                "500") file="V8mDoQfxVT4Dvddr_yOwjWMO_o8P76g" ;;
                "700") file="V8mDoQfxVT4Dvddr_yOwjW0O_o8P76g" ;;
            esac
            ;;
    esac

    local full_url="${url}/${file}.woff2"
    local output_path="${output_dir}/${filename}"

    if [ -f "$output_path" ]; then
        echo -e "${YELLOW}  ✓ ${filename} already exists${NC}"
    else
        echo -e "  📥 ${filename}..."
        if command -v curl &> /dev/null; then
            curl -s -o "$output_path" "$full_url"
        else
            wget -q -O "$output_path" "$full_url"
        fi

        if [ -f "$output_path" ]; then
            echo -e "${GREEN}  ✓ ${filename} downloaded${NC}"
        else
            echo -e "${RED}  ✗ Failed to download ${filename}${NC}"
        fi
    fi
}

# Download Handjet fonts
echo -e "${YELLOW}Handjet:${NC}"
for weight in "${HANDJET_WEIGHTS[@]}"; do
    download_font "handjet" "$weight" "$HANDJET_DIR"
done
echo ""

# Download Space Grotesk fonts
echo -e "${YELLOW}Space Grotesk:${NC}"
for weight in "${SPACE_WEIGHTS[@]}"; do
    download_font "spacegrotesk" "$weight" "$SPACE_DIR"
done
echo ""

# Check downloaded files
echo -e "${YELLOW}📊 Download Summary:${NC}"
echo ""

HANDJET_COUNT=$(ls -1 "$HANDJET_DIR"/*.woff2 2>/dev/null | wc -l)
SPACE_COUNT=$(ls -1 "$SPACE_DIR"/*.woff2 2>/dev/null | wc -l)

echo -e "  Handjet files: ${GREEN}${HANDJET_COUNT}${NC}/4"
echo -e "  Space Grotesk files: ${GREEN}${SPACE_COUNT}${NC}/3"
echo ""

if [ $HANDJET_COUNT -eq 4 ] && [ $SPACE_COUNT -eq 3 ]; then
    echo -e "${GREEN}✓ All fonts downloaded successfully!${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Update app/layout.tsx to use local fonts"
    echo "  2. Remove Google Fonts preconnect links"
    echo "  3. Test the application"
    echo ""
    echo "See public/fonts/README.md for instructions"
else
    echo -e "${YELLOW}⚠ Some fonts failed to download${NC}"
    echo "You can download them manually from:"
    echo "  https://fonts.google.com/specimen/Handjet"
    echo "  https://fonts.google.com/specimen/Space+Grotesk"
fi

echo ""
echo -e "${GREEN}🎉 Done!${NC}"
