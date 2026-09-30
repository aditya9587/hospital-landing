import { clinicalServicesData } from "@/data/services";
import { ClinicalService } from "@/types";

export const clinicalServiceService = {
  async getAll(): Promise<ClinicalService[]> {
    return clinicalServicesData;
  },

  async getBySlug(slug: string): Promise<ClinicalService | null> {
    const item = clinicalServicesData.find((s) => s.slug === slug);
    return item || null;
  },

  async getByDepartment(departmentId: string): Promise<ClinicalService[]> {
    return clinicalServicesData.filter((s) => s.departmentId === departmentId);
  },
};
