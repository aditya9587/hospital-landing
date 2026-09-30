import Link from "next/link";
import { HeartPulse, ArrowLeft, PhoneCall, Calendar, Search } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/40 to-white text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-teal-100 text-teal-800 mx-auto shadow-md shadow-teal-700/10">
          <HeartPulse className="h-10 w-10 stroke-[2.2]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full">
            Page Not Found (404)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Let Us Help You Find the Right Care
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been relocated or updated. Don&apos;t worry—our
            clinical teams and services are always within easy reach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full gap-2 text-xs">
              <ArrowLeft className="h-4 w-4" />
              <span>Return Home</span>
            </Button>
          </Link>

          <Link href="/doctors" className="w-full">
            <Button variant="secondary" className="w-full gap-2 text-xs">
              <Search className="h-4 w-4" />
              <span>Find a Doctor</span>
            </Button>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-200/80 space-y-2">
          <p className="text-xs text-slate-500">Need immediate medical attention?</p>
          <a
            href={siteConfig.contact.emergencyPhoneRaw}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-sm hover:bg-rose-700 transition-colors"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Call 24x7 Emergency: {siteConfig.contact.emergencyPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
