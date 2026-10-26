export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  linkedin?: string;
  github?: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  quarter: string;
  title: string;
  description: string;
  highlight: string;
}

export const companyData = {
  name: "CortexNovation Ai",
  email: "cortexnovationai@gmail.com",
  tagline: "Turning Ideas Into Impact",
  motto: "Build Smarter. Grow Faster.",
  partnershipPromise: "We don't just build solutions, we build long-term partnerships.",
  mission: "To empower global enterprises and visionary startups with intelligent, scalable software architectures that solve complex challenges and drive exponential growth.",
  vision: "To be the defining engineering partner for the next generation of intelligent digital systems, setting the gold standard in performance, craft, and human-machine collaboration.",
  stats: [
    { value: "99.98%", label: "Uptime Reliability", detail: "Across all managed production clusters" },
    { value: "3.5x", label: "Faster Delivery", detail: "Accelerated cycle times via modular architectures" },
    { value: "40+", label: "Enterprise Deployments", detail: "Mission-critical systems live worldwide" },
    { value: "<12ms", label: "Inference Latency", detail: "Optimized distributed edge pipelines" }
  ],
  processSteps: [
    {
      step: "01",
      name: "Discover",
      tagline: "Deep Architectural & Strategic Immersion",
      description: "We analyze your operational bottlenecks, business objectives, and data ecosystem to construct a rigorous technical blueprint before writing a single line of code.",
      points: ["Technical debt audit & risk analysis", "System architecture & schema modeling", "Milestone roadmapping with fixed sprint gates"]
    },
    {
      step: "02",
      name: "Build",
      tagline: "High-Velocity, Type-Safe Engineering",
      description: "Our cross-functional teams write clean, strictly-typed code backed by automated unit, integration, and security test suites, delivering working increments every sprint.",
      points: ["Modular microservices & component libraries", "Continuous integration with static analysis", "Bi-weekly live demonstrations & stakeholder alignment"]
    },
    {
      step: "03",
      name: "Deploy",
      tagline: "Zero-Downtime Multi-Cloud Orchestration",
      description: "Automated blue-green deployments, canary rollouts, and infrastructure-as-code manifests ensure smooth transitions into production with rollback guarantees.",
      points: ["Containerized Kubernetes & serverless workloads", "Automated synthetic health probes", "End-to-end security compliance hardening"]
    },
    {
      step: "04",
      name: "Grow",
      tagline: "Continuous Optimization & Proactive Scaling",
      description: "We monitor telemetry, optimize query latencies, implement continuous feature enhancements, and scale infrastructure alongside your business expansion.",
      points: ["24/7 proactive telemetry monitoring", "Database execution plan tuning", "Long-term architectural evolution roadmap"]
    }
  ],
  values: [
    {
      number: "01",
      title: "Obsessive Craftsmanship",
      description: "Every line of code, database query, and interface animation is engineered to the highest standard of elegance and resilience.",
      icon: "Gem"
    },
    {
      number: "02",
      title: "Radical Transparency",
      description: "No hidden complexity. We provide full visibility into architectures, codebases, decision tradeoffs, and project telemetry.",
      icon: "Eye"
    },
    {
      number: "03",
      title: "Velocity with Reliability",
      description: "Speed means nothing if systems fail. We achieve rapid time-to-market through battle-tested engineering patterns and strict verification.",
      icon: "Zap"
    },
    {
      number: "04",
      title: "Partnership Over Transactions",
      description: "We don't just deliver deliverables and vanish; we invest in our clients' enduring technological sovereignty and market leadership.",
      icon: "Handshake"
    }
  ],
  timeline: [
    {
      year: "2023",
      quarter: "Q1",
      title: "Foundation of CortexNovation Ai",
      description: "Established by veteran systems architects and AI researchers with a mission to bridge enterprise software resilience with modern neural intelligence.",
      highlight: "Inception"
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "Launch of CortexFlow Engine",
      description: "Released the proprietary multi-agent orchestration platform, enabling autonomous decision systems for early enterprise design partners.",
      highlight: "Product Milestone"
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Global Enterprise Expansion",
      description: "Scaled mission-critical client deployments across North America, Europe, and Asia-Pacific, handling over $2B in annualized transaction volume.",
      highlight: "Global Scale"
    },
    {
      year: "2026",
      quarter: "Present",
      title: "Next-Gen Neural Architecture",
      description: "Deploying production-grade decision intelligence, high-throughput Spring Boot 3 pipelines, and 120 FPS WebGL digital experiences globally.",
      highlight: "Pinnacle"
    }
  ],
  team: [
    {
      name: "Alexandre Moreau",
      role: "Chief Executive Officer & Founder",
      bio: "Former Principal Architect with 15+ years scaling distributed systems and enterprise infrastructure across Fortune 100 fintech and tech giants.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      expertise: ["System Architecture", "Enterprise Scaling", "Corporate Strategy"]
    },
    {
      name: "Dr. Elena Vance",
      role: "Chief Technology Officer & Head of AI",
      bio: "PhD in Machine Intelligence from MIT. Pioneer in multi-agent reinforcement learning, deterministic neural guardrails, and autonomous inference engines.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      expertise: ["Neural Systems", "LLM Orchestration", "Distributed ML"]
    },
    {
      name: "Marcus Thorne",
      role: "VP of Engineering & Backend Systems",
      bio: "Authority on high-concurrency Java, Spring Boot, and event-driven architectures. Veteran of high-frequency trading and core settlement infrastructure.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      expertise: ["Java 21 / Spring Boot", "Kafka Streaming", "Kubernetes"]
    },
    {
      name: "Aria Sterling",
      role: "Head of Product Design & Creative Dev",
      bio: "Award-winning creative developer blending WebGL, precision micro-animations, and human-centric design to construct benchmark digital products.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      expertise: ["WebGL / Three.js", "Design Systems", "Product Strategy"]
    }
  ],
  technologies: [
    { name: "Java 21", category: "Backend" },
    { name: "Spring Boot 3", category: "Backend" },
    { name: "React 19", category: "Frontend" },
    { name: "Next.js 16", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TimescaleDB", category: "Database" },
    { name: "ClickHouse", category: "Analytics" },
    { name: "Apache Kafka", category: "Streaming" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Three.js / WebGL", category: "Graphics" },
    { name: "AWS Cloud", category: "Cloud" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Python / PyTorch", category: "AI & ML" },
    { name: "Redis", category: "Caching" }
  ],
  industries: [
    {
      id: "fintech",
      name: "Fintech & Banking",
      tagline: "Sub-millisecond ledger consensus, fraud detection, and regulatory compliance.",
      description: "We build transaction engines, payment gateways, and algorithmic reconciliation systems that handle billions of dollars without dropping a single cent.",
      benefits: ["ACID compliant distributed ledgers", "Real-time automated compliance auditing", "<20ms settlement speed"]
    },
    {
      id: "healthtech",
      name: "HealthTech & MedTech",
      tagline: "HIPAA-grade medical IoT telemetry and clinical decision support.",
      description: "Connecting wearable telemetry, patient management systems, and clinical diagnostics into secure, highly-available digital workflows.",
      benefits: ["Zero-trust patient data security", "Live 120 FPS physiological waveform rendering", "EHR integration via HL7/FHIR"]
    },
    {
      id: "saas",
      name: "Enterprise SaaS",
      tagline: "Multi-tenant platforms engineered to onboard millions of users effortlessly.",
      description: "From self-service billing to granular role-based permissions, we engineer the core infrastructure required to win in the enterprise software market.",
      benefits: ["Isolated tenant data security", "Metered usage billing & Stripe synchronization", "Custom audit logging & SSO"]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      tagline: "Autonomous routing, digital freight clearing, and 3D cargo tracking.",
      description: "Eliminating manual spreadsheets and coordination friction with real-time tracking, predictive arrival estimates, and automated customs document generation.",
      benefits: ["Predictive delay intelligence", "Multi-carrier API unification", "Interactive 3D asset tracking"]
    },
    {
      id: "ai",
      name: "AI & Intelligent Systems",
      tagline: "Production-ready multi-agent systems and conversational intelligence.",
      description: "Deploying deterministic AI systems with strict token limits, factual grounding against proprietary databases, and continuous latency observability.",
      benefits: ["Deterministic schema validation", "Private VPC & air-gapped models", "Zero-hallucination data connectors"]
    }
  ]
};
