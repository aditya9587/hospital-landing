import { Metadata } from "next";
import { faqService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FaqDirectory } from "@/features/faq/faq-directory";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | HopeCare Hospital Knowledge Base",
  description:
    "Find immediate answers to questions regarding appointment bookings, cashless insurance, visiting hours, ambulance response, and medical records.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default async function FaqPage() {
  const faqs = await faqService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Frequently Asked Questions", url: "/faq" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Can We Clarify Your Care?
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Search our comprehensive hospital FAQs covering appointment bookings, cashless insurance
            pre-authorizations, emergency protocols, and inpatient admission rules.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqDirectory faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
