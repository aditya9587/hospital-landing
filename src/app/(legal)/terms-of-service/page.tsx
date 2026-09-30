import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | HopeCare Hospital",
  description: "Website terms of use, appointment guidelines, and legal provisions for HopeCare Hospital.",
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 text-slate-700">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Legal Agreement</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Terms of Website Use & Patient Services
          </h1>
          <p className="text-xs text-slate-400">Effective Date: September 2026</p>

          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not utilize our digital appointment and informational services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Appointment Scheduling & Cancellations</h2>
            <p className="text-sm leading-relaxed">
              Online appointments are subject to physician emergency availability. In the rare event a doctor is called for emergency surgery, our patient desk will notify you immediately to reschedule. Cancellations made at least 2 hours in advance incur no penalty or cancellation fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Emergency Situations</h2>
            <p className="text-sm leading-relaxed">
              This website and its online inquiry forms are NOT intended for life-threatening emergencies. In any acute condition, please dial 1800-102-CARE or proceed directly to your nearest emergency department without delay.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
