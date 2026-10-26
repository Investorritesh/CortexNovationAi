export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "Active" | "Beta" | "Early Access";
  description: string;
  features: { title: string; desc: string; icon: string }[];
  specs: { label: string; value: string }[];
  pricing: {
    plan: string;
    price: string;
    period: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
  }[];
}

export const productsData: ProductItem[] = [
  {
    id: "cortex-flow",
    slug: "cortex-flow",
    name: "CortexFlow",
    tagline: "Autonomous AI Agent Orchestration & Workflow Engine",
    category: "AI & Automation",
    status: "Active",
    description: "An enterprise-grade orchestration pipeline that coordinates multi-agent AI systems, self-healing data workflows, and real-time inference with deterministic governance.",
    features: [
      {
        title: "Multi-Agent Coordination",
        desc: "Orchestrate asynchronous reasoning chains across specialized LLMs with dynamic fallbacks and token budget caps.",
        icon: "Bot"
      },
      {
        title: "Deterministic Guardrails",
        desc: "Enforce strict schema validation, PII redaction, and enterprise policy compliance before responses leave your boundary.",
        icon: "Shield"
      },
      {
        title: "Real-time Telemetry & Tracing",
        desc: "Inspect every decision branch, step latency, and token cost with sub-millisecond OpenTelemetry spans.",
        icon: "Activity"
      },
      {
        title: "Hybrid Cloud Deployment",
        desc: "Deploy on AWS, Azure, GCP or on-premise VPCs with strict zero-data-retention guarantees.",
        icon: "Cloud"
      }
    ],
    specs: [
      { label: "Execution Latency", value: "<18ms overhead" },
      { label: "Concurrency", value: "100k+ parallel agents" },
      { label: "Security", value: "SOC2 Type II & HIPAA ready" },
      { label: "SDK Support", value: "TypeScript, Python, Java" }
    ],
    pricing: [
      {
        plan: "Developer",
        price: "$199",
        period: "per month",
        features: [
          "Up to 25 Active Agents",
          "500,000 monthly workflow runs",
          "Community Discord & standard support",
          "OpenTelemetry telemetry export",
          "Shared VPC infrastructure"
        ],
        cta: "Start Free Trial"
      },
      {
        plan: "Enterprise",
        price: "$999",
        period: "per month",
        isPopular: true,
        features: [
          "Unlimited Agent Swarms",
          "10,000,000 monthly workflow runs",
          "Dedicated Private Cloud / On-prem",
          "24/7 SLA with dedicated TAM",
          "Custom guardrail rule engines",
          "SSO & fine-grained RBAC"
        ],
        cta: "Request Enterprise Pilot"
      },
      {
        plan: "Scale & Custom",
        price: "Custom",
        period: "tailored billing",
        features: [
          "Air-gapped deployment option",
          "Custom fine-tuned base models",
          "Custom SLA up to 99.999%",
          "Architectural co-engineering team"
        ],
        cta: "Speak with Engineers"
      }
    ]
  },
  {
    id: "novation-pulse",
    slug: "novation-pulse",
    name: "NovationPulse",
    tagline: "Real-Time Observability & Predictive Anomaly Engine",
    category: "Observability",
    status: "Active",
    description: "Detect infrastructure degradations, database query regressions, and security anomalies before they impact end users using unsupervised time-series models.",
    features: [
      {
        title: "Predictive Incident Prevention",
        desc: "Forecast memory leaks and disk saturation hours before thresholds breach, triggering proactive mitigation.",
        icon: "AlertTriangle"
      },
      {
        title: "Automated Root-Cause Isolation",
        desc: "Correlate telemetry metrics, logs, and distributed traces in seconds using vector similarity search.",
        icon: "Search"
      },
      {
        title: "Zero-Overhead eBPF Agents",
        desc: "Kernel-level observability that collects granular network and syscall data with <0.5% CPU overhead.",
        icon: "Zap"
      }
    ],
    specs: [
      { label: "Data Ingestion", value: "10M events/sec" },
      { label: "Anomaly Detection Time", value: "<1.2s" },
      { label: "Agent Footprint", value: "<12MB RAM" },
      { label: "Retention", value: "Up to 365 days searchable" }
    ],
    pricing: [
      {
        plan: "Core",
        price: "$249",
        period: "per month",
        features: [
          "Up to 50 Host Nodes",
          "100GB Daily Ingestion",
          "30 Days Hot Storage",
          "Slack & PagerDuty alerts"
        ],
        cta: "Launch Core"
      },
      {
        plan: "Enterprise Suite",
        price: "Custom",
        period: "annual contract",
        isPopular: true,
        features: [
          "Unlimited Nodes & Clusters",
          "Multi-cloud telemetry aggregation",
          "Custom ML training on your baseline",
          "99.99% Availability SLA"
        ],
        cta: "Request Demo"
      }
    ]
  },
  {
    id: "synthex-bi",
    slug: "synthex-bi",
    name: "SynthexBI",
    tagline: "Conversational Decision Intelligence & Neural BI Platform",
    category: "Business Intelligence",
    status: "Beta",
    description: "Transform natural language queries into verified SQL, real-time interactive charts, and executive briefings with automatic hallucination checks.",
    features: [
      {
        title: "Verified SQL Generation",
        desc: "Translates conversational prompts into deterministic, syntax-checked SQL validated against your live database schema.",
        icon: "Terminal"
      },
      {
        title: "Instant Interactive Visualization",
        desc: "Auto-generates publication-ready charts, heatmaps, and cohorts without manual dashboard configuration.",
        icon: "PieChart"
      },
      {
        title: "Continuous Anomaly Digest",
        desc: "Delivers automated Slack and email briefings spotlighting significant business variances.",
        icon: "Mail"
      }
    ],
    specs: [
      { label: "SQL Accuracy", value: "99.4% on Spider Benchmark" },
      { label: "Supported DBs", value: "Postgres, Snowflake, BigQuery, ClickHouse" },
      { label: "Response Time", value: "<2.4s" }
    ],
    pricing: [
      {
        plan: "Early Access",
        price: "$450",
        period: "per workspace/mo",
        isPopular: true,
        features: [
          "Up to 50 Business Users",
          "Unlimited Schema Connectors",
          "Daily Executive Briefings",
          "Direct Access to Founding Engineers"
        ],
        cta: "Join Early Access"
      }
    ]
  }
];
