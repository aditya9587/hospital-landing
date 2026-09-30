# HopeCare Multi-Specialty Hospital & Research Centre
> Enterprise-grade, warm, human-centered, modular web application built with **Next.js (App Router)**, **TypeScript (strict)**, **Tailwind CSS**, and **shadcn/ui** design patterns.

---

## 🌟 Key Highlights & Architectural Strengths

- **Warm, Compassionate Design**: Soft teal-to-sky gradients (`#0f766e` to `#0284c7`), generous whitespace, rounded modern cards (`rounded-2xl`, `rounded-3xl`), and high-visibility warm coral accents (`#e11d48`) for urgent emergency actions.
- **Human Connection First**: Doctor cards feature authentic portraits, credentials, and an empathetic personal ethos quote ("What I care about"), accompanied by direct 1-click booking and calling.
- **Service Layer Abstraction**: Presentation components consume data exclusively through `src/services/*`. The underlying data layer (`src/data/*`) can be replaced with any headless CMS (Strapi, Sanity, Contentful) without altering a single UI component.
- **Multi-Step Progressive Booking Engine**: 4-stage appointment wizard (Specialty & Doctor → Date & Slot → Patient Info → Review & Confirmation) with React Hook Form, Zod schema validation, and in-memory rate-limiting.
- **Rigorous SEO & Discoverability**: Dynamic `generateMetadata`, OpenGraph cards, `sitemap.ts`, `robots.ts`, and 6 Schema.org JSON-LD structured schemas (Hospital, Physician, MedicalSpecialty, FAQPage, BreadcrumbList, BlogPosting).
- **Accessibility & Compliance (WCAG 2.1 AA)**: Skip links, explicit form labels, ARIA landmarks, visible focus rings, and `@media (prefers-reduced-motion)` fallbacks.
- **Defense-in-Depth Security**: Zod-validated environment variables, HTTP security headers (CSP, HSTS, X-Frame-Options), bot honeypot traps, and patient data minimization.

---

## 📁 Repository Folder Structure

```
hospital/
├── .env.example                         # Documented environment variables template
├── .env.local                           # Local environment overrides
├── next.config.ts                       # Security headers, remote image domains, strict mode
├── package.json
├── README.md                            # Comprehensive project guide
├── SEO_CHECKLIST.md                     # Technical, on-page, and schema SEO verification
├── public/
│   ├── icon.svg                         # Hospital vector logo badge
│   └── site.webmanifest
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── layout.tsx                   # Root layout (Fonts, Header, Footer, StickyBar, CookieConsent)
│   │   ├── page.tsx                     # Homepage with all 11 required sections
│   │   ├── not-found.tsx                # Custom warm 404 error page
│   │   ├── sitemap.ts                   # Dynamic XML sitemap generator
│   │   ├── robots.ts                    # Search engine crawler policies
│   │   ├── manifest.ts                  # PWA application manifest
│   │   ├── (legal)/
│   │   │   ├── privacy-policy/page.tsx  # Patient privacy & HIPAA compliance
│   │   │   ├── terms-of-service/page.tsx# Service terms & cancellation policies
│   │   │   └── medical-disclaimer/page.tsx # Medical educational notice
│   │   ├── about/page.tsx               # Hospital heritage, values, leadership board
│   │   ├── appointment/page.tsx         # Multi-step booking engine
│   │   ├── blog/
│   │   │   ├── page.tsx                 # Medical articles & insights directory
│   │   │   └── [slug]/page.tsx          # Article detail with physician author card & schema
│   │   ├── careers/page.tsx             # Job listings, fellowships & application modal
│   │   ├── contact/page.tsx             # Campus directions, map, department phone extensions
│   │   ├── departments/
│   │   │   ├── page.tsx                 # 8 Clinical institutes index
│   │   │   └── [slug]/page.tsx          # Specialized department page (Procedures, doctors, FAQs)
│   │   ├── doctors/
│   │   │   ├── page.tsx                 # Filterable directory (by specialty, days, search)
│   │   │   └── [slug]/page.tsx          # Doctor credentials, ethos, OPD schedule & schema
│   │   ├── facilities/page.tsx          # Cath Lab, Robotic OT, Level-III NICU, 3T Silent MRI
│   │   ├── faq/page.tsx                 # Categorized, searchable FAQ page
│   │   ├── gallery/page.tsx             # Hospital campus & infrastructure photo tour
│   │   ├── health-packages/page.tsx     # Preventive screening packages with test breakdown
│   │   ├── patient-care/page.tsx        # Admission guide, cashless insurance, billing, forms
│   │   ├── services/
│   │   │   ├── page.tsx                 # Clinical procedures index
│   │   │   └── [slug]/page.tsx          # Clinical procedure detail & recovery guidelines
│   │   └── api/
│   │       ├── appointment/route.ts     # Zod validated, rate-limited appointment handler
│   │       └── contact/route.ts         # Contact inquiry handler with honeypot & validation
│   ├── components/
│   │   ├── ui/                          # Accessible UI components (Button, Badge, Card, Input, etc.)
│   │   ├── layout/                      # Header, Footer, StickyMobileBar, Breadcrumbs, CookieConsent
│   │   ├── sections/                    # Prop-driven homepage sections (Hero, Doctors, Packages, etc.)
│   │   └── seo/                         # Schema.org JSON-LD injectors
│   ├── features/                        # Interactive client islands (Booking wizard, filters)
│   ├── services/                        # Service layer abstraction (doctorService, departmentService, etc.)
│   ├── data/                            # Typed records (8 depts, 12 doctors, 6 blogs, packages, etc.)
│   ├── config/
│   │   ├── site.config.ts               # Central single source of truth for hospital info & navigation
│   │   └── env.ts                       # Zod runtime environment validation
│   ├── types/                           # Strict TypeScript domain interfaces
│   └── lib/                             # Utilities (cn, in-memory rate limiter, Zod schemas)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.18+` or `v20+` or `v24+`
- npm `v9+` or `v10+`

### Installation
```bash
# Clone or navigate to the repository
cd hospital

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Launch the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Content & CMS Swapping Guide

All UI components receive their data through the abstraction services in `src/services/`.

For example, `src/services/doctorService.ts`:
```typescript
// Current: Fetching from local typed fixtures
import { doctorsData } from "@/data/doctors";

export const doctorService = {
  async getAll(options) {
    return doctorsData;
  },
  async getBySlug(slug) {
    return doctorsData.find(d => d.slug === slug) || null;
  }
};
```

To switch to a Headless CMS (e.g. Sanity, Strapi, or Contentful), update `doctorService.ts` to call your CMS API:
```typescript
// Headless CMS Swap Example
import { client } from "@/lib/sanity";

export const doctorService = {
  async getAll(options) {
    return await client.fetch(`*[_type == "doctor"]`);
  },
  async getBySlug(slug) {
    return await client.fetch(`*[_type == "doctor" && slug.current == $slug][0]`, { slug });
  }
};
```
No modifications to UI components or page files are required.

---

## 🔒 Security Architecture

1. **Input Validation**: Both client forms and server API routes share identical Zod schemas (`src/lib/validation.ts`).
2. **Bot Honeypot Field**: Form submissions include a hidden `website_hp` field. Automated bots filling this field are silently rejected without error disclosure.
3. **In-Memory Rate Limiting**: API routes enforce an IP rate limiter (`src/lib/rate-limit.ts`) allowing a maximum of 5 requests per minute per IP.
4. **Security HTTP Headers**: `next.config.ts` injects HSTS, Content-Type-Options `nosniff`, Frame-Options `SAMEORIGIN`, and restrictive Permissions-Policy.
5. **Data Minimization**: Medical forms collect only administrative contact information, safeguarding patient confidentiality.

---

## 📋 Assumptions Made

1. **Hospital Location & Coordinates**: Fictionalized as HopeCare Hospital & Research Centre situated at 742 Healthcare Parkway, Civic Medical Center, San Francisco, CA. All contact numbers (`1800-555-CARE`) utilize standard toll-free healthcare notation.
2. **Headless CMS Storage**: High-resolution curated medical photography from Unsplash is utilized for sample records. Remote image domains are configured in `next.config.ts`.
3. **Appointment Notification Delivery**: The `/api/appointment` handler simulates SMS/email dispatch by returning a booking reference (e.g., `HC-2026-XXXX`). In production, this connects to Twilio / SendGrid.
4. **Rate Limiting**: An in-memory token bucket is used for single-server or development deployments. In distributed serverless clusters, this can be swapped with Redis / Upstash.
