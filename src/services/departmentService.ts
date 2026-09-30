import { departmentsData } from "@/data/departments";
import { Department } from "@/types";

export const departmentService = {
  async getAll(): Promise<Department[]> {
    // If swapping to headless CMS (e.g. Sanity, Strapi), swap fetch implementation here
    return departmentsData;
  },

  async getBySlug(slug: string): Promise<Department | null> {
    const item = departmentsData.find((d) => d.slug === slug);
    return item || null;
  },

  async getById(id: string): Promise<Department | null> {
    const item = departmentsData.find((d) => d.id === id);
    return item || null;
  },
};
