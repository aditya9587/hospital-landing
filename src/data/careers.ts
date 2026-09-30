export interface CareerJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Fellowship" | "Part-Time" | "Rotational";
  experienceRequired: string;
  openings: number;
  description: string;
  requirements: string[];
}

export const careersData: CareerJob[] = [
  {
    id: "job-fellow-cardio",
    title: "Clinical Fellow in Interventional Cardiology (DNB / Post-Doctoral)",
    department: "Cardiology & Cath Lab",
    location: "Main Campus, Outer Ring Road, Bengaluru",
    type: "Fellowship",
    experienceRequired: "Completed MD / DM / DNB in Cardiology with NMC Registration",
    openings: 2,
    description:
      "A rigorous 2-year hands-on fellowship training in high-volume coronary interventions, transradial access, intravascular imaging (IVUS/OCT), and structural heart disease (TAVR) under Chief Cardiologist Dr. Rajesh Varma.",
    requirements: [
      "Board certified or eligible in Cardiology (DM / DNB)",
      "Registered with Karnataka Medical Council (KMC) or National Medical Commission (NMC)",
      "Demonstrated dedication to compassionate bedside patient communication",
    ],
  },
  {
    id: "job-icu-nurse",
    title: "Senior Critical Care Nursing Officer (ICU / CCU / NICU)",
    department: "Critical Care Nursing",
    location: "Main Campus, Outer Ring Road, Bengaluru",
    type: "Full-Time",
    experienceRequired: "3+ years in a tertiary care surgical, cardiac, or neonatal ICU",
    openings: 8,
    description:
      "Deliver compassionate, high-vigilance nursing care in our 36-bed multi-disciplinary ICU. Work alongside leading intensivists using state-of-the-art telemetry and Dräger ventilation systems.",
    requirements: [
      "B.Sc Nursing / GNM with active KNC / INC registration",
      "ACLS and BLS certification mandatory",
      "Proficiency in arterial blood gas interpretation and ventilator titration",
    ],
  },
  {
    id: "job-trauma-surgeon",
    title: "Junior Consultant Trauma & Emergency Surgeon",
    department: "Emergency, Trauma & Critical Care",
    location: "Main Campus, Outer Ring Road, Bengaluru",
    type: "Full-Time",
    experienceRequired: "2+ years post-MCh / MS with trauma fellowship",
    openings: 1,
    description:
      "Join our Level-1 trauma response team handling complex polytrauma, emergency thoracic and abdominal damage control surgery in Bengaluru's busy tech corridor.",
    requirements: [
      "ATLS Instructor or Provider Certification",
      "Proven proficiency in emergency resuscitation and exploratory laparotomy",
      "NMC / KMC specialist registration",
    ],
  },
  {
    id: "job-radiology-technologist",
    title: "Lead MRI / CT Imaging Technologist",
    department: "Diagnostic Pavilion",
    location: "Main Campus, Outer Ring Road, Bengaluru",
    type: "Full-Time",
    experienceRequired: "3+ years operating 3T MRI and 128+ slice CT systems",
    openings: 3,
    description:
      "Operate our cutting-edge 3.0 Tesla Silent MRI and 256-Slice CT scanner with a warm, comforting demeanor for anxious or claustrophobic patients.",
    requirements: [
      "B.Sc in Medical Imaging Technology (BMIT) or Diploma in Radiography",
      "Hands-on expertise with cardiac CT angiography and neuro-imaging sequences",
      "Courteous and compassionate patient handling skills",
    ],
  },
];
