import { doctorsData } from "@/data/doctors";
import { Doctor } from "@/types";

export interface DoctorFilterOptions {
  departmentId?: string;
  departmentSlug?: string;
  searchQuery?: string;
  day?: string;
  featuredOnly?: boolean;
}

export const doctorService = {
  async getAll(options?: DoctorFilterOptions): Promise<Doctor[]> {
    let list = [...doctorsData];

    if (options?.featuredOnly) {
      list = list.filter((doc) => doc.isFeatured);
    }

    if (options?.departmentId) {
      list = list.filter((doc) => doc.departmentId === options.departmentId);
    }

    if (options?.day) {
      list = list.filter((doc) => doc.opdSchedule.some((s) => s.day.toLowerCase() === options.day?.toLowerCase()));
    }

    if (options?.searchQuery) {
      const q = options.searchQuery.toLowerCase();
      list = list.filter(
        (doc) =>
          doc.name.toLowerCase().includes(q) ||
          doc.specialties.some((s) => s.toLowerCase().includes(q)) ||
          doc.departmentName.toLowerCase().includes(q)
      );
    }

    return list;
  },

  async getBySlug(slug: string): Promise<Doctor | null> {
    const doc = doctorsData.find((d) => d.slug === slug);
    return doc || null;
  },

  async getById(id: string): Promise<Doctor | null> {
    const doc = doctorsData.find((d) => d.id === id);
    return doc || null;
  },

  async getByDepartment(departmentId: string): Promise<Doctor[]> {
    return doctorsData.filter((doc) => doc.departmentId === departmentId);
  },
};
