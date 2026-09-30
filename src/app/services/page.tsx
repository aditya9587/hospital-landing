import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Activity, CheckCircle2 } from "lucide-react";
import { clinicalServiceService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clinical Services & Surgical Procedures | HopeCare Hospital",
  description:
    "Explore advanced clinical interventions including Robotic Knee Replacement, TAVR, Acute Stroke Thrombectomy, and Daycare Endoscopy at HopeCare Hospital.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default async function ServicesIndexPage() {
  const services = await clinicalServiceService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Clinical Services", url: "/services" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Advanced Clinical Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Procedures & Interventions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From minimally invasive catheter valve repairs to robotic joint reconstruction and
            targeted cancer biological therapies, our clinical teams provide precision recovery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-16/10 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                        {service.departmentName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-teal-600" />
                        {service.duration}
                      </span>
                      <span>Recovery: {service.recoveryTime.split(";")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    <span>View Clinical Overview</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link href={`/appointment?service=${service.slug}`}>
                    <Button size="sm" variant="secondary" className="text-xs">
                      Consult Doctor
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
