# CLAUDE.md

## Project Overview

**Temanisikecil** — Marketing landing page for educational worksheets and coding courses for children (ages 2-5+). Built as a static site with no backend; all product purchases redirect to [lynk.id/temanisikecil](https://lynk.id/temanisikecil).

Live site: https://temanisikecil.com

## Tech Stack

- **Framework**: Nuxt 3.13 (Vue 3, Composition API)
- **Styling**: Tailwind CSS 3.4 (utility-first, no custom CSS classes)
- **Font**: Poppins (400/500/600/700) via Google Fonts
- **UI Libraries**: HeadlessUI (mobile menu dialog), HeroIcons (icons)
- **Carousel**: nuxt-swiper (hero banner slider)
- **Analytics**: nuxt-gtag (Google Analytics G-X2G682LK7K)
- **SEO**: @nuxtjs/sitemap
- **Package Manager**: npm (package-lock.json present, bun.lockb also exists)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## Project Structure

```
pages/index.vue              # Single landing page (sections: hero, features, gallery, products, testimonials, CTA)
layouts/custom.vue           # Main layout wrapper (meta tags, OG tags)
layouts/partials/NavHeader.vue  # Sticky header with scroll-spy navigation + mobile menu
layouts/partials/TheFooter.vue  # Footer with logo, copyright, Instagram link
components/home/HeroSection.vue # Swiper carousel with 7 slides (hardcoded data)
components/ProductList.vue      # Product grid — worksheets (3 age groups) + coding (2 stages)
assets/css/main.css             # Tailwind directives only
```

## Key Patterns

- **Single-page design**: All content on `pages/index.vue` with hash-based anchor navigation (#home, #features, #gallery, #products, #testimonials)
- **Scroll-spy nav**: NavHeader tracks active section via scroll position and highlights the corresponding nav link
- **Data is hardcoded**: Products, testimonials, slider data are all inline arrays — no API calls or CMS
- **Images**: Stored in both `/assets/images/` and `/public/assets/images/` — components reference both paths
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints. Grid layouts go from 1 → 2 → 3 columns
- **Design language**: Orange/amber primary, section-specific accents (sky, violet, emerald), glass morphism, SVG wave dividers, decorative gradient blobs

## Layout

The app uses a single layout (`custom`) set in `app.vue`. Layout includes `NavHeader` + `<slot>` + `TheFooter`. There is no default layout — `app.vue` hardcodes `name="custom"`.

## External Links

- Products link to: `https://lynk.id/temanisikecil`
- Social: Instagram (in footer)
