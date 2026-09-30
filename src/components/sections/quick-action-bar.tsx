import React from "react";
import Link from "next/link";
import { UserCheck, CalendarCheck, ShieldPlus, FileText, ArrowRight, PhoneCall } from "lucide-react";

export function QuickActionBar() {
  const actions = [
    {
      id: "quick-find-doctor",
      title: "Find a Doctor",
      description: "Search 140+ specialists across 8 centers of clinical excellence",
      href: "/doctors",
      icon: UserCheck,
      color: "from-teal-600 to-teal-700",
      badge: "By Specialty",
    },
    {
      id: "quick-book-appt",
      title: "Book Appointment",
      description: "Pick your preferred specialist, date, and morning/evening slot",
      href: "/appointment",
      icon: CalendarCheck,
      color: "from-sky-600 to-blue-700",
      badge: "Instant Confirmation",
    },
    {
      id: "quick-packages",
      title: "Health Packages",
      description: "Preventive whole-body executive checkups starting from ₹2,499",
      href: "/health-packages",
      icon: ShieldPlus,
      color: "from-emerald-600 to-teal-700",
      badge: "Save up to 45%",
    },
    {
      id: "quick-reports",
      title: "Lab Reports & Portal",
      description: "Securely view and download blood tests, MRI scans & summaries",
      href: "/patient-care#records",
      icon: FileText,
      color: "from-indigo-600 to-slate-800",
      badge: "Patient Portal",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Quick Patient Care Access
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Direct access to online consultations, medical records, and preventive health screenings
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Need immediate triage? Call 1800-102-CARE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.id}
                id={act.id}
                href={act.href}
                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-teal-500/50 hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${act.color} text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-bold text-teal-700 group-hover:text-teal-800">
                  <span>Proceed</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
