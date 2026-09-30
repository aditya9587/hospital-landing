import { HealthPackage } from "@/types";

export const healthPackagesData: HealthPackage[] = [
  {
    id: "pkg-master-executive",
    slug: "master-health-screening",
    name: "Master Executive Health Checkup",
    category: "Executive",
    targetAudience: "Working professionals and adults aged 30+ seeking complete organ function assessment",
    tagline: "Comprehensive 85+ parameter health blueprint for complete peace of mind",
    originalPrice: 11000,
    discountedPrice: 5999,
    testCount: 85,
    durationHours: "3.5 hours",
    isPopular: true,
    idealFor: [
      "IT professionals, entrepreneurs, and adults with sedentary or high-stress routines",
      "Anyone who hasn't completed a preventive checkup in the past 12 months",
      "Early detection of silent cardiac, liver, kidney, or thyroid disorders",
    ],
    fastingRequired: true,
    includedParameters: [
      {
        category: "Cardiovascular Health",
        tests: ["12-Lead Resting ECG", "Treadmill Stress Test (TMT / Stress Echo)", "Complete Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides, VLDL)", "Apolipoprotein A1/B"],
      },
      {
        category: "Liver & Kidney Function",
        tests: ["Liver Function Test (SGOT, SGPT, Bilirubin, Albumin, ALP)", "Renal Profile (Serum Creatinine, Blood Urea, Uric Acid, eGFR)", "Complete Urine Analysis with Microalbumin"],
      },
      {
        category: "Metabolic & Endocrine",
        tests: ["Fasting Blood Glucose & HbA1c (3-Month Glycated Average)", "Thyroid Profile (Total T3, Total T4, Ultrasensitive TSH)", "Vitamin D3 (25-OH) & Vitamin B12"],
      },
      {
        category: "Diagnostic Imaging & Cancer Screening",
        tests: ["Chest X-Ray Digital High Definition", "Ultrasound Whole Abdomen & Pelvis (USG)", "PSA (Prostate) for Men / Pap Smear for Women"],
      },
    ],
    consultationsIncluded: [
      "Physical Examination & History Review by Senior Consultant Physician",
      "Cardiologist Evaluation with 12-Lead ECG Review",
      "Clinical Dietitian Lifestyle & Nutritional Counseling Session",
    ],
  },
  {
    id: "pkg-cardiac-comprehensive",
    slug: "cardiac-wellness-check",
    name: "Comprehensive Cardiac Wellness Check",
    category: "Heart & Stroke",
    targetAudience: "Individuals aged 35+ with family history of coronary artery disease, hypertension, or elevated cholesterol",
    tagline: "Specialized in-depth cardiovascular assessment by Heart Institute consultants",
    originalPrice: 14000,
    discountedPrice: 7499,
    testCount: 42,
    durationHours: "3 hours",
    isPopular: true,
    idealFor: [
      "Family history of early heart attacks, hypertension, or sudden cardiac events",
      "Smokers, corporate professionals with irregular work hours or high stress",
      "Marathon runners and gym enthusiasts seeking pre-fitness cardiac clearance",
    ],
    fastingRequired: true,
    includedParameters: [
      {
        category: "Cardiac Diagnostic Suite",
        tests: ["2D Echocardiography with Color Doppler", "Treadmill Stress Test (TMT)", "High-Sensitivity C-Reactive Protein (hs-CRP)", "Serum Homocysteine & Lipoprotein (a)"],
      },
      {
        category: "Cardio-Metabolic Panel",
        tests: ["Extended Lipid Profile with ApoB/ApoA Ratio", "Fasting & Post-Prandial Glucose + HbA1c", "Serum Electrolytes (Sodium, Potassium, Chloride)"],
      },
      {
        category: "Vascular Health",
        tests: ["Carotid Doppler Ultrasound for Intima-Media Thickness", "Chest X-Ray Digital", "Serum Creatinine with eGFR"],
      },
    ],
    consultationsIncluded: [
      "Detailed Consultation with Senior Interventional Cardiologist",
      "Heart-Healthy Nutritional Counseling by Cardiac Dietitian",
    ],
  },
  {
    id: "pkg-well-woman",
    slug: "well-woman-care",
    name: "Well Woman Comprehensive Screening",
    category: "Women's Health",
    targetAudience: "Women of all ages focused on hormonal balance, breast health, and reproductive wellness",
    tagline: "Dedicated screening covering bone density, gynecologic health, and sonomammography",
    originalPrice: 9500,
    discountedPrice: 4999,
    testCount: 65,
    durationHours: "3 hours",
    isPopular: false,
    idealFor: [
      "Annual preventive wellness check for women aged 25 to 65",
      "Women experiencing irregular cycles, PCOS, or perimenopausal changes",
      "Proactive cervical screening and breast wellness imaging",
    ],
    fastingRequired: true,
    includedParameters: [
      {
        category: "Women's Preventive Oncology",
        tests: ["Liquid-Based Pap Smear (Cervical Screening)", "Digital Bilateral Sonomammography / Mammogram", "Pelvic & Transvaginal Ultrasound (USG)"],
      },
      {
        category: "Bone & Hormonal Health",
        tests: ["DEXA Bone Mineral Density Scan (Spine & Hip)", "Complete Thyroid Profile (TSH, FT3, FT4)", "Vitamin D3, Calcium & Phosphorus", "Serum Ferritin & Iron Studies for Anemia"],
      },
      {
        category: "General Organ Profile",
        tests: ["Complete Blood Count (CBC with ESR)", "Liver & Renal Function Panels", "Lipid Profile & HbA1c"],
      },
    ],
    consultationsIncluded: [
      "Clinical Examination by Senior Consultant Gynecologist",
      "Breast Health & Self-Examination Guidance",
      "Diet & Hormonal Balance Counseling",
    ],
  },
  {
    id: "pkg-senior-citizen",
    slug: "senior-citizen-wellness",
    name: "Swarna Ayush Senior Citizen Wellness",
    category: "Senior Citizens",
    targetAudience: "Seniors aged 60+ requiring careful geriatric monitoring and joint mobility evaluation",
    tagline: "Holistic geriatric care with arthritis, eye pressure, hearing, and heart evaluations",
    originalPrice: 12000,
    discountedPrice: 6499,
    testCount: 70,
    durationHours: "4 hours",
    isPopular: false,
    idealFor: [
      "Elders aged 60 and above",
      "Monitoring chronic hypertension, diabetes, arthritis, or osteoporosis",
      "Screening for cognitive health, cataract, glaucoma, and prostate/cervical wellness",
    ],
    fastingRequired: true,
    includedParameters: [
      {
        category: "Geriatric & Musculoskeletal",
        tests: ["DEXA Bone Mineral Density Scan", "Serum Uric Acid & Total Calcium", "Rheumatoid Factor & ESR", "Fall Risk & Gait Balance Assessment"],
      },
      {
        category: "Organ Function & Memory",
        tests: ["Renal Profile with eGFR", "Liver Function Panel", "Serum Vitamin B12 & Folate", "Urinary Microalbumin"],
      },
      {
        category: "Sensory & Cardiac",
        tests: ["Comprehensive Slit-Lamp Eye & Glaucoma Check", "Pure Tone Audiometry Hearing Screening", "12-Lead Resting ECG & 2D Echo"],
      },
    ],
    consultationsIncluded: [
      "Senior Geriatric Physician Comprehensive Assessment",
      "Orthopedic Specialist Joint Mobility Check",
      "Ophthalmology Consultant Slit-Lamp Eye Exam",
    ],
  },
  {
    id: "pkg-diabetic-care",
    slug: "diabetic-metabolic-care",
    name: "Madhumeha Advanced Diabetic Care",
    category: "Diabetic",
    targetAudience: "Individuals diagnosed with Type-1, Type-2 Diabetes, or pre-diabetes",
    tagline: "Prevent diabetes complications across eyes, kidneys, nerves, and heart",
    originalPrice: 7500,
    discountedPrice: 3999,
    testCount: 50,
    durationHours: "2.5 hours",
    isPopular: false,
    idealFor: [
      "Anyone managing blood sugar levels or strong family history of diabetes",
      "Preventing diabetic neuropathy, retinopathy, and kidney disease",
      "Comprehensive evaluation of insulin resistance and metabolic syndrome",
    ],
    fastingRequired: true,
    includedParameters: [
      {
        category: "Glycemic & Renal Markers",
        tests: ["Fasting Blood Sugar & Post-Meal Glucose (PPBS)", "HbA1c Glycated Hemoglobin", "Urine Albumin-to-Creatinine Ratio (ACR)", "Serum Creatinine with eGFR"],
      },
      {
        category: "Vascular & Neuropathy Checks",
        tests: ["Biothesiometry Vibration Foot Screening", "Lipid Profile with Triglycerides", "Dilated Diabetic Retinopathy Fundus Eye Examination"],
      },
      {
        category: "Cardio-Liver Status",
        tests: ["12-Lead Resting ECG", "Liver Function Test with SGPT/SGOT", "Serum Electrolytes"],
      },
    ],
    consultationsIncluded: [
      "Consultation with Senior Consultant Diabetologist / Endocrinologist",
      "Diabetic Foot & Wound Care Specialist Evaluation",
      "Certified Diabetes Educator Nutrition & Lifestyle Session",
    ],
  },
  {
    id: "pkg-child-health",
    slug: "child-adolescent-screening",
    name: "Bal Swasthya Child Health Screening",
    category: "Child Health",
    targetAudience: "Children and teenagers aged 2 to 18 years",
    tagline: "Gentle growth, nutrition, pediatric vision, and developmental milestone checkup",
    originalPrice: 4500,
    discountedPrice: 2499,
    testCount: 30,
    durationHours: "2 hours",
    isPopular: false,
    idealFor: [
      "Annual school checkup and athletic sports fitness certification",
      "Children with picky eating habits, poor weight gain, or frequent colds",
      "Early detection of vision problems, spinal posture, flat feet, or anemia",
    ],
    fastingRequired: false,
    includedParameters: [
      {
        category: "Growth & Blood Parameters",
        tests: ["Complete Hemogram (CBC for Anemia detection)", "Blood Group & Rh Typing", "Serum Ferritin & Iron", "Routine Urine Examination"],
      },
      {
        category: "Sensory & Physical Growth",
        tests: ["Pediatric Vision & Squint Screening", "Hearing & Speech Milestone Review", "Spine Posture & Flatfoot Evaluation"],
      },
    ],
    consultationsIncluded: [
      "Senior Pediatrician Comprehensive Health Checkup",
      "Pediatric Dental Screening",
      "Pediatric Nutritionist Diet Plan",
    ],
  },
];
