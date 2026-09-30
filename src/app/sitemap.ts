import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import {
  departmentService,
  doctorService,
  clinicalServiceService,
  blogService,
} from "@/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const [departments, doctors, services, blogs] = await Promise.all([
    departmentService.getAll(),
    doctorService.getAll(),
    clinicalServiceService.getAll(),
    blogService.getAll(),
  ]);

  // Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/departments",
    "/doctors",
    "/services",
    "/health-packages",
    "/appointment",
    "/patient-care",
    "/facilities",
    "/careers",
    "/blog",
    "/gallery",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/medical-disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/appointment" ? 0.95 : 0.8,
  }));

  // Dynamic Departments
  const departmentRoutes: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${baseUrl}/departments/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Doctors
  const doctorRoutes: MetadataRoute.Sitemap = doctors.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Clinical Services
  const serviceRoutes: MetadataRoute.Sitemap = services.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Blog Posts
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...departmentRoutes,
    ...doctorRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
