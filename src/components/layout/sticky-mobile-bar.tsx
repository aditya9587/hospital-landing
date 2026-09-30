"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Calendar, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function StickyMobileBar() {
  return (
    <aside
      aria-label="Quick mobile emergency and booking bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-3 py-2 pb-safe"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Emergency Call */}
        <a
          href={siteConfig.contact.emergencyPhoneRaw}
          id="mobile-emergency-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors border border-rose-200/80 active:scale-95"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white mb-0.5">
            <PhoneCall className="h-3.5 w-3.5" />
          </div>
          <span className="text-[11px] font-bold leading-tight">24x7 Call</span>
        </a>

        {/* Book Appointment */}
        <Link
          href="/appointment"
          id="mobile-book-appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-sm active:scale-95"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white mb-0.5">
            <Calendar className="h-3.5 w-3.5" />
          </div>
          <span className="text-[11px] font-bold leading-tight">Book Visit</span>
        </Link>

        {/* WhatsApp Inquiry */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp-help"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors border border-emerald-200/80 active:scale-95"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white mb-0.5">
            <MessageCircle className="h-3.5 w-3.5" />
          </div>
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
