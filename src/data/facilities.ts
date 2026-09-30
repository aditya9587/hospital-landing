import { Facility } from "@/types";

export const facilitiesData: Facility[] = [
  {
    id: "fac-cath-lab",
    name: "Philips Azurion Biplane Cath Lab",
    category: "Critical Care",
    description:
      "State-of-the-art dual-plane cardiovascular imaging system delivering ultra-low radiation doses and exceptional vascular clarity for acute angioplasty, TAVR, and intracranial thrombectomy.",
    features: [
      "Zero-delay emergency catheterization bypass",
      "ClarityIQ low radiation technology",
      "Integrated 3D vessel roadmap reconstruction",
      "Adjacent 6-bed Coronary Care Unit (CCU)",
    ],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "24 Hours / 7 Days a Week",
    location: "Tower A, 2nd Floor (Direct Emergency Elevator)",
  },
  {
    id: "fac-robotic-ot",
    name: "Mako & DaVinci Robotic Operation Theatres",
    category: "Surgical Suites",
    description:
      "Ultra-clean Class-100 laminar airflow surgical suites equipped with robotic articulation systems for joint replacement, uro-oncology, and minimally invasive thoracic surgery.",
    features: [
      "Class-100 Laminar Airflow with HEPA filtration",
      "Stryker Mako Robotic Joint Suite",
      "4K 3D Stryker video endoscopic towers",
      "Hermetically sealed touchless automatic doors",
    ],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "Scheduled 7:00 AM - 9:00 PM | Emergency 24x7",
    location: "Surgical Wing, 3rd Floor",
  },
  {
    id: "fac-level3-nicu",
    name: "Level-III Neonatal Intensive Care Unit (NICU)",
    category: "Critical Care",
    description:
      "A 24-bed specialized intensive care sanctuary designed to nurture premature newborns born as early as 24 weeks gestation, with advanced environmental noise dampening and Kangaroo Mother Care bays.",
    features: [
      "GE Giraffe Omnibed Carestations with incubator-to-warmer conversion",
      "Nitric Oxide gas delivery and High-Frequency Oscillatory Ventilation",
      "24x7 In-house Neonatal Intensivist & Lactation Consultants",
      "Individual family bonding suites with reclining armchairs",
    ],
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "24 Hours / 7 Days a Week",
    location: "Maternal & Child Pavilion, 4th Floor",
  },
  {
    id: "fac-mri-ct",
    name: "3.0 Tesla Silent MRI & 256-Slice Dual-Source CT",
    category: "Diagnostics",
    description:
      "Full spectrum molecular and anatomical cross-sectional imaging capable of ultra-fast whole-body trauma scans in 15 seconds and silent, wide-bore brain and cardiac MRI.",
    features: [
      "70cm wide-bore gantry for claustrophobia reduction",
      "Acoustic noise reduction technology (Silent Scan)",
      "High-resolution coronary calcium score & CT angiography",
      "Teleradiology emergency preliminary reports in < 20 mins",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "24x7 Emergency | OPD 7:00 AM - 10:00 PM",
    location: "Diagnostic Pavilion, Ground Floor",
  },
  {
    id: "fac-daycare-chemo",
    name: "Serene Daycare Chemotherapy & Infusion Lounge",
    category: "Patient Rooms",
    description:
      "Sunlit, garden-facing private infusion pods offering comfortable ergonomic recliners, entertainment tablets, and scalp cooling therapy to reduce hair thinning during chemotherapy.",
    features: [
      "Garden view windows for emotional serenity and calm",
      "Paxman Scalp Cooling Hair Preservation System",
      "Dedicated clinical oncology pharmacists and nurses",
      "Nutritious complimentary chef-prepared snacks",
    ],
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "Monday - Saturday: 8:00 AM - 8:00 PM",
    location: "Comprehensive Cancer Center, 1st Floor",
  },
  {
    id: "fac-emergency-trauma",
    name: "24/7 Level-1 Emergency & Trauma Bay",
    category: "Critical Care",
    description:
      "Dedicated 18-bed trauma resuscitation unit featuring point-of-care ultrasound, direct overhead surgical lights, automated CPR systems, and priority access to blood bank.",
    features: [
      "Dedicated 4-bay Red Triage resuscitation suite",
      "In-situ Point-of-Care Blood Gas & Cardiac Marker testing",
      "Decontamination and airborne isolation negative-pressure rooms",
      "Direct rapid-transit trauma elevator to Cath Lab and OTs",
    ],
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&h=600&q=80",
    availability: "24 Hours / 7 Days a Week / 365 Days",
    location: "Hospital Ground Level, Dedicated Emergency Gate 1",
  },
];
