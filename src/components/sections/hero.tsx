"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero/indian-doctors-team.jpg",
    alt: "HopeCare Hospital - Team of Distinguished Indian Doctors and Surgeons in Bengaluru",
  },
  {
    src: "/images/hero/hospital-campus.jpg",
    alt: "HopeCare Hospital - Modern 650-Bed Quaternary Care Hospital Campus on Outer Ring Road, Bengaluru",
  },
  {
    src: "/images/hero/robotic-facilities.jpg",
    alt: "HopeCare Hospital - Advanced Mako Robotic Joint and Da Vinci Surgical Suites",
  },
  {
    src: "/images/hero/cardiac-cath-lab.jpg",
    alt: "HopeCare Hospital - 24x7 Philips Biplane Cardiac Catheterization Laboratory",
  },
  {
    src: "/images/hero/maternity-pediatric.jpg",
    alt: "HopeCare Hospital - Warm Mother and Child Care and Private Neonatal Suites",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll through images continuously every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[21/9] max-h-[640px] min-h-[320px] sm:min-h-[440px] lg:min-h-[540px]"
      id="hero-section"
      aria-label="HopeCare Hospital Image Carousel"
    >
      {/* Hidden semantic H1 for SEO compliance */}
      <h1 className="sr-only">
        HopeCare Super-Speciality Hospital &amp; Research Institute — Bengaluru
      </h1>

      {/* Auto-scrolling Sliding Track */}
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className="w-full h-full shrink-0 relative overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
