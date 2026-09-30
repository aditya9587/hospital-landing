# HopeCare Multi-Specialty Hospital: SEO & Performance Audit Checklist

## 1. Technical SEO & Crawlability
- [x] **robots.txt**: Configured via `src/app/robots.ts` with open crawling for public assets and exclusion of internal API endpoints (`/api/*`).
- [x] **sitemap.xml**: Dynamically generated at `src/app/sitemap.ts` including all static pages, 8 departments, 12 doctors, 6 clinical services, and 6 medical blog posts with appropriate priorities and `lastModified` timestamps.
- [x] **Canonical URLs**: Canonical link tags generated dynamically across all static and parameterized pages (`alternates.canonical`).
- [x] **Clean URL Slugs**: Semantic, human-readable slugs for all entities (e.g., `/departments/cardiology`, `/doctors/dr-rajesh-varma`, `/blog/silent-heart-attack-signs-in-women-and-men`).
- [x] **HTTPS & Security Headers**: Strict Transport Security (HSTS), X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`), Referrer-Policy configured in `next.config.ts`.
- [x] **Custom 404 Page**: Warm, compassionate `not-found.tsx` with immediate navigation back to home, doctors search, and emergency hotline.

---

## 2. On-Page SEO & Content Hierarchy
- [x] **Single `<h1>` Per Page**: Strict heading hierarchy (`<h1>` for primary page entity, `<h2>` for section boundaries, `<h3>` for cards and sub-items).
- [x] **Dynamic Title & Meta Descriptions**: All dynamic routes (`/departments/[slug]`, `/doctors/[slug]`, `/services/[slug]`, `/blog/[slug]`) implement Next.js `generateMetadata` with character-optimized titles and medical summaries.
- [x] **Open Graph & Twitter Cards**: High-resolution 1200x630 social preview cards configured on every page.
- [x] **Semantic HTML5 Landmarks**: `<header>`, `<main id="main-content">`, `<nav aria-label="...">`, `<article>`, `<aside>`, and `<footer>` elements properly defined.
- [x] **Accessible Breadcrumbs**: Visible breadcrumbs with schema on all inner routes (`src/components/layout/breadcrumbs.tsx`).
- [x] **Internal Cross-Linking Strategy**:
  - Department pages link directly to their specialists, clinical services, and appointment forms.
  - Doctor profiles link back to their parent department and pre-select the doctor in the appointment wizard (`/appointment?doctor=...`).
  - Medical blogs feature author cards linking to doctor profiles and consultation bookings.

---

## 3. Schema.org JSON-LD Structured Data
Verified JSON-LD schemas implemented in `src/components/seo/json-ld.tsx`:
- [x] **Hospital / MedicalOrganization / LocalBusiness**: Includes physical address, geographic coordinates (lat/long), 24x7 emergency phone numbers, medical specialties, and available clinical services.
- [x] **Physician**: Injected on doctor profile pages with credentials, specialty array, hospital affiliation, and aggregate review ratings.
- [x] **MedicalSpecialty**: Injected on department pages with descriptions and provider relationships.
- [x] **FAQPage**: Injected on homepage and `/faq` with Question/Answer schema for rich Google search snippets.
- [x] **BreadcrumbList**: Injected via breadcrumbs component for hierarchical search engine navigation.
- [x] **BlogPosting**: Injected on medical article detail pages with headline, author, publisher, and publication dates.

---

## 4. Core Web Vitals & Performance Targets
- [x] **Target: Largest Contentful Paint (LCP) < 2.5s**
  - Next.js `<Image priority>` used on above-the-fold hero banners.
  - Next.js next/font (`Geist`) with automatic self-hosting and zero font layout shifts.
  - Server Components by default to keep initial client bundle lean.
- [x] **Target: Cumulative Layout Shift (CLS) < 0.1**
  - Explicit aspect ratios (`aspect-4/3`, `aspect-16/10`, `aspect-16/9`) on all image containers preventing reflow during load.
  - System font fallbacks configured with matching metric overrides.
- [x] **Target: Interaction to Next Paint (INP) < 100ms**
  - Client components isolated to interactive features (`MultiStepBookingForm`, `DoctorDirectory`, `FaqDirectory`, `CookieConsent`).
  - Lightweight utility dependencies (`clsx`, `tailwind-merge`, `zod`, `lucide-react`).
- [x] **Reduced Motion Support**:
  - `@media (prefers-reduced-motion: reduce)` in `globals.css` ensuring animations immediately collapse for sensitive users.
