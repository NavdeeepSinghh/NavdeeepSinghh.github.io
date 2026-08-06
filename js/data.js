// ============================================================
// NAVDEEP SINGH — Portfolio Data
// ============================================================

/* ── BY THE NUMBERS — animated counters ── */
const SEMESTER_STATS = [
  { num: 230, suffix: "+", label: "LeetCode Problems" },
  { num: 150, suffix: "+", label: "GitHub Contributions" },
  { num: 25, suffix: "+", label: "Coursera Courses" },
  { num: 1, suffix: "", label: "Conf. Research Paper" },
  { num: 1, suffix: "", label: "Industry Internship" },
  { num: 1, suffix: "", label: "AI Agent Shipped" },
  { num: 2, suffix: "", label: "Certificates Earned" },
  { num: 1, suffix: "", label: "Innovation Idea Pitched" },
];

/* ── EDUCATION ── */
const EDUCATION = [
  {
    school: "Thapar Institute of Engineering & Technology",
    place: "Patiala, Punjab",
    detail: "B.Tech, Computer Engineering — CGPA 7.27 / 10",
    date: "Aug 2023 – June 2027",
    extra:
      "Coursework: Data Structures & Algorithms · OOP · Operating Systems · DBMS · Computer Networks · Software Engineering",
  },
  {
    school: "St. Joseph's Boys' School",
    place: "Jalandhar, Punjab",
    detail: "Class XII — 74.2%  ·  Class X — 90%",
    date: "2021 – 2023",
    extra: null,
  },
];

/* ── EXPERIENCE ── */
const EXPERIENCE = [
  {
    role: "Computer Vision & Edge AI Intern",
    org: "Bharat Electronics Limited (BEL) — Central Research Laboratory",
    place: "Ghaziabad, Uttar Pradesh",
    date: "12 June – 25 July 2025",
    summary:
      "Shipped a containerized, real-time human pose detection service running on NVIDIA Jetson hardware — the full path from video capture to annotated output, on a device with no room for waste.",
    points: [
      "Built and deployed an end-to-end real-time pose detection pipeline on NVIDIA Jetson edge hardware",
      "Optimised inference for constrained embedded hardware — cut per-frame latency and held real-time throughput on-device",
      "Packaged the app with Docker, standardising config and making deployments reproducible across dev and edge targets",
      "Engineered modular, reusable Python + OpenCV components for frame processing and video I/O",
    ],
    tags: ["Python", "OpenCV", "YOLOv8", "Docker", "NVIDIA Jetson", "Edge AI", "Linux"],
  },
];

/* ── RESEARCH SPOTLIGHT ── */
const RESEARCH = {
  title:
    "Repetition-Aware Evaluation and Decoding Optimization for Abstractive Text Summarization",
  venue: "ICIPAIMAR 2026 — Manav Rachna International Institute of Research and Studies, Faridabad",
  date: "17–18 March 2026",
  blocks: [
    {
      key: "problem",
      label: "Problem",
      text: "Abstractive summarisation models generate repetitive, low-quality output — and standard metrics don't penalise it.",
    },
    {
      key: "gap",
      label: "Gap",
      text: "ROUGE does not penalise repetition; existing decoding strategies ignore it entirely.",
    },
    {
      key: "approach",
      label: "Approach",
      text: "A repetition-aware scoring metric paired with a decoding optimisation pipeline that enforces diverse, high-quality summaries.",
    },
    {
      key: "status",
      label: "Status",
      text: "Presented at ICIPAIMAR 2026 · Certificate of Appreciation received.",
    },
  ],
};

/* ── PROJECTS ── */
const PROJECTS = [
  {
    title: "Automatic RTI Filler — AI Agent",
    date: "Apr 2026",
    description:
      "An agent that turns plain voice or text into a legally formatted RTI application, picks the correct public authority, and drives the government portal end-to-end via browser automation — collapsing a process most citizens can't navigate into a single sentence.",
    highlights: [
      "Voice / text input → legal RTI format generated automatically",
      "Auto-selects the correct public authority for the query",
      "Selenium browser automation handles end-to-end submission",
      "Built and demoed live at the AI Readiness Bootcamp, TIET Patiala",
    ],
    tags: ["Python", "Selenium", "LLM APIs", "NLP", "Browser Automation", "Agentic AI"],
    github: "https://github.com/NavdeeepSinghh/AI-Agent-AUTOMATIC-RTI-Filler-",
    demo: null,
    metric: "Demoed live · Agentic AI",
    badge: "demo",
  },
  {
    title: "Temporal RAG — Recency-Aware Retrieval",
    date: "In progress",
    description:
      "Retrieval pipeline built on the premise that a stale document is a wrong document. Versioned documents plus a recency-aware reranker so the system answers with the current truth instead of the most semantically similar past.",
    highlights: [
      "Versioned document store — every fact carries its validity window",
      "Reranking stage treats recency as a first-class retrieval signal",
      "Targets the classic failure: a 2021 answer returned when 2024 is truth",
      "Pipeline tested, paper drafted, results in progress",
    ],
    tags: ["Python", "RAG", "LLM APIs", "Reranking", "NLP", "Research"],
    github: null,
    demo: null,
    metric: null,
    badge: null,
    status: "in-progress",
  },
  {
    title: "TOPSIS-Based NLP Model Selection Framework",
    date: "Feb 2026",
    description:
      "A research-grade multi-criteria decision framework that mathematically ranks 6 pre-trained NLP models (BERT, GPT-2, T5, RoBERTa, ALBERT, DistilBERT) across 5 distinct tasks — from summarization to conversational AI.",
    highlights: [
      "TOPSIS implemented from scratch: vector normalization, weighted matrices, ideal-solution computation, Euclidean scoring",
      "ALBERT ranked #1 for Summarization (0.5626), Classification (0.8144) & Sentence Similarity (0.7670)",
      "GPT-2 ranked #1 for Text Generation with TOPSIS score of 0.6289",
      "DistilBERT topped Conversational AI task with score 0.7086",
      "Decoupled ingestion / scoring / visualization modules; sensitivity analysis validates ranking stability",
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "NLP", "TOPSIS", "BERT", "GPT-2"],
    github: "https://github.com/NavdeeepSinghh/Topsis_for_pretrained_model",
    demo: null,
    metric: "Paper @ ICIPAIMAR 2026",
    badge: "conference",
  },
  {
    title: "Multimodal Disaster Detection System",
    date: "Jan 2026",
    description:
      "End-to-end multimodal pipeline detecting disasters from social media — fusing NLP and CV signals. Classifies fire, floods, land damage, human damage & infrastructure damage across a two-stage fusion strategy.",
    highlights: [
      "ResNet-50 achieved ~93% accuracy — best among AlexNet, MobileNetV2, EfficientNet, ViT",
      "BiLSTM + GloVe embeddings for disaster text classification at 81.8% accuracy",
      "Two-stage conditional pipeline: image model fires only on a positive text signal, cutting average inference cost",
      "Late-fusion combining weighted confidence scores from both modalities",
      "6-class disaster classification with 70/15/15 train-val-test split",
    ],
    tags: ["Python", "PyTorch", "BiLSTM", "ResNet50", "GloVe", "ViT", "EfficientNet", "NLP", "CV"],
    github: "https://github.com/NavdeeepSinghh/ML_Disaster-Prediction-Model",
    demo: null,
    metric: "93% Accuracy",
    badge: "accuracy",
  },
  {
    title: "Neerakshak: Microplastic Detection",
    date: "Sept 2025",
    description:
      "Low-cost portable IoT device that detects and quantifies microplastics in water samples using a Raspberry Pi paired with a USB microscope and a lightweight on-device deep learning model.",
    highlights: [
      "Integrated Raspberry Pi + USB microscope for real-time image acquisition",
      "Lightweight CNN model to detect & count microplastics with per-detection confidence scoring",
      "Full-stack dashboard for annotated dataset management, review workflows and contamination trends over time",
      "Owned the whole data flow — capture → storage → inference → reporting",
    ],
    tags: ["Python", "Raspberry Pi", "CNN", "ML", "Cloud", "IoT", "Computer Vision"],
    github: "https://github.com/NavdeeepSinghh",
    demo: null,
    metric: null,
    badge: null,
  },
  {
    title: "YOLO-Based Human Detection System",
    date: "July 2025",
    description:
      "Production-grade workplace safety system that detects persons and hi-vis safety vests in real time. Fully containerized with Docker and deployed on NVIDIA Jetson edge hardware for on-site inference.",
    highlights: [
      "Built during my Computer Vision & Edge AI internship at BEL — Central Research Laboratory",
      "YOLOv8n trained on custom dataset — mAP50: 0.88, mAP50-95: 0.67",
      "Detects 'person' and 'hi-vis' safety jacket classes",
      "OpenCV inference pipeline for both image & video inputs",
      "Containerized with Docker and deployed on NVIDIA Jetson for real-world edge inference",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Docker", "NVIDIA Jetson", "Edge AI"],
    github: "https://github.com/NavdeeepSinghh/YOLO-based-Human-Pose-Detection-on-Nvidia-Jetson",
    demo: null,
    metric: "mAP50: 0.88",
    badge: "accuracy",
  },
  {
    title: "Multi-Threaded Matrix Multiplication",
    date: "2025",
    description:
      "OS/parallel computing experiment multiplying 500 random 5000×5000 matrices against a constant matrix using Python ThreadPoolExecutor — benchmarked across T=1–10 threads on Apple M4 to study parallelism and GIL behavior.",
    highlights: [
      "Benchmarked on MacBook Air M4 — 10 cores (6 Efficiency + 4 Performance)",
      "NumPy releases the GIL during np.dot() — making threading genuinely effective",
      "U-shaped curve: optimal at T=4–5 threads; overhead rises beyond core count",
      "Apple Accelerate framework natively accelerated matrix operations",
      "Results saved to CSV and plotted with Matplotlib",
    ],
    tags: ["Python", "NumPy", "Threading", "Matplotlib", "OS", "Parallel Computing"],
    github: "https://github.com/NavdeeepSinghh/MultiThreading-",
    demo: null,
    metric: "10-Core Benchmark",
    badge: null,
  },
  {
    title: "Mashup Generator — CLI & Web Service",
    date: "2025",
    description:
      "Full-stack audio mashup generator that downloads YouTube videos of any singer, extracts & trims audio clips, merges them into a single mashup, and emails the result as a ZIP — available as both a CLI tool and Flask web app.",
    highlights: [
      "CLI: takes singer name, video count, duration & output filename as arguments",
      "Flask web app with HTML/CSS frontend for user-friendly input & email delivery",
      "yt-dlp for YouTube download; pydub + ffmpeg for audio processing & merging",
      "Output compressed into ZIP and sent via SMTP (Gmail App Password)",
      "Full input validation — videos > 10, duration > 20 seconds enforced",
    ],
    tags: ["Python", "Flask", "yt-dlp", "pydub", "ffmpeg", "SMTP", "HTML/CSS"],
    github: "https://github.com/NavdeeepSinghh/Mashup-maker",
    demo: null,
    metric: null,
    badge: null,
  },
];

/* ── HOW I THINK — before / now ── */
const CONCEPTS = [
  {
    n: "01",
    title: "Temporal Staleness in RAG",
    before: "RAG = retrieve the relevant doc, done.",
    now: "If the doc is outdated, 'relevant' is wrong. Recency is a first-class signal.",
    example: "CEO query: retrieval returns the 2021 answer when the 2024 version is truth.",
  },
  {
    n: "02",
    title: "Loss Behavior ≠ Performance",
    before: "Low training loss = good model.",
    now: "Loss is what the model memorised. The val curve is whether it learned. The gap is the overfit.",
    example: "ECG: train loss 0.02, val loss 0.4 → augmentation fixed it, not architecture.",
  },
  {
    n: "03",
    title: "Model Selection = Trade-off Space",
    before: "CNN for images, LSTM for sequences.",
    now: "It depends on data type, compute, latency and interpretability. No free lunch.",
    example: "ECG: CNN fast; Transformer 4× slower but more accurate → chose a hybrid.",
  },
];

/* ── QUICK SHIFTS — the short version of the same story ── */
const SHIFTS = [
  { before: "Accuracy alone = good model", now: "Accuracy + freshness + robustness" },
  { before: "Copy the pipeline from the paper and run it", now: "Every design choice is a trade-off — justify each one" },
  { before: "More data = better results", now: "Data quality and recency matter as much as quantity" },
  { before: "Research = reading papers", now: "Research = identifying the gap, then contributing to it" },
  { before: "RAG = just retrieve + generate", now: "RAG without temporal awareness serves stale answers" },
];

/* ── FIELD NOTES — CNN architecture cheat sheet ── */
const FIELD_NOTES = {
  caption:
    "No model wins universally — choose on dataset size, compute budget, latency and interpretability needs.",
  columns: ["Model", "Best For", "Depth", "Key Characteristic"],
  rows: [
    ["AlexNet", "Simple image classification", "8 layers", "Pioneer CNN; fast, low-accuracy baseline"],
    ["VGG16 / VGG19", "Feature extraction", "16–19 layers", "Uniform 3×3 convolutions; high memory cost"],
    ["ResNet-34", "Medium datasets, quick training", "34 layers", "Skip connections; solves vanishing gradient"],
    ["ResNet-50", "Large datasets, high accuracy", "50 layers", "Bottleneck blocks; strong ImageNet baseline"],
    ["InceptionNet", "Multi-scale feature capture", "22 layers", "Inception modules; efficient multi-scale processing"],
    ["EfficientNet", "Constrained compute / mobile", "B0–B7", "Compound scaling of depth, width & resolution"],
  ],
};

/* ── THE JOURNEY — one semester, told as reps ── */
const JOURNEY = [
  {
    when: "Day 1",
    what: "Showed up scared",
    detail: "Set up environments, cloned repos, ran nothing.",
  },
  {
    when: "Month 1",
    what: "Learned the machines",
    detail: "Understood the MLP and CNN forward pass end to end, on paper.",
  },
  {
    when: "Month 2",
    what: "Felt the burn — overfitting",
    detail: "Models trained → val loss spiked → learned regularization the hard way.",
  },
  {
    when: "Month 3",
    what: "Structured plan",
    detail: "Temporal RAG design: versioned documents + a recency-aware reranker.",
  },
  {
    when: "Now",
    what: "Tracking every rep",
    detail: "Paper drafted, pipeline tested, results in progress.",
  },
];

const JOURNEY_CAPTION =
  "Every rep = one iteration. Every setback = overfitting. Rest = regularization. Diet = data.";

/* ── TAKEAWAYS ── */
const TAKEAWAYS = [
  {
    kind: "technical",
    label: "Technical",
    icon: "⚙",
    text: "Temporal context matters as much as semantic context. Systems fail at the edges — design for the edges.",
  },
  {
    kind: "personal",
    label: "Personal",
    icon: "🔥",
    text: "Consistency compounds. 10k steps a day, one project at a time — execution beats motivation.",
  },
  {
    kind: "mistake",
    label: "Mistake",
    icon: "✕",
    text: "Started reading papers too late. Tried to understand results before I understood the problem deeply.",
  },
];

/* ── SKILLS ── */
const SKILLS = [
  {
    group: "Languages",
    items: ["C++", "Python", "SQL (Postgres)", "C", "JavaScript", "TypeScript", "Kotlin", "Java", "HTML/CSS", "R"],
  },
  {
    group: "DSA & CS Fundamentals",
    items: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Heaps", "Hashing", "Recursion", "Greedy", "Dynamic Programming", "Sorting & Searching", "OOP", "Operating Systems", "DBMS", "Computer Networks", "System Design (Fundamentals)"],
  },
  {
    group: "ML / AI",
    items: ["PyTorch", "TensorFlow", "YOLOv8", "BiLSTM", "ResNet", "GloVe", "Transformers", "RAG", "LLM APIs", "OpenCV", "scikit-learn", "HuggingFace"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Node.js", "Flask", "Selenium", "Pandas", "NumPy", "Matplotlib", "pydub", "yt-dlp"],
  },
  {
    group: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Docker", "Linux", "NVIDIA Jetson", "Raspberry Pi", "n8n", "Android Studio", "Google Colab", "VS Code", "PyCharm"],
  },
  {
    group: "Areas of Focus",
    items: ["AI / Machine Learning", "NLP & Agents", "Computer Vision", "Edge AI & Model Deployment", "Full-Stack Dev", "App Development", "Data Science", "Cyber Security"],
  },
];

/* ── ACHIEVEMENTS ── */
const ACHIEVEMENTS = [
  {
    title: "Published @ ICIPAIMAR 2026",
    desc: "Presented 'Repetition-Aware Evaluation and Decoding Optimization for Abstractive Text Summarization' at the International Conference on Integrating Predictive AI Models in Applied Research, Manav Rachna University, Faridabad — March 17–18, 2026.",
    icon: "🏆",
  },
  {
    title: "230+ LeetCode Problems · 100 Days Badge",
    desc: "Solved 230+ algorithmic problems in C++ with a concentration in dynamic programming, backtracking, hash tables and binary search. Earned the 100 Days Badge 2026 for sustained daily practice.",
    icon: "🧩",
  },
  {
    title: "Technical Head — Institution of Engineers India",
    desc: "Leading tech events, workshops and speaker sessions at Thapar University's IEI student chapter — organizing the Orion Tech Annual Event and bridging academia with applied engineering.",
    icon: "⚡",
  },
  {
    title: "AI Readiness Bootcamp — TIET Patiala",
    desc: "Certificate of Participation, April 18–19, 2026. Agentic AI, product management and design thinking — built and demoed a live AI agent during the workshop.",
    icon: "🎓",
  },
  {
    title: "ClearCareIndia — Innovation Pitch",
    desc: "Pitched a healthcare pricing transparency platform at VentureLab, Thapar University — making treatment costs comparable and legible before a patient ever walks in.",
    icon: "💡",
  },
  {
    title: "Industry Internship @ BEL — CRL",
    desc: "Selected for the Central Research Laboratory of Bharat Electronics Limited, Ghaziabad — shipped a containerized real-time computer vision service on NVIDIA Jetson edge hardware.",
    icon: "🛰",
  },
];

/* ── NOW & NEXT ── */
const NOW_NEXT = [
  {
    label: "Technical Direction",
    accent: "accent",
    items: [
      "Deep dive: AI/ML → NLP + Agents",
      "Cyber Security as a second focus",
      "Build more real-world AI tools",
      "SDE / Data role → grow into AI & Data Science",
    ],
  },
  {
    label: "Next Semester",
    accent: "accent3",
    items: [
      "Publish the Temporal RAG paper",
      "Ship RTI Agent v2 with a full UI",
      "Five strong projects on GitHub",
      "Daily spoken-English practice",
    ],
  },
];

const CLOSING_QUOTE =
  "Sharper projects. Honest feedback. Real exposure to systems thinking.";
