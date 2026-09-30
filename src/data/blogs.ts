// src/data/blogs.ts
import { BlogPost } from "@/types";

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-heart-attack-signs",
    slug: "silent-heart-attack-signs-in-women-and-men",
    title: "Silent Heart Attacks: 5 Subtle Warning Signs You Should Never Dismiss",
    excerpt:
      "Not every heart attack begins with dramatic chest crushing pain. Learn the quiet signals—especially common in women and diabetics—and why immediate triage within the golden hour saves heart muscle.",
    content: `
When people picture a heart attack, Hollywood has trained us to imagine a man clutching his left chest and collapsing instantly. In clinical reality, especially among women, elderly adults, and individuals with diabetes, myocardial infarctions frequently present with subtler, atypical symptoms.

### What is a "Silent" Myocardial Infarction?
A silent heart attack (or SMI) occurs when blood flow to a section of the heart muscle is severely compromised, yet the patient feels little or no severe angina. Instead of intense substernal pain, patients often misinterpret symptoms as indigestion, severe acid reflux, muscle fatigue, or stress.

### 5 Warning Signs Never to Ignore:
1. **Unexplained Shortness of Breath**: Struggling for air while performing routine tasks like walking upstairs or making a bed.
2. **Discomfort in the Jaw, Neck, or Upper Back**: Cardiac pain often refers along neural pathways into the cervical and thoracic dermatomes.
3. **Cold Sweats & Sudden Dizziness**: A sudden clammy perspiration accompanied by lightheadedness indicates falling cardiac output.
4. **Extreme, Unprovoked Fatigue**: Feeling utterly exhausted despite adequate sleep, sometimes persisting for days prior to the event.
5. **Epigastric Burning Unrelieved by Antacids**: Often confused with heartburn, inferior wall myocardial infarctions frequently trigger gastrointestinal symptoms.

### The Golden Hour Rule
The first 60 minutes following symptom onset are known in cardiology as the 'Golden Hour'. Receiving an emergency coronary angiogram and angioplasty with door-to-balloon time under 60 minutes preserves up to 90% of at-risk heart muscle.

If you or a loved one experience any of these signs, do not drive yourself. Call **1800-102-CARE** immediately for an ACLS ambulance equipped with telemetry.
    `,
    authorId: "doc-rajesh-varma",
    authorName: "Dr. Rajesh Varma",
    authorTitle: "Chief of Interventional Cardiology",
    authorImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Cardiology",
    publishedAt: "2026-08-15",
    readTimeMinutes: 5,
    category: "Heart Health",
    tags: ["Cardiology", "Heart Attack", "Preventive Care", "Emergency"],
    coverImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "cardiology",
  },
  {
    id: "blog-robotic-knee-myths",
    slug: "robotic-knee-replacement-myths-vs-facts",
    title: "Robotic Knee Surgery: Debunking 6 Common Myths and What Really Happens",
    excerpt:
      "Does a robot operate on you autonomously? Will you set off airport detectors? Here is what orthopedic science says about robotic-assisted arthroplasty and rapid same-day recovery.",
    content: `
Over the past decade, robotic technology has transformed orthopedic surgery from an art of manual instrumentation into a sub-millimeter science of personalized biomechanics. However, many patients remain understandably curious or apprehensive about what 'robotic surgery' actually entails.

### Myth 1: The robot performs the surgery by itself
**Fact**: The robot never operates autonomously. It is an intelligent extension of the surgeon's hands. The surgeon holds and guides the robotic arm at all times. The system enforces 'haptic boundaries'—virtual guardrails that prevent the surgical saw or burr from moving outside the planned boundary, protecting delicate collateral ligaments.

### Myth 2: Recovery takes months of bed rest
**Fact**: Because robotic precision eliminates excessive soft tissue dissection and avoids hammering intramedullary rods into the femur, patients experience significantly less tissue trauma. At HopeCare, our fast-track recovery protocol enables patients to stand and take their first steps within 4 hours of surgery.

### Myth 3: Robotic surgery is only for young athletes
**Fact**: In reality, patients in their 70s, 80s, and even 90s benefit the most from robotic joint replacement, as the minimized blood loss and reduced anesthesia times make the procedure safer for seniors with comorbidities.

### Key Takeaway
If chronic knee stiffness or osteoarthritis is forcing you to give up walking, traveling, or playing with your grandchildren, speak to an orthopedic specialist about whether Mako robotic joint replacement is right for you.
    `,
    authorId: "doc-vikramaditya-rathore",
    authorName: "Dr. Vikramaditya Rathore",
    authorTitle: "Director of Robotic Joint Replacement & Orthopedics",
    authorImage:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Orthopedics",
    publishedAt: "2026-07-28",
    readTimeMinutes: 6,
    category: "Orthopedics & Mobility",
    tags: ["Orthopedics", "Robotic Surgery", "Knee Replacement", "Active Living"],
    coverImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "orthopedics",
  },
  {
    id: "blog-stroke-fast-protocol",
    slug: "recognizing-acute-stroke-fast-rule",
    title: "Time Is Brain: How to Recognize a Stroke in Seconds Using B.E. F.A.S.T.",
    excerpt:
      "When a cerebral artery is occluded, 1.9 million neurons die every minute. Understanding the B.E. F.A.S.T. acronym and calling for immediate mechanical thrombectomy can prevent permanent paralysis.",
    content: `
A stroke is a brain attack. Just as a coronary artery blockage causes a heart attack, an occlusion in a cerebral vessel starves brain tissue of glucose and oxygen. Today, thanks to neuro-interventional clot retrieval, a stroke is no longer an inevitable sentence of lifelong disability—provided the patient reaches our emergency doors promptly.

### The B.E. F.A.S.T. Assessment:
- **B (Balance)**: Sudden loss of balance, staggering gait, or severe unprovoked vertigo.
- **E (Eyes)**: Sudden blurriness, double vision, or total loss of sight in one or both eyes.
- **F (Face)**: Facial droop. Ask the person to smile. Does one side of their mouth sag?
- **A (Arms)**: Arm weakness. Ask the person to raise both arms forward. Does one drift downward?
- **S (Speech)**: Slurred speech or difficulty repeating a simple sentence ('The sky is blue').
- **T (Time)**: Time to call emergency services. Note the exact time when symptoms were first witnessed.

### Why Mechanical Thrombectomy is Changing Everything
Until recently, the only medical treatment was intravenous clot-busting medication (tPA), which had to be administered within 4.5 hours. Today, our neuro-endovascular team can thread micro-catheters into the intracranial circulation to physically extract large clots up to 24 hours after symptom onset, restoring blood flow and reversing paralysis in real time.
    `,
    authorId: "doc-ananya-sen",
    authorName: "Dr. Ananya Sen",
    authorTitle: "Senior Consultant Neurosurgeon & Spine Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1594824813583-11119561b6ec?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Neurology",
    publishedAt: "2026-06-19",
    readTimeMinutes: 5,
    category: "Neurology & Brain",
    tags: ["Stroke", "Neurology", "Emergency Triage", "Brain Health"],
    coverImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "neurology",
  },
  {
    id: "blog-immunotherapy-hope",
    slug: "demystifying-cancer-immunotherapy",
    title: "Demystifying Cancer Immunotherapy: How Your Own Immune System Fights Back",
    excerpt:
      "Instead of toxic blanket chemotherapy, modern oncology trains your body's T-cells to identify and neutralize malignant cells. Here is how personalized genomic oncology is reshaping survival rates.",
    content: `
For over fifty years, the pillars of cancer treatment were surgery, radiation, and cytotoxic chemotherapy. While chemotherapy has saved millions of lives, it carries well-known systemic side effects because it attacks all rapidly dividing cells in the body.

### A Paradigm Shift: Turning the Body's Natural Defense On
Cancer cells are masters of disguise. They express specific proteins, such as PD-L1, that act like an 'invisibility cloak' or an off-switch against attacking cytotoxic T-lymphocytes.

Checkpoint inhibitors (immunotherapy drugs) block this deceptive handshake. By stripping away cancer's disguise, the patient's own immune system recognizes the tumor cells as foreign and proceeds to dismantle them with biological precision.

### Key Advantages of Targeted Immunotherapy:
1. **Durable Remissions**: Unlike traditional therapies where tumors frequently adapt and relapse, the immune system has memory. Once trained, T-cells continue hunting residual cancer cells.
2. **Significantly Better Quality of Life**: No extensive hair loss, severe mucosal ulceration, or profound bone marrow suppression.
3. **Outpatient Daycare Administration**: Most immunotherapy infusions take between 30 and 90 minutes every 2 to 3 weeks in our comfortable Daycare Lounge.
    `,
    authorId: "doc-arvind-swaminathan",
    authorName: "Dr. Arvind Swaminathan",
    authorTitle: "Lead Medical & Hemato-Oncologist",
    authorImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Oncology",
    publishedAt: "2026-05-12",
    readTimeMinutes: 7,
    category: "Cancer Care",
    tags: ["Oncology", "Immunotherapy", "Genomics", "Precision Medicine"],
    coverImage:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "oncology",
  },
  {
    id: "blog-gentle-birthing-guide",
    slug: "gentle-birthing-and-pain-free-labor-options",
    title: "Gentle Birthing: Why Pain-Managed Delivery is Safe for Mother and Baby",
    excerpt:
      "Modern obstetrics combines respectful maternal choices with round-the-clock epidural analgesia, water birthing, and private LDRP suites for a joyful arrival.",
    content: `
Pregnancy and childbirth represent one of life's most transformative journeys. Yet, fear of labor pain often creates significant anxiety for first-time mothers. At HopeCare's Center for Women's Health, we believe no woman should have to suffer through unbearable pain to experience a natural, beautiful delivery.

### Understanding Modern Labor Epidurals
A walking epidural is an ultra-fine catheter placed in the lower back that numbs the sensory nerves transmitting labor pain while preserving motor function in the legs.
- **Myth**: An epidural harms the baby.
- **Truth**: Epidural medications act locally around the spinal nerves; negligible amounts cross into the baby's circulation.
- **Myth**: You cannot push if you receive an epidural.
- **Truth**: Modern low-dose infusions preserve pelvic pressure sensations, allowing mothers to push effectively during crowning while remaining calm and pain-free.

### The Comfort of LDRP Suites
In traditional hospitals, mothers are wheeled from an admission room to a labor ward, then into an operating or delivery theater, and finally to a postnatal ward. In our private LDRP suites, you remain in one soothing, hotel-like environment from active labor all the way to discharge with your newborn.
    `,
    authorId: "doc-sunita-kulkarni",
    authorName: "Dr. Sunita Kulkarni",
    authorTitle: "Senior Consultant Obstetrician & Gynecologist",
    authorImage:
      "https://images.unsplash.com/photo-1594824813583-11119561b6ec?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Obstetrics & Gynecology",
    publishedAt: "2026-04-03",
    readTimeMinutes: 5,
    category: "Women & Child",
    tags: ["Maternity", "Painless Delivery", "Women's Health", "Newborn Care"],
    coverImage:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "obstetrics-gynecology",
  },
  {
    id: "blog-preventive-gut-health",
    slug: "gut-microbiome-and-fatty-liver-reversal",
    title: "Non-Alcoholic Fatty Liver: The Silent Epidemic and How to Reverse It",
    excerpt:
      "Affecting 1 in 3 adults, fatty liver disease often exhibits zero symptoms until advanced fibrosis occurs. Here is how modern elastography (FibroScan) and dietary changes reverse liver fat.",
    content: `
Non-Alcoholic Fatty Liver Disease (NAFLD), now officially termed MASLD (Metabolic Dysfunction-Associated Steatohepatitis), is rapidly becoming the leading cause of chronic liver disease worldwide. The most alarming aspect of fatty liver is that the liver has no pain sensory nerves; patients can develop substantial steatohepatitis and early fibrosis without experiencing any abdominal pain or jaundice.

### What Causes Fatty Liver?
When caloric intake—particularly from refined carbohydrates, high-fructose corn syrup, and ultra-processed foods—exceeds the body's storage capacity, excess triglycerides accumulate within hepatocytes (liver cells). This triggers persistent low-grade inflammation.

### The Role of Painless FibroScan Screening
Historically, assessing liver fibrosis required an invasive percutaneous liver biopsy with a needle. Today, our Gastroenterology Institute utilizes the FibroScan 630 Expert. In less than 10 minutes, sound waves pass non-invasively through the right ribcage, accurately measuring liver stiffness (fibrosis) and controlled attenuation parameter (fat accumulation).

### Can Fatty Liver Be Reversed?
The resounding answer is **Yes**. The liver possesses an extraordinary regenerative capacity. Reducing body weight by 7% to 10% through a Mediterranean-style whole-food diet, daily moderate walking, and managing insulin resistance can completely resolve steatohepatitis and reverse early fibrosis.
    `,
    authorId: "doc-manojit-roy",
    authorName: "Dr. Manojit Roy",
    authorTitle: "Chief of Gastroenterology & Hepatology",
    authorImage:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&h=400&q=80",
    authorDepartment: "Gastroenterology",
    publishedAt: "2026-03-22",
    readTimeMinutes: 6,
    category: "Digestive Wellness",
    tags: ["Gastroenterology", "Fatty Liver", "Metabolic Health", "Nutrition"],
    coverImage:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&h=630&q=80",
    departmentSlug: "gastroenterology",
  },
];

