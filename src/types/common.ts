export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  department: string;
  quote: string;
  fullStory: string;
  recoveredYear: string;
  treatedBy: string;
  rating: number;
  image: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Appointments" | "Insurance & Billing" | "Emergency" | "Visitor Policies" | "Medical Records";
}

export interface InsurancePartner {
  id: string;
  name: string;
  type: "TPA" | "Private Insurer" | "Government Scheme";
  claimProcess: string;
  cashless: boolean;
  logo: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
