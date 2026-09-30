import React from "react";
import { siteConfig } from "@/config/site.config";
import { Doctor, Department, BlogPost, FaqItem } from "@/types";

/**
 * Hospital / MedicalOrganization / LocalBusiness JSON-LD Schema
 */
export function HospitalJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#hospital`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: siteConfig.ogImage,
    telephone: siteConfig.contact.emergencyPhone,
    emergencyTelephone: siteConfig.contact.emergencyPhone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.coordinates.latitude,
      longitude: siteConfig.address.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "Cardiovascular",
      "Neurologic",
      "Orthopedic",
      "Oncologic",
      "Pediatric",
      "Gynecologic",
      "Gastroenterologic",
      "Emergency",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "24x7 Emergency & Level-1 Trauma Care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Robotic Joint Replacement",
      },
      {
        "@type": "MedicalProcedure",
        name: "Biplane Cath Lab Interventions & TAVR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Physician JSON-LD Schema
 */
export function PhysicianJsonLd({ doctor }: { doctor: Doctor }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.title,
    medicalSpecialty: doctor.specialties,
    worksFor: {
      "@type": "Hospital",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: doctor.image,
    description: doctor.bio,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: doctor.rating,
      reviewCount: doctor.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * MedicalSpecialty / MedicalDepartment JSON-LD Schema
 */
export function MedicalSpecialtyJsonLd({ department }: { department: Department }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    name: department.name,
    description: department.overview,
    provider: {
      "@type": "Hospital",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: department.shortName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage JSON-LD Schema
 */
export function FaqPageJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList JSON-LD Schema
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BlogPosting JSON-LD Schema
 */
export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
      jobTitle: post.authorTitle,
      worksFor: {
        "@type": "Hospital",
        name: siteConfig.name,
      },
    },
    publisher: {
      "@type": "Hospital",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
