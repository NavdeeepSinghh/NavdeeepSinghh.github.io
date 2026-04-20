// ============================================================
// NAVDEEP SINGH — Portfolio Data
// ============================================================

const PROJECTS = [
  {
    title: "TOPSIS-Based NLP Model Selection Framework",
    date: "Feb 2026",
    description:
      "A multi-criteria decision framework that intelligently ranks pre-trained NLP models across five distinct tasks using mathematical optimization.",
    highlights: [
      "Constructed weighted decision matrices with performance, efficiency & resource metrics",
      "Implemented normalization + ideal solution computation with Euclidean distance ranking",
      "Performed sensitivity & comparative analysis to study ranking stability and model trade-offs",
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "NLP", "TOPSIS"],
    github: "https://github.com/NavdeeepSinghh",
    metric: null,
  },
  {
    title: "Multimodal Disaster Detection System",
    date: "Jan 2026",
    description:
      "End-to-end pipeline that detects disaster events from social media by fusing text and image signals — BiLSTM handles text, ResNet50 handles vision.",
    highlights: [
      "BiLSTM + GloVe embeddings for disaster text classification — 81.8% accuracy",
      "ResNet50 vision model achieving ~93% accuracy on disaster imagery",
      "Two-stage pipeline: image analysis triggered only when text signals a disaster",
    ],
    tags: ["Python", "PyTorch", "BiLSTM", "ResNet50", "GloVe", "Transformers", "CV", "NLP"],
    github: "https://github.com/NavdeeepSinghh",
    metric: "93% Accuracy",
  },
  {
    title: "Neerakshak: Microplastic Detection",
    date: "Sept 2025",
    description:
      "Low-cost portable device that detects and quantifies microplastics in water samples using a Raspberry Pi, USB microscope, and a lightweight deep learning model.",
    highlights: [
      "Integrated Raspberry Pi + USB microscope for real-time image acquisition",
      "Lightweight DL model to detect & count microplastics with confidence scoring",
      "Dashboard to manage annotated images and visualize contamination trends over time",
    ],
    tags: ["Python", "Raspberry Pi", "CNN", "ML", "Cloud", "IoT"],
    github: "https://github.com/NavdeeepSinghh",
    metric: null,
  },
  {
    title: "YOLO-Based Human Detection System",
    date: "July 2025",
    description:
      "Production-grade safety gear detection system deployed on NVIDIA Jetson edge hardware — detects persons and hi-vis safety vests in real time.",
    highlights: [
      "YOLOv8 trained on custom dataset, achieving mAP50 of 0.88",
      "OpenCV image/video inference pipeline for real-time detection & visualization",
      "Containerized with Docker for reproducible deployment across environments",
      "Deployed on NVIDIA Jetson board for edge-device inference",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Docker", "NVIDIA Jetson", "Edge AI"],
    github: "https://github.com/NavdeeepSinghh",
    metric: "mAP50: 0.88",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "SQL (Postgres)", "JavaScript", "HTML/CSS", "R"],
  },
  {
    group: "ML / AI",
    items: ["PyTorch", "YOLOv8", "BiLSTM", "ResNet", "GloVe", "Transformers", "OpenCV", "scikit-learn"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Node.js", "Flask", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    group: "Tools & Infrastructure",
    items: ["Git", "Docker", "Google Colab", "VS Code", "PyCharm", "Raspberry Pi", "NVIDIA Jetson"],
  },
];
