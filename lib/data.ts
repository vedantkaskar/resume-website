export const roles = [
  "Cloud Engineer",
  "AI/ML Developer",
  "Full Stack Developer",
  "DevOps Enthusiast"
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vedantkaskar",
    key: "github"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vedant-kaskar-b0bab23aa",
    key: "linkedin"
  },
  {
    label: "Email",
    href: "mailto:vedantk3007@gmail.com",
    key: "mail"
  }
] as const;

export const aboutStats = [
  { label: "Projects Built", value: 24, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "+" },
  { label: "Hackathons", value: 12, suffix: "+" },
  { label: "Cloud Deployments", value: 35, suffix: "+" }
] as const;

export const techBadges = [
  "AWS GenAI",
  "Kubernetes",
  "Terraform",
  "MLOps",
  "React",
  "Node.js",
  "Flask",
  "Prompt Engineering"
] as const;

export const aboutTimeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE at MIT WPU",
    detail: "Focused on software systems, cloud, and AI-driven product engineering."
  },
  {
    year: "2024",
    title: "Full Stack & DevOps Growth",
    detail: "Built deployable platforms with CI/CD, containers, and scalable architectures."
  },
  {
    year: "2025",
    title: "AWS Generative AI Certification",
    detail: "Validated cloud-native AI implementation and enterprise-ready use-cases."
  },
  {
    year: "2026",
    title: "Engineering for Scale",
    detail: "Shaping AI + Cloud products with startup velocity and production rigor."
  }
] as const;

export const skillGroups = [
  {
    category: "Languages",
    progress: 92,
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Cloud & DevOps",
    progress: 90,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
  },
  {
    category: "Web Development",
    progress: 88,
    items: ["React", "Next.js", "Node.js", "Flask", "REST APIs"]
  },
  {
    category: "AI/ML",
    progress: 86,
    items: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "LLM Apps"]
  },
  {
    category: "Databases",
    progress: 84,
    items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    category: "Tools",
    progress: 85,
    items: ["Git", "GitHub Actions", "Tableau", "Postman", "Figma"]
  }
] as const;

export const projects = [
  {
    title: "PK Enterprises Distributorship Website",
    category: "Full Stack",
    description:
      "A lead-conversion focused enterprise distributorship site with admin insights and dynamic catalog management.",
    stack: ["Next.js", "Tailwind", "PostgreSQL", "Vercel"],
    features: ["Dynamic inventory blocks", "Inquiry automation", "Analytics dashboard"],
    architecture: "SSR-driven storefront + API routes with role-based admin modules.",
    deployment: "Deployed via Vercel with edge caching and image optimization.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Skill Share Platform on AWS",
    category: "Cloud",
    description:
      "A cloud-native learning collaboration platform for peer mentorship and guided skill tracks.",
    stack: ["React", "Node.js", "AWS EC2", "RDS", "S3"],
    features: ["Session booking", "Video resource pipeline", "Cloud media delivery"],
    architecture: "Service-oriented app with secured API gateway and autoscaling backend workers.",
    deployment: "Multi-AZ deployment with CloudWatch monitoring and CI/CD through GitHub Actions."
  ,
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Venture Capitalist Analysis ML Project",
    category: "AI/ML",
    description:
      "Predictive models to evaluate startup viability using funding, traction, and market signals.",
    stack: ["Python", "TensorFlow", "Pandas", "Tableau"],
    features: ["Risk scoring", "Trend forecasting", "Interactive data stories"],
    architecture: "ML pipelines with feature engineering, model tuning, and explainability layers.",
    deployment: "Containerized inference API with dashboard hosted on cloud runtime.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Karagari Local Artisans Platform",
    category: "Full Stack",
    description:
      "Digital marketplace enabling local artisans to reach urban buyers with storytelling commerce.",
    stack: ["Next.js", "MongoDB", "Node.js", "Stripe"],
    features: ["Artisan profiles", "Order lifecycle tracking", "Revenue analytics"],
    architecture: "Modular monolith with secure payments and event-based notifications.",
    deployment: "Cloud deployment with CDN acceleration and secure checkout workflows.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Government SLA Monitoring System",
    category: "DevOps",
    description:
      "Operational intelligence platform to track SLA compliance across public service workflows.",
    stack: ["React", "Flask", "PostgreSQL", "Docker"],
    features: ["Real-time SLA status", "Alert escalation", "Performance scorecards"],
    architecture: "Microservice-aligned services with audit logging and reporting APIs.",
    deployment: "Dockerized deployment with reverse proxy, health checks, and automated rollbacks.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Nyay Bot AI Legal Assistant",
    category: "AI/ML",
    description:
      "AI legal query assistant with context-aware responses for citizen-facing public guidance.",
    stack: ["Python", "RAG", "Vector DB", "FastAPI"],
    features: ["Semantic retrieval", "Legal intent classification", "Conversation memory"],
    architecture: "RAG architecture with moderation, grounding checks, and retrieval observability.",
    deployment: "Cloud-hosted API with scalable vector search and secured model endpoints.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Plant Nursery Management System",
    category: "Data",
    description:
      "Inventory and operations suite for nursery businesses with demand forecasting and sales analytics.",
    stack: ["React", "Node.js", "MongoDB", "Firebase"],
    features: ["Stock intelligence", "Supplier workflows", "Revenue trends"],
    architecture: "Event-driven modules integrating operations, inventory, and customer insights.",
    deployment: "Serverless cloud backend and real-time sync for field operations.",
    github: "https://github.com/",
    live: "https://example.com"
  },
  {
    title: "Blockchain Data Analysis Dashboard",
    category: "Data",
    description:
      "Analytics dashboard for blockchain transactions, token movement, and anomaly detection.",
    stack: ["Python", "Web3", "Next.js", "PostgreSQL"],
    features: ["Wallet flow tracing", "Pattern detection", "Custom market metrics"],
    architecture: "ETL pipelines for chain ingestion + visualization layer with cached query engine.",
    deployment: "Hosted on cloud runtime with scheduled pipelines and observability stack.",
    github: "https://github.com/",
    live: "https://example.com"
  }
] as const;

export const experience = [
  {
    title: "Startup Mahakumbh 2025",
    subtitle: "Innovation Sprint",
    detail:
      "Built rapid prototypes focused on cloud-native AI solutions and startup-ready architecture decisions.",
    date: "2025"
  },
  {
    title: "L&T NAIP Chennai 2026",
    subtitle: "Engineering Exposure",
    detail:
      "Collaborated on practical enterprise workflows, deployment standards, and scalable system planning.",
    date: "2026"
  },
  {
    title: "AWS Generative AI Certification",
    subtitle: "Cloud Credential",
    detail:
      "Validated practical capability in deploying and integrating generative AI workloads on AWS.",
    date: "2025"
  }
] as const;

export const cloudFlow = [
  "Code Commit",
  "Automated Test",
  "Container Build",
  "Kubernetes Deploy",
  "Observability & Alerts"
] as const;

export const filters = ["All", "AI/ML", "Cloud", "Full Stack", "Data", "DevOps"] as const;


