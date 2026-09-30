import { Department } from "@/types";

export const departmentsData: Department[] = [
  {
    id: "dept-cardiology",
    slug: "cardiology",
    name: "Cardiology & Cardiothoracic Surgery",
    shortName: "Cardiology",
    tagline: "Precision cardiovascular intervention & compassionate heart recovery",
    overview:
      "Our Heart Institute combines world-class cardiologists, state-of-the-art biplane catheterization laboratories, and advanced robotic-assisted cardiac surgical suites. From acute myocardial infarction triage within 60 minutes door-to-balloon time to pediatric heart defect repairs and valve replacements, we provide comprehensive, lifecycle cardiac care.",
    iconName: "HeartPulse",
    heroImage:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Door-to-balloon time under 50 minutes for acute cardiac arrest",
      "Two dedicated 24x7 Philips Azurion Biplane Cath Labs",
      "Over 12,000 successful interventional angioplasties performed",
      "Specialized Heart Failure & ECMO recovery center",
    ],
    commonConditions: [
      "Coronary Artery Disease & Heart Attacks",
      "Arrhythmia & Atrial Fibrillation",
      "Congestive Heart Failure",
      "Valvular Heart Disease & Aortic Stenosis",
      "Congenital Heart Defects in Adults and Children",
    ],
    procedures: [
      "Primary Percutaneous Transluminal Coronary Angioplasty (PTCA)",
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Coronary Artery Bypass Grafting (Minimally Invasive CABG)",
      "Pacemaker & ICD Implantation",
      "Electrophysiology Study (EPS) & Radiofrequency Ablation",
    ],
    technologies: [
      "Philips Azurion 7 Biplane Cath Lab",
      "3D Echocardiography with Strain Imaging",
      "Intravascular Ultrasound (IVUS) & OCT Guidance",
      "Impella Left Ventricular Assist Device",
    ],
    faqs: [
      {
        question: "What is door-to-balloon time and why does it matter?",
        answer:
          "Door-to-balloon time is the duration between a heart attack patient arriving at our hospital doors and the re-opening of their blocked coronary artery in our Cath Lab. Our average is under 50 minutes, well ahead of the global 90-minute gold standard, preserving crucial heart muscle.",
      },
      {
        question: "Is TAVR suitable for elderly cardiac patients?",
        answer:
          "Yes. Transcatheter Aortic Valve Replacement (TAVR) is a minimally invasive catheter procedure that replaces damaged aortic valves without open-heart surgery, offering rapid recovery for high-risk elderly patients.",
      },
    ],
    doctorIds: ["doc-rajesh-varma", "doc-ks-venkatesh"],
    serviceSlugs: ["tavr-procedure", "angioplasty-stenting", "coronary-bypass"],
  },
  {
    id: "dept-neurology",
    slug: "neurology",
    name: "Neurology & Neurosurgery",
    shortName: "Neurology & Spine",
    tagline: "Rapid-response stroke interventions and microsurgical spine preservation",
    overview:
      "The Institute of Neurosciences at HopeCare provides dedicated care for disorders of the brain, spinal cord, and peripheral nerves. Featuring a 24x7 'Code Stroke' rapid response team with neuro-endovascular clot retrieval, computer-assisted neuronavigation, and functional neurosurgery for Parkinson's disease.",
    iconName: "Brain",
    heroImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Designated Comprehensive Stroke Center with mechanical thrombectomy",
      "Intraoperative MRI and stealth-guided neuro-navigation",
      "Minimally invasive tubular spine surgery program",
      "Comprehensive Epilepsy Monitoring Unit (EMU)",
    ],
    commonConditions: [
      "Acute Ischemic & Hemorrhagic Stroke",
      "Brain Tumors & Skull Base Lesions",
      "Herniated Discs & Spinal Stenosis",
      "Epilepsy & Intractable Seizures",
      "Parkinson's Disease & Movement Disorders",
    ],
    procedures: [
      "Mechanical Thrombectomy for Acute Stroke",
      "Stereotactic Brain Biopsy and Craniotomy",
      "Endoscopic Transsphenoidal Pituitary Surgery",
      "Microdiscectomy and Spinal Fusion",
      "Deep Brain Stimulation (DBS)",
    ],
    technologies: [
      "Medtronic StealthStation S8 Surgical Navigation",
      "Zeiss Kinevo 900 3D Robotic Visualization System",
      "3.0 Tesla Silent MRI with Neuro-functional Mapping",
      "Intraoperative Neuro-monitoring (IONM)",
    ],
    faqs: [
      {
        question: "How quickly must a stroke patient reach the hospital?",
        answer:
          "For acute ischemic stroke, every second counts ('Time is Brain'). Clot-dissolving medications (tPA) should ideally be given within 4.5 hours, and mechanical clot retrieval can be performed within up to 24 hours in selected candidates.",
      },
      {
        question: "What makes minimally invasive spine surgery different?",
        answer:
          "Instead of large muscular dissections, our spine surgeons utilize specialized tubular retractors and endoscopes through incisions under 1 inch, allowing patients to walk the same evening.",
      },
    ],
    doctorIds: ["doc-ananya-sen", "doc-amitav-banerjee"],
    serviceSlugs: ["stroke-interventions", "minimally-invasive-spine"],
  },
  {
    id: "dept-orthopedics",
    slug: "orthopedics",
    name: "Orthopedics & Joint Replacement",
    shortName: "Orthopedics",
    tagline: "Restoring active, pain-free mobility with robotic precision joint care",
    overview:
      "HopeCare Orthopedic Center specializes in joint preservation, computer-navigated robotic joint replacements, sports injuries, and complex fracture reconstructive surgeries. Our goal is helping patients walk comfortably, return to favorite athletics, and regain independent mobility.",
    iconName: "Bone",
    heroImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Mako Robotic-Arm assisted partial and total joint arthroplasty",
      "Fast-track recovery program: patients walk 4 hours post-surgery",
      "Specialized arthroscopy unit for sports ligament repairs (ACL/PCL)",
      "Zero-infection laminar airflow cleanroom operation suites",
    ],
    commonConditions: [
      "Severe Osteoarthritis of Knee and Hip",
      "Sports Ligament & Meniscus Tears (ACL, MCL)",
      "Rotator Cuff Tears & Shoulder Impingement",
      "Complex Trauma & Non-union Fractures",
      "Pediatric Orthopedic Deformities",
    ],
    procedures: [
      "Robotic Total & Partial Knee Arthroplasty",
      "Direct Anterior Hip Replacement",
      "Arthroscopic ACL Reconstruction",
      "Reverse Shoulder Arthroplasty",
      "Cartilage Regeneration & PRP Therapy",
    ],
    technologies: [
      "Stryker Mako Robotic Surgical System",
      "Smith & Nephew 4K Ultra-HD Arthroscopy Tower",
      "Computerized Gait & Biomechanical Analysis Lab",
      "Laminar Airflow Class-100 Operation Theatres",
    ],
    faqs: [
      {
        question: "How long is recovery after robotic knee replacement?",
        answer:
          "With robotic precision alignment and tissue-sparing techniques, most patients stand and walk with a walker within 4 to 6 hours after surgery, and return home in 2 to 3 days.",
      },
    ],
    doctorIds: ["doc-vikramaditya-rathore"],
    serviceSlugs: ["robotic-knee-replacement", "sports-injury-arthroscopy"],
  },
  {
    id: "dept-oncology",
    slug: "oncology",
    name: "Oncology & Comprehensive Cancer Care",
    shortName: "Oncology",
    tagline: "Multi-disciplinary tumor board, targeted immunotherapy, and gentle support",
    overview:
      "Our Comprehensive Cancer Center brings together surgical oncologists, medical oncologists, radiation oncologists, and genetic counselors in weekly Multi-Disciplinary Tumor Boards. We customize each patient's journey using next-generation genomic sequencing, precision linear accelerators, and peaceful chemo infusion suites.",
    iconName: "Ribbon",
    heroImage:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Personalized targeted therapy based on molecular genomic profiles",
      "Sub-millimeter Stereotactic Radiosurgery (SRS/SBRT)",
      "Dedicated Daycare Chemotherapy Lounge with scalp-cooling systems",
      "Comprehensive survivorship, oncology nutrition, and counseling",
    ],
    commonConditions: [
      "Breast, Ovarian & Gynecologic Cancers",
      "Lung & Thoracic Malignancies",
      "Gastrointestinal & Colorectal Cancers",
      "Prostate & Urological Cancers",
      "Lymphoma, Leukemia & Multiple Myeloma",
    ],
    procedures: [
      "Organ-preserving Oncoplastic Breast Surgery",
      "Systemic Immunotherapy & Targeted Biologics",
      "Image-Guided Radiotherapy (IGRT) and RapidArc",
      "HIPEC (Hyperthermic Intraperitoneal Chemotherapy)",
      "Autologous Stem Cell Transplantation",
    ],
    technologies: [
      "Varian TrueBeam Linear Accelerator with 4D-CBCT",
      "Illumina NextSeq Next-Generation DNA Sequencer",
      "Paxman Scalp Cooling System for Hair Loss Prevention",
      "Dedicated High-Dose Brachytherapy Unit",
    ],
    faqs: [
      {
        question: "What is the purpose of a Tumor Board?",
        answer:
          "A Tumor Board brings together 8 to 12 cancer specialists—surgeons, medical oncologists, radiation oncologists, radiologists, and pathologists—to review a patient's case collectively and devise the most effective combined treatment plan.",
      },
    ],
    doctorIds: ["doc-arvind-swaminathan"],
    serviceSlugs: ["targeted-immunotherapy", "precision-radiotherapy"],
  },
  {
    id: "dept-pediatrics",
    slug: "pediatrics",
    name: "Pediatrics & Neonatal Intensive Care",
    shortName: "Pediatrics & NICU",
    tagline: "Gentle, compassionate healthcare crafted specially for babies, children, and teens",
    overview:
      "Our Department of Pediatrics provides a colorful, fear-free environment for young patients. Backed by a Level-III Neonatal Intensive Care Unit (NICU) with dedicated neonatal transport ambulances, we nurture premature infants and treat complex childhood illnesses with tenderness.",
    iconName: "Baby",
    heroImage:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Level-III 24-bed Neonatal Intensive Care Unit with GE Giraffe incubators",
      "Round-the-clock pediatric emergency and pediatric intensivist coverage",
      "Dedicated child-friendly play therapy and vaccination clinic",
      "Developmental pediatrics and pediatric cardiology clinics",
    ],
    commonConditions: [
      "Extreme Prematurity & Low Birth Weight",
      "Childhood Asthma & Respiratory Allergies",
      "Pediatric Infections & Dengue / Malaria",
      "Growth and Developmental Delays",
      "Congenital Pediatric Surgical Anomalies",
    ],
    procedures: [
      "Neonatal High-Frequency Oscillatory Ventilation (HFOV)",
      "Pediatric Minimally Invasive Laparoscopy",
      "Comprehensive Newborn Metabolic Screening",
      "Allergy Skin Prick Testing & Desensitization",
      "Whole Body Hypothermia for Neonatal Encephalopathy",
    ],
    technologies: [
      "GE Giraffe Omnibed Carestations",
      "Dräger Babylog VN500 Neonatal Ventilators",
      "RetCam Digital Pediatric Ophthalmic Imaging",
      "Dedicated Pediatric Transport Incubator with Nitric Oxide",
    ],
    faqs: [
      {
        question: "Can parents stay with their premature infant in the NICU?",
        answer:
          "Yes. We practice family-centered neonatal care, encouraging Kangaroo Mother Care (skin-to-skin bonding) and parental presence 24 hours a day with lactation specialist support.",
      },
    ],
    doctorIds: ["doc-priya-nair"],
    serviceSlugs: ["nicu-intensive-care", "pediatric-wellness"],
  },
  {
    id: "dept-obstetrics-gynecology",
    slug: "obstetrics-gynecology",
    name: "Obstetrics, Gynecology & Fetal Medicine",
    shortName: "Women's Health",
    tagline: "Empowering women across every life stage—from motherhood to healthy maturity",
    overview:
      "From adolescent health to high-risk obstetric monitoring, pain-managed gentle labor suites, and advanced 3D gynecologic laparoscopy, our Center for Women's Health provides serene, private, and empathetic clinical care for every woman.",
    iconName: "Flower2",
    heroImage:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Luxury LDRP (Labor, Delivery, Recovery, Postpartum) private suites",
      "Dedicated High-Risk Pregnancy and Fetal Medicine Diagnostic Unit",
      "Over 92% successful vaginal deliveries after previous Cesarean (VBAC)",
      "Painless labor options with dedicated obstetric anesthesiologists",
    ],
    commonConditions: [
      "High-Risk Pregnancy, Gestational Diabetes & Preeclampsia",
      "Polycystic Ovarian Syndrome (PCOS) & Endometriosis",
      "Uterine Fibroids & Pelvic Floor Prolapse",
      "Infertility & Recurrent Pregnancy Loss",
      "Menopausal & Post-Menopausal Health",
    ],
    procedures: [
      "Gentle Water Birthing & Pain-Managed Delivery",
      "Advanced 3D Laparoscopic Hysterectomy & Myomectomy",
      "Fetal Anomaly 4D Ultrasound & Amniocentesis",
      "Colposcopy and Cervical Cancer Screening",
      "Hysteroscopic Fibroid and Polyp Resection",
    ],
    technologies: [
      "GE Voluson E10 High-Definition 4D Ultrasound",
      "Karl Storz Rubina 4K 3D NIR/ICG Endoscopy System",
      "Continuous Wireless Wireless Fetal Telemetry Monitoring",
      "Hill-Rom Affinity 4 Ergonomic Birthing Beds",
    ],
    faqs: [
      {
        question: "What is an LDRP suite?",
        answer:
          "LDRP stands for Labor, Delivery, Recovery, and Postpartum. It allows the mother and newborn to remain in the same luxurious, hotel-like private room from labor until discharge, without being transferred between wards.",
      },
    ],
    doctorIds: ["doc-sunita-kulkarni"],
    serviceSlugs: ["high-risk-pregnancy", "gynecologic-laparoscopy"],
  },
  {
    id: "dept-gastroenterology",
    slug: "gastroenterology",
    name: "Gastroenterology & Hepatobiliary Sciences",
    shortName: "Gastroenterology",
    tagline: "Comprehensive digestive wellness, liver care, and advanced therapeutic endoscopy",
    overview:
      "Our digestive diseases institute delivers integrated medical and surgical interventions for liver, pancreas, stomach, and bowel conditions. We operate a modern Daycare Endoscopy Suite providing painless colonoscopies and therapeutic biliary interventions.",
    iconName: "Activity",
    heroImage:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Comprehensive Liver ICU and Liver Transplant Care Unit",
      "Advanced Endoscopic Ultrasound (EUS) and Third-Space Endoscopy",
      "Over 6,000 endoscopic procedures performed annually",
      "Dedicated Fatty Liver and Inflammatory Bowel Disease (IBD) clinics",
    ],
    commonConditions: [
      "Fatty Liver, Cirrhosis & Hepatitis B/C",
      "Acid Reflux (GERD) & Peptic Ulcers",
      "Gallstones, Bile Duct Stones & Cholangitis",
      "Ulcerative Colitis & Crohn's Disease",
      "Gastrointestinal & Colorectal Polyps",
    ],
    procedures: [
      "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
      "High-Definition Narrow-Band Imaging Colonoscopy",
      "Endoscopic Submucosal Dissection (ESD/POEM)",
      "FibroScan Non-Invasive Liver Elastography",
      "Laparoscopic Cholecystectomy & Hernia Repair",
    ],
    technologies: [
      "Olympus EVIS X1 Endoscopy System with TXI/NBI",
      "Echosens FibroScan 630 Expert for Liver Steatosis",
      "SpyGlass DS Direct Visualization Cholangioscopy",
      "High-Resolution Esophageal Manometry",
    ],
    faqs: [
      {
        question: "Is colonoscopy painful?",
        answer:
          "At HopeCare, colonoscopies and endoscopies are conducted under gentle conscious sedation administered by an anesthesiologist. Patients feel no pain and usually wake up feeling rested with no discomfort.",
      },
    ],
    doctorIds: ["doc-manojit-roy", "doc-kavita-reddy"],
    serviceSlugs: ["endoscopy-colonoscopy", "liver-care-clinic"],
  },
  {
    id: "dept-emergency-medicine",
    slug: "emergency-medicine",
    name: "Emergency, Trauma & Critical Care",
    shortName: "Emergency & Trauma",
    tagline: "24x7 Level-1 trauma response, immediate resuscitation, and golden hour mastery",
    overview:
      "HopeCare's 24x7 Emergency Care Center is equipped to handle multiple polytrauma, cardiac arrests, acute strokes, and medical emergencies without a moment's delay. Supported by mobile ICU ambulances, a dedicated triage system, and direct Cath Lab / OT bypass.",
    iconName: "Siren",
    heroImage:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&h=600&q=80",
    keyHighlights: [
      "Immediate triage by certified Emergency Medicine Physicians",
      "Zero-delay bedside CT, Point-of-Care Ultrasound (POCUS), and blood bank",
      "Fleet of Advanced Cardiac Life Support (ACLS) GPS-tracked ambulances",
      "Negative-pressure airborne isolation suites in emergency bay",
    ],
    commonConditions: [
      "Major Polytrauma & Road Traffic Accidents",
      "Acute Chest Pain & Cardiac Arrest",
      "Acute Stroke & Neurological Deficits",
      "Severe Respiratory Distress & Sepsis",
      "Acute Poisoning & Toxic Ingestion",
    ],
    procedures: [
      "Emergency Endotracheal Intubation & Mechanical Ventilation",
      "Cardiopulmonary Resuscitation (CPR) with Lucas automated devices",
      "Chest Tube Thoracostomy and Emergency Pericardiocentesis",
      "FAST Ultrasound for Internal Hemorrhage",
      "Immediate Surgical Damage Control Triage",
    ],
    technologies: [
      "Mindray Resona 7 Point-of-Care Ultrasound",
      "LUCAS 3 Automated Chest Compression System",
      "Philips IntelliVue Bedside Critical Patient Monitors",
      "Rapid Blood Gas & Cardiac Enzyme Point-of-Care Analyzers",
    ],
    faqs: [
      {
        question: "What should I do in a medical emergency before the ambulance arrives?",
        answer:
          "Call our Emergency Hotline immediately at 1800-102-CARE. Keep the patient calm, ensure their airway is clear, do not offer solid food or drinks, and stay on the line with our medical dispatcher who will guide you step-by-step.",
      },
    ],
    doctorIds: ["doc-meera-nambiar", "doc-tariq-mansoor"],
    serviceSlugs: ["emergency-trauma-care", "critical-care-icu"],
  },
];
