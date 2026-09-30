"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Calendar,
  Star,
  Quote,
  Clock,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Doctor, Department } from "@/types";
import { Button } from "@/components/ui/button";

interface DoctorDirectoryProps {
  doctors: Doctor[];
  departments: Department[];
  initialDepartmentSlug?: string;
}

export function DoctorDirectory({
  doctors,
  departments,
  initialDepartmentSlug,
}: DoctorDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeptSlug, setSelectedDeptSlug] = useState(initialDepartmentSlug || "all");
  const [selectedDay, setSelectedDay] = useState("all");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Filtered Doctors List
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // Filter by department
      if (selectedDeptSlug !== "all") {
        const dept = departments.find((d) => d.slug === selectedDeptSlug);
        if (dept && doc.departmentId !== dept.id) return false;
      }

      // Filter by day
      if (selectedDay !== "all") {
        const hasDay = doc.opdSchedule.some(
          (s) => s.day.toLowerCase() === selectedDay.toLowerCase()
        );
        if (!hasDay) return false;
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = doc.name.toLowerCase().includes(q);
        const matchesDept = doc.departmentName.toLowerCase().includes(q);
        const matchesSpecialty = doc.specialties.some((s) => s.toLowerCase().includes(q));
        if (!matchesName && !matchesDept && !matchesSpecialty) return false;
      }

      return true;
    });
  }, [doctors, departments, selectedDeptSlug, selectedDay, searchQuery]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDeptSlug("all");
    setSelectedDay("all");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedDeptSlug !== "all" || selectedDay !== "all";

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Box (6 cols) */}
          <div className="md:col-span-5 relative">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name, specialty, or condition..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20 transition-all"
            />
          </div>

          {/* Department Filter (4 cols) */}
          <div className="md:col-span-4">
            <select
              value={selectedDeptSlug}
              onChange={(e) => setSelectedDeptSlug(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20 transition-all"
            >
              <option value="all">All Medical Specialties (8)</option>
              {departments.map((dept) => (
                <option key={dept.slug} value={dept.slug}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Day of Week Filter (3 cols) */}
          <div className="md:col-span-3">
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20 transition-all"
            >
              <option value="all">Any Day of the Week</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day} OPD Available
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Badges & Reset Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <p>
            Showing <strong className="text-slate-900">{filteredDoctors.length}</strong> of {doctors.length} qualified specialists
          </p>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear Active Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Zero Results State */}
      {filteredDoctors.length === 0 && (
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 mx-auto">
            <Search className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Specialists Found</h3>
          <p className="text-sm text-slate-600">
            No doctors matched your criteria. Try adjusting your search query, or clear filters to view all consultants.
          </p>
          <Button onClick={resetFilters} variant="secondary">
            Reset Filters
          </Button>
        </div>
      )}

      {/* Filtered Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300"
          >
            <div>
              {/* Doctor Photo */}
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm text-xs font-bold text-slate-800">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-400 text-[10px]">({doctor.reviewCount})</span>
                </div>

                {/* Department Pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-900/90 text-teal-200 backdrop-blur-xs">
                    {doctor.departmentName}
                  </span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  {doctor.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {doctor.qualifications} • {doctor.experienceYears} Years Exp
                </p>

                {/* One-Line "What I Care About" Ethos Quote */}
                <div className="mt-4 p-3 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 italic flex items-start gap-2.5">
                  <Quote className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="line-clamp-2 leading-relaxed font-medium">
                    &quot;{doctor.ethos}&quot;
                  </p>
                </div>

                {/* OPD Schedule Pills */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Consultation Days:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {doctor.opdSchedule.map((sched, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {sched.day.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center gap-3">
              <Link
                href={`/doctors/${doctor.slug}`}
                className="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                Profile & Bio
              </Link>

              <Link
                href={`/appointment?doctor=${doctor.slug}&department=${doctor.departmentId}`}
                className="flex-1"
              >
                <Button size="sm" className="w-full gap-1.5 py-2.5 rounded-xl text-xs font-bold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Book Visit</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
