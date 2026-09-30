export interface ClinicalService {
  id: string;
  slug: string;
  title: string;
  departmentId: string;
  departmentName: string;
  summary: string;
  description: string;
  indications: string[];
  preparation: string[];
  benefits: string[];
  duration: string;
  recoveryTime: string;
  image: string;
}
