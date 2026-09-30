import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, ArrowRight, Sparkles } from "lucide-react";
import { HealthPackage } from "@/types";
import { Button } from "@/components/ui/button";

export function HealthPackagesSection({ packages }: { packages: HealthPackage[] }) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-teal-50/30 border-t border-slate-200/60" id="packages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100 border border-teal-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Preventive Wellness & Screenings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect What Matters Most with Early Detection
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Over 80% of cardiovascular events and metabolic conditions are completely preventable.
            Our comprehensive executive checkups deliver peace of mind with same-day reports.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl bg-white border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
                pkg.isPopular
                  ? "border-teal-500 ring-2 ring-teal-500/20 shadow-lg -translate-y-1.5"
                  : "border-slate-200/90 shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-700 to-sky-700 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Recommended
                </div>
              )}

              <div>
                {/* Category & Name */}
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {pkg.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Pricing Block */}
                <div className="mt-5 pb-5 border-b border-slate-100 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">
                    ₹{pkg.discountedPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{pkg.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ml-auto">
                    Save {Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Quick Info Badges */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                  <span className="font-semibold text-slate-800">{pkg.testCount}+ Parameters</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {pkg.durationHours}
                  </span>
                </div>

                {/* Key Tests Included */}
                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Highlights Included:
                  </p>
                  {pkg.includedParameters.flatMap((p) => p.tests).slice(0, 5).map((test, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                <Link
                  href={`/appointment?package=${pkg.slug}`}
                  className="w-full block"
                >
                  <Button
                    className="w-full justify-center text-sm font-bold py-3 rounded-xl shadow-xs"
                    variant={pkg.isPopular ? "default" : "secondary"}
                  >
                    Book This Package
                  </Button>
                </Link>

                <Link
                  href={`/health-packages#${pkg.slug}`}
                  className="block text-center text-xs font-bold text-slate-500 hover:text-teal-700"
                >
                  View Full Test Breakdown →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Footer link */}
        <div className="mt-12 text-center">
          <Link
            href="/health-packages"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-900 bg-white px-6 py-3 rounded-2xl border border-teal-200 shadow-xs hover:shadow-md transition-all"
          >
            <span>Compare All 6 Preventive Health Packages</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
