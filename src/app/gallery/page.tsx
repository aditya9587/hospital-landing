import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Calendar, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital Photo Tour & Gallery | HopeCare Hospital",
  description:
    "Take a visual photographic tour of HopeCare Hospital: state-of-the-art robotic operating rooms, biplane cath labs, private recovery suites, and healing gardens.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

const galleryImages = [
  {
    title: "Hospital South Campus Entrance",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Main outpatient pavilion and 24x7 emergency vehicular drop-off bay.",
  },
  {
    title: "Class-100 Robotic Operation Theatre",
    category: "Surgical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    description: "HEPA-filtered laminar airflow surgical suite housing Stryker Mako robotic arm.",
  },
  {
    title: "Philips Azurion Biplane Cath Lab",
    category: "Cardiology",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
    description: "Dual-plane low radiation angiography suite for door-to-balloon heart interventions.",
  },
  {
    title: "Level-III Neonatal Intensive Care Sanctuary",
    category: "Pediatrics",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    description: "Acoustically dampened carestations supporting micro-preterm infant bonding.",
  },
  {
    title: "Sunlit Private Inpatient Recovery Suite",
    category: "Patient Rooms",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    description: "Hotel-standard suites with electric adjustable beds, attendant loungers, and garden views.",
  },
  {
    title: "24x7 Emergency & Trauma Resuscitation Bay",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
    description: "Rapid triage with direct telemetry and immediate point-of-care diagnostics.",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Photo Tour", url: "/gallery" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Visual Hospital Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Inside HopeCare Multi-Specialty Hospital
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Tour our modern clinical environment designed to prioritize patient safety, sterile
            healing comfort, and state-of-the-art medical technology.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link href="/appointment">
              <Button size="lg" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span>Book Your First Visit</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
