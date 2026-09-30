import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { facilityService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital Facilities & Technology Infrastructure | HopeCare",
  description:
    "Explore HopeCare Hospital's world-class facilities: Philips Biplane Cath Lab, Mako Robotic Operation Theatres, Level-III NICU, and 3T Silent MRI.",
  alternates: { canonical: `${siteConfig.url}/facilities` },
};

export default async function FacilitiesPage() {
  const facilities = await facilityService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Facilities", url: "/facilities" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Biomedical Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for Healing, Engineered for Precision
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Our 650-bed campus integrates world-class robotic surgical suites, low-radiation
            catheterization imaging, HEPA-filtered cleanrooms, and peaceful private patient suites.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 w-full bg-slate-100">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                        {fac.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{fac.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{fac.description}</p>

                    <div className="space-y-1.5 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Highlights:
                      </p>
                      {fac.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                    <span>{fac.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                    <span>{fac.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/appointment">
              <Button size="lg" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span>Schedule a Consultation or Tour</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
