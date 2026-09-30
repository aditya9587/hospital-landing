import { Metadata } from "next";
import { departmentService, doctorService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MultiStepBookingForm } from "@/features/appointment/multi-step-booking-form";
import { PhoneCall, ShieldCheck, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment Online | HopeCare Hospital",
  description:
    "Schedule an outpatient consultation with a board-certified specialist at HopeCare Hospital. Fast, multi-step booking with instant SMS & email confirmation.",
  alternates: { canonical: `${siteConfig.url}/appointment` },
};

interface Props {
  searchParams: Promise<{ doctor?: string; department?: string; package?: string }>;
}

export default async function AppointmentPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const [departments, doctors] = await Promise.all([
    departmentService.getAll(),
    doctorService.getAll(),
  ]);

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Book Appointment", url: "/appointment" }]} />

      {/* Emergency Warning Strip */}
      <div className="bg-rose-50 border-b border-rose-200/80 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-rose-800">
          <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-ping" />
          <span>Need Emergency Care?</span>
          <span className="font-normal text-rose-700">
            For chest pain, severe trauma, or acute neurological weakness, please do not wait for an appointment.
          </span>
          <a
            href={siteConfig.contact.emergencyPhoneRaw}
            className="font-bold underline text-rose-900 hover:text-rose-950 flex items-center gap-1"
          >
            <PhoneCall className="h-3 w-3" />
            <span>Call {siteConfig.contact.emergencyPhone} immediately</span>
          </a>
        </div>
      </div>

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Online Outpatient Scheduling
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Hospital Consultation
          </h1>
          <p className="text-sm text-slate-600">
            Follow the 4 quick steps below to confirm your visit. No advance online payment required.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-12 bg-slate-50/60 flex-1 px-4 sm:px-6 lg:px-8">
        <MultiStepBookingForm
          departments={departments}
          doctors={doctors}
          initialDepartmentId={resolvedParams.department}
          initialDoctorSlug={resolvedParams.doctor}
        />
      </section>
    </div>
  );
}
