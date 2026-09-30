import { faqsData } from "@/data/faqs";
import { FaqItem } from "@/types";

export const faqService = {
  async getAll(): Promise<FaqItem[]> {
    return faqsData;
  },

  async getByCategory(category: FaqItem["category"]): Promise<FaqItem[]> {
    return faqsData.filter((f) => f.category === category);
  },

  async search(query: string): Promise<FaqItem[]> {
    const q = query.toLowerCase();
    return faqsData.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
    );
  },
};
