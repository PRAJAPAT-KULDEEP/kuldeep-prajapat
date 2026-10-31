#!/usr/bin/env python3
"""Make photos web-ready before the Jekyll build.

The GitHub Pages workflow runs this on a fresh checkout, so the originals in the
repository are never changed; only the copies that get published are:

    python scripts/optimize_images.py images --in-place

For every file under the given folder:
  * .heic / .heif  -> saved as .jpg with the same name; the .heic copy is
                      removed from the build so it is not published.
  * .jpg / .jpeg   -> re-saved when the long side is over MAX_SIDE pixels, the
                      file is over MAX_BYTES, or it carries EXIF metadata
                      (phones store camera details and often GPS location).
                      Orientation is applied first, so photos stay upright.
PNG, SVG, GIF and WebP files are left alone.

Without --in-place it only prints what it would do, with the final pixel sizes
(handy for the width/height values in _data/gallery.yml).
Needs: pip install pillow pillow-heif
"""
import argparse
import io
import os
import sys

from PIL import Image, ImageOps

try:
    import pillow_heif

    pillow_heif.register_heif_opener()
except ImportError:  # only needed when .heic files are present
    pillow_heif = None

MAX_SIDE = 1600          # long edge in pixels; gallery photos display at most ~620 px tall
MAX_BYTES = 350 * 1024   # re-save JPEGs bigger than this even if small in pixels
QUALITY = 82

HEIC = (".heic", ".heif")
JPEG = (".jpg", ".jpeg")


def to_web_jpeg(path):
    """Return (width, height, jpeg_bytes) for a web-ready copy of the image."""
    with Image.open(path) as im:
        icc = im.info.get("icc_profile")
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
        buf = io.BytesIO()
        options = {"quality": QUALITY, "optimize": True, "progressive": True}
        if icc:
            options["icc_profile"] = icc  # keep colours; EXIF/GPS is dropped
        im.save(buf, "JPEG", **options)
        return im.size[0], im.size[1], buf.getvalue()


def needs_work(path):
    with Image.open(path) as im:
        has_exif = bool(im.getexif())
        long_side = max(im.size)
    return long_side > MAX_SIDE or os.path.getsize(path) > MAX_BYTES or has_exif


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("folder", help="folder to scan, e.g. images")
    parser.add_argument("--in-place", action="store_true", help="rewrite files (use in CI only)")
    args = parser.parse_args()

    before = after = changed = 0
    for root, _dirs, files in os.walk(args.folder):
        for name in sorted(files):
            path = os.path.join(root, name)
            ext = os.path.splitext(name)[1].lower()
            if ext not in HEIC + JPEG:
                continue
            if ext in HEIC and pillow_heif is None:
                sys.exit(f"pillow-heif is required to convert {path}")
            if ext in JPEG and not needs_work(path):
                continue

            size_in = os.path.getsize(path)
            width, height, data = to_web_jpeg(path)
            target = os.path.splitext(path)[0] + ".jpg" if ext in HEIC else path
            if ext in HEIC and os.path.exists(target):
                print(f"skip {path}: {target} already exists", file=sys.stderr)
                continue

            before += size_in
            after += len(data)
            changed += 1
            print(f"{path}: {size_in // 1024} KB -> {os.path.basename(target)} "
                  f"{width}x{height}, {len(data) // 1024} KB")
            if args.in_place:
                with open(target, "wb") as out:
                    out.write(data)
                if ext in HEIC:
                    os.remove(path)

    mode = "optimized" if args.in_place else "would optimize"
    print(f"{mode} {changed} file(s): {before / 1048576:.1f} MB -> {after / 1048576:.1f} MB")


if __name__ == "__main__":
    main()
