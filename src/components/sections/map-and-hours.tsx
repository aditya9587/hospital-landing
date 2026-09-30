import React from "react";
import {
  MapPin,
  Clock,
  Car,
  Train,
  PhoneCall,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function MapAndHoursSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200/60" id="hours-and-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Campus Details & Timings (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100/70 border border-teal-200">
                <MapPin className="h-3.5 w-3.5" />
                <span>Hospital Location & Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Main Campus
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Conveniently situated on Outer Ring Road, Bellandur with dedicated emergency entrance gates,
                basement patient parking, and seamless connectivity across East and South Bengaluru.
              </p>
            </div>

            {/* Timings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Emergency Hours Card */}
              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Emergency & Trauma</span>
                </div>
                <p className="text-base font-black text-rose-950">
                  {siteConfig.timings.emergency}
                </p>
                <p className="text-xs text-rose-700">
                  Direct trauma gate 1 with immediate triage
                </p>
              </div>

              {/* OPD Consultation Hours */}
              <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Outpatient (OPD) Consultations</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-teal-950">
                  {siteConfig.timings.opd}
                </p>
                <p className="text-xs text-teal-800">
                  Prior appointment recommended
                </p>
              </div>

              {/* Inpatient Visiting Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Visiting Hours</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {siteConfig.timings.visitingHours}
                </p>
                <p className="text-xs text-slate-500">
                  1 visitor at a time for ICUs
                </p>
              </div>

              {/* Pharmacy & Diagnostics */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Pharmacy & Imaging</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  24x7 Diagnostic & Blood Bank
                </p>
                <p className="text-xs text-slate-500">
                  Round-the-clock inpatient delivery
                </p>
              </div>
            </div>

            {/* Directions & Parking Details */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Navigation className="h-4 w-4 text-teal-700" />
                <span>Transit & Campus Parking Directions</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p className="flex items-start gap-2">
                  <Car className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Valet & Patient Parking:</strong> Multi-level basement parking with complimentary valet service at Main Lobby Entrance. 20 EV charging stations provided.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Train className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Namma Metro & Bus:</strong> 5-minute walk from Bellandur / Kadubeesanahalli Metro Station. Free hospital feeder shuttle operates every 15 minutes during OPD hours.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Live Navigation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-md">
            {/* Embed / Map View */}
            <div className="relative flex-1 min-h-[340px] w-full bg-slate-200">
              <iframe
                title="HopeCare Hospital Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.596645398282!2d77.681!3d12.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1398c8c5c1d1%3A0x8e8b2b71efc562b7!2sOuter%20Ring%20Rd%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%20560103!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Card Footer */}
            <div className="p-6 bg-white border-t border-slate-200 space-y-3">
              <div>
                <p className="text-sm font-bold text-slate-900">{siteConfig.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{siteConfig.address.full}</p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors shadow-xs"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Get GPS Directions</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>

                <a
                  href={siteConfig.contact.generalPhoneRaw}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-teal-700" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
