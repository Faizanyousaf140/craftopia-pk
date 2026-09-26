# Craftopia.pk — Website

A premium, animated Next.js + TypeScript website for the Craftopia.pk
handmade embroidery and décor brand. Built as a catalog + WhatsApp-order
site — no payment/checkout system.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons) + two custom brand icon components (Instagram,
  Facebook — Lucide dropped brand logos in recent versions)

## Before you deploy — required edits

Open **`lib/config.ts`** — this is the single file that controls every
social link, WhatsApp number, and site URL used across the entire site:

```ts
export const WHATSAPP_NUMBER = "923001234567"; // ← your real number, no + or spaces
export const INSTAGRAM_URL = "https://www.instagram.com/craftopia.pk";
export const FACEBOOK_URL = "https://www.facebook.com/craftopia.pk";
export const TIKTOK_URL = "https://www.tiktok.com/@craftopia.pk";
export const ETSY_URL = "https://craftopiapkstudio.etsy.com";
export const CONTACT_EMAIL = "hello@craftopia.pk";
export const SITE_URL = "https://craftopia.pk"; // your live domain, once deployed
```

Nothing else in the codebase hardcodes a phone number, social URL, or
domain — every button, footer link, and metadata tag reads from this file.

## Final pre-launch checklist

1. **`lib/config.ts`** — replace `WHATSAPP_NUMBER`, `CONTACT_EMAIL`, and
   `SITE_URL` with real values. Instagram/Facebook URLs are already your
   real handles.
2. **Product photography** — every image in `public/images/` is a
   generated placeholder (see below). Replace before launch.
3. **Prices** — `data/products.ts` has `price` fields left undefined on
   purpose; add real PKR prices per product (site shows "Price on
   request" until you do).
4. **Policy content** — search the repo for `TODO: owner` (list below)
   and fill in real shipping/return/custom-order policy text.
5. **Testimonials** — currently empty on purpose (`components/Testimonials.tsx`).
   Add real reviews when you have them; the section renders a "coming
   soon" placeholder until then.
6. **Favicon** — a simple generated `app/icon.svg` is in place. Swap for
   your real logo mark if you have one.

## All remaining `TODO: owner` markers in the code

| File | What's needed |
|---|---|
| `lib/config.ts` | Real WhatsApp number, contact email, live site URL |
| `components/Footer.tsx` | Shipping/return policy links, once you define them |
| `app/about/page.tsx` | Optional: founder story, founding year, location |
| `app/custom-orders/page.tsx` | Confirm real custom-order pricing/turnaround |
| `app/contact/page.tsx` | Shipping regions, delivery time, return policy |
| `components/Testimonials.tsx` | Real customer reviews (currently empty array) |
| `data/products.ts` | Real PKR prices per product |

Nothing else in the project contains fabricated business claims (no fake
years-in-business, no fake artisan counts, no fake reviews) — this was
intentional per your original brief.

## Adding / editing products

All product data lives in **`data/products.ts`** as a typed array — no
product info is hardcoded in components. To add a product:

```ts
{
  id: "new-item",
  name: "Your Product Name",
  slug: "your-product-name",       // used in the URL /shop/your-product-name
  category: "cushions",             // must match an id in data/collections.ts
  tagline: "A short line under the name",
  description: "Longer paragraph.",
  images: ["/images/products/your-image.jpg"],
  price: 3500,                      // in PKR — omit to show "Price on request"
  materials: ["Cotton", "Embroidery thread"],
  dimensions: "16 x 16 in",
  customizable: true,
  prepTime: "5–7 days",
  care: "Spot clean recommended.",
  featured: true,                   // shows on homepage "Made by Hand" section
}
```

Product pages, the shop grid, WhatsApp pre-filled messages, sitemap
entries, and structured data are all generated automatically from this
array — nothing else needs updating when you add a product.

The site currently ships with 10 products across all 6 collections
(cushions, embroidery art, bags & clutches), each with a unique name,
tagline, description, and 2 gallery images. Home décor, gifts, and
custom-creations categories exist and are ready to filter, but have no
products yet — add some or the shop page will show "More pieces from
this collection are coming soon" for those tabs.

## Replacing placeholder images

**All current product/category/hero/studio images are generated abstract
SVG placeholders**, not real photos — they exist so the layout, hover
states, and image optimization pipeline all work out of the box. Replace
them with real photography before launch:

- `public/images/products/` — 2 images per product (main + detail)
- `public/images/categories/` — 1 image per collection
- `public/images/hero/` — 3 images for the homepage hero collage
- `public/images/studio/` — 8 images for the "From Our Studio" gallery
- `public/images/about/` — 1 image for the About page

Keep the same filenames (or update the `images` field in `data/products.ts`
/ `data/collections.ts` to match new filenames) and Next.js Image
optimization will handle the rest — no code changes required for JPG/PNG/WebP.

## Local development

```bash
npm install
npm run dev
```

## Production build (verified passing)

```bash
npm run build
npm run start
```

TypeScript (`tsc --noEmit`), ESLint, and `next build` all pass with zero
errors/warnings. All 21 routes were smoke-tested for correct HTTP status
codes, working WhatsApp deep links with dynamic product names, working
category filters, and structured data.

### Fonts

This project intentionally uses a curated **system font stack** (see
`app/globals.css`) instead of `next/font/google`, so builds don't depend
on reaching `fonts.googleapis.com` — this avoids failures in restricted
network/CI environments. If you want a specific webfont (e.g. an actual
serif display font), either self-host it with `next/font/local`, or
switch to `next/font/google` if your build environment has open internet
access.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — zero config needed, it's a standard Next.js app.
3. Before your last deploy, set `SITE_URL` in `lib/config.ts` to your
   final domain (used in metadata, sitemap.xml, and structured data —
   getting this wrong doesn't break the build, but it does make SEO
   metadata point at the wrong domain).

## Architecture

```
app/                  routes (home, shop, shop/[slug], about, custom-orders, contact)
components/           reusable UI (Navbar, Hero, ProductCard, etc.)
components/icons/     custom brand icon SVGs (Instagram, Facebook)
data/                 typed product & collection data — edit here, not in components
lib/                  config.ts (central socials/whatsapp/site config) + whatsapp.ts (link builder)
public/images/        placeholder art — replace with real photography
```
