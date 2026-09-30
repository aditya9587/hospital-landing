import { CareerJob, careersData } from "@/data/careers";

export const careerService = {
  async getAll(): Promise<CareerJob[]> {
    return careersData;
  },

  async getById(id: string): Promise<CareerJob | null> {
    const job = careersData.find((j) => j.id === id);
    return job || null;
  },
};
