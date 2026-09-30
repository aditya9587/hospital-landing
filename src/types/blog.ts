export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  authorDepartment: string;
  publishedAt: string;
  readTimeMinutes: number;
  category: string;
  tags: string[];
  coverImage: string;
  departmentSlug: string;
}
