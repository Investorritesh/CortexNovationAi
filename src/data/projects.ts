export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientCategory: string;
  industry: "Fintech" | "HealthTech" | "Enterprise SaaS" | "Logistics" | "AI & Cloud";
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: { value: string; label: string; change: string }[];
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "fintech-core",
    slug: "high-throughput-settlement-engine",
    title: "Real-Time Payment Settlement Engine",
    clientCategory: "Global FinTech Infrastructure",
    industry: "Fintech",
    tagline: "Handling $2.4B in annual transaction volume with sub-20ms distributed ledger consensus.",
    summary: "Architected a distributed event-driven settlement system replacing a legacy batch pipeline with real-time Spring Boot 3 microservices and Kafka streaming.",
    challenge: "The legacy core banking system struggled under peak holiday volumes, experiencing 4-second transaction latencies, database deadlocks, and reconciliation discrepancies.",
    solution: "We re-engineered the pipeline using an event-sourcing pattern on Apache Kafka, distributed PostgreSQL partitions with connection pooling, and a reactive Spring WebFlux consensus layer.",
    architectureDetails: [
      "Event-driven ledger with CQRS (Command Query Responsibility Segregation)",
      "Multi-AZ PostgreSQL cluster with zero-data-loss synchronous replication",
      "Resilience4j circuit breakers and automatic dead-letter queue routing",
      "Real-time fraud scoring inference with <8ms model evaluation"
    ],
    techStack: ["Java 21", "Spring Boot 3", "Apache Kafka", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { value: "18ms", label: "P99 Settlement Latency", change: "95% faster" },
      { value: "99.999%", label: "Uptime SLA Achieved", change: "Zero unplanned outages" },
      { value: "$2.4B+", label: "Annual Volume Processed", change: "Scaled 4.5x" }
    ],
    accentColor: "#2D8CFF"
  },
  {
    id: "healthtech-telemetry",
    slug: "patient-telemetry-streaming-platform",
    title: "Clinical IoT Telemetry & Diagnostic Platform",
    clientCategory: "Connected Health & Medical Devices",
    industry: "HealthTech",
    tagline: "Processing 50,000 live medical sensor feeds with HIPAA-compliant streaming analytics.",
    summary: "Engineered a low-latency patient telemetry ingestion hub that monitors critical vitals, generates predictive arrhythmia warnings, and integrates with hospital EHR systems.",
    challenge: "Device data arrived in unstandardized protocols with packet jitter, requiring strict millisecond alerting without false positives that trigger nurse alarm fatigue.",
    solution: "Constructed an edge-to-cloud ingestion engine utilizing MQTT gateways, TimescaleDB time-series storage, and an interactive Next.js dashboard with WebGL vitals visualization.",
    architectureDetails: [
      "MQTT & WebSocket bidirectional medical telemetry streaming",
      "HIPAA-compliant end-to-end envelope encryption with hardware security modules",
      "Real-time arrhythmia anomaly detection using lightweight ONNX runtime models",
      "High-density canvas vitals graphs rendering 120 FPS ECG waveforms"
    ],
    techStack: ["Next.js", "TypeScript", "TimescaleDB", "Three.js", "Python / FastAPI", "GCP"],
    metrics: [
      { value: "48ms", label: "Alert Generation Latency", change: "Critical response" },
      { value: "50k+", label: "Concurrent Sensor Streams", change: "Zero packet drops" },
      { value: "100%", label: "HIPAA & SOC2 Audit Pass", change: "Zero findings" }
    ],
    accentColor: "#22D3EE"
  },
  {
    id: "enterprise-saas-platform",
    slug: "multi-tenant-b2b-procurement-cloud",
    title: "Autonomous B2B Supply Chain Platform",
    clientCategory: "Enterprise Logistics Consortium",
    industry: "Logistics",
    tagline: "Unifying multi-carrier freight booking, customs documentation, and predictive ETA tracking.",
    summary: "Built an enterprise multi-tenant SaaS platform connecting global freight forwarders, customs agents, and shipping carriers into a single unified workspace.",
    challenge: "Fragmented spreadsheets, manual PDF parsing, and siloed tracking APIs caused multi-day customs delays and billions in container demurrage costs.",
    solution: "Developed an automated digital procurement workspace featuring automated OCR document extraction, multi-carrier API normalization, and interactive 3D container logistics tracking.",
    architectureDetails: [
      "Next.js App Router frontend with real-time collaborative workspace",
      "PostgreSQL Row-Level Security (RLS) guaranteeing strict tenant data boundaries",
      "Asynchronous document processing with automated PDF table extraction",
      "Live interactive 3D globe showing global cargo vessel coordinates"
    ],
    techStack: ["Next.js", "React 19", "PostgreSQL", "Tailwind CSS", "Redis", "Docker"],
    metrics: [
      { value: "72%", label: "Reduction in Processing Time", change: "From 4 days to 3 hrs" },
      { value: "12,000+", label: "Active Enterprise Organizations", change: "Rapid adoption" },
      { value: "$18M+", label: "Customer Logistics Savings", change: "Annualized" }
    ],
    accentColor: "#8B5CF6"
  },
  {
    id: "ai-enterprise-bi",
    slug: "decision-intelligence-knowledge-graph",
    title: "Enterprise Knowledge Graph & Neural BI",
    clientCategory: "Global Technology & Consulting",
    industry: "AI & Cloud",
    tagline: "Connecting 40 disparate enterprise data silos into an AI-powered conversational query engine.",
    summary: "Designed and deployed a unified decision intelligence layer that enables executive teams to run natural language questions across billions of operational rows in seconds.",
    challenge: "Cross-departmental data was trapped in disparate ERP, CRM, and SQL data warehouses, requiring 2-week backlog tickets for data analysts to answer business queries.",
    solution: "Deployed an enterprise semantic layer paired with custom fine-tuned text-to-SQL neural models and sub-second caching over a modern ClickHouse data warehouse.",
    architectureDetails: [
      "Semantic layer mapping 400+ business metrics across 50 enterprise databases",
      "Deterministic SQL translation with guardrail validation to prevent hallucinations",
      "Dynamic interactive charting with automated variance detection",
      "Role-based row masking complying with global privacy regulations"
    ],
    techStack: ["ClickHouse", "Python", "Next.js", "TypeScript", "Tailwind CSS", "dbt"],
    metrics: [
      { value: "<1.4s", label: "Average Query Response", change: "Sub-second speed" },
      { value: "92%", label: "Ad-hoc Analyst Ticket Reduction", change: "Instant self-serve" },
      { value: "100%", label: "Deterministic Data Verification", change: "Zero hallucinations" }
    ],
    accentColor: "#2D8CFF"
  }
];
