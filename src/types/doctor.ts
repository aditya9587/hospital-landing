export interface DoctorSchedule {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  timings: string;
  room: string;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  departmentId: string;
  departmentName: string;
  specialties: string[];
  ethos: string; // "What I care about" personal philosophy quote
  experienceYears: number;
  languages: string[];
  image: string;
  bio: string;
  awards: string[];
  education: string[];
  opdSchedule: DoctorSchedule[];
  consultationFee: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
}
