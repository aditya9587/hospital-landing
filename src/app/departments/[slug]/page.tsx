import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Clock,
  Sparkles,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { departmentService, doctorService, clinicalServiceService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { AccordionGroup } from "@/components/ui/accordion";
import { MedicalSpecialtyJsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const departments = await departmentService.getAll();
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const department = await departmentService.getBySlug(slug);

  if (!department) {
    return { title: "Department Not Found" };
  }

  const url = `${siteConfig.url}/departments/${department.slug}`;

  return {
    title: `${department.name} | Centers of Excellence`,
    description: department.tagline + ". " + department.overview.slice(0, 140) + "...",
    alternates: { canonical: url },
    openGraph: {
      title: `${department.name} - ${siteConfig.name}`,
      description: department.tagline,
      url,
      images: [{ url: department.heroImage, width: 1200, height: 600, alt: department.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: department.name,
      description: department.tagline,
      images: [department.heroImage],
    },
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const department = await departmentService.getBySlug(slug);

  if (!department) {
    notFound();
  }

  const [doctors, services] = await Promise.all([
    doctorService.getByDepartment(department.id),
    clinicalServiceService.getByDepartment(department.id),
  ]);

  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { name: "Departments", url: "/departments" },
          { name: department.shortName, url: `/departments/${department.slug}` },
        ]}
      />

      {/* Hero Banner */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={department.heroImage}
            alt={department.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
              <span>Center of Clinical Excellence</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {department.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              {department.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href={`/appointment?department=${department.id}`}>
                <Button size="lg" className="gap-2 shadow-lg shadow-teal-700/30">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment with Specialist</span>
                </Button>
              </Link>

              <a
                href={siteConfig.contact.emergencyPhoneRaw}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600/90 text-white font-bold text-sm hover:bg-rose-600 transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                <span>24/7 Helpline: {siteConfig.contact.emergencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Clinical Overview & Care Philosophy
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {department.overview}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-slate-900">Key Quality Milestones</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {department.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-slate-900">
                  Advanced Technology & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {department.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-xl border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditions & Procedures Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Common Conditions Treated
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {department.commonConditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    Procedures & Interventions
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {department.procedures.map((proc, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                      >
                        {proc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Specialists */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Department Faculty
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Meet the Specialists of {department.shortName}
              </h2>
            </div>
            <Link
              href={`/doctors?department=${department.slug}`}
              className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
            >
              <span>View All Department Doctors</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 w-full bg-slate-100">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 rounded-full px-2.5 py-0.5 text-xs font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 text-base">{doctor.name}</h3>
                    <p className="text-xs text-teal-700 font-semibold">{doctor.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{doctor.qualifications}</p>

                    <div className="mt-3 p-2.5 rounded-xl bg-teal-50/60 text-[11px] text-teal-950 italic">
                      &quot;{doctor.ethos}&quot;
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="flex-1 py-2 text-center text-xs font-bold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
                  >
                    Profile
                  </Link>
                  <Link
                    href={`/appointment?doctor=${doctor.slug}&department=${department.id}`}
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full text-xs py-2">
                      Book Visit
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Specific FAQs */}
      {department.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Questions About {department.name}
            </h2>
            <AccordionGroup
              items={department.faqs.map((faq, idx) => ({
                id: `dept-faq-${idx}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>
      )}

      {/* JSON-LD Schema */}
      <MedicalSpecialtyJsonLd department={department} />
    </div>
  );
}
