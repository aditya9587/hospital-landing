"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  HeartHandshake,
  X,
  Calendar,
} from "lucide-react";
import { Testimonial } from "@/types";

export function PatientStoriesSection({ stories }: { stories: Testimonial[] }) {
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  // Render a track of cards for the continuous loop
  const renderCardTrack = (ariaHidden: boolean = false) => (
    <div
      className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
      aria-hidden={ariaHidden}
    >
      {stories.map((story, idx) => (
        <div
          key={`${story.id}-${ariaHidden ? "dup" : "orig"}-${idx}`}
          onClick={() => setSelectedStory(story)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedStory(story);
            }
          }}
          tabIndex={ariaHidden ? -1 : 0}
          role="button"
          aria-label={`Read story from ${story.patientName}`}
          className="w-[280px] sm:w-[325px] shrink-0 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-teal-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-teal-600 select-none"
        >
          <div>
            {/* Top Bar: Stars + Verified Badge + Quote Glyph */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-0.5">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                {story.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                    <CheckCircle2 className="h-3 w-3 text-teal-600" />
                    <span>Verified</span>
                  </span>
                )}
                <Quote className="h-3.5 w-3.5 text-slate-300 group-hover:text-teal-400 transition-colors" />
              </div>
            </div>

            {/* Compact Snippet Quote */}
            <p className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug line-clamp-3">
              &quot;{story.quote}&quot;
            </p>
          </div>

          {/* Patient Metadata Footer */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
              <Image
                src={story.image}
                alt={story.patientName}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {story.patientName}
                </h4>
                <span className="text-[10px] text-slate-400 shrink-0">Age {story.age}</span>
              </div>
              <p className="text-[11px] font-medium text-teal-700 truncate mt-0.5">
                {story.condition}
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                {story.treatedBy} • {story.recoveredYear}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="py-10 sm:py-12 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 border-y border-slate-200/60 overflow-hidden"
      id="patient-stories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Compact Section Header with Live Loop Status & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100/80 border border-teal-200">
              <HeartHandshake className="h-3.5 w-3.5 text-teal-700" />
              <span>Real Patient Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Stories of Healing & Renewed Life
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Auto-scrolling patient feedback across our cardiac, oncology, robotic ortho, and maternity wings.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>4.96/5</span>
              <span className="text-amber-700/80 font-normal">• 3,400+ verified recoveries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Infinite Loop Marquee Track (NO HORIZONTAL SCROLLBAR) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

        {/* Continuous Loop Marquee Container - 100% overflow-hidden, Zero horizontal scrollbar */}
        <div className="w-full overflow-hidden py-2">
          <div className="animate-marquee-running">
            {/* Track 1 (Original items) */}
            {renderCardTrack(false)}

            {/* Track 2 (Duplicate items for zero-gap seamless infinite loop) */}
            {renderCardTrack(true)}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for Reading Complete Patient Recovery Narrative */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedStory(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              aria-label="Close story dialog"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-teal-500 shadow-sm">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.patientName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedStory.patientName}, {selectedStory.age}
                  </h3>
                  {selectedStory.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                      <CheckCircle2 className="h-3 w-3 text-teal-600" />
                      <span>Verified Patient</span>
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-teal-700">
                  {selectedStory.condition}
                </p>
                <div className="flex items-center gap-1 mt-1 text-amber-500">
                  {[...Array(selectedStory.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                  ))}
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    Recovered {selectedStory.recoveredYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Headline Quote */}
            <blockquote className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-4">
              &quot;{selectedStory.quote}&quot;
            </blockquote>

            {/* Full Story Content */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              <p>{selectedStory.fullStory}</p>
            </div>

            {/* Doctor Credit & Action CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                <p className="font-semibold text-slate-800">Primary Treating Specialist:</p>
                <p className="text-teal-700 font-bold">{selectedStory.treatedBy}</p>
                <p className="text-[11px] text-slate-400">{selectedStory.department}</p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Book Consultation</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedStory(null)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
