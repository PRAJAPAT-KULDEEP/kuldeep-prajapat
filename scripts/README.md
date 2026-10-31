# scripts/

Utility scripts for the Academic Pages template.

## `make-og-image.py`

Generates the default Open Graph / social preview image at
`images/og-image.png` (1200x630 PNG) used by `_includes/seo.html` when a page
does not define its own header image.

```
python3 scripts/make-og-image.py
```

Requirements:

- Python 3 with [Pillow](https://python-pillow.org) (`pip install Pillow`)
- A TrueType font; defaults to DejaVu Sans (`/usr/share/fonts/truetype/dejavu`),
  override with the `FONT_DIR` environment variable
- The site favicon at `images/favicon-512x512.png` (already in the template);
  it is composited as the card logo

The output is byte-reproducible for a given Pillow/font version and is committed
to the repo, so the build itself does not need Pillow.

(The site now uses `images/site-preview.png` as its default social image; its
editable source is `images/site-preview.svg`. Articles can set their own with
`social_image:` in the front matter, e.g. `images/article-page-preview.png`.)

## `optimize_images.py`

Makes photos web-ready. The GitHub Pages workflow (`.github/workflows/jekyll.yml`)
runs it on the build copy before Jekyll, so the originals in this repository are
never changed:

- `.heic`/`.heif` photos are converted to `.jpg` with the same name (point
  `_data/gallery.yml` at the `.jpg` path); the `.heic` file is not published.
- JPEGs are resized to at most 1600 px on the long side and re-saved when they
  are large or carry EXIF metadata (camera details, GPS location).

To see what it would do, and the final pixel sizes for `width`/`height` in
`_data/gallery.yml`, run it without `--in-place`:

```
pip install pillow pillow-heif
python3 scripts/optimize_images.py images
```
