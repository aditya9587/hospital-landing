import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Patient Data Protection",
  description: "HopeCare Hospital's policy regarding medical records, patient data privacy, and HIPAA compliance.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 text-slate-700">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Legal & Compliance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Patient Data Privacy & Confidentiality Policy
          </h1>
          <p className="text-xs text-slate-400">Last Revised: September 2026</p>

          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Health Data Security</h2>
            <p className="text-sm leading-relaxed">
              At HopeCare Multi-Specialty Hospital (&quot;HopeCare&quot;, &quot;we&quot;, &quot;our&quot;), patient confidentiality is a sacred ethical trust. All electronic protected health information (ePHI) captured during online appointment scheduling, laboratory investigations, or inpatient hospitalizations is encrypted and managed in accordance with HIPAA standards, Joint Commission International (JCI) patient privacy mandates, and applicable healthcare statutory regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Minimal Patient Data Collection</h2>
            <p className="text-sm leading-relaxed">
              Our website collects only the minimum necessary contact and demographic details required to schedule an outpatient consultation (e.g., patient name, phone number, email address, age, gender, and appointment reason). We do not require or collect complete diagnostic histories or sensitive financial banking details on public web forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Non-Disclosure & Non-Sale of Patient Records</h2>
            <p className="text-sm leading-relaxed">
              We strictly uphold that patient records and contact details are never sold, rented, or traded to third-party pharmaceutical companies, commercial brokers, or advertising networks under any circumstance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Your Access Rights</h2>
            <p className="text-sm leading-relaxed">
              Patients have the unequivocal legal right to request a complete copy of their medical charts, diagnostic reports, and discharge summaries via our secure Patient Portal or by contacting the Medical Records Department (MRD) at care@hopecare-hospital.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
