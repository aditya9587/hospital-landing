import { Metadata } from "next";
import { doctorService, departmentService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { DoctorDirectory } from "@/features/doctors/doctor-directory";

export const metadata: Metadata = {
  title: "Find a Doctor | 140+ Board-Certified Specialists",
  description:
    "Search and filter board-certified physicians, surgeons, and specialists at HopeCare Hospital by medical department, day of week, and clinical expertise.",
  alternates: {
    canonical: `${siteConfig.url}/doctors`,
  },
};

interface Props {
  searchParams: Promise<{ department?: string; day?: string }>;
}

export default async function DoctorsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const [doctors, departments] = await Promise.all([
    doctorService.getAll(),
    departmentService.getAll(),
  ]);

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Find a Doctor", url: "/doctors" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            140+ Dedicated Clinicians
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find the Right Specialist for Your Care
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Our physicians combine global academic credentials with profound human empathy.
            Browse our consultants below, view their consultation schedule, and book an appointment online.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50/60 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DoctorDirectory
            doctors={doctors}
            departments={departments}
            initialDepartmentSlug={resolvedParams.department}
          />
        </div>
      </section>
    </div>
  );
}
