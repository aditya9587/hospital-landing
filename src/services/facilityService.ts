import { facilitiesData } from "@/data/facilities";
import { Facility } from "@/types";

export const facilityService = {
  async getAll(): Promise<Facility[]> {
    return facilitiesData;
  },

  async getByCategory(category: Facility["category"]): Promise<Facility[]> {
    return facilitiesData.filter((f) => f.category === category);
  },
};
