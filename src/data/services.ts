export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: string;
  heroHeadline: string;
  problem: string;
  approach: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-dev",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "High-conversion, ultra-fast websites crafted with cutting-edge engineering, dynamic 3D elements, and SEO excellence.",
    category: "Web & Digital",
    iconName: "Globe",
    heroHeadline: "Architecting Web Experiences that Captivate and Convert",
    problem: "Outdated, sluggish websites leak customers, fail modern SEO algorithms, and damage brand authority with generic templates and uninspiring interactions.",
    approach: "We engineer custom, headless web applications with server-side rendering, sub-second page loads, and immersive aesthetic touches that mirror the highest echelon of modern tech giants.",
    deliverables: [
      "Custom responsive web application architecture",
      "Dynamic interactive UI with WebGL / Framer Motion micro-interactions",
      "Headless CMS integration for effortless content management",
      "Lighthouse 95+ performance, security hardening, and technical SEO",
      "Continuous deployment pipeline with automated regression tests"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Vercel", "Sanity"],
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Avg. Conversion Uplift", value: "+42%" },
      { label: "Global Edge Latency", value: "<45ms" }
    ],
    faqs: [
      {
        question: "How do you ensure enterprise-grade loading speeds?",
        answer: "We utilize Next.js edge caching, aggressive image optimization via WebP/AVIF, code-splitting, tree-shaking, and lightweight custom WebGL shaders to guarantee instant load times."
      },
      {
        question: "Can our internal marketing team update copy and media without developers?",
        answer: "Yes, we connect intuitive headless CMS workflows (Sanity/Contentful) with custom visual schemas, allowing real-time previews and safe one-click publishing."
      }
    ]
  },
  {
    id: "frontend-dev",
    slug: "frontend-development",
    title: "Frontend Development",
    shortDesc: "Pixel-perfect, accessible, and reactive user interfaces designed to elevate complex workflows into intuitive digital software.",
    category: "Web & Digital",
    iconName: "Layout",
    heroHeadline: "Next-Generation Frontend Engineering & State Architecture",
    problem: "Enterprise web applications often accumulate technical debt, resulting in laggy re-renders, brittle state logic, and disjointed design systems.",
    approach: "We construct modular, strictly-typed component libraries with atomic design principles, deterministic state management, and strict WCAG AA accessibility compliance.",
    deliverables: [
      "Design system component library with Storybook documentation",
      "Complex reactive client state architecture & real-time WebSocket bindings",
      "Cross-browser regression testing and responsive layout guarantees",
      "Zero-layout-shift (CLS) UI engineering"
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    metrics: [
      { label: "Render Frame Rate", value: "60-120 FPS" },
      { label: "Accessibility Score", value: "100% WCAG" },
      { label: "Component Test Coverage", value: "98%" }
    ],
    faqs: [
      {
        question: "Do you integrate with our existing backend APIs?",
        answer: "Seamlessly. We implement type-safe client contracts using OpenAPI, tRPC, or GraphQL to prevent runtime mismatches between backend services and frontend views."
      }
    ]
  },
  {
    id: "java-spring",
    slug: "java-spring-boot-development",
    title: "Java & Spring Boot Development",
    shortDesc: "Resilient, cloud-native microservices and mission-critical backend systems built for fault tolerance and massive scale.",
    category: "Backend & Systems",
    iconName: "Cpu",
    heroHeadline: "Mission-Critical Backend Services Engineered for High Concurrency",
    problem: "Growing transaction volumes overload monolithic architectures, leading to thread pool exhaustion, cascading downtime, and expensive scaling bills.",
    approach: "We build distributed, decoupled Spring Boot microservices featuring reactive programming (Spring WebFlux), asynchronous event queues, and resilient circuit breakers.",
    deliverables: [
      "Cloud-native microservices architecture with Spring Boot 3 & Java 21",
      "RESTful and gRPC API contract development",
      "OAuth2/OIDC centralized authorization & security layers",
      "Event-driven architecture with Apache Kafka and RabbitMQ",
      "Dockerized containerization and Kubernetes orchestration manifests"
    ],
    techStack: ["Java 21", "Spring Boot 3", "Spring Cloud", "Kafka", "Docker", "Kubernetes"],
    metrics: [
      { label: "Peak Throughput", value: "250K+ req/s" },
      { label: "System Availability", value: "99.999%" },
      { label: "P99 Response Time", value: "<15ms" }
    ],
    faqs: [
      {
        question: "How do you handle zero-downtime deployments?",
        answer: "We deploy using Kubernetes blue-green or canary release strategies with automated health checks and instant rollback triggers."
      }
    ]
  },
  {
    id: "database-sql",
    slug: "database-and-sql-services",
    title: "Database & SQL Services",
    shortDesc: "High-performance schema modeling, query optimization, high-availability replication, and bulletproof data integrity.",
    category: "Data & Infrastructure",
    iconName: "Database",
    heroHeadline: "Bulletproof Data Architectures & High-Performance SQL Optimization",
    problem: "Unindexed tables, slow queries, deadlock bottlenecks, and unoptimized relational schemas strangle application performance and risk data corruption.",
    approach: "We conduct deep execution plan analyses (EXPLAIN ANALYZE), refactor schema topologies, configure write-ahead logging, and implement multi-region read replicas.",
    deliverables: [
      "Relational schema design, normalization, and partitioning strategies",
      "Query profiling, index optimization, and latency bottleneck eradication",
      "High-availability clustering, automated failover, and point-in-time recovery",
      "Zero-downtime data migrations and ETL pipeline design"
    ],
    techStack: ["PostgreSQL", "MySQL", "Oracle", "TimescaleDB", "Redis", "Flyway"],
    metrics: [
      { label: "Query Speedup", value: "12x avg" },
      { label: "Data Integrity", value: "ACID 100%" },
      { label: "Recovery Point (RPO)", value: "<30 sec" }
    ],
    faqs: [
      {
        question: "Can you optimize our production database without interrupting users?",
        answer: "Yes, we run non-blocking index creation, shadow migrations, and blue-green connection routing to optimize databases during live operations."
      }
    ]
  },
  {
    id: "saas-solutions",
    slug: "saas-solutions",
    title: "SaaS Solutions",
    shortDesc: "End-to-end multi-tenant SaaS platforms featuring automated subscription billing, role-based access, and enterprise compliance.",
    category: "Software Products",
    iconName: "Layers",
    heroHeadline: "Scalable Multi-Tenant Platforms Built from Inception to Scale",
    problem: "Launching a modern SaaS requires navigating tenant isolation, complex billing models, usage metering, and enterprise SOC2 compliance from day one.",
    approach: "We provide an enterprise-grade SaaS blueprint with isolated tenant schemas, Stripe/Paddle billing integrations, audit logging, and automated self-service onboarding.",
    deliverables: [
      "Multi-tenant application architecture with row-level security (RLS)",
      "Automated recurring subscription billing & metered billing workflows",
      "RBAC / ABAC granular permission matrix and SSO (SAML/Okta)",
      "Interactive analytics dashboard for customer usage tracking"
    ],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe", "Redis", "AWS"],
    metrics: [
      { label: "Time-to-Market", value: "-60%" },
      { label: "Tenant Scalability", value: "100K+ orgs" },
      { label: "Billing Precision", value: "99.999%" }
    ],
    faqs: [
      {
        question: "How do you guarantee tenant data isolation?",
        answer: "We employ schema-per-tenant or PostgreSQL Row-Level Security (RLS) with cryptographic tenant tokens verified at every API boundary."
      }
    ]
  },
  {
    id: "data-analytics",
    slug: "data-analytics-and-business-analytics",
    title: "Data Analytics & Business Analytics",
    shortDesc: "Transform raw data lakes into executive dashboards, predictive signals, and automated business intelligence workflows.",
    category: "AI & Intelligence",
    iconName: "BarChart3",
    heroHeadline: "Unlocking Predictive Signals & Real-Time Business Intelligence",
    problem: "Siloed operational data leaves leadership flying blind, making strategic decisions on stale spreadsheets rather than real-time indicators.",
    approach: "We centralize disparate data streams into unified analytical warehouses with automated transformations, predictive ML forecasting, and interactive telemetry dashboards.",
    deliverables: [
      "Modern Data Stack setup (ingestion, dbt modeling, data warehousing)",
      "Executive real-time KPI dashboards with custom alert triggers",
      "Predictive customer churn, lifetime value (LTV), and revenue forecasting models",
      "Automated compliance and data governance reporting"
    ],
    techStack: ["Snowflake", "BigQuery", "dbt", "Python", "Apache Superset", "ClickHouse"],
    metrics: [
      { label: "Query Response Time", value: "<800ms" },
      { label: "Reporting Automation", value: "100% real-time" },
      { label: "Forecast Accuracy", value: "94.8%" }
    ],
    faqs: [
      {
        question: "Can we embed analytics directly inside our customer-facing portal?",
        answer: "Yes, we construct embeddable, low-latency analytics widgets protected by tokenized role permissions."
      }
    ]
  },
  {
    id: "custom-software",
    slug: "custom-business-software-development",
    title: "Custom Business Software Development",
    shortDesc: "Tailored enterprise solutions designed specifically around your proprietary operational workflows, security requirements, and scale.",
    category: "Enterprise Systems",
    iconName: "ShieldCheck",
    heroHeadline: "Bespoke Enterprise Software Engineered Around Your Competitive Edge",
    problem: "Off-the-shelf software forces businesses into rigid constraints, forcing expensive workarounds and exposing sensitive proprietary workflows.",
    approach: "We conduct deep stakeholder immersion to build tailored enterprise software with bespoke workflows, legacy system bridges, and enterprise-grade security.",
    deliverables: [
      "Complete custom enterprise application suite (Web, Desktop, Cloud)",
      "Legacy system modernization & bidirectional data integration bridges",
      "Automated internal approval and workflow automation engines",
      "Full source code ownership, CI/CD pipeline, and comprehensive architecture docs"
    ],
    techStack: ["Next.js", "Java / Spring Boot", "PostgreSQL", "Docker", "AWS / Azure"],
    metrics: [
      { label: "Operational Efficiency", value: "+58%" },
      { label: "Manual Effort Reduction", value: "-75%" },
      { label: "ROI Payback", value: "<6 months" }
    ],
    faqs: [
      {
        question: "Do we retain 100% intellectual property of the developed software?",
        answer: "Absolutely. All source code, architecture diagrams, deployment configs, and intellectual property are 100% owned by your organization from day one."
      }
    ]
  }
];
