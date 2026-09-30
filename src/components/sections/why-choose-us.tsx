import React from "react";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function WhyChooseUsSection() {
  const pillars = [
    {
      title: "JCI & NABH Gold Benchmark",
      description:
        "Internationally audited patient safety protocols, sterile laminar airflow operation suites, and stringent clinical infection control.",
    },
    {
      title: "Door-to-Balloon Under 50 Minutes",
      description:
        "Emergency coronary angioplasty and acute stroke clot retrieval with bypass directly to the Cath Lab, preserving vital heart and brain tissue.",
    },
    {
      title: "Painless & Robotic Precision",
      description:
        "Mako robotic joint replacements and 3D laparoscopic surgeries that minimize tissue trauma and get you back home in 48 hours.",
    },
    {
      title: "Transparent & Cashless Healing",
      description:
        "Dedicated 24x7 insurance coordination desk working with 35+ providers for hassle-free pre-authorization with no hidden charges.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-300 bg-teal-950/80 border border-teal-800">
            <Award className="h-4 w-4 text-teal-400" />
            <span>The HopeCare Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Families Across the Region Trust HopeCare
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Healthcare is more than clinical acumen; it is the sacred promise of being treated with
            dignity, speed, and uncompromising medical precision.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs text-center space-y-2 hover:border-teal-500/50 transition-colors"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-400 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-white">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Accreditations Trust Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-teal-900/60 via-slate-800/80 to-slate-900 p-8 border border-teal-700/30 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Recognized Quality
              </span>
              <h3 className="text-2xl font-bold text-white">
                Certified By Leading Healthcare Accreditation Boards
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Subjected to rigorous annual unannounced clinical safety audits to ensure your family receives care that rivals premier global medical centers.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.accreditations.map((acc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/80 flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{acc.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {acc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 space-y-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">{pillar.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
