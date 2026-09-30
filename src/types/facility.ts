export interface Facility {
  id: string;
  name: string;
  category: "Critical Care" | "Surgical Suites" | "Diagnostics" | "Patient Rooms" | "Support Services";
  description: string;
  features: string[];
  image: string;
  availability: string;
  location: string;
}
