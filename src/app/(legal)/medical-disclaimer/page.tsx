import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AlertCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Important Patient Notice",
  description: "Official clinical and legal disclaimer regarding healthcare information on HopeCare Hospital website.",
  alternates: { canonical: `${siteConfig.url}/medical-disclaimer` },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Medical Disclaimer", url: "/medical-disclaimer" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 text-slate-700">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <span>Important Healthcare Information Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Medical Disclaimer & Educational Notice
          </h1>
          <p className="text-xs text-slate-400">Effective Date: September 2026</p>

          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-bold text-slate-900">1. Not Medical Advice</h2>
            <p className="text-sm leading-relaxed">
              The content provided across the HopeCare Hospital website—including clinical specialty overviews, medical blog articles, procedure explanations, patient recovery stories, and health package descriptions—is published solely for general educational and informational purposes. It is not intended to serve as individual medical diagnosis, prognosis, treatment advice, or prescription.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. No Doctor-Patient Relationship Created</h2>
            <p className="text-sm leading-relaxed">
              Browsing this website, submitting an inquiry via our contact form, or reading our physician blogs does NOT establish a doctor-patient relationship between you and HopeCare Hospital or any of its affiliated physicians. A physician-patient relationship is formally created only after in-person clinical registration and personal diagnostic consultation with an authorized hospital clinician.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Emergency Care Notice</h2>
            <p className="text-sm leading-relaxed">
              Never disregard professional medical advice or delay seeking medical evaluation because of something you have read on this website. If you are experiencing symptoms of a heart attack, stroke, acute respiratory distress, severe bleeding, or any other emergency, immediately call <strong>{siteConfig.contact.emergencyPhone}</strong> or proceed to the nearest emergency facility.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
            <a href={siteConfig.contact.emergencyPhoneRaw}>
              <Button variant="emergency" className="gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Call 24x7 Emergency: {siteConfig.contact.emergencyPhone}</span>
              </Button>
            </a>
            <Link href="/appointment">
              <Button variant="outline">
                Book Formal In-Person Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
