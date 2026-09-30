import {
  departmentService,
  doctorService,
  packageService,
  blogService,
  testimonialService,
  partnerService,
  faqService,
} from "@/services";
import { HeroSection } from "@/components/sections/hero";
import { QuickActionBar } from "@/components/sections/quick-action-bar";
import { DepartmentsGrid } from "@/components/sections/departments-grid";
import { FeaturedDoctorsSection } from "@/components/sections/featured-doctors";
import { HealthPackagesSection } from "@/components/sections/health-packages-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { PatientStoriesSection } from "@/components/sections/patient-stories";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { InsurancePartnersSection } from "@/components/sections/insurance-partners-section";
import { FaqSection } from "@/components/sections/faq-section";
import { MapAndHoursSection } from "@/components/sections/map-and-hours";

export default async function HomePage() {
  const [
    departments,
    featuredDoctors,
    healthPackages,
    recentBlogs,
    testimonials,
    insurancePartners,
    faqs,
  ] = await Promise.all([
    departmentService.getAll(),
    doctorService.getAll({ featuredOnly: true }),
    packageService.getAll(),
    blogService.getRecent(3),
    testimonialService.getFeatured(),
    partnerService.getAll(),
    faqService.getAll(),
  ]);

  return (
    <div className="flex flex-col">
      {/* 1. Hero with Double CTA */}
      <HeroSection />

      {/* 2. Quick Action Bar */}
      <QuickActionBar />

      {/* 3. Departments Grid */}
      <DepartmentsGrid departments={departments} />

      {/* 4. Featured Doctors with Personal Ethos */}
      <FeaturedDoctorsSection doctors={featuredDoctors} />

      {/* 5. Health Screening Packages */}
      <HealthPackagesSection packages={healthPackages} />

      {/* 6. Why Choose Us: Stats & Accreditations */}
      <WhyChooseUsSection />

      {/* 7. Patient Stories & Testimonials */}
      <PatientStoriesSection stories={testimonials} />

      {/* 8. Medical Blog Preview */}
      <BlogPreviewSection posts={recentBlogs} />

      {/* 9. Cashless Insurance Partners */}
      <InsurancePartnersSection partners={insurancePartners} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection faqs={faqs} />

      {/* 11. Campus Map, Transit & Hospital Hours */}
      <MapAndHoursSection />
    </div>
  );
}
