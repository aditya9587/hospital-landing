"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PhoneCall,
  Calendar,
  Menu,
  X,
  Heart,
  ChevronDown,
  ShieldCheck,
  Clock,
  MapPin,
  Activity,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [patientCareDropdown, setPatientCareDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPatientCareDropdown(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Announcement & Emergency Hotline Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          {/* Left: Emergency Alert */}
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 font-bold text-rose-400 bg-rose-950/80 border border-rose-800/80 px-2 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              24x7 Emergency
            </span>
            <a
              href={siteConfig.contact.emergencyPhoneRaw}
              className="font-bold text-white hover:text-rose-300 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="h-3 w-3 text-rose-400" />
              <span>{siteConfig.contact.emergencyPhone}</span>
            </a>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="h-3 w-3 text-teal-400" />
              <span>Door-to-Cath Lab &lt; 50 mins</span>
            </span>
          </div>

          {/* Right: Accreditations & Address */}
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1 text-teal-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="font-medium">JCI & NABH Accredited</span>
            </div>
            <span className="text-slate-600">|</span>
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="h-3 w-3 text-slate-400" />
              <span>Outer Ring Road, Bengaluru</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200",
          scrolled ? "py-2.5" : "py-3.5"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Hospital Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
            title="HopeCare Hospital Homepage"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-200">
              <Activity className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                Hope<span className="text-teal-700">Care</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-600 mt-1">
                Hospital & Research Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700"
          >
            {siteConfig.nav.main.slice(0, 5).map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-xl transition-colors hover:text-teal-800 hover:bg-teal-50/70",
                    isActive && "text-teal-800 bg-teal-50 font-bold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Patient Care Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-xl transition-colors hover:text-teal-800 hover:bg-teal-50/70",
                  pathname.startsWith("/patient-care") && "text-teal-800 bg-teal-50 font-bold"
                )}
                aria-expanded={patientCareDropdown}
                onClick={() => setPatientCareDropdown(!patientCareDropdown)}
              >
                <span>Patient Care</span>
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-2 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 space-y-1 animate-in fade-in-50 zoom-in-95">
                  <Link
                    href="/patient-care"
                    className="block px-3 py-2 rounded-xl text-xs font-bold text-teal-800 hover:bg-teal-50 transition-colors"
                  >
                    Patient Care Overview →
                  </Link>
                  <div className="border-t border-slate-100 my-1" />
                  {siteConfig.nav.patientCare.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-teal-800 hover:bg-teal-50/60 transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining Nav Items */}
            {siteConfig.nav.main.slice(6).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-xl transition-colors hover:text-teal-800 hover:bg-teal-50/70",
                    isActive && "text-teal-800 bg-teal-50 font-bold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Emergency Phone Button */}
            <a
              href={siteConfig.contact.emergencyPhoneRaw}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 transition-colors"
              title="Call Emergency Hotline"
            >
              <PhoneCall className="h-3.5 w-3.5 text-rose-600 animate-pulse" />
              <span>{siteConfig.contact.emergencyPhone}</span>
            </a>

            {/* Book Appointment CTA */}
            <Link href="/appointment">
              <Button size="md" className="gap-2 shadow-teal-700/20">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/appointment" className="sm:hidden">
              <Button size="sm" className="gap-1.5 px-3">
                <Calendar className="h-3.5 w-3.5" />
                <span>Book</span>
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bottom-0 z-50 bg-white/98 backdrop-blur-md border-t border-slate-200 overflow-y-auto p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4 pb-20">
            {/* Emergency Banner in Mobile Menu */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md">
              <p className="text-xs uppercase font-bold tracking-wider opacity-90">Medical Emergency 24/7</p>
              <p className="text-xl font-black mt-0.5">{siteConfig.contact.emergencyPhone}</p>
              <p className="text-xs opacity-90 mt-1">ACLS Ambulances with GPS Dispatch</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={siteConfig.contact.emergencyPhoneRaw}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-rose-700 font-bold text-xs"
                >
                  <PhoneCall className="h-3.5 w-3.5" /> Call Ambulance
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {siteConfig.nav.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                <span>FAQs</span>
                <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                <span>Hospital Gallery</span>
                <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                <span>Careers & Fellowships</span>
                <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Link href="/appointment" onClick={() => setMobileMenuOpen(false)} className="w-full block">
                <Button className="w-full justify-center gap-2 py-3" size="lg">
                  <Calendar className="h-5 w-5" />
                  <span>Book In-Person Consultation</span>
                </Button>
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-xs"
              >
                Chat on WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
