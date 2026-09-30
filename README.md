# HopeCare Super-Speciality Hospital & Research Institute 🏥🇮🇳

> **Enterprise-grade, warm, human-centered multi-specialty hospital web application** built with **Next.js 16 (App Router)**, **TypeScript (strict)**, **Tailwind CSS v4**, and **shadcn/ui** design patterns. Fully localized to an authentic Indian tertiary & quaternary healthcare perspective based in **Bengaluru, Karnataka**.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x_Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Accreditations](https://img.shields.io/badge/Accredited-NABH_Digital_•_NABL_•_JCI-0f766e?style=flat)](#accreditations--clinical-standards)
[![Build Status](https://img.shields.io/badge/Build-57_Routes_Prerendered-emerald?style=flat)](#verification--build-status)

---

## 🌟 Key Highlights & Indian Healthcare Focus

- **Authentic Indian Tertiary Healthcare Perspective**:
  - **Campus Location:** Outer Ring Road, Bellandur-Marathahalli, Bengaluru, Karnataka 560103.
  - **Emergency & Helplines:** `1800-102-CARE` (Toll-Free 24x7 Ambulance & Trauma Dispatch), `080-4999-2200` (OPD Booking), `080-4000-5555` (General Board), and WhatsApp Helpdesk `+91 98450 12345`.
  - **Apex Indian Accreditations:** **NABH Digital Hospital**, **NABL Accredited Diagnostic Laboratories**, **JCI Gold Seal of Approval**, and **Bureau Veritas Green OT Certification**.
  - **Currency & Pricing:** Transparent pricing formatted in Indian Rupees (`₹`), with specialist consultation fees (`₹950` – `₹1,500`) and comprehensive preventive health checkup packages (`₹1,999` – `₹7,499`).
  - **Insurance & Govt Schemes:** Cashless pre-authorizations via 35+ TPAs (Star Health, HDFC ERGO, ICICI Lombard, Medi Assist, Vidal Health) alongside public schemes (**Ayushman Bharat PM-JAY**, **CGHS**, **ECHS**) and **ABHA Digital Health ID** integration under ABDM.

- **Dynamic Auto-Scrolling Hero Image Carousel**:
  - Full-bleed, edge-to-edge auto-scrolling hero carousel smoothly cycling across 5 authentic high-resolution medical photography slides without visual text overlay or manual buttons:
    1. **Indian Doctors & Surgeons Team:** Senior medical faculty in modern hospital atrium.
    2. **Bengaluru Hospital Campus:** 650-bed modern quaternary care hospital exterior with emergency ambulance bay.
    3. **Robotic Surgery Suites:** Stryker Mako robotic joint and Da Vinci Xi surgical suites with Indian surgical team.
    4. **Cardiac Biplane Cath Lab:** Advanced Philips/Siemens biplane cardiac catheterization laboratory.
    5. **Maternity & Pediatric Care Suite:** Warm private patient room with Indian pediatrician, mother, and newborn.
  - Screen-reader accessible semantic `<h1 className="sr-only">` preserves strict SEO heading hierarchy.

- **Continuous Running Review Carousel (Zero Horizontal Scrollbar)**:
  - Infinite auto-scrolling marquee track featuring verified Indian patient recovery stories (Rameshwar Sharma, Deepa Krishnan, Col. Bikramjit Singh, Shanti Devi Patel, Ananya Hegde, Venkat Ramanathan).
  - Strict `overflow-hidden` design completely eliminates browser horizontal scrollbars.
  - Natural **pause-on-hover** allowing visitors to read at their own pace.
  - Interactive **modal dialog** to read complete clinical recovery narratives and book an appointment with the primary treating specialist.

- **Multi-Step Progressive Booking Engine (`/appointment`)**:
  - 4-stage booking wizard (Specialty & Doctor → Date & Slot → Patient Info → Review & Confirmation) with React Hook Form, Zod schema validation, and in-memory rate-limiting.

- **12 Board-Certified Specialists (`/doctors`)**:
  - Complete credentials from premier institutions (**AIIMS New Delhi**, **NIMHANS Bengaluru**, **CMC Vellore**, **Tata Memorial Hospital Mumbai**, **PGIMER Chandigarh**, **Sankara Nethralaya Chennai**, **NIMS Hyderabad**), multilingual fluency (Hindi, Kannada, Tamil, Telugu, Bengali, Marathi, Malayalam, Gujarati), OPD room schedules, and personal care ethos.

- **8 Clinical Institutes & 6 Surgical Services (`/departments`, `/services`)**:
  - In-depth medical pages for Cardiology, Neurology, Orthopedics, Oncology, Pediatrics & Level-III NICU, Obstetrics & Fetal Medicine, Gastroenterology, and Emergency & Trauma.

- **Service Layer Architecture**:
  - Presentation components consume data exclusively through `src/services/*`. The local typed data layer (`src/data/*`) can be replaced with any headless CMS (Strapi, Sanity, Contentful) without modifying UI components.

- **Enterprise SEO & Accessibility (WCAG 2.1 AA)**:
  - Dynamic `generateMetadata`, OpenGraph tags, JSON-LD Schema.org structured data (Hospital, Physician, MedicalSpecialty, FAQPage, BreadcrumbList, BlogPosting), `sitemap.ts`, `robots.ts`, and PWA `manifest.ts`.

---

## 📁 Repository Directory Structure

```
hospital/
├── public/
│   ├── icon.svg                               # Hospital vector logo badge
│   ├── images/
│   │   └── hero/                              # High-resolution hero carousel slides
│   │       ├── indian-doctors-team.jpg        # Team of Indian senior doctors
│   │       ├── hospital-campus.jpg            # Bengaluru hospital campus exterior
│   │       ├── robotic-facilities.jpg         # Robotic surgery operating theatre
│   │       ├── cardiac-cath-lab.jpg           # Biplane cardiac cath lab
│   │       └── maternity-pediatric.jpg        # Mother & child care patient suite
│   ├── site.webmanifest
│   └── favicon.ico
├── src/
│   ├── app/                                   # Next.js App Router (57 routes)
│   │   ├── layout.tsx                         # Root layout (Fonts, Header, Footer, StickyBar, CookieConsent)
│   │   ├── page.tsx                           # Homepage with 11 specialized sections
│   │   ├── not-found.tsx                      # Custom warm 404 error page
│   │   ├── sitemap.ts                         # Dynamic XML sitemap generator
│   │   ├── robots.ts                          # Search engine crawler policies
│   │   ├── manifest.ts                        # PWA webmanifest generator
│   │   ├── (legal)/
│   │   │   ├── privacy-policy/page.tsx        # Patient data privacy & DISHA/HIPAA compliance
│   │   │   ├── terms-of-service/page.tsx      # Service terms & cancellation policies
│   │   │   └── medical-disclaimer/page.tsx    # Medical educational notice & emergency disclaimer
│   │   ├── about/page.tsx                     # Hospital heritage, leadership board, NABH accreditation
│   │   ├── appointment/page.tsx               # Multi-step outpatient booking engine
│   │   ├── blog/
│   │   │   ├── page.tsx                       # Doctor-authored clinical health blog
│   │   │   └── [slug]/page.tsx                # Blog article with doctor author card & JSON-LD schema
│   │   ├── careers/page.tsx                   # Hospital career vacancies, fellowships & application
│   │   ├── contact/page.tsx                   # Campus directions, Namma Metro transit, direct extensions
│   │   ├── departments/
│   │   │   ├── page.tsx                       # 8 Specialized clinical departments
│   │   │   └── [slug]/page.tsx                # Department detail (Key procedures, doctors, FAQs)
│   │   ├── doctors/
│   │   │   ├── page.tsx                       # Filterable doctor directory (Department, Day, Search)
│   │   │   └── [slug]/page.tsx                # Physician profile (AIIMS/NIMHANS credentials, OPD schedule)
│   │   ├── facilities/page.tsx                # Cath Lab, Robotic OT, Level-III NICU, 3T Silent MRI
│   │   ├── faq/page.tsx                       # Categorized & searchable hospital FAQ
│   │   ├── gallery/page.tsx                   # Campus & infrastructure photo tour
│   │   ├── health-packages/page.tsx           # Preventive health checkup programs with test lists
│   │   ├── patient-care/page.tsx              # Admission guide, cashless insurance, billing, forms
│   │   ├── services/
│   │   │   ├── page.tsx                       # Specialized surgical procedures index
│   │   │   └── [slug]/page.tsx                # Service detail & patient recovery guidelines
│   │   └── api/
│   │       ├── appointment/route.ts           # Zod validated, rate-limited appointment API
│   │       └── contact/route.ts               # Contact inquiry API with honeypot bot trap
│   ├── components/
│   │   ├── layout/                            # Header, Footer, StickyMobileBar, Breadcrumbs, CookieConsent
│   │   ├── sections/                          # Modular homepage sections
│   │   │   ├── hero.tsx                       # Auto-scrolling pure image hero carousel
│   │   │   ├── quick-action-bar.tsx           # Find Doctor, Book, Packages, 24x7 Emergency
│   │   │   ├── departments-grid.tsx           # 8 Department showcase cards
│   │   │   ├── featured-doctors.tsx           # Featured senior consultants with ethos
│   │   │   ├── health-packages-section.tsx    # INR pricing health checkup packages
│   │   │   ├── why-choose-us.tsx              # Accreditations, statistics & trust pillars
│   │   │   ├── patient-stories.tsx            # Continuous auto-scrolling reviews marquee (no scrollbar)
│   │   │   ├── blog-preview.tsx               # Recent physician articles preview
│   │   │   ├── insurance-partners-section.tsx # Star Health, Medi Assist, PM-JAY TPA logos
│   │   │   ├── faq-section.tsx                # Accordion hospital FAQs
│   │   │   └── map-and-hours.tsx              # Outer Ring Road Bellandur campus map & hours
│   │   ├── ui/                                # Accessible primitives (Button, Card, Dialog, Accordion, etc.)
│   │   └── seo/                               # Schema.org JSON-LD injectors
│   ├── features/                              # Client feature islands (Booking wizard, filters, inquiry form)
│   ├── services/                              # Abstraction service layer (doctorService, departmentService, etc.)
│   ├── data/                                  # Local typed domain records (doctors, departments, packages, etc.)
│   ├── config/
│   │   ├── site.config.ts                     # Single source of truth for hospital info & navigation
│   │   └── env.ts                             # Zod runtime environment variable validation
│   ├── types/                                 # Strict TypeScript domain interfaces
│   └── lib/                                   # Utilities (rate limiter, Zod schemas, cn)
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 👨‍⚕️ Clinical Faculty & Specialists

All 12 physicians feature authentic Indian names, apex institute credentials, Indian languages, and consultation fees in Rupees:

| Specialist | Designation & Department | Premier Credentials | Languages | OPD Fee |
| :--- | :--- | :--- | :--- | :--- |
| **Dr. Rajesh Varma** | Chief of Interventional Cardiology & Cath Lab | MBBS, MD, DM (Cardiology - **AIIMS New Delhi**), FACC, FSCAI | English, Hindi, Kannada, Gujarati | **₹1,200** |
| **Dr. Ananya Sen** | Senior Consultant Neurosurgeon & Spine Specialist | MBBS, MS, MCh (Neurosurgery - **NIMHANS Bengaluru**), FINR (Zurich) | English, Hindi, Bengali, Kannada | **₹1,400** |
| **Dr. Vikramaditya Rathore** | Director of Robotic Joint Replacement & Orthopedics | MBBS, MS (Orthopedics - **PGIMER Chandigarh**), Fellowship (**Mayo Clinic, USA**) | English, Hindi, Punjabi, Kannada | **₹1,200** |
| **Dr. Priya Nair** | Head of Pediatrics & Neonatal Intensive Care (NICU) | MBBS, MD (Pediatrics - **CMC Vellore**), DNB, Fellowship (Melbourne) | English, Malayalam, Kannada, Tamil, Hindi | **₹1,000** |
| **Dr. Arvind Swaminathan** | Lead Medical & Hemato-Oncologist | MBBS, MD, DM (Medical Oncology - **Tata Memorial Hospital Mumbai**), ESMO | English, Tamil, Hindi, Kannada | **₹1,300** |
| **Dr. Sunita Kulkarni** | Senior Consultant Obstetrician & Gynecologist | MBBS, MS, DNB (Obs & Gynae), Fetal Medicine (**FMF London**), FICOG | English, Kannada, Marathi, Hindi | **₹1,100** |
| **Dr. Manojit Roy** | Chief of Gastroenterology & Hepatology | MBBS, MD, DM (Gastroenterology - **PGIMER Chandigarh**), FASGE, FACG | English, Bengali, Hindi, Kannada | **₹1,200** |
| **Dr. Meera Nambiar** | Director of Emergency Medicine & Level-1 Trauma | MBBS, MD (Emergency Medicine), MRCEM (UK), FACEM (Hon) | English, Malayalam, Kannada, Hindi, Tamil | **₹1,000** |
| **Dr. K. S. Venkatesh** | Senior Cardiothoracic & Vascular Surgeon | MBBS, MS, MCh (CTVS - **AIIMS New Delhi**), FACS | English, Kannada, Telugu, Hindi | **₹1,500** |
| **Dr. Tariq Al-Mansoor** | Senior Consultant Pulmonologist & Critical Care | MBBS, MD (Pulmonary Medicine - **KGMU Lucknow**), FCCP, EDIC | English, Hindi, Urdu, Kannada | **₹1,100** |
| **Dr. Kavita Reddy** | Senior Consultant Endocrinologist & Diabetologist | MBBS, MD, DM (Endocrinology - **NIMS Hyderabad**), FACE | English, Telugu, Kannada, Hindi | **₹1,000** |
| **Dr. Amitav Banerjee** | Senior Consultant Eye Surgeon & Cornea Specialist | MBBS, MS (Ophthalmology - **Sankara Nethralaya Chennai**), Fellow (**LVPEI**) | English, Bengali, Kannada, Hindi, Tamil | **₹950** |

---

## 💰 Preventive Health Screening Packages

Formatted with Indian Rupees (`₹`) and localized diagnostic test panels:

- **Master Executive Health Checkup:** **₹5,999** *(was ₹11,000)* — 82 vital parameters (Lipid Profile, HbA1c, Liver Function, Ultrasound Abdomen, Cardiac TMT/Echo).
- **Comprehensive Cardiac Wellness Check:** **₹7,499** *(was ₹14,000)* — 3D Echo, Treadmill Test, Carotid Doppler, Hs-CRP, and Senior Cardiologist consultation.
- **Well Woman Comprehensive Screening:** **₹4,999** *(was ₹9,500)* — Mammography/Breast USG, Pap Smear, Thyroid Panel, Bone Mineral Density (DEXA), Pelvic Sonography.
- **Swarna Ayush Senior Citizen Care (60+):** **₹4,999** *(was ₹8,500)* — Comprehensive geriatrics panel, DEXA scan, Prostate PSA / Gynecological screening.
- **Madhumeha Comprehensive Diabetes Check:** **₹2,499** *(was ₹4,500)* — Fasting/PP Glucose, HbA1c, Urine Microalbuminuria, Diabetic Neuropathy Screening, Fundus Eye Evaluation.
- **Bal Swasthya Child Development Screen:** **₹1,999** *(was ₹3,500)* — Pediatric growth assessment, immunization audit, pediatric dental & vision check.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.18+`, `v20+`, or `v24+`
- npm `v9+` or `v10+`

### Installation & Local Run

```bash
# 1. Clone repository
git clone https://github.com/aditya9587/hospital-landing.git
cd hospital-landing

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local

# 4. Start local development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Generation

```bash
# Validates TypeScript, lints, and prerenders all 57 routes
npm run build

# Start production server
npm run start
```

---

## 🛠️ Content & Headless CMS Swapping

All UI components receive their data through abstraction services in `src/services/`.

For example, `src/services/doctorService.ts`:
```typescript
import { doctorsData } from "@/data/doctors";

export const doctorService = {
  async getAll(options) {
    return doctorsData;
  },
  async getBySlug(slug) {
    return doctorsData.find((d) => d.slug === slug) || null;
  },
};
```

To switch to a Headless CMS (Strapi, Sanity, or Contentful), simply update the service implementation to query your CMS endpoint:
```typescript
import { client } from "@/lib/sanity";

export const doctorService = {
  async getAll(options) {
    return await client.fetch(`*[_type == "doctor"]`);
  },
  async getBySlug(slug) {
    return await client.fetch(`*[_type == "doctor" && slug.current == $slug][0]`, { slug });
  },
};
```
No modifications to UI components, pages, or forms are required.

---

## 🔒 Security Architecture

1. **Input Validation:** Strict Zod schemas (`src/lib/validation.ts`) shared between client forms and server API routes.
2. **Bot Honeypot Traps:** Form submissions include a hidden `website_hp` field. Automated bots filling this field are silently rejected.
3. **In-Memory Rate Limiting:** API routes enforce an IP rate limiter (`src/lib/rate-limit.ts`) allowing a maximum of 5 requests per minute per IP.
4. **Security HTTP Headers:** `next.config.ts` enforces HSTS, Content-Type-Options `nosniff`, Frame-Options `SAMEORIGIN`, and restrictive Permissions-Policy.
5. **Patient Data Minimization:** Forms collect only necessary administrative contact information to preserve confidentiality.

---

## 📄 License & Attribution

- **Hospital Name:** HopeCare Super-Speciality Hospital & Research Institute, Bengaluru, Karnataka, India.
- **Repository:** [https://github.com/aditya9587/hospital-landing](https://github.com/aditya9587/hospital-landing)
- **License:** MIT License. Built for clinical excellence and compassionate healthcare delivery.
