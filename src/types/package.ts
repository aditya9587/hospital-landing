export interface HealthPackage {
  id: string;
  slug: string;
  name: string;
  category: "Executive" | "Women's Health" | "Senior Citizens" | "Heart & Stroke" | "Diabetic" | "Child Health";
  targetAudience: string;
  tagline: string;
  originalPrice: number;
  discountedPrice: number;
  testCount: number;
  durationHours: string;
  isPopular?: boolean;
  idealFor: string[];
  fastingRequired: boolean;
  includedParameters: Array<{
    category: string;
    tests: string[];
  }>;
  consultationsIncluded: string[];
}
