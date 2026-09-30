import { testimonialsData } from "@/data/testimonials";
import { Testimonial } from "@/types";

export const testimonialService = {
  async getAll(): Promise<Testimonial[]> {
    return testimonialsData;
  },

  async getFeatured(): Promise<Testimonial[]> {
    return testimonialsData.slice(0, 4);
  },
};
