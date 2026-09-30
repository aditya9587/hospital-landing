export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    emergencyPhone: string;
    emergencyPhoneRaw: string;
    appointmentPhone: string;
    appointmentPhoneRaw: string;
    generalPhone: string;
    generalPhoneRaw: string;
    whatsapp: string;
    whatsappUrl: string;
    email: string;
    appointmentsEmail: string;
  };
  address: {
    street: string;
    district: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
    directions: string;
  };
  timings: {
    emergency: string;
    opd: string;
    visitingHours: string;
    pharmacy: string;
    diagnostics: string;
  };
  stats: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  accreditations: Array<{
    name: string;
    code: string;
    description: string;
  }>;
  nav: {
    main: NavItem[];
    quickActions: Array<{
      label: string;
      href: string;
      iconName: string;
      description: string;
    }>;
    patientCare: NavItem[];
    footer: {
      specialties: NavItem[];
      patients: NavItem[];
      hospital: NavItem[];
      legal: NavItem[];
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "HopeCare Super-Speciality Hospital & Research Institute",
  shortName: "HopeCare Hospital",
  tagline: "World-Class Clinical Mastery. Compassionate Indian Hospitality.",
  description:
    "NABH & JCI accredited 650-bed quaternary care hospital in Bengaluru. Offering 8 Centres of Clinical Excellence, 24x7 Emergency & Trauma, Mako Robotic Surgery, cashless mediclaim with 35+ TPAs & insurers, and patient-first compassionate healing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hopecarehospital.in",
  ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&h=630&q=80",
  contact: {
    emergencyPhone: "1800-102-CARE",
    emergencyPhoneRaw: "tel:18001022273",
    appointmentPhone: "080-4999-2200",
    appointmentPhoneRaw: "tel:+918049992200",
    generalPhone: "080-4000-5555",
    generalPhoneRaw: "tel:+918040005555",
    whatsapp: "+91 98450 12345",
    whatsappUrl:
      "https://wa.me/919845012345?text=Namaste%20HopeCare%20Hospital,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
    email: "care@hopecarehospital.in",
    appointmentsEmail: "appointments@hopecarehospital.in",
  },
  address: {
    street: "108 Healthcare Boulevard, Outer Ring Road",
    district: "Opp. Prestige Tech Park, Bellandur-Marathahalli",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560103",
    country: "India",
    full: "108 Healthcare Boulevard, Outer Ring Road, Opp. Prestige Tech Park, Bellandur, Bengaluru, Karnataka 560103, India",
    coordinates: {
      latitude: 12.9279,
      longitude: 77.6833,
    },
    googleMapsUrl: "https://maps.google.com/?q=Outer+Ring+Road+Bellandur+Bengaluru",
    directions: "Located directly on Outer Ring Road opposite Prestige Tech Park. 4 km from Kadubeesanahalli / Bellandur Metro. Free 2-hour patient parking available on South Campus.",
  },
  timings: {
    emergency: "24 Hours / 7 Days a Week (Never Closes)",
    opd: "Monday to Saturday: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 1:00 PM",
    visitingHours: "Morning: 10:00 AM – 12:00 PM | Evening: 4:30 PM – 7:30 PM",
    pharmacy: "24x7 In-house Pharmacy with home delivery across Bengaluru",
    diagnostics: "24x7 Emergency Diagnostics (3T MRI, 256-Slice CT, NABL Pathology, Biplane Cath Lab)",
  },
  stats: [
    { label: "Successful Patient Recoveries", value: "3,50,000+", description: "Healed with clinical precision and warmth" },
    { label: "Complex Surgeries Done", value: "48,000+", description: "Minimally invasive & robotic perfection" },
    { label: "Senior Super-Specialists", value: "140+", description: "AIIMS, NIMHANS, CMC & global fellows" },
    { label: "Emergency Response Time", value: "< 4 mins", description: "GPS ambulance & Golden Hour triage" },
  ],
  accreditations: [
    {
      name: "National Accreditation Board for Hospitals (NABH)",
      code: "NABH Digital Certified",
      description: "Apex Indian national healthcare quality benchmark for patient safety.",
    },
    {
      name: "Joint Commission International (JCI - USA)",
      code: "JCI Gold Seal",
      description: "Highest global standard of infection control and clinical protocol.",
    },
    {
      name: "National Accreditation Board for Laboratories (NABL)",
      code: "NABL Accredited Lab",
      description: "Assures 100% precision pathology and molecular testing.",
    },
    {
      name: "Green OT & Hospital Certification",
      code: "Bureau Veritas Platinum",
      description: "Eco-conscious, HEPA-filtered clean air with zero infection rate.",
    },
  ],
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Departments", href: "/departments" },
      { label: "Find a Doctor", href: "/doctors" },
      { label: "Services", href: "/services" },
      { label: "Health Packages", href: "/health-packages" },
      { label: "Patient Care", href: "/patient-care" },
      { label: "Facilities", href: "/facilities" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    quickActions: [
      {
        label: "Find a Doctor",
        href: "/doctors",
        iconName: "UserCheck",
        description: "Search 140+ senior consultants across 8 centres of excellence",
      },
      {
        label: "Book Appointment",
        href: "/appointment",
        iconName: "Calendar",
        description: "Instant online appointment with SMS & WhatsApp confirmation",
      },
      {
        label: "Health Packages",
        href: "/health-packages",
        iconName: "ShieldCheck",
        description: "Comprehensive preventive checkups starting from ₹2,499",
      },
      {
        label: "Emergency 24x7",
        href: "tel:18001022273",
        iconName: "PhoneCall",
        description: "Call 1800-102-CARE for immediate GPS ambulance dispatch",
      },
    ],
    patientCare: [
      { label: "Admission Guide", href: "/patient-care#admission" },
      { label: "Cashless Mediclaim & TPA", href: "/patient-care#insurance" },
      { label: "Billing & Cost Estimates", href: "/patient-care#billing" },
      { label: "Visitor Guidelines", href: "/patient-care#visiting" },
      { label: "Downloadable Forms", href: "/patient-care#forms" },
    ],
    footer: {
      specialties: [
        { label: "Cardiology & Cardiac Surgery", href: "/departments/cardiology" },
        { label: "Neurology & Neurosurgery", href: "/departments/neurology" },
        { label: "Orthopedics & Robotic Joint Replacement", href: "/departments/orthopedics" },
        { label: "Oncology (Cancer Institute)", href: "/departments/oncology" },
        { label: "Pediatrics & Level-III NICU", href: "/departments/pediatrics" },
        { label: "Obstetrics & Gynecology (Maternity)", href: "/departments/obstetrics-gynecology" },
        { label: "Gastroenterology & Liver Sciences", href: "/departments/gastroenterology" },
        { label: "Emergency & Trauma (24x7)", href: "/departments/emergency-medicine" },
      ],
      patients: [
        { label: "Book an Appointment", href: "/appointment" },
        { label: "Health Check Packages", href: "/health-packages" },
        { label: "Cashless Insurance Partners", href: "/patient-care#insurance" },
        { label: "Admission & Discharge Guide", href: "/patient-care#admission" },
        { label: "Hospital Facilities & Suites", href: "/facilities" },
        { label: "Patient Stories & Reviews", href: "/#patient-stories" },
      ],
      hospital: [
        { label: "About HopeCare", href: "/about" },
        { label: "Meet Our Doctors", href: "/doctors" },
        { label: "Health Tips & Medical Blog", href: "/blog" },
        { label: "Campus Photo Tour", href: "/gallery" },
        { label: "Careers & DNB Fellowships", href: "/careers" },
        { label: "Frequently Asked Questions", href: "/faq" },
        { label: "Contact Us & Directions", href: "/contact" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Medical Disclaimer", href: "/medical-disclaimer" },
      ],
    },
  },
};
