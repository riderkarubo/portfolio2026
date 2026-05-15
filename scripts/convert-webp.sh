#!/bin/bash
# Convert all images under assets/ to WebP with appropriate quality and resize.
# Originals are kept (we just add .webp alongside). The HTML/JSX will be updated to reference .webp.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

WEBP_Q_PHOTO=82      # photographic content (hero, works, logos with photo)
WEBP_Q_LOGO=90       # logo/illustration with sharp edges
WEBP_Q_CLIENT=92     # client logos (must stay crisp)

convert_one() {
  local src="$1"
  local q="$2"
  local maxw="${3:-}"  # optional max width
  local dst="${src%.*}.webp"

  if [[ -n "$maxw" ]]; then
    cwebp -quiet -q "$q" -resize "$maxw" 0 "$src" -o "$dst"
  else
    cwebp -quiet -q "$q" "$src" -o "$dst"
  fi
  local src_size dst_size
  src_size=$(stat -f%z "$src")
  dst_size=$(stat -f%z "$dst")
  printf "  %-45s %7d -> %7d  (%.0f%%)\n" "$src" "$src_size" "$dst_size" "$(echo "scale=0; $dst_size*100/$src_size" | bc)"
}

echo "== hero =="
convert_one "assets/hero.png" "$WEBP_Q_PHOTO" 2400

echo "== profile =="
convert_one "assets/profile.jpg" "$WEBP_Q_PHOTO" 800
convert_one "assets/profile.png" "$WEBP_Q_PHOTO" 800
convert_one "assets/profile-illust.png" "$WEBP_Q_LOGO" 600

echo "== works =="
for f in assets/works/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  [[ -f "$f" ]] || continue
  convert_one "$f" "$WEBP_Q_PHOTO" 1200
done

echo "== logos =="
for f in assets/logos/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  [[ -f "$f" ]] || continue
  convert_one "$f" "$WEBP_Q_LOGO" 600
done

echo "== clients =="
for f in assets/clients/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  [[ -f "$f" ]] || continue
  convert_one "$f" "$WEBP_Q_CLIENT" 400
done

echo
echo "Done."
