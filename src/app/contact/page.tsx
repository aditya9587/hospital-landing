import { Metadata } from "next";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldAlert,
  Building,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/features/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Hospital Directions | 24x7 Helpdesk",
  description:
    "Get in touch with HopeCare Hospital: 24x7 emergency helpline, appointment booking desk, department phone extensions, and campus directions.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const departmentExtensions = [
  { dept: "Emergency & Trauma (24x7)", phone: "1800-102-CARE", desc: "Toll-Free Immediate Dispatch" },
  { dept: "OPD Appointment Desk", phone: "080-4999-2200", desc: "Mon-Sat 8:00 AM - 8:00 PM" },
  { dept: "Cashless Insurance & TPA", phone: "080-4000-5510", desc: "24x7 In-House Claims Desk" },
  { dept: "Blood Bank & Pathology Lab", phone: "080-4000-5520", desc: "24x7 Urgent Laboratory Reports" },
  { dept: "Maternity & Birthing Suites", phone: "080-4000-5530", desc: "Obstetric Triage & LDRP" },
  { dept: "International Patient Care", phone: "+91 80 4000 5540", desc: "Visa, Travel & Concierge" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            We Are Here For You
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact HopeCare Hospital
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Have questions about clinical departments, planned surgeries, insurance, or visiting?
            Reach out via phone, WhatsApp, or submit an inquiry directly below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main 2-Col: Form & Direct Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Send an Inquiry</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our hospital desk will review your question and respond within 2 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Quick Contacts & Hours Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Banner */}
              <div className="p-6 rounded-3xl bg-rose-600 text-white shadow-lg shadow-rose-600/20 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-6 w-6 text-rose-200" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-100">
                    Life-Threatening Emergency?
                  </span>
                </div>
                <h3 className="text-2xl font-black">{siteConfig.contact.emergencyPhone}</h3>
                <p className="text-xs text-rose-100 leading-relaxed">
                  ACLS mobile trauma ambulances dispatched within 4 minutes. Triage team standing by 24x7.
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.contact.emergencyPhoneRaw}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-rose-700 font-bold text-xs"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Call Emergency Ambulance</span>
                  </a>
                </div>
              </div>

              {/* General Contacts Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4 text-xs text-slate-600">
                <h3 className="text-base font-bold text-slate-900">Hospital Address & Contacts</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Hospital Campus</p>
                      <p>{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <PhoneCall className="h-4 w-4 text-teal-700 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">General Board Line</p>
                      <p>{siteConfig.contact.generalPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">WhatsApp Helpdesk</p>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:underline"
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-teal-700 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Email Inquiries</p>
                      <p>{siteConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-teal-700 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">OPD Hours</p>
                      <p>{siteConfig.timings.opd}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Direct Extensions Directory */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Department Direct Telephone Directory
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Direct phone lines for immediate inquiry without passing through the central switchboard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentExtensions.map((ext, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-teal-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">{ext.dept}</p>
                  <a
                    href={`tel:${ext.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1.5"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>{ext.phone}</span>
                  </a>
                  <p className="text-[11px] text-slate-500">{ext.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
