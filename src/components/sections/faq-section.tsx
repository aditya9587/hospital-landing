import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { FaqItem } from "@/types";
import { AccordionGroup } from "@/components/ui/accordion";
import { FaqPageJsonLd } from "@/components/seo/json-ld";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const topFaqs = faqs.slice(0, 5);

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/60" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100 border border-teal-200">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Common Inquiries & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about our appointment booking, insurance procedures,
            emergency arrivals, and inpatient visiting policies.
          </p>
        </div>

        {/* Accordion Component */}
        <AccordionGroup
          items={topFaqs.map((f) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
          }))}
          defaultOpenIndex={0}
        />

        {/* View All FAQs Link */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-900 bg-white px-6 py-3 rounded-2xl border border-teal-200 shadow-xs hover:shadow-sm transition-all"
          >
            <span>Have More Questions? Browse Complete Knowledge Base</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* JSON-LD Schema for FAQs */}
      <FaqPageJsonLd faqs={topFaqs} />
    </section>
  );
}
