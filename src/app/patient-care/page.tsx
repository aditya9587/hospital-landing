import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Download,
  CheckCircle2,
  Clock,
  PhoneCall,
  Calendar,
  AlertCircle,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Patient Care Guide | Admission, Insurance, Billing & Forms",
  description:
    "Comprehensive patient care information for HopeCare Hospital: planned admissions, 24x7 cashless insurance processing, transparent billing, and downloadable patient forms.",
  alternates: { canonical: `${siteConfig.url}/patient-care` },
};

export default function PatientCarePage() {
  const forms = [
    {
      title: "Outpatient Registration & Medical History Form",
      category: "Admissions",
      size: "180 KB",
      format: "PDF",
    },
    {
      title: "Cashless Insurance Pre-Authorization Request Form",
      category: "Insurance & TPA",
      size: "240 KB",
      format: "PDF",
    },
    {
      title: "Informed Consent for Surgical & Anesthetic Procedures",
      category: "Surgical",
      size: "210 KB",
      format: "PDF",
    },
    {
      title: "Medical Records & Diagnostic Imaging Release Request",
      category: "Records",
      size: "150 KB",
      format: "PDF",
    },
    {
      title: "Designated Caregiver & Power of Attorney Authorization",
      category: "Legal & Ethics",
      size: "195 KB",
      format: "PDF",
    },
  ];

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Patient Care", url: "/patient-care" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Patient & Visitor Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Comfort & Clarity, Every Step of the Way
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigating a hospital stay shouldn&apos;t feel stressful. Explore our step-by-step
            admission guide, cashless insurance settlement process, visitor policies, and download required clinical forms.
          </p>
        </div>
      </section>

      {/* Quick Nav Anchors */}
      <div className="sticky top-[102px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-bold text-slate-700">
          <a href="#admission" className="hover:text-teal-700 whitespace-nowrap">
            Admission Guide
          </a>
          <span>•</span>
          <a href="#insurance" className="hover:text-teal-700 whitespace-nowrap">
            Cashless Insurance
          </a>
          <span>•</span>
          <a href="#billing" className="hover:text-teal-700 whitespace-nowrap">
            Billing & Estimates
          </a>
          <span>•</span>
          <a href="#visiting" className="hover:text-teal-700 whitespace-nowrap">
            Visitor Policies
          </a>
          <span>•</span>
          <a href="#forms" className="hover:text-teal-700 whitespace-nowrap text-teal-800">
            Download Forms
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* SECTION 1: ADMISSION GUIDE */}
        <section id="admission" className="scroll-mt-36 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Check-In & Stay
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Hospital Admission Guide
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether your admission is planned for a scheduled surgical procedure or unexpected through
              our emergency triage, our Admissions Helpdesk operates 24/7 in the Main Lobby.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Planned Admissions */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-700" />
                <span>Planned Inpatient Admissions</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Report to Admissions Desk B by 07:00 AM on procedure day</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Bring Govt Photo ID (Aadhaar Card, PAN, Voter ID, or Passport)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Provide Health Insurance / TPA E-card or Ayushman Bharat PM-JAY / CGHS / ECHS card along with ABHA ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Maintain overnight fasting (nil by mouth) if general anesthesia is planned</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Luggage should be limited to 1 small bag with toiletries & comfortable clothing</span>
                </li>
              </ul>
            </div>

            {/* Emergency Admissions */}
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-rose-950 flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-rose-600" />
                <span>24x7 Emergency Admissions</span>
              </h3>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                Emergency arrivals enter directly through Gate 1 into the Trauma Resuscitation Bay.
                Clinical stabilization and triage always take 100% priority before paperwork.
                A family member can complete basic registration while the patient receives immediate care.
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-rose-800 bg-white px-3 py-1 rounded-full border border-rose-200">
                  Zero Delay Emergency Policy
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CASHLESS INSURANCE */}
        <section id="insurance" className="scroll-mt-36 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Financial Peace of Mind
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Cashless Insurance & TPA Claims (IRDAI & Govt Schemes)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We partner directly with over 35 insurers & TPAs (Star Health, HDFC ERGO, ICICI Lombard, Medi Assist, Vidal Health, Care Health) as well as public healthcare schemes (Ayushman Bharat PM-JAY, CGHS, ECHS) to deliver seamless, paperless cashless treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                Step 1: Document Submission
              </span>
              <h4 className="text-base font-bold text-slate-900">Pre-Authorization Request</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your Aadhaar, TPA / Insurance E-card, and doctor’s diagnosis slip to our 24x7 TPA desk 48 hours prior for planned procedures, or within 4 hours of emergency admission.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                Step 2: Electronic Query Response
              </span>
              <h4 className="text-base font-bold text-slate-900">Direct Insurer Approval</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our in-house medical coders transmit ICD-10 diagnostic codes and initial cost estimates directly to the TPA portal, securing initial approval turnaround in under 2 hours.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                Step 3: Cashless Discharge
              </span>
              <h4 className="text-base font-bold text-slate-900">Hassle-Free Settlement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upon medical discharge, your insurer settles the approved hospital invoice directly. You only pay for non-admissible personal consumables as mandated by IRDAI norms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: BILLING & ESTIMATES */}
        <section id="billing" className="scroll-mt-36 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Clear & Fair
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Transparent Billing & Cost Estimates
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide itemized written estimates before any surgical procedure, with zero surprise hidden charges.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-teal-50/60 border border-teal-100 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Our Financial Transparency Charter</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="p-4 rounded-2xl bg-white border border-teal-200">
                <p className="font-bold text-slate-900 mb-1">Pre-Procedure Estimates</p>
                <p>Detailed breakdown of surgeon fee, OT charges, bed charges, and medicines provided before admission.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-teal-200">
                <p className="font-bold text-slate-900 mb-1">Daily Interim Invoices</p>
                <p>Patients receive daily ledger updates on their room tablet or phone to track ongoing charges transparently.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-teal-200">
                <p className="font-bold text-slate-900 mb-1">Financial Counseling</p>
                <p>Dedicated patient welfare counselors assist with EMI payment options and charitable healthcare subsidies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VISITING GUIDELINES */}
        <section id="visiting" className="scroll-mt-36 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Family & Visitors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Visitor Guidelines & Healing Etiquette
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rest is essential for clinical recovery. We welcome family support while maintaining rigorous infection control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-700" />
                <span>Inpatient Ward Visiting Hours</span>
              </h4>
              <p>• Morning: 10:00 AM – 12:00 PM</p>
              <p>• Evening: 04:30 PM – 07:30 PM</p>
              <p>• Maximum 2 visitors at patient bedside at any time</p>
              <p>• Children under 12 not permitted in acute postoperative wards</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Users className="h-4 w-4 text-teal-700" />
                <span>ICU, CCU & NICU Etiquette</span>
              </h4>
              <p>• 1 designated attendant permitted between 11:00 AM – 12:00 PM and 5:00 PM – 6:00 PM</p>
              <p>• Mandatory hand hygiene and shoe covers provided at unit entrance</p>
              <p>• Mobile phones must be switched to silent mode</p>
              <p>• Fresh flowers and outside cooked food are strictly restricted in sterile areas</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DOWNLOADABLE FORMS */}
        <section id="forms" className="scroll-mt-36 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Paperwork Simplified
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Downloadable Patient Forms
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Save time upon arrival by downloading and completing registration and pre-authorization
              forms prior to your hospital visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {forms.map((f, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                      {f.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{f.size}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{f.title}</h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Format: {f.format}</span>
                  <a
                    href={`#${f.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
