import {
  Locale,
  ProjectCaseStudy,
  ServiceOffering,
  SkillCategory,
  WorkProcessStep,
} from "@/types";

export const siteConfig = {
  name: "Hossam Amin Abdelhamed",
  nameAr: "حسام أمين عبد الحميد",
  shortName: "Hossam Amin",
  shortNameAr: "حسام أمين",
  handle: "hossam.dev",
  role: "Senior Full-Stack Software Engineer & Solutions Architect",
  roleAr: "مهندس برمجيات Full-Stack أول ومصمم معمارية الأنظمة",
  experienceYears: "4+",
  location: "Egypt · Working with Clients Worldwide (Remote)",
  locationAr: "مصر · أعمل مع العملاء والشركات حول العالم (عن بُعد)",
  availability: {
    isAvailable: true,
    statusText: "Available for Freelance & Contract Projects",
    statusTextAr: "متاح لمشاريع العمل الحر والتعاقدات التقنية",
    responseTime: "Replies within 2 hours",
    responseTimeAr: "الرد خلال ساعتين",
  },
  hero: {
    badge: "Senior Full-Stack Engineer · 4+ Years Production Experience",
    badgeAr: "مهندس برمجيات Full-Stack · خبرة +4 سنوات في الأنظمة الإنتاجية",
    headlineStart: "Turning Complex Business Ideas into",
    headlineHighlight: "Scalable, High-Performance",
    headlineEnd: "Digital Products.",
    headlineStartAr: "نحوّل أفكارك التجارية الطموحة إلى",
    headlineHighlightAr: "أنظمة ومنصات رقمية فائقة الأداء",
    headlineEndAr: "وقابلة للتوسع.",
    description:
      "I help startups, founders, and growing enterprises architect, build, and launch production-grade web applications, SaaS platforms, and ERP systems. From pixel-perfect React & Next.js interfaces to resilient Node.js, Python FastAPI, and .NET backends—engineered for speed, security, and measurable ROI.",
    descriptionAr:
      "أساعد رواد الأعمال والشركات الناشئة والمؤسسات على تصميم وبناء وإطلاق تطبيقات الويب المتكاملة، منصات الـ SaaS، وأنظمة الـ ERP الاحترافية. من واجهات React وNext.js فائقة السرعة إلى أنظمة Backend قوية بـ Node.js وPython FastAPI و.NET — بهندسة برمجية تضمن السرعة، الأمان، والعائد الاستثماري.",
  },
  stats: [
    {
      value: "4+ Years",
      valueAr: "+4 سنوات",
      label: "Full-Stack Engineering",
      labelAr: "خبرة هندسية متكاملة",
      detail: "End-to-End Delivery",
      detailAr: "بناء الأنظمة من الصفر للإطلاق",
    },
    {
      value: "99.9%",
      valueAr: "99.9%",
      label: "Production Reliability",
      labelAr: "استقرار الأنظمة الإنتاجية",
      detail: "Automated Health Gates",
      detailAr: "فحص جاهزية ومراقبة آلية",
    },
    {
      value: "4 Portals",
      valueAr: "4 لوحات تحكم",
      label: "Multi-Role Systems Built",
      labelAr: "أنظمة متعددة الصلاحيات",
      detail: "Strict RBAC & Security",
      detailAr: "حماية وصلاحيات دقيقة",
    },
    {
      value: "100%",
      valueAr: "100%",
      label: "Client-Focused Code",
      labelAr: "التزام بجودة الكود والتسليم",
      detail: "Clean, Scalable & Tested",
      detailAr: "كود نظيف ومختبر بالكامل",
    },
  ],
  contact: {
    email: "hamyn203@gmail.com",
    phoneDisplay: "+20 115 181 4312",
    phoneRaw: "201151814312",
    whatsappUrl: "https://wa.me/201151814312",
    linkedinUrl: "https://www.linkedin.com/in/hossam-abdelhamid-3a7a11371",
    githubUrl: "https://github.com/hamyn203-commits",
    featuredLiveDomain: "https://wahywanamaa.com",
  },
};

export const servicesDataByLocale: Record<Locale, ServiceOffering[]> = {
  en: [
    {
      id: "saas-web-apps",
      title: "Custom SaaS & Full-Stack Web Applications",
      tagline: "From MVP to Enterprise Scale",
      description:
        "End-to-end development of modern, multi-tenant web platforms with lightning-fast interfaces, real-time capabilities, and SEO-first architecture that converts visitors into paying users.",
      deliverables: [
        "Multi-role dashboards (Admin, Client, Staff, Provider portals)",
        "SSR/ISR performance optimization & multilingual SEO automation",
        "Real-time collaboration, WebRTC live rooms, & interactive charts",
        "Automated E2E & visual regression testing with Playwright",
      ],
      recommendedStack: ["Next.js", "React 19", "TypeScript", "Vue / Nuxt", "Tailwind CSS"],
      icon: "layers",
      bentoSpan: "col-span-12 lg:col-span-7",
      accent: "from-emerald-500/20 via-teal-500/5 to-transparent",
    },
    {
      id: "backend-apis",
      title: "High-Throughput Backend & API Architecture",
      tagline: "Secure, Portable & Resilient",
      description:
        "Architecting rock-solid RESTful APIs and microservices capable of handling complex business logic, strict authentication, and third-party integrations without vendor lock-in.",
      deliverables: [
        "Dual-JWT rotation, RBAC ownership verification & rate limiting",
        "Direct-to-object-storage file pipelines (S3 / R2 / Blob)",
        "Payment gateways, WhatsApp/Twilio, & AI (OpenAI/Gemini) integrations",
        "Zero-downtime readiness probes & structured request logging",
      ],
      recommendedStack: ["Node.js", "NestJS", "Express 5", "Python FastAPI", "Django", ".NET / Laravel"],
      icon: "server",
      bentoSpan: "col-span-12 lg:col-span-5",
      accent: "from-cyan-500/20 via-blue-500/5 to-transparent",
    },
    {
      id: "erp-automation",
      title: "Enterprise ERP, Inventory & Financial Systems",
      tagline: "Digitizing Operations & Workflows",
      description:
        "Custom internal tools, B2B distribution systems, and accounting engines that eliminate manual spreadsheets, automate invoicing, and enforce complete audit trails.",
      deliverables: [
        "Transactional order lifecycles, stock deduction & expiry tracking",
        "Automated PDF account statements, receipts & barcode generation",
        "Excel bulk import/export pipelines & financial analytics",
        "Automated collection reminders via WhatsApp & SMTP email",
      ],
      recommendedStack: ["Python", "FastAPI", "SQLAlchemy", "React", "ReportLab", "Pandas"],
      icon: "cpu",
      bentoSpan: "col-span-12 lg:col-span-5",
      accent: "from-violet-500/20 via-purple-500/5 to-transparent",
    },
    {
      id: "database-cloud",
      title: "Database Engineering, Performance & DevOps",
      tagline: "Sub-100ms Queries & Automated CI/CD",
      description:
        "Designing normalized relational schemas and high-speed document stores with automated backups, caching layers, and CI/CD pipelines that keep production running 24/7.",
      deliverables: [
        "Schema modeling, Prisma/SQLAlchemy migrations & indexing",
        "Redis caching strategies for high-read workloads",
        "Automated GitHub Actions CI, health checks & visual diff gates",
        "Portable deployments across Vercel, Docker, VPS, and Cloud",
      ],
      recommendedStack: ["PostgreSQL", "MongoDB Atlas", "MySQL", "Redis", "Prisma", "GitHub Actions"],
      icon: "database",
      bentoSpan: "col-span-12 lg:col-span-7",
      accent: "from-amber-500/20 via-orange-500/5 to-transparent",
    },
  ],
  ar: [
    {
      id: "saas-web-apps",
      title: "تطوير منصات الـ SaaS وتطبيقات الويب المتكاملة",
      tagline: "من الـ MVP إلى الأنظمة الكبرى",
      description:
        "بناء منصات ويب حديثة متعددة المستخدمين بواجهات فائقة السرعة، غرف تفاعل مباشر، وبنية مهيأة لمحركات البحث (SEO) لتحويل الزوار إلى عملاء فعليين.",
      deliverables: [
        "لوحات تحكم متعددة الصلاحيات (إدارة، عملاء، معلمين/مقدمي خدمة)",
        "تحسين فائق للسرعة مع أتمتة الـ SEO متعدد اللغات",
        "غرف بث مباشر تفاعلية (WebRTC) ورسوم بيانية حية",
        "اختبارات آلية شاملة لواجهة المستخدم والمسارات عبر Playwright",
      ],
      recommendedStack: ["Next.js", "React 19", "TypeScript", "Vue / Nuxt", "Tailwind CSS"],
      icon: "layers",
      bentoSpan: "col-span-12 lg:col-span-7",
      accent: "from-emerald-500/20 via-teal-500/5 to-transparent",
    },
    {
      id: "backend-apis",
      title: "هندسة الأنظمة الخلفية (Backend) وواجهات الـ API",
      tagline: "أمان عالٍ، مرونة، وقابلية للتوسع",
      description:
        "تصميم وبناء واجهات برمجية (RESTful APIs) قادرة على معالجة العمليات المعقدة، إدارة الصلاحيات الصارمة، والربط مع الخدمات الخارجية بكفاءة عالية.",
      deliverables: [
        "نظام مصادقة مزدوج (Dual-JWT) مع التحقق الصارم من ملكية البيانات (RBAC)",
        "رفع الملفات الكبيرة مباشرة إلى التخزين السحابي (S3 / R2 / Blob)",
        "الربط مع بوابات الدفع، واتساب/Twilio، ونماذج الذكاء الاصطناعي (Gemini/OpenAI)",
        "فحص جاهزية آلي للخادم مع تسجيل منظم للعمليات (Structured Logging)",
      ],
      recommendedStack: ["Node.js", "NestJS", "Express 5", "Python FastAPI", "Django", ".NET / Laravel"],
      icon: "server",
      bentoSpan: "col-span-12 lg:col-span-5",
      accent: "from-cyan-500/20 via-blue-500/5 to-transparent",
    },
    {
      id: "erp-automation",
      title: "أنظمة الـ ERP وإدارة المخازن والحسابات المالية",
      tagline: "أتمتة العمليات التجارية والمحاسبية",
      description:
        "تطوير أنظمة إدارة المؤسسات وشركات التوزيع والمخازن للقضاء على العمل الورقي والإكسيل اليدوي، مع إصدار الفواتير وكشوف الحسابات آلياً.",
      deliverables: [
        "دورة حياة متكاملة للطلبات مع خصم المخزون الآلي وتتبع تواريخ الصلاحية",
        "إصدار كشوف الحسابات وإيصالات الدفع بصيغة PDF وتوليد الباركود",
        "استيراد وتصدير البيانات الضخمة من ملفات Excel مع تقارير مالية",
        "إرسال تنبيهات التحصيل والمطالبات المالية عبر واتساب والبريد الإلكتروني",
      ],
      recommendedStack: ["Python", "FastAPI", "SQLAlchemy", "React", "ReportLab", "Pandas"],
      icon: "cpu",
      bentoSpan: "col-span-12 lg:col-span-5",
      accent: "from-violet-500/20 via-purple-500/5 to-transparent",
    },
    {
      id: "database-cloud",
      title: "هندسة قواعد البيانات، الأداء الفائق والـ DevOps",
      tagline: "استعلامات سريعة ونشر سحابي مؤتمت",
      description:
        "تصميم قواعد البيانات العلائقية وغير العلائقية مع النسخ الاحتياطي التلقائي، التخزين المؤقت (Caching)، وخطوط النشر المستمر (CI/CD) لضمان عمل نظامك على مدار الساعة.",
      deliverables: [
        "تصميم الجداول والعلاقات وفهرسة الاستعلامات عبر Prisma وSQLAlchemy",
        "تسريع الأداء وتخفيف الضغط على قاعدة البيانات باستخدام Redis",
        "بناء خطوط فحص ونشر تلقائية عبر GitHub Actions",
        "تشغيل مرن على Vercel، حاويات Docker، أو خوادم VPS والسحابة",
      ],
      recommendedStack: ["PostgreSQL", "MongoDB Atlas", "MySQL", "Redis", "Prisma", "GitHub Actions"],
      icon: "database",
      bentoSpan: "col-span-12 lg:col-span-7",
      accent: "from-amber-500/20 via-orange-500/5 to-transparent",
    },
  ],
};

export const projectsDataByLocale: Record<Locale, ProjectCaseStudy[]> = {
  en: [
    {
      id: "wahy-wa-namaa-academy",
      slug: "wahy-wa-namaa-academy",
      title: "Wahy Wa Namaa Academy (أكاديمية وَحْيٌ وَنَمَاء)",
      subtitle: "Enterprise EdTech Platform, Live WebRTC Classrooms & Multi-Role LMS",
      category: "EdTech & Live LMS",
      status: "Live in Production",
      featured: true,
      imageUrl: "/images/projects/wahy-academy.png",
      liveUrl: "https://wahywanamaa.com",
      liveDomainLabel: "wahywanamaa.com",
      mirrorUrl: "https://wahy-wa-namaa-academy.vercel.app",
      githubUrl: "https://github.com/hamyn203-commits/wahy-wa-namaa-academy-",
      summary:
        "A comprehensive production EdTech and Learning Management System engineered for interactive live education, featuring 4 dedicated role portals (Student, Teacher, Parent, and Admin), real-time LiveKit video classrooms, AI learning assistants, and 9-language global SEO coverage.",
      challenge:
        "Building a real-time educational platform required strict session-bound security for live video rooms, zero-bottleneck large homework/document uploads without exhausting serverless memory limits, and seamless synchronization across students, teachers, and parents.",
      solution:
        "Architected a decoupled React 19 frontend and portable Express 5 / Node.js 22 API backed by MongoDB Atlas. Implemented dual-secret JWT authentication, signed short-lived teacher verification proofs, session-verified LiveKit WebRTC tokens, and a provider-neutral S3 object storage pipeline with automated 6-hour CI production readiness checks.",
      engineeringHighlights: [
        "4 isolated role portals (Student, Teacher, Parent, Admin) with strict ownership & RBAC enforcement",
        "Direct-to-object-storage private file uploads bypassing serverless payload limits",
        "Session-bound LiveKit WebRTC classrooms + optional AI evaluation integrations (Gemini/OpenAI)",
        "Automated 9-language SEO sitemap & IndexNow submission + Playwright E2E & visual regression suites",
      ],
      metrics: [
        { label: "Role Portals", value: "4 Portals" },
        { label: "Global SEO", value: "9 Languages" },
        { label: "Health Gate", value: "/api/readiness" },
        { label: "Testing", value: "Playwright E2E" },
      ],
      techStack: [
        "React 19",
        "Vite",
        "Node.js 22",
        "Express 5",
        "MongoDB Atlas",
        "LiveKit WebRTC",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "Playwright",
      ],
      accentColor: "emerald",
      architecture: [
        {
          id: "client-edge",
          layer: "01 · Client & SEO Edge",
          title: "React 19 SPA/PWA + 9-Language SEO Engine",
          tech: ["React 19", "Tailwind CSS", "Framer Motion", "IndexNow API"],
          description:
            "Responsive multi-portal UI with role-aware routing, progressive web app support, and automated multilingual sitemap indexing on `wahywanamaa.com`.",
          metricsOrSpecs: "Design-token verified + Playwright visual snapshot baseline",
        },
        {
          id: "api-gateway",
          layer: "02 · API & Security Gateway",
          title: "Portable Express 5 API + Dual-JWT RBAC",
          tech: ["Node.js 22", "Express 5", "JWT Access/Refresh", "Zod Validation"],
          description:
            "Stateless API runtime portable across Vercel, Docker, or VPS. Blocks privilege escalation on registration and validates cryptographic teacher phone proofs.",
          metricsOrSpecs: "Fail-closed security baseline + structured request-ID logging",
        },
        {
          id: "realtime-media",
          layer: "03 · Real-Time & Storage Pipeline",
          title: "LiveKit WebRTC Rooms + Private Object Storage",
          tech: ["LiveKit SDK", "S3-Compatible Adapter", "Vercel Blob / R2", "Twilio / Resend"],
          description:
            "Generates room tokens strictly bound to active booked sessions. Large assignments and private teacher credentials upload directly to private object storage.",
          metricsOrSpecs: "Zero API payload bottleneck on large media uploads",
        },
        {
          id: "data-persistence",
          layer: "04 · Data & Observability Layer",
          title: "MongoDB Atlas + Automated Readiness Probes",
          tech: ["MongoDB Atlas", "GitHub Actions Cron", "Health & Readiness Endpoints"],
          description:
            "Document persistence for enrollments, placement locks, homework workflows, and audit trails, monitored every 6 hours via automated production health checks.",
          metricsOrSpecs: "Traffic routed only when `/api/readiness` confirms DB health",
        },
      ],
    },
    {
      id: "makhzan-al-neda-erp",
      slug: "makhzan-al-neda-pharma-erp",
      title: "Makhzan Al-Neda — Pharmaceutical Distribution & Inventory ERP",
      subtitle: "Client-Server B2B Warehouse ERP, Financial Ledger & Automated Invoicing",
      category: "Enterprise ERP & FinTech",
      status: "Enterprise Release",
      featured: true,
      imageUrl: "/images/projects/pharma-erp.png",
      githubUrl: "https://github.com/hamyn203-commits/-",
      summary:
        "A comprehensive B2B pharmaceutical warehouse and pharmacy distribution ERP system featuring a FastAPI backend, SQLAlchemy 2.0 ORM, automated barcode & PDF financial statement generation, and a native bilingual (Arabic RTL / English) desktop client.",
      challenge:
        "Pharmaceutical distributors deal with thousands of SKUs, strict expiry dates, complex credit balances across client pharmacies, and multi-user operations (Admins, Accountants, Sales Representatives) requiring zero accounting discrepancies.",
      solution:
        "Built a decoupled Client-Server architecture powered by a FastAPI REST backend and SQLAlchemy 2.0 transactional models. Integrated automated stock deduction upon order approval, dynamic balance ledgers, PDF invoice/statement generation via ReportLab, Excel bulk ingestion, and 1-click WhatsApp/Email payment reminders.",
      engineeringHighlights: [
        "Transactional order workflow: Pending -> Approval/Rejection -> Automatic Stock Deduction & Ledger Update",
        "Granular RBAC for Admin (Full), Accountant (Financials & Reports), and Sales Rep (Orders & Pharmacies)",
        "Automated PDF Account Statements, Payment Receipts, & EAN/Code128 Barcode generation",
        "Full Audit Logging for every sensitive operation + automated daily SQLite database backup engine",
      ],
      metrics: [
        { label: "Architecture", value: "Client-Server REST" },
        { label: "Access Roles", value: "3 RBAC Tiers" },
        { label: "Reporting", value: "PDF / CSV / Charts" },
        { label: "Data Safety", value: "Auto Daily Backups" },
      ],
      techStack: [
        "Python",
        "FastAPI",
        "SQLAlchemy 2.0",
        "Pydantic v2",
        "SQLite",
        "ReportLab PDF",
        "Pandas & OpenPyXL",
        "CustomTkinter RTL",
        "Uvicorn",
      ],
      accentColor: "cyan",
      architecture: [
        {
          id: "erp-client",
          layer: "01 · Native Bilingual Client",
          title: "CustomTkinter GUI + Bidirectional RTL Engine",
          tech: ["CustomTkinter", "Arabic-Reshaper", "Python-Bidi", "Matplotlib"],
          description:
            "Multi-tab enterprise interface (Dashboard, Inventory, Expiry Alerts, Orders, Pharmacies, Payments, Account Statements, Audit Logs) with health-checked server startup.",
          metricsOrSpecs: "Full Arabic RTL & English localization (`lang_ar.json` / `lang_en.json`)",
        },
        {
          id: "erp-api",
          layer: "02 · Core REST API & Business Logic",
          title: "FastAPI + Pydantic v2 Validation Engine",
          tech: ["FastAPI", "Uvicorn", "Pydantic v2", "REST API Client"],
          description:
            "Exposes network-accessible endpoints (`0.0.0.0:8000`) enabling multiple warehouse terminals to operate concurrently against a centralized source of truth.",
          metricsOrSpecs: "Strict schema validation for orders, discounts, returns & collections",
        },
        {
          id: "erp-documents",
          layer: "03 · Document, Barcode & Notification Engine",
          title: "ReportLab PDF Generator + Excel ETL + WhatsApp Alerts",
          tech: ["ReportLab", "Python-Barcode", "Pandas", "OpenPyXL", "WhatsApp / SMTP"],
          description:
            "Generates itemized PDF account statements and payment receipts on the fly, imports bulk inventory from Excel sheets, and dispatches collection reminders.",
          metricsOrSpecs: "Instant PDF statement export & barcode label rendering",
        },
        {
          id: "erp-db",
          layer: "04 · Transactional Storage & Audit Trail",
          title: "SQLAlchemy 2.0 ORM + Automated Backup Scheduler",
          tech: ["SQLAlchemy 2.0", "SQLite Transactional DB", "Audit Log Engine", "JSON Sync"],
          description:
            "Maintains strict referential integrity across suppliers, batches, expiry dates, orders, and pharmacy credit balances with immutable audit logs.",
          metricsOrSpecs: "Automated daily snapshot backups in `backups/`",
        },
      ],
    },
    {
      id: "wahy-v2-enterprise-monorepo",
      slug: "wahy-v2-nextjs-nestjs-architecture",
      title: "Wahy Platform V2 — Modular Next.js & NestJS Monorepo",
      subtitle: "Enterprise Type-Safe Architecture with Prisma ORM & Relational Schema",
      category: "Multi-Tenant SaaS",
      status: "V2 Architecture",
      featured: false,
      imageUrl: "/images/projects/wahy-v2.png",
      githubUrl: "https://github.com/hamyn203-commits/wahy-wa-namaa-academy-",
      summary:
        "Next-generation architectural scaffold engineered to evolve high-growth platforms into a strict type-safe monorepo combining Next.js SSR/App Router on the frontend with a modular NestJS enterprise backend and Prisma ORM.",
      challenge:
        "Preparing a rapidly growing platform for enterprise multi-tenancy and strict relational data integrity without disrupting live production traffic.",
      solution:
        "Designed a side-by-side V2 monorepo architecture (`platform/`) leveraging Next.js for hybrid rendering, NestJS dependency-injected modules for domain isolation, and Prisma ORM for declarative database migrations and end-to-end TypeScript safety.",
      engineeringHighlights: [
        "Domain-driven NestJS modular backend architecture with strict DTO validation",
        "Declarative relational schema modeling and type-safe queries via Prisma ORM",
        "Route-by-route migration readiness with zero impact on active production traffic",
        "Unified TypeScript contracts shared across web and API workspaces",
      ],
      metrics: [
        { label: "Pattern", value: "Modular Monorepo" },
        { label: "Type Safety", value: "100% End-to-End" },
        { label: "Backend", value: "NestJS DI" },
        { label: "ORM", value: "Prisma Schema" },
      ],
      techStack: ["Next.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      accentColor: "violet",
      architecture: [
        {
          id: "v2-web",
          layer: "01 · SSR & Edge Web App",
          title: "Next.js App Router Frontend",
          tech: ["Next.js", "React", "TypeScript", "Server Components"],
          description: "Server-rendered pages and streaming UI components for optimal Core Web Vitals.",
          metricsOrSpecs: "Zero client bundle bloat for static & SEO routes",
        },
        {
          id: "v2-api",
          layer: "02 · Modular Enterprise API",
          title: "NestJS Domain Modules & Guards",
          tech: ["NestJS", "TypeScript", "Passport / JWT Guards", "Class-Validator"],
          description: "Clean separation of controllers, domain services, and authentication guards.",
          metricsOrSpecs: "Dependency injection & modular testability",
        },
        {
          id: "v2-data",
          layer: "03 · Relational Data Layer",
          title: "Prisma ORM + PostgreSQL",
          tech: ["Prisma Client", "Prisma Migrate", "PostgreSQL"],
          description: "Auto-generated type-safe database client with deterministic schema migrations.",
          metricsOrSpecs: "ACID compliance & relational integrity",
        },
      ],
    },
  ],
  ar: [
    {
      id: "wahy-wa-namaa-academy",
      slug: "wahy-wa-namaa-academy",
      title: "أكاديمية وَحْيٌ وَنَمَاء (Wahy Wa Namaa Academy)",
      subtitle: "منصة تعليمية متكاملة (LMS) مع فصول بث مباشر WebRTC وأدوات ذكاء اصطناعي",
      category: "منصة تعليمية EdTech & LMS",
      status: "يعمل في الإنتاج الفعلي",
      featured: true,
      imageUrl: "/images/projects/wahy-academy.png",
      liveUrl: "https://wahywanamaa.com",
      liveDomainLabel: "wahywanamaa.com",
      mirrorUrl: "https://wahy-wa-namaa-academy.vercel.app",
      githubUrl: "https://github.com/hamyn203-commits/wahy-wa-namaa-academy-",
      summary:
        "منصة تعليمية إنتاجية متكاملة لتعليم القرآن الكريم والتجويد عن بُعد، تضم 4 بوابات مستقلة (الطالب، المعلم، ولي الأمر، والإدارة)، مع غرف فصول افتراضية مباشرة عبر LiveKit، وأدوات مساعدة بالذكاء الاصطناعي، وتهيئة شاملة لمحركات البحث بـ 9 لغات عالمية.",
      challenge:
        "بناء منصة تعليم مباشر يتطلب حماية صارمة لربط غرف الفيديو بالجلسات المحجوزة فقط، ورفع ملفات الواجبات والوثائق الكبيرة دون استهلاك موارد الخادم (Serverless Limits)، ومزامنة فورية بين الطالب والمعلم وولي الأمر.",
      solution:
        "تصميم معمارية مفصولة تجمع بين واجهة React 19 فائقة السرعة وخادم Express 5 / Node.js 22 مرن متصل بـ MongoDB Atlas. تم تطبيق مصادقة JWT مزدوجة، إثباتات مشفرة لتوثيق المعلمين، تصاريح غرف بث مباشر مربوطة بالجلسة، ورفع مباشر للملفات إلى Object Storage مع فحص جاهزية آلي كل 6 ساعات.",
      engineeringHighlights: [
        "4 لوحات تحكم معزولة الصلاحيات (طالب، معلم، ولي أمر، إدارة) مع التحقق الصارم من ملكية الملفات",
        "رفع الملفات الكبيرة مباشرة إلى التخزين السحابي الخاص دون المرور بقيود الـ API",
        "فصول بث مباشر تفاعلية عبر LiveKit WebRTC + تكامل اختياري مع نماذج الذكاء الاصطناعي",
        "أتمتة خرائط الموقع بـ 9 لغات مع IndexNow + اختبارات شاملة عبر Playwright E2E",
      ],
      metrics: [
        { label: "بوابات النظام", value: "4 لوحات تحكم" },
        { label: "دعم اللغات والـ SEO", value: "9 لغات" },
        { label: "بوابة الجاهزية", value: "/api/readiness" },
        { label: "الاختبارات الآلية", value: "Playwright E2E" },
      ],
      techStack: [
        "React 19",
        "Vite",
        "Node.js 22",
        "Express 5",
        "MongoDB Atlas",
        "LiveKit WebRTC",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "Playwright",
      ],
      accentColor: "emerald",
      architecture: [
        {
          id: "client-edge",
          layer: "01 · طبقة الواجهة والـ SEO",
          title: "React 19 SPA/PWA + محرك SEO بـ 9 لغات",
          tech: ["React 19", "Tailwind CSS", "Framer Motion", "IndexNow API"],
          description:
            "واجهة مستخدم متجاوبة متعددة البوابات مع توجيه ذكي حسب الصلاحية، دعم تطبيقات الويب التقدمية PWA، وفهرسة آلية على الدومين الرسمي `wahywanamaa.com`.",
          metricsOrSpecs: "فحص آلي للتصميم + اختبارات مطابقة بصرية عبر Playwright",
        },
        {
          id: "api-gateway",
          layer: "02 · بوابة الـ API والأمان",
          title: "خادم Express 5 مرن + حماية Dual-JWT RBAC",
          tech: ["Node.js 22", "Express 5", "JWT Access/Refresh", "Zod Validation"],
          description:
            "خادم API قابل للتشغيل على Vercel أو Docker أو أي VPS، يمنع تصعيد الصلاحيات عند التسجيل ويتحقق من التوقيع الرقمي لتوثيق هواتف المعلمين.",
          metricsOrSpecs: "أمان Fail-Closed + تتبع الطلبات عبر Request-ID",
        },
        {
          id: "realtime-media",
          layer: "03 · البث المباشر والتخزين السحابي",
          title: "غرف LiveKit WebRTC + تخزين سحابي خاص",
          tech: ["LiveKit SDK", "S3-Compatible Adapter", "Vercel Blob / R2", "Twilio / Resend"],
          description:
            "توليد مفاتيح دخول الغرف المباشرة فقط للجلسات المحجوزة فعلياً، مع رفع ملفات الواجبات ووثائق المعلمين مباشرة إلى التخزين السحابي الخاص.",
          metricsOrSpecs: "صفر اختناق في الخادم عند رفع الملفات الكبيرة",
        },
        {
          id: "data-persistence",
          layer: "04 · قاعدة البيانات والمراقبة الآلية",
          title: "MongoDB Atlas + فحص الجاهزية التلقائي",
          tech: ["MongoDB Atlas", "GitHub Actions Cron", "Health & Readiness Endpoints"],
          description:
            "حفظ بيانات الطلاب، تحديد المستويات، الواجبات، وسجلات الأمان في MongoDB Atlas مع فحص آلي لصحة النظام كل 6 ساعات.",
          metricsOrSpecs: "لا يتم توجيه الزيارات إلا عند تأكيد `/api/readiness` لسلامة قاعدة البيانات",
        },
      ],
    },
    {
      id: "makhzan-al-neda-erp",
      slug: "makhzan-al-neda-pharma-erp",
      title: "مخزن الندى — نظام ERP لإدارة شركات توزيع الأدوية والمخازن",
      subtitle: "نظام Client-Server لإدارة المخزون، الحسابات المالية، والفوترة الآلية للصيدليات",
      category: "نظام ERP ومحاسبة للشركات",
      status: "إصدار مؤسسي",
      featured: true,
      imageUrl: "/images/projects/pharma-erp.png",
      githubUrl: "https://github.com/hamyn203-commits/-",
      summary:
        "نظام ERP متكامل لإدارة مخازن وشركات توزيع الأدوية والتعامل مع الصيدليات، يعمل ببنية Client-Server عبر خادم FastAPI وقاعدة بيانات بـ SQLAlchemy 2.0، مع إصدار آلي لكشوف الحسابات بصيغة PDF وتوليد الباركود وواجهة عربية/إنجليزية كاملة.",
      challenge:
        "تتعامل شركات توزيع الأدوية مع آلاف الأصناف، تواريخ الصلاحية الحرجة، أرصدة المديونيات المعقدة للصيدليات، وتعدد المستخدمين (مدير، محاسب، مندوب مبيعات) مما يتطلب دقة محاسبية ومخزنية بنسبة 100%.",
      solution:
        "بناء معمارية Client-Server مفصولة تعتمد على خادم FastAPI REST ونماذج SQLAlchemy 2.0. تم دمج الخصم التلقائي من المخزون فور اعتماد الطلب، تحديث أرصدة الصيدليات لحظياً، توليد فواتير وكشوف حساب PDF عبر ReportLab، استيراد الأصناف من Excel، وإرسال تذكيرات السداد عبر واتساب بضغطة زر.",
      engineeringHighlights: [
        "دورة طلبات محكمة: قيد المراجعة -> اعتماد/رفض -> خصم آلي من المخزون وتحديث رصيد الصيدلية",
        "نظام صلاحيات (RBAC) لـ 3 أدوار: المدير (صلاحية كاملة)، المحاسب (المالية والتقارير)، والمندوب (الطلبات والصيدليات)",
        "توليد آلي لكشوف الحسابات وإيصالات التحصيل بصيغة PDF + طباعة ملصقات الباركود",
        "سجل تدقيق شامل (Audit Log) لكل عملية حساسة + نسخ احتياطي يومي تلقائي لقاعدة البيانات",
      ],
      metrics: [
        { label: "المعمارية", value: "Client-Server REST" },
        { label: "الصلاحيات", value: "3 مستويات RBAC" },
        { label: "التقارير المالية", value: "PDF / CSV / رسوم" },
        { label: "أمان البيانات", value: "نسخ احتياطي يومي" },
      ],
      techStack: [
        "Python",
        "FastAPI",
        "SQLAlchemy 2.0",
        "Pydantic v2",
        "SQLite",
        "ReportLab PDF",
        "Pandas & OpenPyXL",
        "CustomTkinter RTL",
        "Uvicorn",
      ],
      accentColor: "cyan",
      architecture: [
        {
          id: "erp-client",
          layer: "01 · واجهة سطح المكتب ثنائية اللغة",
          title: "واجهة CustomTkinter + محرك دعم العربية RTL",
          tech: ["CustomTkinter", "Arabic-Reshaper", "Python-Bidi", "Matplotlib"],
          description:
            "واجهة مؤسسية متعددة التبويبات (لوحة الإحصائيات، المخزون، تنبيهات الصلاحية، الطلبات، الصيدليات، المدفوعات، كشوف الحساب، سجل التدقيق) مع فحص تلقائي لجاهزية الخادم.",
          metricsOrSpecs: "دعم كامل للغتين العربية (RTL) والإنجليزية (`lang_ar.json` / `lang_en.json`)",
        },
        {
          id: "erp-api",
          layer: "02 · خادم الـ API والمنطق المحاسبي",
          title: "FastAPI + محرك التحقق Pydantic v2",
          tech: ["FastAPI", "Uvicorn", "Pydantic v2", "REST API Client"],
          description:
            "يوفر نقاط اتصال شبكية (`0.0.0.0:8000`) تتيح لعدة أجهزة داخل المؤسسة العمل في نفس الوقت على قاعدة بيانات مركزية موحدة.",
          metricsOrSpecs: "تحقق صارم من صحة البيانات للطلبات، الخصومات، المرتجعات والتحصيلات",
        },
        {
          id: "erp-documents",
          layer: "03 · محرك المستندات والباركود والتنبيهات",
          title: "مولد تقارير ReportLab PDF + معالجة Excel + تنبيهات واتساب",
          tech: ["ReportLab", "Python-Barcode", "Pandas", "OpenPyXL", "WhatsApp / SMTP"],
          description:
            "يُصدر كشوف الحسابات التفصيلية وإيصالات السداد بصيغة PDF لحظياً، ويستورد قوائم الأدوية من ملفات Excel، ويرسل مطالبات السداد عبر واتساب والإيميل.",
          metricsOrSpecs: "تصدير فوري لكشوف الحساب PDF وتوليد الباركود",
        },
        {
          id: "erp-db",
          layer: "04 · قاعدة البيانات وسجل التدقيق",
          title: "SQLAlchemy 2.0 ORM + جدولة النسخ الاحتياطي الآلي",
          tech: ["SQLAlchemy 2.0", "SQLite Transactional DB", "Audit Log Engine", "JSON Sync"],
          description:
            "يحافظ على الترابط المحاسبي الدقيق بين الموردين، الأصناف، تواريخ الصلاحية، الطلبات، وأرصدة الصيدليات مع سجل تدقيق غير قابل للتلاعب.",
          metricsOrSpecs: "نسخ احتياطي يومي تلقائي في مجلد `backups/`",
        },
      ],
    },
    {
      id: "wahy-v2-enterprise-monorepo",
      slug: "wahy-v2-nextjs-nestjs-architecture",
      title: "منصة وَحْي الإصدار الثاني V2 — معمارية Monorepo بـ Next.js و NestJS",
      subtitle: "بنية مؤسسية فائقة الأمان النوعي (Type-Safe) مع Prisma ORM وقاعدة بيانات علائقية",
      category: "بنية SaaS متعددة المستأجرين",
      status: "معمارية الجيل الثاني V2",
      featured: false,
      imageUrl: "/images/projects/wahy-v2.png",
      githubUrl: "https://github.com/hamyn203-commits/wahy-wa-namaa-academy-",
      summary:
        "معمارية الجيل الجديد المصممة لتطوير المنصات سريعة النمو إلى بيئة Monorepo صارمة الأمان النوعي تجمع بين Next.js App Router في الواجهة الأمامية وخادم NestJS المعياري وPrisma ORM.",
      challenge:
        "تجهيز المنصة للتوسع المؤسسي متعدد المستأجرين (Multi-Tenancy) وضمان التكامل العلائقي الصارم للبيانات دون التأثير على حركة الزوار الحية في الإنتاج.",
      solution:
        "تصميم معمارية V2 متوازية (`platform/`) تعتمد على Next.js للرندر الهجين SSR، ووحدات NestJS المعزولة بنظام حقن الاعتماديات (Dependency Injection)، وPrisma ORM لإدارة مخطط قاعدة البيانات بأمان نوعي كامل.",
      engineeringHighlights: [
        "هندسة خلفية معيارية بـ NestJS قائمة على تقسيم النطاقات (Domain-Driven Modules)",
        "نمذجة علائقية دقيقة واستعلامات آمنة نوعياً عبر Prisma ORM",
        "جاهزية للترحيل التدريجي مساراً بمسار دون إيقاف المنصة الحية",
        "عقود بيانات TypeScript موحدة بين الواجهة الأمامية والخادم",
      ],
      metrics: [
        { label: "النمط المعماري", value: "Modular Monorepo" },
        { label: "الأمان النوعي", value: "100% Type-Safe" },
        { label: "الواجهة الخلفية", value: "NestJS DI" },
        { label: "طبقة البيانات", value: "Prisma Schema" },
      ],
      techStack: ["Next.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      accentColor: "violet",
      architecture: [
        {
          id: "v2-web",
          layer: "01 · تطبيق الويب والـ SSR",
          title: "Next.js App Router Frontend",
          tech: ["Next.js", "React", "TypeScript", "Server Components"],
          description: "صفحات مرندرة على الخادم ومكونات متدفقة لتحقيق أعلى درجات الأداء في Core Web Vitals.",
          metricsOrSpecs: "سرعة تحميل فائقة وتهيئة مثالية لمحركات البحث",
        },
        {
          id: "v2-api",
          layer: "02 · الخادم المؤسسي المعياري",
          title: "وحدات NestJS وحراس الصلاحيات (Guards)",
          tech: ["NestJS", "TypeScript", "Passport / JWT Guards", "Class-Validator"],
          description: "فصل نظيف بين المتحكمات (Controllers) والخدمات (Services) وحراس الأمان.",
          metricsOrSpecs: "حقن الاعتماديات وقابلية عالية للاختبار",
        },
        {
          id: "v2-data",
          layer: "03 · طبقة البيانات العلائقية",
          title: "Prisma ORM + PostgreSQL",
          tech: ["Prisma Client", "Prisma Migrate", "PostgreSQL"],
          description: "عميل قاعدة بيانات مولد تلقائياً مع ترحيل منظم للمخططات (Migrations).",
          metricsOrSpecs: "توافق كامل مع معايير ACID للعمليات المالية والإدارية",
        },
      ],
    },
  ],
};

export const skillsCategoriesByLocale: Record<Locale, SkillCategory[]> = {
  en: [
    {
      id: "frontend",
      title: "Frontend Engineering & UI/UX",
      subtitle: "Pixel-perfect, accessible, and ultra-responsive interfaces",
      skills: [
        { name: "React 19 & Next.js (App Router)", level: "Expert", context: "SSR, Server Actions, PWA & SEO Architecture" },
        { name: "TypeScript & Modern JavaScript (ES2024+)", level: "Expert", context: "Strict type-safe frontend & backend contracts" },
        { name: "Vue.js / Nuxt.js & Angular", level: "Advanced", context: "Component-driven SPAs & enterprise dashboards" },
        { name: "Tailwind CSS & Design Systems", level: "Expert", context: "Bento grids, Dark/Light themes, RTL/LTR & tokens" },
        { name: "Framer Motion & Interactive Data Viz", level: "Advanced", context: "Micro-interactions, Recharts & smooth transitions" },
        { name: "WebRTC (LiveKit) & Real-Time UI", level: "Production", context: "Live interactive classrooms & media streaming" },
      ],
    },
    {
      id: "backend",
      title: "Backend Architecture & APIs",
      subtitle: "High-concurrency servers, business logic, and integrations",
      skills: [
        { name: "Node.js, Express 5 & NestJS", level: "Expert", context: "Portable REST APIs, modular DI & middleware security" },
        { name: "Python, FastAPI & Django", level: "Expert", context: "High-speed async APIs, Pydantic v2 & ERP engines" },
        { name: "PHP / Laravel & .NET / C#", level: "Advanced", context: "Enterprise web applications & business systems" },
        { name: "Authentication & Security (RBAC / JWT)", level: "Expert", context: "Dual-token rotation, signed proofs & role isolation" },
        { name: "Cloud Storage & 3rd-Party Integrations", level: "Production", context: "S3/R2 direct uploads, Twilio, Resend & AI APIs" },
        { name: "Automated Document & Report Engines", level: "Expert", context: "ReportLab PDF, jsPDF, Excel ETL (Pandas/OpenPyXL)" },
      ],
    },
    {
      id: "databases",
      title: "Databases, Caching & DevOps",
      subtitle: "Data integrity, high availability, and automated testing",
      skills: [
        { name: "PostgreSQL & MySQL", level: "Expert", context: "Relational schema design, indexing & ACID transactions" },
        { name: "MongoDB Atlas & NoSQL", level: "Expert", context: "Production document modeling & aggregation pipelines" },
        { name: "Prisma ORM & SQLAlchemy 2.0", level: "Expert", context: "Type-safe queries, migrations & transactional integrity" },
        { name: "Redis & Caching Strategies", level: "Advanced", context: "Session management, rate limiting & query acceleration" },
        { name: "Playwright E2E & Visual Regression", level: "Production", context: "Automated route contract & visual snapshot testing" },
        { name: "Git, GitHub Actions CI/CD & Cloud", level: "Expert", context: "Automated readiness checks, Vercel, Docker & Linux VPS" },
      ],
    },
  ],
  ar: [
    {
      id: "frontend",
      title: "هندسة الواجهات الأمامية وتجربة المستخدم (Frontend)",
      subtitle: "واجهات عصرية فائقة السرعة ومتجاوبة مع كافة الشاشات",
      skills: [
        { name: "React 19 & Next.js (App Router)", level: "خبير", context: "SSR, Server Actions, تطبيقات PWA وهندسة الـ SEO" },
        { name: "TypeScript & Modern JavaScript (ES2024+)", level: "خبير", context: "كود آمن نوعياً وعقود بيانات صارمة بين الواجهة والخادم" },
        { name: "Vue.js / Nuxt.js & Angular", level: "متقدم", context: "بناء تطبيقات الصفحة الواحدة ولوحات التحكم المؤسسية" },
        { name: "Tailwind CSS & Design Systems", level: "خبير", context: "شبكات Bento، الوضع الليلي/النهاري، ودعم كامل للعربية RTL" },
        { name: "Framer Motion & Interactive Data Viz", level: "متقدم", context: "حركات تفاعلية ناعمة ورسوم بيانية حية عبر Recharts" },
        { name: "WebRTC (LiveKit) & Real-Time UI", level: "إنتاج فعلي", context: "غرف البث المباشر والفصول التفاعلية بالصوتوالصورة" },
      ],
    },
    {
      id: "backend",
      title: "هندسة الخوادم والواجهات البرمجية (Backend & APIs)",
      subtitle: "خوادم عالية الأداء، منطق تجاري محكم، وربط متكامل",
      skills: [
        { name: "Node.js, Express 5 & NestJS", level: "خبير", context: "واجهات REST مرنة، معمارية معيارية، وطبقات حماية متقدمة" },
        { name: "Python, FastAPI & Django", level: "خبير", context: "واجهات غير متزامنة فائقة السرعة، Pydantic v2 وأنظمة ERP" },
        { name: "PHP / Laravel & .NET / C#", level: "متقدم", context: "تطوير أنظمة المؤسسات وتطبيقات الأعمال المتكاملة" },
        { name: "الأمان وإدارة الصلاحيات (RBAC / JWT)", level: "خبير", context: "مفاتيح JWT مزدوجة، توثيق مشفر، وعزل صارم للصلاحيات" },
        { name: "التخزين السحابي والربط مع الخدمات الخارجية", level: "إنتاج فعلي", context: "رفع مباشر لـ S3/R2، ربط Twilio وResend وواجهات الذكاء الاصطناعي" },
        { name: "محركات التقارير والمستندات الآلية", level: "خبير", context: "توليد PDF بـ ReportLab وjsPDF ومعالجة ملفات Excel بـ Pandas" },
      ],
    },
    {
      id: "databases",
      title: "قواعد البيانات، التخزين المؤقت والـ DevOps",
      subtitle: "سلامة البيانات، التوافرية العالية، والاختبار الآلي",
      skills: [
        { name: "PostgreSQL & MySQL", level: "خبير", context: "تصميم الجداول العلائقية، الفهرسة، والمعاملات المالية ACID" },
        { name: "MongoDB Atlas & NoSQL", level: "خبير", context: "نمذجة البيانات المستندية وخطوط التجميع (Aggregation)" },
        { name: "Prisma ORM & SQLAlchemy 2.0", level: "خبير", context: "استعلامات آمنة، إدارة الترحيلات، وسلامة العمليات" },
        { name: "Redis & Caching Strategies", level: "متقدم", context: "إدارة الجلسات، حماية Rate Limiting، وتسريع الاستعلامات" },
        { name: "Playwright E2E & Visual Regression", level: "إنتاج فعلي", context: "اختبارات آلية للمسارات ومطابقة بصرية للواجهات" },
        { name: "Git, GitHub Actions CI/CD & Cloud", level: "خبير", context: "فحص جاهزية آلي، النشر على Vercel وDocker وخوادم Linux VPS" },
      ],
    },
  ],
};

export const workProcessStepsByLocale: Record<Locale, WorkProcessStep[]> = {
  en: [
    {
      step: "01",
      title: "Discovery & System Architecture",
      duration: "Days 1–3",
      description:
        "We clarify your business goals, user roles, and technical constraints. I design the database schema, API contracts, and UI wireframes before writing code.",
      deliverable: "Technical Blueprint, Architecture Diagram & Fixed Milestone Plan",
    },
    {
      step: "02",
      title: "Agile Full-Stack Execution",
      duration: "Iterative Sprints",
      description:
        "I build the frontend and backend in parallel with clean, modular, type-safe code. You get a live staging link to review real progress every few days.",
      deliverable: "Interactive Staging Deployment & Clean Git Repository",
    },
    {
      step: "03",
      title: "Security Hardening & Automated QA",
      duration: "Pre-Launch",
      description:
        "Every endpoint is tested for RBAC permissions, input validation, and edge cases. Frontend routes undergo responsiveness, SEO, and E2E verification.",
      deliverable: "Production Safety Audit, E2E Test Suite & Lighthouse Optimization",
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & Handover",
      duration: "Launch & Beyond",
      description:
        "Deployment to your production domain with SSL, automated backups, and health monitoring, plus complete documentation for your team.",
      deliverable: "Live Production System + Documentation & Post-Launch Support",
    },
  ],
  ar: [
    {
      step: "01",
      title: "التحليل وتصميم المعمارية (Architecture)",
      duration: "اليوم 1 – 3",
      description:
        "ندرس أهداف مشروعك، صلاحيات المستخدمين، والمتطلبات التقنية، ثم أصمم هيكل قاعدة البيانات، مسارات الـ API، وتخطيط الواجهات قبل كتابة الكود.",
      deliverable: "مخطط معماري واضح وخطة مراحل تنفيذية وزمنية محددة",
    },
    {
      step: "02",
      title: "التطوير المتكامل (Frontend & Backend)",
      duration: "مراحل متتالية",
      description:
        "أقوم ببناء الواجهة الأمامية والخادم الخلفي بالتوازي بكود نظيف وقابل للتوسع، مع تزويدك برابط معاينة حي (Staging) لمتابعة التقدم أولاً بأول.",
      deliverable: "نسخة معاينة تفاعلية حية ومستودع كود Git منظم",
    },
    {
      step: "03",
      title: "تأمين النظام والاختبارات الآلية (QA)",
      duration: "قبل الإطلاق",
      description:
        "فحص شامل لكل نقطة اتصال للتأكد من الصلاحيات (RBAC) والتحقق من المدخلات، مع اختبار سرعة الصفحات، التجاوب مع الجوال، والـ SEO.",
      deliverable: "تقرير أمان وجاهزية إنتاجية مع اختبارات آلية للأداء",
    },
    {
      step: "04",
      title: "الإطلاق الفعلي والتسليم الكامل",
      duration: "الإطلاق وما بعده",
      description:
        "ربط النظام بالدومين الرسمي مع شهادة SSL، تفعيل النسخ الاحتياطي التلقائي ومراقبة الجاهزية، وتسليمك التوثيق الكامل مع دعم فني بعد الإطلاق.",
      deliverable: "نظام يعمل في الإنتاج الفعلي + توثيق كامل ودعم فني",
    },
  ],
};

// Default exports for backward compatibility
export const servicesData = servicesDataByLocale.en;
export const projectsData = projectsDataByLocale.en;
export const skillsCategories = skillsCategoriesByLocale.en;
export const workProcessSteps = workProcessStepsByLocale.en;
