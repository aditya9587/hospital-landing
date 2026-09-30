import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Heart,
  Users,
  CheckCircle2,
  Calendar,
  Building2,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About HopeCare Hospital | Our Heritage, Mission & Accreditations",
  description:
    "Learn about HopeCare Multi-Specialty Hospital's 35-year legacy of clinical excellence, JCI & NABH accreditations, leadership, and patient-first compassionate philosophy.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Arvind Swaminathan, MD, DM",
      role: "Medical Director & Chief of Oncology",
      bio: "Distinguished alumnus of Tata Memorial Hospital with over 22 years of leading molecular oncology and compassionate patient-first cancer care.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Dr. Ananya Sen, MCh, FINR",
      role: "Director of Surgical Services & Neurosurgery",
      bio: "NIMHANS graduate and Zurich fellow pioneering sub-millimeter microsurgical resections and round-the-clock Code Stroke endovascular care.",
      image: "https://images.unsplash.com/photo-1594824813583-11119561b6ec?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Dr. Rajesh Varma, DM, FACC",
      role: "Chief of Cardiology & Medical Board Chair",
      bio: "AIIMS New Delhi alumnus with over 24 years of clinical mastery, spearheading sub-45-minute door-to-balloon emergency protocols across Bengaluru.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/70 via-white to-white py-16 lg:py-20 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100">
                <Building2 className="h-3.5 w-3.5" />
                <span>Our Heritage & Values</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Healing with Compassion, Leading with Medical Science
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Founded with a conviction that no patient should ever feel like a number in a system,
                HopeCare has grown into a 650-bed quaternary care institution known for revolutionary
                cardiac, neurological, and cancer therapies.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/appointment">
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule a Consultation</span>
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" size="lg">
                    Meet Our 140+ Doctors
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="HopeCare Hospital Campus Main Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 font-bold">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Sacred Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To deliver state-of-the-art, evidence-based healthcare accessible to every family,
                guided by unyielding medical ethics, patient dignity, and gentle human empathy.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-teal-50/50 border border-teal-200/80 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white font-bold">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Clinical Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To remain an international center of clinical discovery, minimally invasive robotic surgery,
                and rapid emergency response, setting benchmarks for patient survival and comfort.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Patient-First Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Total transparency in billing, zero discrimination, relentless infection control,
                and active inclusion of families in the decision-making healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Medical Board */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Clinical Leadership
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Guided by Veteran Clinicians</h2>
            <p className="text-sm text-slate-600">
              Our hospital governance is led directly by practicing senior consultants who understand
              both bedside patient needs and the highest international healthcare safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow space-y-4"
              >
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                  <p className="text-xs font-semibold text-teal-700">{leader.role}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
