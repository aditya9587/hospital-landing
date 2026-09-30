"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hopecare_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("hopecare_cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("hopecare_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Notification"
      className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-4 sm:p-5 animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-900 mb-0.5">Your Privacy & Health Data</p>
          <p>
            We use essential cookies to maintain secure appointment bookings and deliver optimal clinical care. We never sell your personal or medical data. Read our{" "}
            <Link href="/privacy-policy" className="text-teal-700 underline hover:text-teal-800">
              Privacy Policy
            </Link>.
          </p>

          <div className="mt-3.5 flex items-center gap-2">
            <Button size="sm" onClick={accept} id="accept-cookies">
              Accept Essential
            </Button>
            <Button size="sm" variant="outline" onClick={decline} id="decline-cookies">
              Decline
            </Button>
          </div>
        </div>
        <button
          type="button"
          onClick={decline}
          aria-label="Dismiss notification"
          className="text-slate-400 hover:text-slate-600 -mr-1 -mt-1 p-1 rounded-lg hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
