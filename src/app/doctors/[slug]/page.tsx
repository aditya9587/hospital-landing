import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Calendar,
  Quote,
  Clock,
  Award,
  GraduationCap,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { doctorService, departmentService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { PhysicianJsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const doctors = await doctorService.getAll();
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = await doctorService.getBySlug(slug);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  const url = `${siteConfig.url}/doctors/${doctor.slug}`;

  return {
    title: `${doctor.name} - ${doctor.title} | ${doctor.departmentName}`,
    description: `${doctor.name} (${doctor.qualifications}) is ${doctor.title} at HopeCare Hospital with ${doctor.experienceYears} years of experience. ${doctor.ethos}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${doctor.name} - ${doctor.title}`,
      description: doctor.ethos,
      url,
      images: [{ url: doctor.image, width: 800, height: 900, alt: doctor.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: doctor.name,
      description: doctor.ethos,
      images: [doctor.image],
    },
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = await doctorService.getBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const department = await departmentService.getById(doctor.departmentId);

  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { name: "Doctors", url: "/doctors" },
          { name: doctor.name, url: `/doctors/${doctor.slug}` },
        ]}
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Photo & Quick Info Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-5">
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400">({doctor.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl font-bold text-slate-900">{doctor.name}</h1>
                  <p className="text-xs font-bold text-teal-700">{doctor.title}</p>
                  <p className="text-xs text-slate-500">{doctor.qualifications}</p>
                </div>

                {/* What I Care About Quote Box */}
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs text-teal-950 italic flex items-start gap-2.5">
                  <Quote className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block not-italic text-[10px] uppercase text-teal-800 mb-0.5">
                      What I Care About
                    </span>
                    <p className="leading-relaxed">&quot;{doctor.ethos}&quot;</p>
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Department:</span>
                    <Link
                      href={`/departments/${department?.slug}`}
                      className="font-bold text-teal-700 hover:underline"
                    >
                      {doctor.departmentName}
                    </Link>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Experience:</span>
                    <span className="font-bold text-slate-800">{doctor.experienceYears} Years</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Languages:</span>
                    <span className="font-bold text-slate-800">{doctor.languages.join(", ")}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Consultation Fee:</span>
                    <span className="font-bold text-slate-900 text-sm">{doctor.consultationFee}</span>
                  </div>
                </div>

                {/* Instant Book CTA */}
                <div className="pt-2">
                  <Link
                    href={`/appointment?doctor=${doctor.slug}&department=${doctor.departmentId}`}
                    className="w-full block"
                  >
                    <Button size="lg" className="w-full gap-2 shadow-lg shadow-teal-700/20">
                      <Calendar className="h-4 w-4" />
                      <span>Book Consultation With Doctor</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Col: Biography, Clinical Specialties, Schedule (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Doctor Bio */}
              <div className="rounded-3xl bg-slate-50/70 border border-slate-200/80 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  About {doctor.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Specialties Tags */}
                <div className="pt-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Clinical Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold bg-white text-teal-900 px-3 py-1 rounded-xl border border-teal-200/80 shadow-2xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* OPD Consultation Schedule */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-teal-700" />
                    <span>Outpatient (OPD) Schedule & Clinic Location</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {doctor.opdSchedule.map((sched, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-1"
                    >
                      <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                        {sched.day}
                      </span>
                      <p className="text-sm font-bold text-slate-900">{sched.timings}</p>
                      <p className="text-xs text-slate-500">{sched.room}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Fellowships */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-3xl bg-white border border-slate-200/90 p-6 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-teal-700" />
                    <span>Education & Training</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-white border border-slate-200/90 p-6 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Award className="h-5 w-5 text-teal-700" />
                    <span>Honors & Clinical Awards</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {doctor.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <PhysicianJsonLd doctor={doctor} />
    </div>
  );
}
