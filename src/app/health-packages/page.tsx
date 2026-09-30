import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  Clock,
  Calendar,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { packageService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Preventive Health Check Packages | Early Detection & Screenings",
  description:
    "Comprehensive master executive, cardiac, well woman, senior citizen, and diabetic health screening packages with same-day reports at HopeCare Hospital.",
  alternates: { canonical: `${siteConfig.url}/health-packages` },
};

export default async function HealthPackagesPage() {
  const packages = await packageService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Health Packages", url: "/health-packages" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Preventive Healthcare Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Health Check Packages
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Early detection transforms lives. Our customized screening packages assess critical organ
            function, cardiovascular health, and cancer markers with digital same-day reports and specialist consultations.
          </p>
        </div>
      </section>

      {/* Packages In-Depth List */}
      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.slug}
              className={`rounded-3xl bg-white border p-6 sm:p-10 shadow-sm transition-all hover:shadow-xl ${
                pkg.isPopular
                  ? "border-teal-400 ring-2 ring-teal-500/10"
                  : "border-slate-200/90"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 4 cols: Title, Price, Audience */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                      {pkg.category}
                    </span>
                    {pkg.isPopular && (
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">{pkg.name}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{pkg.tagline}</p>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        ₹{pkg.discountedPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full ml-auto">
                        Save {Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)}%
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                      <span>{pkg.testCount}+ Parameters</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {pkg.durationHours}
                      </span>
                    </div>

                    {pkg.fastingRequired && (
                      <p className="text-[11px] text-amber-800 font-medium mt-2 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>10-12 hours overnight fasting required</span>
                      </p>
                    )}
                  </div>

                  {/* Booking CTA */}
                  <Link
                    href={`/appointment?package=${pkg.slug}`}
                    className="w-full block pt-2"
                  >
                    <Button size="lg" className="w-full gap-2 shadow-md shadow-teal-700/20">
                      <Calendar className="h-4 w-4" />
                      <span>Book This Package</span>
                    </Button>
                  </Link>
                </div>

                {/* Right 8 cols: Test Parameters Breakdown */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Included Diagnostic Investigations ({pkg.testCount} Tests)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.includedParameters.map((param, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-2"
                        >
                          <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                            {param.category}
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {param.tests.map((t, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <Check className="h-3.5 w-3.5 text-teal-600 shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consultations Included */}
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
                    <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">
                      Specialist Physician Consultations Included:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.consultationsIncluded.map((c, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold bg-white text-slate-800 px-3 py-1 rounded-xl border border-teal-200 shadow-2xs"
                        >
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
