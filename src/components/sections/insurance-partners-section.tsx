import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { InsurancePartner } from "@/types";

export function InsurancePartnersSection({ partners }: { partners: InsurancePartner[] }) {
  return (
    <section className="py-16 bg-white border-t border-slate-200/60" id="insurance-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-50/60 border border-teal-100 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Cashless Care Info */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-white border border-teal-200 shadow-xs">
                <HeartHandshake className="h-3.5 w-3.5 text-teal-600" />
                <span>Zero-Hassle Inpatient Admission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Cashless Insurance & TPA Network
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our 24x7 in-hospital insurance desk coordinates directly with over 35 major private insurers,
                corporate TPAs, and international health programs. We secure pre-authorization in under 2 hours.
              </p>

              <div className="pt-2 flex flex-col gap-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-700" />
                  <span>Direct electronic claims submission with zero paperwork stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-700" />
                  <span>Coverage assistance for planned surgeries & emergency admissions</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/patient-care#insurance"
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-900 bg-white px-4 py-2.5 rounded-xl border border-teal-200 shadow-xs hover:shadow-sm transition-all"
                >
                  <span>Learn How Cashless Admission Works</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Partners Badges Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col items-center justify-center text-center hover:border-teal-400 hover:shadow-sm transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-800 mb-2 font-black text-xs">
                      {partner.logo.slice(0, 3)}
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-teal-700 font-semibold mt-1">
                      Cashless Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
