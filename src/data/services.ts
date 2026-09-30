import { ClinicalService } from "@/types";

export const clinicalServicesData: ClinicalService[] = [
  {
    id: "srv-robotic-knee",
    slug: "robotic-knee-replacement",
    title: "Mako Robotic-Arm Total Knee Replacement",
    departmentId: "dept-orthopedics",
    departmentName: "Orthopedics & Joint Replacement",
    summary:
      "CT-guided 3D robotic precision alignment that preserves healthy bone and ligament, enabling painless mobility and walking within 4 hours.",
    description:
      "Robotic total knee replacement utilizes the Stryker Mako robotic arm system to customize bone resection specifically to each patient's individual anatomy. Before entering the operating room, a 3D computerized model of the knee joint is created from a high-resolution CT scan. Intraoperatively, the robotic arm provides real-time sensory haptic feedback, preventing soft tissue damage and positioning the prosthetic implant with millimeter precision.",
    indications: [
      "Severe end-stage osteoarthritis with intractable pain",
      "Knee joint stiffness and deformity interfering with daily walking",
      "Failure of conservative physical therapy, injections, and medications",
    ],
    preparation: [
      "Pre-operative 3D CT scan of hip, knee, and ankle axis",
      "Routine cardiac and anesthetic fitness clearance",
      "Pre-habilitation muscle strengthening exercises guided by physiotherapist",
    ],
    benefits: [
      "Sub-millimeter prosthetic alignment for prolonged implant longevity (25+ years)",
      "Significantly less post-operative pain and reduced blood loss",
      "Patients stand and walk on the same day as surgery",
      "Shorter hospital stay (discharged in 48 to 72 hours)",
    ],
    duration: "60 to 90 minutes",
    recoveryTime: "Walking same day; full active independence in 2 to 4 weeks",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "srv-tavr",
    slug: "tavr-procedure",
    title: "Transcatheter Aortic Valve Replacement (TAVR)",
    departmentId: "dept-cardiology",
    departmentName: "Cardiology & Cardiothoracic Surgery",
    summary:
      "A revolutionary non-surgical catheter procedure to replace diseased aortic valves without opening the chest cavity.",
    description:
      "For decades, severe aortic stenosis required open-heart sternotomy. TAVR replaces the narrowed aortic valve through a slender catheter inserted through the femoral artery in the groin. Guided by biplane fluoroscopy and intracardiac echocardiography, the new expandable valve is deployed directly inside the diseased valve, immediately restoring healthy blood flow.",
    indications: [
      "Severe symptomatic aortic stenosis",
      "Elderly patients or individuals with elevated surgical risk for open-heart surgery",
      "Patients with previous coronary bypass or frail health",
    ],
    preparation: [
      "Contrast CT coronary and peripheral angiogram",
      "Transesophageal echocardiography (TEE)",
      "Evaluation by HopeCare Multi-disciplinary Heart Team",
    ],
    benefits: [
      "Zero surgical incision on the chest wall",
      "Performed under conscious sedation or light anesthesia",
      "Discharge within 48 hours compared to 10 days for open surgery",
      "Immediate relief of shortness of breath, fatigue, and chest heaviness",
    ],
    duration: "60 minutes",
    recoveryTime: "Discharge in 2 days; resumption of light activities in 1 week",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "srv-stroke-thrombectomy",
    slug: "stroke-interventions",
    title: "24/7 Acute Stroke Mechanical Thrombectomy",
    departmentId: "dept-neurology",
    departmentName: "Neurology & Neurosurgery",
    summary:
      "Immediate neuro-interventional clot retrieval from blocked cerebral arteries within the critical stroke window.",
    description:
      "When a major artery in the brain is occluded by a blood clot, approximately 2 million brain cells perish every minute. Our Code Stroke team mobilizes within minutes of hospital notification. In the neuro-cath lab, a neuro-interventionalist threads a micro-catheter with a stent retriever up to the intracranial clot and extracts it, restoring vital brain perfusion instantly.",
    indications: [
      "Acute ischemic stroke presenting with sudden paralysis, speech loss, or facial droop",
      "Large vessel occlusion (LVO) confirmed on emergency CT/MR perfusion angiography",
      "Presentation within 6 to 24 hours of symptom onset",
    ],
    preparation: [
      "Immediate door-to-CT imaging upon arrival",
      "Rapid neurological NIHSS scoring",
      "Direct transfer to biplane neuro-angiography suite",
    ],
    benefits: [
      "High rate of complete vascular recanalization (> 88%)",
      "Dramatic reduction in permanent physical and cognitive paralysis",
      "Enables independent walking and functional speech recovery",
    ],
    duration: "45 to 90 minutes",
    recoveryTime: "Intensive neuro-ICU monitoring for 24-48 hours",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "srv-immunotherapy",
    slug: "targeted-immunotherapy",
    title: "Precision Cancer Immunotherapy & Targeted Oncology",
    departmentId: "dept-oncology",
    departmentName: "Oncology & Comprehensive Cancer Care",
    summary:
      "Harnessing your immune system's innate ability to recognize and eliminate cancer cells using next-generation checkpoint inhibitors.",
    description:
      "Unlike traditional non-specific chemotherapy that affects both healthy and malignant cells, modern targeted immunotherapy identifies unique molecular genetic alterations (such as EGFR, ALK, PD-L1, and BRCA) on cancer cells. Infused gently in our serene Daycare Chemotherapy Lounge, immunotherapy agents empower T-cells to overcome tumor defenses with minimal side effects.",
    indications: [
      "Metastatic or locally advanced lung, breast, kidney, melanoma, and gastrointestinal cancers",
      "Cancers with high tumor mutational burden or PD-L1 positivity",
    ],
    preparation: [
      "Comprehensive Next-Generation Genomic Sequencing (NGS)",
      "Tumor Board multidisciplinary consensus",
      "Pre-infusion baseline organ function laboratory testing",
    ],
    benefits: [
      "Minimal nausea and no systemic hair loss compared to conventional chemo",
      "Long-lasting immunological memory providing durable remission",
      "Administered as comfortable daycare outpatient infusions",
    ],
    duration: "1 to 2 hours per session",
    recoveryTime: "Return home same afternoon; minimal downtime",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "srv-painless-birthing",
    slug: "high-risk-pregnancy",
    title: "Comprehensive High-Risk Obstetric Care & Gentle Birthing",
    departmentId: "dept-obstetrics-gynecology",
    departmentName: "Obstetrics, Gynecology & Fetal Medicine",
    summary:
      "24x7 consultant-led maternity care, luxury LDRP private delivery suites, and comprehensive fetal monitoring.",
    description:
      "Bringing a baby into the world should feel serene, safe, and joyous. Our maternity care combines 24x7 dedicated obstetric anesthesiologists for painless epidural analgesia, advanced fetal telemetry, neonatal resuscitation support in every suite, and holistic support for natural birth preferences.",
    indications: [
      "Expectant mothers seeking personalized, dignified birth experiences",
      "Twin/multiple gestations and gestational diabetes",
      "Maternal hypertension or previous Cesarean births seeking VBAC",
    ],
    preparation: [
      "Antenatal consultation and personalized birth plan documentation",
      "Fetal anomaly and Doppler scans",
      "Lactation education and pain management counseling",
    ],
    benefits: [
      "Private LDRP suites: labor, deliver, and bond in the same room",
      "Immediate skin-to-skin contact and 24x7 lactation specialist guidance",
      "Direct connection to Level-III NICU for peace of mind",
    ],
    duration: "Personalized to individual labor journey",
    recoveryTime: "Normal delivery: 48 hours; Cesarean: 72 hours",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "srv-endoscopy",
    slug: "endoscopy-colonoscopy",
    title: "Painless Daycare Endoscopy & Therapeutic Colonoscopy",
    departmentId: "dept-gastroenterology",
    departmentName: "Gastroenterology & Hepatobiliary Sciences",
    summary:
      "Gentle diagnostic and therapeutic endoscopic screenings with artificial intelligence polyp detection and zero discomfort.",
    description:
      "Our Endoscopy Suite utilizes Olympus high-definition video gastroscopes and colonoscopes with Narrow-Band Imaging (NBI). Under gentle conscious sedation administered by dedicated anesthesiologists, patients remain completely relaxed while specialists inspect the mucosal lining, remove pre-cancerous polyps, and take micro-biopsies.",
    indications: [
      "Chronic abdominal pain, heartburn, acid reflux, or swallowing difficulty",
      "Screening for colorectal cancer in adults aged 45+",
      "Unexplained weight loss, iron deficiency anemia, or changes in bowel habits",
    ],
    preparation: [
      "Overnight clear liquid fasting for upper endoscopy",
      "Gentle bowel cleansing preparation for colonoscopy",
      "Review of blood thinners and current medications",
    ],
    benefits: [
      "100% painless procedure under mild, restful sedation",
      "Polyps detected and resected in the same setting, preventing cancer",
      "Detailed photographic color report provided immediately post-procedure",
    ],
    duration: "20 to 35 minutes",
    recoveryTime: "Rest in recovery lounge for 45 minutes; resume normal eating same day",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&h=600&q=80",
  },
];
