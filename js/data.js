// ============================================================
// NAVDEEP SINGH — Portfolio Data (Updated)
// ============================================================

const PROJECTS = [
  {
    title: "TOPSIS-Based NLP Model Selection Framework",
    date: "Feb 2026",
    description:
      "A research-grade multi-criteria decision framework that mathematically ranks 6 pre-trained NLP models (BERT, GPT-2, T5, RoBERTa, ALBERT, DistilBERT) across 5 distinct tasks — from summarization to conversational AI.",
    highlights: [
      "ALBERT ranked #1 for Summarization (0.5626), Classification (0.8144) & Sentence Similarity (0.7670)",
      "GPT-2 ranked #1 for Text Generation with a TOPSIS score of 0.6289",
      "DistilBERT topped Conversational AI task with score 0.7086",
      "Weighted decision matrices incorporating ROUGE, BLEU, F1, Perplexity & resource metrics",
      "Sensitivity analysis to study ranking stability across weight perturbations",
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "NLP", "TOPSIS", "BERT", "GPT-2"],
    github: "https://github.com/NavdeeepSinghh/Topsis_for_pretrained_model",
    metric: "Paper @ ICIPAIMAR 2026",
    badge: "conference",
  },
  {
    title: "Multimodal Disaster Detection System",
    date: "Jan 2026",
    description:
      "End-to-end multimodal pipeline detecting disasters from social media — fusing NLP and CV signals. Classifies fire, floods, land damage, human damage & infrastructure damage with a two-stage fusion strategy.",
    highlights: [
      "ResNet-50 achieved ~93% accuracy — best among AlexNet, MobileNetV2, EfficientNet, ViT",
      "BiLSTM + GloVe embeddings for disaster text classification at 81.8% accuracy",
      "Two-stage pipeline: image analysis triggered only when text signals a disaster",
      "Late-fusion combining weighted confidence scores from both modalities",
      "6-class disaster classification across 70/15/15 train-val-test split",
    ],
    tags: ["Python", "PyTorch", "BiLSTM", "ResNet50", "GloVe", "ViT", "EfficientNet", "NLP", "CV"],
    github: "https://github.com/NavdeeepSinghh/ML_Disaster-Prediction-Model",
    metric: "93% Accuracy",
    badge: "accuracy",
  },
  {
    title: "YOLO-Based Human Detection System",
    date: "July 2025",
    description:
      "Production-grade workplace safety system that detects persons and hi-vis safety vests in real time. Fully containerized with Docker and deployed on NVIDIA Jetson edge hardware for on-site inference.",
    highlights: [
      "YOLOv8n trained on custom dataset — mAP50: 0.88, mAP50-95: 0.67",
      "Detects 'person' and 'hi-vis' safety jacket classes",
      "OpenCV inference pipeline for both image & video inputs",
      "Containerized with Docker for reproducible cross-environment deployment",
      "Deployed on NVIDIA Jetson board for real-world edge inference",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Docker", "NVIDIA Jetson", "Edge AI"],
    github: "https://github.com/NavdeeepSinghh/YOLO-based-Human-Pose-Detection-on-Nvidia-Jetson",
    metric: "mAP50: 0.88",
    badge: "accuracy",
  },
  {
    title: "Neerakshak: Microplastic Detection",
    date: "Sept 2025",
    description:
      "Low-cost portable IoT device that detects and quantifies microplastics in water samples using a Raspberry Pi paired with a USB microscope and a lightweight on-device deep learning model.",
    highlights: [
      "Integrated Raspberry Pi + USB microscope for real-time image acquisition",
      "Lightweight CNN model to detect & count microplastics with confidence scoring",
      "Cloud-connected dashboard to visualize contamination trends over time",
    ],
    tags: ["Python", "Raspberry Pi", "CNN", "ML", "Cloud", "IoT", "Computer Vision"],
    github: "https://github.com/NavdeeepSinghh",
    metric: null,
    badge: null,
  },
  {
    title: "Multi-Threaded Matrix Multiplication",
    date: "2025",
    description:
      "OS/parallel computing experiment multiplying 500 random 5000×5000 matrices against a constant matrix using Python ThreadPoolExecutor — benchmarked across T=1–10 threads on Apple M4 to study parallelism and GIL behavior.",
    highlights: [
      "Benchmarked on MacBook Air M4 (10 cores: 6 Efficiency + 4 Performance)",
      "NumPy releases the GIL during np.dot() — making threading genuinely effective",
      "U-shaped curve: optimal at T=4–5 threads; overhead rises beyond core count",
      "Apple Accelerate framework natively accelerated matrix operations",
      "Results saved to CSV and plotted with Matplotlib",
    ],
    tags: ["Python", "NumPy", "Threading", "Matplotlib", "OS", "Parallel Computing"],
    github: "https://github.com/NavdeeepSinghh/MultiThreading-",
    metric: "10-Core Benchmark",
    badge: null,
  },
  {
    title: "Mashup Generator — CLI & Web Service",
    date: "2025",
    description:
      "Full-stack audio mashup generator that downloads YouTube videos of any singer, extracts & trims audio clips, merges them into a single mashup, and emails the result as a ZIP — available as both a CLI tool and Flask web app.",
    highlights: [
      "CLI: python script takes singer name, video count, duration & output filename",
      "Flask web app with HTML/CSS frontend for user-friendly input & email delivery",
      "yt-dlp for YouTube download; pydub + ffmpeg for audio processing & merging",
      "Output compressed into ZIP and sent via SMTP (Gmail App Password)",
      "Full input validation and graceful error handling",
    ],
    tags: ["Python", "Flask", "yt-dlp", "pydub", "ffmpeg", "SMTP", "HTML/CSS"],
    github: "https://github.com/NavdeeepSinghh/Mashup-maker",
    metric: null,
    badge: null,
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "SQL (Postgres)", "JavaScript", "TypeScript", "HTML/CSS", "Kotlin", "R"],
  },
  {
    group: "ML / AI",
    items: ["PyTorch", "TensorFlow", "YOLOv8", "BiLSTM", "ResNet", "GloVe", "Transformers", "OpenCV", "scikit-learn", "HuggingFace"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Node.js", "Flask", "Pandas", "NumPy", "Matplotlib", "pydub", "yt-dlp"],
  },
  {
    group: "Tools & Infrastructure",
    items: ["Git", "Docker", "Google Colab", "VS Code", "PyCharm", "Raspberry Pi", "NVIDIA Jetson"],
  },
  {
    group: "Areas of Focus",
    items: ["AI / Machine Learning", "Computer Vision", "NLP", "Edge AI", "Full-Stack Dev", "App Development", "Data Science", "Cyber Security"],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Published @ ICIPAIMAR 2026",
    desc: "Presented 'Repetition-Aware Evaluation and Decoding Optimization for Abstractive Text Summarization' — International Conference on Integrating Predictive AI Models in Applied Research, Manav Rachna University, March 17–18 2026.",
    icon: "🏆",
  },
  {
    title: "Technical Head — Institution of Engineers India",
    desc: "Leading tech events, workshops and speaker sessions at Thapar University's IEI student chapter — organizing Orion Tech Annual Event and bridging academia with applied engineering.",
    icon: "⚡",
  },
];