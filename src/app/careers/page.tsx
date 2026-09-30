"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Loader2,
} from "lucide-react";
import { careersData, CareerJob } from "@/data/careers";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const perks = [
    {
      title: "Academic & Clinical Research",
      desc: "Protected research time, clinical trial participation, and CME sponsorships.",
    },
    {
      title: "Comprehensive Health Benefits",
      desc: "100% health, dental, and life coverage for staff and immediate family dependents.",
    },
    {
      title: "Work-Life Harmony",
      desc: "Flexible rotational scheduling, on-campus childcare center, and wellness lounges.",
    },
    {
      title: "Robotic & Tech Leadership",
      desc: "Train on Stryker Mako, DaVinci, and biplane cath lab systems alongside global mentors.",
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplied(true);
    }, 800);
  };

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Careers", url: "/careers" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Join Our Healthcare Family
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build a Meaningful Career in Patient Healing
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            At HopeCare, our nurses, clinical fellows, physicians, and administrative staff are empowered
            with the technology and supportive culture needed to do their best medical work.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Why Professionals Choose HopeCare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
                <CheckCircle2 className="h-5 w-5 text-teal-700" />
                <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-slate-50/60 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Current Career & Fellowship Openings</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Review available clinical and allied healthcare vacancies across departments
              </p>
            </div>
            <span className="text-xs font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full w-fit">
              {careersData.length} Open Positions
            </span>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-400 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md">
                      {job.type}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {job.openings} Opening{job.openings > 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                  <p className="text-xs font-semibold text-slate-700">
                    Experience: {job.experienceRequired}
                  </p>
                </div>

                <div className="shrink-0">
                  <Button
                    onClick={() => {
                      setSelectedJob(job);
                      setApplied(false);
                    }}
                    className="w-full sm:w-auto"
                  >
                    Apply for Position
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dialog Modal */}
      {selectedJob && (
        <Dialog
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          title={applied ? "Application Submitted" : `Apply: ${selectedJob.title}`}
          description={
            applied
              ? "Our Talent & Medical Directorate team has received your application."
              : `${selectedJob.department} • ${selectedJob.location}`
          }
          maxWidth="md"
        >
          {applied ? (
            <div className="text-center py-6 space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <p className="text-sm text-slate-600">
                Thank you for your interest in joining HopeCare Hospital. Our clinical recruitment
                committee will review your credentials and contact you within 3 business days.
              </p>
              <Button onClick={() => setSelectedJob(null)} className="w-full sm:w-auto">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="app-name" required>
                    Full Name
                  </Label>
                  <Input id="app-name" required placeholder="Dr. Jane Smith" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="app-email" required>
                    Email Address
                  </Label>
                  <Input id="app-email" type="email" required placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="app-phone" required>
                    Phone
                  </Label>
                  <Input id="app-phone" required placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="app-exp" required>
                    Years Experience
                  </Label>
                  <Input id="app-exp" type="number" min="0" required placeholder="4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="app-note" required>
                  Credentials & Cover Note
                </Label>
                <Textarea
                  id="app-note"
                  required
                  rows={3}
                  placeholder="Outline your medical board certifications, clinical fellowships, or licensing status..."
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedJob(null)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </Dialog>
      )}
    </div>
  );
}
