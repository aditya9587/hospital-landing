export interface Department {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  iconName: string;
  heroImage: string;
  keyHighlights: string[];
  commonConditions: string[];
  procedures: string[];
  technologies: string[];
  faqs: Array<{ question: string; answer: string }>;
  doctorIds: string[];
  serviceSlugs: string[];
}
