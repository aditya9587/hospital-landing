import { healthPackagesData } from "@/data/packages";
import { HealthPackage } from "@/types";

export const packageService = {
  async getAll(): Promise<HealthPackage[]> {
    return healthPackagesData;
  },

  async getBySlug(slug: string): Promise<HealthPackage | null> {
    const pkg = healthPackagesData.find((p) => p.slug === slug);
    return pkg || null;
  },

  async getFeatured(): Promise<HealthPackage[]> {
    return healthPackagesData.filter((p) => p.isPopular);
  },
};
