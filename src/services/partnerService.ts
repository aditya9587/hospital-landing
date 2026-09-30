import { insurancePartnersData } from "@/data/partners";
import { InsurancePartner } from "@/types";

export const partnerService = {
  async getAll(): Promise<InsurancePartner[]> {
    return insurancePartnersData;
  },

  async getCashless(): Promise<InsurancePartner[]> {
    return insurancePartnersData.filter((p) => p.cashless);
  },
};
