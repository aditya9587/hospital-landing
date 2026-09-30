import React from "react";
import Link from "next/link";
import {
  Activity,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip within Footer */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-teal-900/90 via-slate-900 to-rose-950/80 border border-teal-800/40 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
              Immediate Care Available
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Experiencing a medical emergency or severe symptoms?
            </h3>
            <p className="text-sm text-slate-400">
              Our 24x7 Emergency Triage team and ACLS trauma ambulances are standing by with zero admission delay.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.emergencyPhoneRaw}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 text-white font-bold text-base hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30 active:scale-95"
            >
              <PhoneCall className="h-5 w-5" />
              <span>Call Emergency: {siteConfig.contact.emergencyPhone}</span>
            </a>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-700 text-white font-bold text-base hover:bg-teal-600 transition-colors shadow-lg shadow-teal-700/30 active:scale-95"
            >
              <span>Book Appointment Online</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: About Hospital & Accreditations (Spans 2 on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/30">
                <Activity className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Hope<span className="text-teal-400">Care</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mt-1">
                  Hospital & Research Centre
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Accreditations Trust Badges */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Certified Quality Standards
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.accreditations.map((acc) => (
                  <span
                    key={acc.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 text-teal-300 border border-teal-900/50 text-xs font-semibold"
                    title={acc.description}
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                    <span>{acc.code}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Address & Timings */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400 shrink-0" />
                <span>OPD: {siteConfig.timings.opd}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Clinical Specialties */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Centers of Excellence
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.nav.footer.specialties.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Patients & Visitors */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Patients & Visitors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.nav.footer.patients.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Hospital & Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Hospital & Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.nav.footer.hospital.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 text-xs text-slate-400 leading-relaxed">
            <span className="font-bold text-amber-300 block mb-1">
              Important Medical Disclaimer:
            </span>
            The medical and clinical information provided on this website is for educational and general informational purposes only. It is not intended to replace professional medical diagnosis, personal consultation, or individualized treatment plans. Always consult your qualified physician or healthcare provider regarding any health condition. If you believe you are experiencing a life-threatening medical emergency, call {siteConfig.contact.emergencyPhone} or proceed directly to your nearest emergency department.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.nav.footer.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
