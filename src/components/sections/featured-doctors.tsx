import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, Quote, ArrowRight, Award } from "lucide-react";
import { Doctor } from "@/types";
import { Button } from "@/components/ui/button";

export function FeaturedDoctorsSection({ doctors }: { doctors: Doctor[] }) {
  return (
    <section className="py-20 bg-white" id="doctors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200">
              <Award className="h-3.5 w-3.5" />
              <span>Compassionate Medical Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Physicians Who Listen First
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every doctor at HopeCare brings world-class clinical credentials paired with genuine human warmth.
              Explore our specialists, their personal care philosophy, and schedule a consultation.
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 shrink-0"
          >
            <span>View All 140+ Doctors</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Doctors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400/80 transition-all duration-300"
            >
              <div>
                {/* Doctor Photo & Rating */}
                <div className="relative aspect-4/3 sm:aspect-5/4 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.title}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm text-xs font-bold text-slate-800">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 text-[10px]">({doctor.reviewCount})</span>
                  </div>

                  {/* Department Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-900/90 text-teal-200 backdrop-blur-xs">
                      {doctor.departmentName}
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6">
                  {/* Name & Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    {doctor.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {doctor.qualifications} • {doctor.experienceYears} Years Experience
                  </p>

                  {/* One-Line "What I Care About" Ethos Quote */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 italic flex items-start gap-2.5">
                    <Quote className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="line-clamp-2 leading-relaxed font-medium">
                      &quot;{doctor.ethos}&quot;
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {doctor.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center gap-3">
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                >
                  View Profile
                </Link>

                <Link
                  href={`/appointment?doctor=${doctor.slug}&department=${doctor.departmentId}`}
                  className="flex-1"
                >
                  <Button size="sm" className="w-full gap-1.5 py-2.5 rounded-xl text-xs font-bold">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book Visit</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
