import { Metadata } from "next";
import Link from "next/link";
import { departmentService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { DepartmentsGrid } from "@/components/sections/departments-grid";

export const metadata: Metadata = {
  title: "Clinical Departments & Specialized Institutes | HopeCare Hospital",
  description:
    "Explore 8 Centers of Clinical Excellence at HopeCare Hospital including Cardiology, Neurology, Robotic Orthopedics, Oncology, NICU, and Emergency Trauma.",
  alternates: {
    canonical: `${siteConfig.url}/departments`,
  },
};

export default async function DepartmentsIndexPage() {
  const departments = await departmentService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Departments", url: "/departments" }]} />

      <div className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
          Centers of Excellence
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Specialized Medical & Surgical Institutes
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          From acute emergency interventions and robotic reconstructive surgeries to compassionate
          pediatric and oncological care, select an institute below to meet specialists and learn about treatments.
        </p>
      </div>

      <DepartmentsGrid departments={departments} />
    </div>
  );
}
