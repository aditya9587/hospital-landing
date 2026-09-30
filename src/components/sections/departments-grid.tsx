import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Baby,
  Flower2,
  Activity,
  Siren,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Department } from "@/types";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Baby,
  Flower2,
  Activity,
  Siren,
};

export function DepartmentsGrid({ departments }: { departments: Department[] }) {
  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-200/60" id="departments-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100/70 border border-teal-200/80">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Centers of Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Care for Every Chapter of Life
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our multi-specialty institutes integrate certified board consultants, cutting-edge
            biomedical technology, and empathetic nursing protocols to ensure the safest clinical outcomes.
          </p>
        </div>

        {/* 8 Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => {
            const IconComponent = iconMap[dept.iconName] || Activity;
            const isEmergency = dept.slug === "emergency-medicine";

            return (
              <div
                key={dept.id}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isEmergency
                    ? "border-rose-300 hover:border-rose-400 ring-1 ring-rose-200/50 shadow-xs"
                    : "border-slate-200/80 hover:border-teal-400"
                }`}
              >
                <div>
                  {/* Department Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:scale-105 ${
                        isEmergency
                          ? "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white"
                          : "bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white"
                      }`}
                    >
                      <IconComponent className="h-7 w-7 stroke-[2]" />
                    </div>

                    {isEmergency && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full animate-pulse">
                        24x7 Active
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {dept.tagline}
                  </p>

                  {/* Key Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {dept.keyHighlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="text-teal-600 font-bold shrink-0">•</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group/btn"
                  >
                    <span>Explore Department</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={`/doctors?department=${dept.slug}`}
                    className="text-slate-500 hover:text-slate-800 text-[11px]"
                  >
                    Doctors →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Departments Link */}
        <div className="mt-12 text-center">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-900 bg-teal-50 px-6 py-3 rounded-2xl border border-teal-200 hover:bg-teal-100 transition-colors"
          >
            <span>View All Departments & Surgical Specialties</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
