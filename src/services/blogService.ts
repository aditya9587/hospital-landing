import { blogPostsData } from "@/data/blogs";
import { BlogPost } from "@/types";

export const blogService = {
  async getAll(): Promise<BlogPost[]> {
    return blogPostsData;
  },

  async getBySlug(slug: string): Promise<BlogPost | null> {
    const post = blogPostsData.find((b) => b.slug === slug);
    return post || null;
  },

  async getRecent(count: number = 3): Promise<BlogPost[]> {
    return blogPostsData.slice(0, count);
  },

  async getByDepartment(deptSlug: string): Promise<BlogPost[]> {
    return blogPostsData.filter((b) => b.departmentSlug === deptSlug);
  },
};
