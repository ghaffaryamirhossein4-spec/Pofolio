import { ProjectItem, ExperienceItem, CertificationItem } from "../types";

export const ASSETS = {
  logoMonogram: "/profile.jpg",
  profileAvatar: "/profile.jpg",
  workspaceMain:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAoIilaArOFfwls4vKND83TChtObTbGrVd0VVrqKLEBpQyncBa4KC-hKr0Aar4wyhtUbAlHjL5HA4p8rFEzFmp7I4b-MmkuWiy0YbK2SjqE18AaD0xItwh8CKFAo19cKJnvrM_vV0VJkEEjsS4omXdQz_5nvt3MzCyQu0tPC8m68Rt5sChZnF1MQwc9GA7K5UjwD3lsYrOmNuEt7VrYboVSsoC_3kSs9elY1JI1L3wbuuQp2NMCZBJX",
  workspaceSkills:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvYGElGzrodZzFcYB2bahrkSEz01GqjvYP9EIlWhY24Ows3OJRuEXssjnCHMVtpMj9tz7SopXni91IOHDvAyBGt8okMjXeUpGysn-I6fHuigXPfM87aOe3NP7or_gjv8QZZF3_tH_GdZcxz0v0aHIdnxxc8uK-P2QHPMicHNrygVB5vvOM5gH4s1d9kKS79QKjezhLUEYoxIRWXx5_eGw7yP0ME3ZupeAX6j3G-8QIPuUnDH7rFdZ_",
  tehranMap:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-uX-Ag3OGDDq1Him5dTruVtcPOZPxdhTDfH2fVKo_9ovEl_NRqT0gI3ZL7lldvqAA5naVbN6ClmAZoTKFxdpt_4PFZ68myHuQ0LoLGNpDAPHTj0W0marBjJT3LnKPFeueerACtpG-oFEwmYAdag0QyP3mFrXv5gGxAteDyR_WMXP8efBvFP8j8nyznPoFSLyb6s5friz9wZn2wGqQZKDG-3sFT4_BWUN4BFUBeW2zGpk04Mlu4572",
  cloudSaasDashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1svb10hjlIU3HzqKkwIAgw7-18fEsmAsKwvMb2qqZoxLJ3icxd5MaZ_lyuVscDXyfgRqXCABlutMzn6Am78eJrQvnk3SJHgs6_iptnq6GRl9jp4_v29pmwu7lbW3MulZSdlNn6DwDi9wZM-3RG_9j2-jprchlucWfG9kqQNFcLRWq0YIj4bqC6ui9THxfxOwz7H6k_Yp91mxC8UyQDGoxPzIfklvPSHzAJwDXHPn99_MW-QWVg_WQ",
  fintechDashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCG-Kg7DDQgmjSNFXBDgmY0IU5BJ8Yz4NV2JxS4_W9GipQcpjid4x1hcIf5L77GgOD8Nv6HpDW5KMd8Fw2ExCdzIMS4LLgBS0WXC3WzoPOY5cBHn4OfTNn5BIqtMUG48Xt5why4hE6vezZ0KBUTwpVP-OGpCmwLBoisuPRcbLk674cMKwt4F5xPEM0wPSssP_XiTTXSXefYJ4PeekOXhrSap9aMV2AVw0Xm61y7E1HYFm4zP0Bc81qK",
  ecommerceDashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8nzpvy3TAL9pHgdSWMcCOPUJkaaFSJ0E5G46EUQ9JzEHMSdVjUXyH6MzpgzmDNem2deVLMHpS8mPdKcugREVCGzWJ8BkTrSo1JaVQKJ25-GdDc7fBktOW49AS76OE_R4-BLCsRQP4R7I-t9wonaStLAOpmXAtbCAUqYukfrLeZU8t1UdvvEwVFl9XZ_xKDpQdhA1v4pLXmNZeleU2jtzaZy5q2lU7QfDDU_AxT0RSa7O56DHDP575",
  taskFlowDashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCLbMDLcoXNoM8STQmkrb8LtGB6CzU-fgn-ApvRUUIMt00jHGbF29D99uvr8jfBqcLrvyReeWKh5mIvZzge9KXBskr-gX0a1TFaxKxSzfGbaDhAJGdrEDgT5BkWnZpC7jdi0vmRMowcqefx-aERcogYrPMnRedcZZZ_rfCv1_NSqA_cbzhQ3JziFGdPyw60tyoMFhwgyi0jxiYoxxMDuqK3LAV9z6ehzP85BqwqVPjmKu7Az_okxvG",
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "clouds-saas",
    systemCode: "SYSTEM 01 // SAAS",
    category: "fullstack",
    titleEn: "CloudSaaS Analytics Platform",
    titleFa: "پلتفرم جامع تحلیل داده ابری",
    badge: "Live Streaming",
    badgeType: "secondary",
    period: "Q4 2024",
    summaryEn:
      "Event-driven cloud telemetrics engine built with Next.js 14 App Router and high-concurrency Node.js microservices. Employs Redis pub/sub streams and PostgreSQL time-series partitioning to deliver sub-100ms real-time metric updates.",
    summaryFa:
      "موتور رویدادمحور پردازش داده‌های ابری با فریمورک Next.js 14 و معماری میکروسرویس Node.js. استفاده از Redis Pub/Sub و پارتیشن‌بندی زمانی در PostgreSQL برای ارائه داشبوردهای بی‌درنگ با تاخیر کمتر از ۱۰۰ میلی‌ثانیه.",
    metrics: [
      { label: "Throughput", value: "24.5k", sublabel: "events / sec" },
      { label: "Latency", value: "48ms", sublabel: "P99 ingest" },
      { label: "Availability", value: "99.98%", sublabel: "uptime SLA" },
    ],
    techStack: [
      "Next.js 14",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "TailwindCSS",
    ],
    image: ASSETS.cloudSaasDashboard,
    imageAlt:
      "High-tech enterprise SaaS analytics dashboard on ultra-dark screen",
    liveStatus: "cluster-eu-west-1 // healthy",
    version: "v2.18.4",
    demoUrl: "https://example.com/clouds-saas",
    githubUrl: "https://github.com/kian-systems/cloud-saas-platform",
  },
  {
    id: "fintech-gateway",
    systemCode: "SYSTEM 02 // FINTECH",
    category: "backend",
    titleEn: "FinTech Payment Gateway & Dashboard",
    titleFa: "درگاه و داشبورد پرداخت امن بین‌المللی و محلی",
    badge: "PCI-DSS Compliant",
    badgeType: "secondary",
    period: "Q3 2024",
    summaryEn:
      "NestJS microservice architecture implementing idempotent Stripe & Zarinpal transaction pipelines, dual-factor JWT verification, and automated cryptographic ledger auditing.",
    summaryFa:
      "میکروسرویس پیشرفته با فریمورک NestJS جهت پردازش تراکنش‌های همزمان با درگاه‌های بانکی و استرایپ، سیستم تایید دومرحله‌ای امن و ثبت غیرقابل تغییر گردش‌های مالی.",
    metrics: [
      {
        label: "Security Audit",
        value: "100%",
        sublabel: "Passed (Audit Compliant)",
      },
      { label: "Concurrency", value: "12k", sublabel: "req / minute" },
      {
        label: "Idempotency",
        value: "Zero Dupes",
        sublabel: "Financial Safety",
      },
    ],
    techStack: [
      "NestJS",
      "React 18",
      "TypeScript",
      "Stripe API",
      "PostgreSQL",
      "Docker",
    ],
    image: ASSETS.fintechDashboard,
    imageAlt:
      "Fintech banking and payment security gateway terminal UI with cryptographic logs",
    liveStatus: "ledger-node // crypt-verified",
    version: "v1.9.0",
    demoUrl: "https://example.com/fintech-gateway",
    githubUrl: "https://github.com/kian-systems/fintech-payment-engine",
  },
  {
    id: "ecommerce-storefront",
    systemCode: "SYSTEM 03 // E-COMMERCE",
    category: "frontend",
    titleEn: "E-Commerce Marketplace",
    titleFa: "فروشگاه آنلاین ماژولار با جستجوی فوق‌سریع",
    badge: "Headless Store",
    badgeType: "primary",
    period: "Q2 2024",
    summaryEn:
      "High-speed headless storefront with Next.js SSR, faceted ElasticSearch queries under 15ms, dynamic multi-currency cart state, and optimistic inventory locking.",
    summaryFa:
      "فروشگاه اینترنتی مدرن مبتنی بر معماری Headless با رندرینگ سمت سرور (SSR)، موتور جستجوی ElasticSearch با نتایج آنی و مدیریت سبد خرید چندارزی بدون افت پرفورمنس.",
    metrics: [
      {
        label: "Lighthouse Score",
        value: "99 / 100",
        sublabel: "Desktop & Mobile",
      },
      { label: "Search Query", value: "12ms", sublabel: "average runtime" },
      { label: "Cart Conversion", value: "+28%", sublabel: "Optimistic UI" },
    ],
    techStack: [
      "Next.js SSR",
      "ElasticSearch",
      "Zustand",
      "GraphQL",
      "Tailwind",
    ],
    image: ASSETS.ecommerceDashboard,
    imageAlt:
      "Headless e-commerce storefront dashboard featuring modular catalog grid",
    liveStatus: "edge-cdn // warm",
    version: "v3.4.1",
    demoUrl: "https://example.com/ecommerce-storefront",
    githubUrl: "https://github.com/kian-systems/headless-commerce",
  },
  {
    id: "taskflow-collab",
    systemCode: "SYSTEM 04 // COLLABORATION",
    category: "fullstack",
    titleEn: "TaskFlow Collaboration Tool",
    titleFa: "سیستم مدیریت وظایف تیمی و بلادرنگ",
    badge: "Multi-tenant",
    badgeType: "tertiary",
    period: "Q1 2024",
    summaryEn:
      "Real-time workspace built with React DnD and Socket.io. Features conflict-free replicated data types (CRDTs) for concurrent editing, granular role-based access control (RBAC), and automated webhook delivery pipelines.",
    summaryFa:
      "محیط کار اشتراکی بلادرنگ با امکان درگ اند دراپ، همگام‌سازی بلادرنگ توسط Socket.io و ساختار CRDT جهت جلوگیری از تداخل ویرایش همزمان اعضا، همراه با کنترل دسترسی سازمانی چندسطحی (RBAC).",
    metrics: [
      {
        label: "Active Peers",
        value: "34 Peers",
        sublabel: "simultaneous sync",
      },
      { label: "Sync Latency", value: "16ms", sublabel: "Socket latency" },
      {
        label: "Conflict Rate",
        value: "0.00%",
        sublabel: "CRDT state resolver",
      },
    ],
    techStack: [
      "React",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Redis Caching",
      "Tailwind",
    ],
    image: ASSETS.taskFlowDashboard,
    imageAlt:
      "Collaborative Kanban board software UI with live cursor indicators",
    liveStatus: "34 Active Peers Online",
    version: "Sync: 16ms",
    demoUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/kian-systems/taskflow-collab",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "nexura-systems",
    roleEn: "Full-Stack Software Engineer",
    roleFa: "مهندس نرم‌افزار فول‌استک",
    company: "Nexura Systems Corp.",
    location: "Tehran / Remote",
    tag: "Production Fleet",
    periodEn: "Present",
    periodFa: "حال حاضر",
    durationEn: "1.2 Years (14 Months)",
    durationFa: "۱.۲ سال (۱۴ ماه)",
    isCurrent: true,
    scopeEn:
      "Engineered decoupled web modules and enterprise-scale API services. Directed full-stack architectural transition from legacy codebase toward high-performance event-driven models.",
    scopeFa:
      "طراحی و توسعه ماژول‌های وب با مقیاس سازمانی و مایکروسرویس‌های توزیع‌شده. هدایت بازنویسی فرانت‌اند به ساختار مدرن مبتنی بر رویداد.",
    bulletsEn: [
      "Orchestrated Next.js 14 App Router migration, cutting server-side rendering times by 42% and improving client bundle efficiency.",
      "Constructed resilient microservices with NestJS, RabbitMQ, and PostgreSQL, slashing API latency by 35% across core checkouts.",
      "Implemented centralized telemetry via OpenTelemetry, Prometheus, and structured log sinks across distributed deployments.",
    ],
    bulletsFa: [
      "مهاجرت معماری فرانت‌اند به Next.js 14 و بهبود چشمگیر سئو و رندرینگ سمت سرور با کاهش ۴۲ درصدی زمان بارگذاری.",
      "توسعه مایکروسرویس‌ها با NestJS و RabbitMQ و کاهش ۳۵ درصدی تاخیر پاسخگویی (Latency) در پایگاه‌داده PostgreSQL.",
      "طراحی خطوط لوله CI/CD پایدار و ارتقای استاندارد‌های پوشش تست با Jest و Vitest.",
    ],
    keyMilestone: {
      title:
        "Zero-downtime database schema migration serving 250k daily active sessions",
      description:
        "Engineered blue-green table partitioning and Redis in-memory cache priming without user session drops.",
      badges: ["Redis Cache", "NestJS Microservices"],
    },
    stack: [
      "Next.js 14",
      "TypeScript",
      "Node.js / NestJS",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Redis",
      "Prisma ORM",
    ],
  },
  {
    id: "arta-tech",
    roleEn: "Junior Full-Stack Developer",
    roleFa: "برنامه‌نویس جونیور فول‌استک",
    company: "Arta Tech Solutions",
    location: "Tehran / On-site",
    tag: "Product Studio",
    periodEn: "2022 — 2023",
    periodFa: "۱۴۰۱ — ۱۴۰۲",
    durationEn: "10 Months",
    durationFa: "۱۰ ماه",
    isCurrent: false,
    scopeEn:
      "Developed customer-facing client modules and maintained relational database workflows. Partnered with lead engineers to implement automated testing and responsive layout standards.",
    scopeFa:
      "توسعه رابط‌های کاربری ریسپانسیو و نگهداری سرویس‌های بک‌اند در قالب تیم چابک اسکرام. بازسازی اندپوینت‌های API و کوئری‌های دیتابیس.",
    bulletsEn: [
      "Crafted 20+ responsive UI components in React and TypeScript with strict accessibility and type-safety adherence.",
      "Authored Express.js REST endpoints and handled multi-table PostgreSQL relational migrations using Knex and TypeORM.",
      "Integrated third-party payment gateways (Zarinpal, Stripe Sandbox) ensuring idempotency and failure-recovery mechanisms.",
    ],
    bulletsFa: [
      "پیاده‌سازی بیش از ۲۰ کامپوننت ماژولار با React و تایپ‌اسکریپت با رعایت استانداردهای دسترسی‌پذیری.",
      "توسعه و مستندسازی API‌های RESTful با Express.js و مدیریت مایگریشن‌های PostgreSQL.",
      "اتصال درگاه‌های پرداخت آنلاین و مدیریت یکپارچه تراکنش‌های مالی با امنیت بالا.",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Git & CI",
      "TypeORM",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services • License #AWS-78219",
    year: "2023",
    icon: "verified_user",
    color: "primary",
  },
  {
    id: "meta-frontend",
    title: "Meta Certified Front-End Developer",
    issuer: "Meta / Coursera Professional Specialization",
    year: "2022",
    icon: "code",
    color: "secondary",
  },
  {
    id: "postgres-tuning",
    title: "PostgreSQL High Performance Tuning",
    issuer: "Database Administration & Query Optimization",
    year: "2023",
    icon: "storage",
    color: "tertiary",
  },
];
