import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Activity,
  ArrowRight,
} from "lucide-react";
import { clinicalServiceService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await clinicalServiceService.getAll();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await clinicalServiceService.getBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: `${service.title} | ${service.departmentName}`,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} - ${siteConfig.name}`,
      description: service.summary,
      url,
      images: [{ url: service.image, width: 1200, height: 600, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.summary,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await clinicalServiceService.getBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 lg:py-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100">
                <Activity className="h-3.5 w-3.5" />
                <span>{service.departmentName}</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {service.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href={`/appointment?service=${service.slug}`}>
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Book Specialist Consultation</span>
                  </Button>
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 px-4 py-3 rounded-xl">
                  <Clock className="h-4 w-4 text-teal-700" />
                  <span>Procedure Duration: {service.duration}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Clinical Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Procedure Overview</h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Patient Benefits */}
              <div className="p-6 rounded-3xl bg-teal-50/60 border border-teal-100 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-700" />
                  <span>Key Patient Advantages & Recovery Benefits</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery Timeline */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-700" />
                  <span>Expected Recovery & Downtime</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.recoveryTime}
                </p>
              </div>
            </div>

            {/* Indications & Preparation Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Indications */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-xs">
                <h3 className="text-base font-bold text-slate-900">
                  When Is This Procedure Indicated?
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.indications.map((ind, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation Guidelines */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-teal-700" />
                  <span>Pre-Procedure Preparation</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.preparation.map((prep, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold shrink-0">•</span>
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Urgent Help Card */}
              <div className="rounded-3xl bg-rose-50 border border-rose-200 p-6 text-xs text-rose-900 space-y-2">
                <p className="font-bold text-sm text-rose-950">Have Immediate Questions?</p>
                <p className="leading-relaxed">
                  Our patient care advisors are available 24/7 to guide you through pre-operative instructions and insurance pre-authorization.
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.contact.emergencyPhoneRaw}
                    className="font-bold text-rose-700 hover:underline"
                  >
                    Call Toll-Free: {siteConfig.contact.emergencyPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
