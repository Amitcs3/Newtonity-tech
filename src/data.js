import { Code2, Smartphone, Layers3, Cloud, ShieldCheck, LineChart, Globe, Database, Cpu, Lock } from "lucide-react";

export const services = [
  {
    slug: "web-development",
    icon: Code2,
    number: "01",
    title: "Web Development",
    text: "Fast, responsive websites and powerful web applications built around your business goals.",
    badge: "Full-Stack Web Engineering",
    tagline: "Modern, high-performance web applications built to scale with your ambitions.",
    overview: "We engineer resilient, modern web platforms from frontend interfaces to distributed backend architectures. Whether you need an enterprise SaaS dashboard, an interactive customer portal, or an ultra-fast headless web platform, we write clean, scalable code engineered for optimal speed, security, and search performance.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    keyFeatures: [
      {
        title: "Custom Full-Stack Development",
        description: "Tailor-made web solutions designed from scratch with modern frontend frameworks and reliable backend systems."
      },
      {
        title: "E-Commerce & SaaS Platforms",
        description: "Scalable transaction systems, subscription management, payment gateway integrations, and real-time dashboards."
      },
      {
        title: "API Architecture & Integration",
        description: "Clean RESTful and GraphQL API design, third-party software connections, and seamless microservice communication."
      },
      {
        title: "Lightning Speed & SEO Performance",
        description: "90+ Google Lighthouse scores, server-side rendering, asset optimization, and accessibility compliance out of the box."
      }
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "GraphQL", "Redis"],
    deliverables: [
      "Production-ready, thoroughly tested codebase",
      "Fully responsive design across mobile, tablet, and desktop",
      "Scalable database architecture and automated backups",
      "Interactive component design system with reusable code",
      "Continuous integration and automated deployment (CI/CD)",
      "Comprehensive API documentation and developer guides"
    ],
    benefits: [
      {
        title: "High Performance by Default",
        desc: "Pages load in milliseconds, reducing bounce rates and maximizing conversions."
      },
      {
        title: "Built to Scale Effortlessly",
        desc: "Architectures designed to handle 10x traffic spikes without breaking a sweat."
      },
      {
        title: "Maintainable & Clean Code",
        desc: "Documented, modular code that your in-house team can easily inherit and expand."
      }
    ],
    faqs: [
      {
        q: "What tech stack do you recommend for our project?",
        a: "We evaluate your business goals, scale expectations, and timeline. Commonly, we leverage React/Next.js for blazing fast user experiences coupled with Node.js/PostgreSQL on the backend, but we tailor every stack specifically to your requirements."
      },
      {
        q: "How long does a custom web development project take?",
        a: "Project timelines depend on complexity. A modern corporate website or MVP typically takes 4–6 weeks, while a complex SaaS platform or enterprise web portal can range from 8–14 weeks."
      },
      {
        q: "Will our website be mobile-responsive and SEO-optimized?",
        a: "Yes, 100%. Every web project we deliver follows a mobile-first philosophy and incorporates technical SEO best practices, structured schema markup, and performance optimization."
      }
    ]
  },
  {
    slug: "app-development",
    icon: Smartphone,
    number: "02",
    title: "App Development",
    text: "Intuitive mobile experiences that keep your customers connected wherever they go.",
    badge: "iOS & Android Mobile Solutions",
    tagline: "Native and cross-platform mobile apps crafted for speed, elegance, and high retention.",
    overview: "Mobile apps require more than just clean code—they require intuitive ergonomics, buttery-smooth animations, and unbreakable reliability. We create cross-platform and native mobile applications that give your users instant delight and keep them returning every day.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    keyFeatures: [
      {
        title: "Cross-Platform Mobile Apps",
        description: "Shared codebases powered by React Native and Flutter delivering native performance on both iOS and Android simultaneously."
      },
      {
        title: "Offline-First Data Sync",
        description: "Local data caching and seamless background synchronization ensuring uninterrupted experiences even in low-connectivity areas."
      },
      {
        title: "Push Notifications & Real-Time Events",
        description: "Personalized alerts, real-time messaging, and deep linking strategies that boost daily active engagement."
      },
      {
        title: "Biometrics & Mobile Security",
        description: "Face ID/Fingerprint authentication, encrypted local storage, secure token rotation, and app store compliance."
      }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "Redux Toolkit", "SQLite"],
    deliverables: [
      "iOS and Android store-ready build files",
      "App Store & Google Play Store publishing support",
      "Native device feature integration (Camera, GPS, Biometrics)",
      "Real-time analytics and crash reporting dashboard",
      "Complete source code repository with testing suite"
    ],
    benefits: [
      {
        title: "One Codebase, Two Platforms",
        desc: "Save up to 40% on development and maintenance costs without sacrificing native performance."
      },
      {
        title: "Smooth 60 FPS Animations",
        desc: "Fluid gesture-driven interactions that feel natural on every screen size."
      },
      {
        title: "Full App Store Support",
        desc: "We handle the entire submission, review, and approval process from start to finish."
      }
    ],
    faqs: [
      {
        q: "Should we build cross-platform or native apps?",
        a: "For most products, modern cross-platform frameworks like React Native or Flutter provide near-identical native performance while cutting development time and cost almost in half. For hardware-intensive apps (e.g. 3D games), we advise native Swift/Kotlin."
      },
      {
        q: "Do you help publish the app to the Apple App Store and Google Play?",
        a: "Yes, we handle the entire launch cycle—setting up developer accounts, configuring certificates, preparing metadata, screenshots, and addressing app store review guidelines."
      },
      {
        q: "How do you handle mobile app updates and maintenance?",
        a: "We provide post-launch maintenance, OS compatibility updates, security patches, and CodePush over-the-air updates for instant bug fixes."
      }
    ]
  },
  {
    slug: "ui-ux-design",
    icon: Layers3,
    number: "03",
    title: "UI/UX Design",
    text: "Clear, thoughtful interfaces that make complex digital experiences feel effortless.",
    badge: "Product Design & Design Systems",
    tagline: "User-centered design that turns complex workflows into effortless, delightful interactions.",
    overview: "Great design isn't just how a product looks—it's how effortlessly it solves the user's problem. We conduct user research, construct intuitive interaction patterns, and build modular design systems that make your brand stand out in a crowded digital landscape.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    keyFeatures: [
      {
        title: "User Research & Journey Mapping",
        description: "In-depth user interviews, persona creation, and empathy mapping to uncover real friction points and behavioral trends."
      },
      {
        title: "Wireframing & Clickable Prototypes",
        description: "Low and high-fidelity prototypes that allow you and your stakeholders to test and validate ideas before writing a line of code."
      },
      {
        title: "Comprehensive Design Systems",
        description: "Scalable typography scales, color palettes, atomic UI components, and tokenized design systems built in Figma."
      },
      {
        title: "Usability Testing & Conversion Design",
        description: "Task-based usability testing and visual hierarchy tuning to eliminate cognitive load and maximize user conversion."
      }
    ],
    techStack: ["Figma", "FigJam", "Adobe XD", "Principle", "Framer", "Storybook", "Zeroheight"],
    deliverables: [
      "Complete Figma design workspace with auto-layout components",
      "Interactive clickable prototype for investor and user testing",
      "Comprehensive design system with reusable tokens & UI kit",
      "Responsive screen specs for mobile, tablet, and desktop",
      "Developer handoff documentation with asset exports"
    ],
    benefits: [
      {
        title: "Reduced Development Rework",
        desc: "Prototyping and testing beforehand eliminates costly rewrites during engineering."
      },
      {
        title: "Consistent Brand Experience",
        desc: "A unified visual language across every touchpoint strengthens trust and loyalty."
      },
      {
        title: "Measurably Higher Conversions",
        desc: "Clear visual hierarchies and frictionless user flows turn visitors into loyal users."
      }
    ],
    faqs: [
      {
        q: "What do we receive at the end of the design phase?",
        a: "You get organized Figma project files with interactive prototypes, a production-ready design system with components, variants, design tokens, and clear developer handoff specs."
      },
      {
        q: "Can you redesign our existing application?",
        a: "Yes. We frequently conduct UX audits of existing applications, identify bottlenecks and UX debt, and redesign interfaces to modernize the aesthetic and boost metrics."
      },
      {
        q: "How many revisions do we get?",
        a: "We work iteratively in agile design sprints with continuous feedback check-ins, ensuring alignment at each stage rather than saving revisions for the end."
      }
    ]
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    number: "04",
    title: "Cloud & DevOps",
    text: "Reliable infrastructure, smooth deployments and scalable cloud foundations.",
    badge: "Cloud Architecture & Automation",
    tagline: "Resilient cloud infrastructure and automated pipelines engineered for 99.99% uptime.",
    overview: "Modern digital products demand high availability, rock-solid security, and frictionless release cycles. We design resilient cloud architectures on AWS, GCP, and Azure, automating continuous delivery pipelines so your team can deploy updates with complete confidence.",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    keyFeatures: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Declarative, version-controlled cloud infrastructure provisioning using Terraform and AWS CloudFormation."
      },
      {
        title: "CI/CD Pipeline Automation",
        description: "Zero-downtime deployment pipelines with GitHub Actions, GitLab CI, or ArgoCD for rapid, automated testing and shipping."
      },
      {
        title: "Containerization & Orchestration",
        description: "Docker packaging and Kubernetes (EKS/GKE) cluster management for auto-scaling workloads under variable traffic."
      },
      {
        title: "24/7 Monitoring & Incident Alerting",
        description: "Centralized logging, APM telemetry, and proactive alert triggers using Prometheus, Grafana, and Datadog."
      }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Nginx"],
    deliverables: [
      "Automated CI/CD pipelines with automated test gates",
      "Reproducible Infrastructure as Code (Terraform) scripts",
      "Production-grade container architecture with auto-scaling",
      "Disaster recovery and automated backup strategy",
      "Security audit and network access lockdown configurations"
    ],
    benefits: [
      {
        title: "Zero-Downtime Releases",
        desc: "Deploy code updates several times a day without interrupting live users."
      },
      {
        title: "Optimized Cloud Spend",
        desc: "Right-sizing resources and utilizing spot instances to slash monthly cloud bills by 30-50%."
      },
      {
        title: "Bulletproof Security Posture",
        desc: "VPC isolation, automated vulnerability scanning, and strict principle of least privilege."
      }
    ],
    faqs: [
      {
        q: "Can you help migrate our on-premise infrastructure to AWS or GCP?",
        a: "Yes, we specialize in seamless cloud migrations with minimal downtime, assessing your workloads, selecting appropriate managed services, and orchestrating phased cutovers."
      },
      {
        q: "How do you help reduce existing cloud costs?",
        a: "We conduct cloud cost audits to identify idle resources, right-size compute instances, implement auto-scaling rules, and configure reserved instance architectures."
      },
      {
        q: "What happens if a server crashes?",
        a: "Our infrastructure designs feature auto-healing clusters, multi-zone redundancy, and automated failover so traffic redirects instantaneously without manual intervention."
      }
    ]
  },
  {
    slug: "technology-consulting",
    icon: ShieldCheck,
    number: "05",
    title: "Technology Consulting",
    text: "Practical technical guidance to help you choose the right tools and move confidently.",
    badge: "Strategic Advisory & Architecture",
    tagline: "Strategic technical guidance to help leaders make confident, future-proof tech investments.",
    overview: "Making the wrong architectural or technical decision can cost months of development time and hundreds of thousands of dollars. We advise founders, CTOs, and product leaders on technology roadmaps, legacy modernization, technical due diligence, and vendor selection.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    keyFeatures: [
      {
        title: "System Architecture Audits",
        description: "Comprehensive code reviews, security scans, scalability assessments, and database health evaluations."
      },
      {
        title: "Technology Stack Selection",
        description: "Objective evaluation of frameworks, databases, and third-party SaaS vendors matched to your budget and growth trajectory."
      },
      {
        title: "Digital Transformation & Modernization",
        description: "Roadmapping the safe migration from monolithic legacy systems to decoupled modern microservices."
      },
      {
        title: "Technical Due Diligence",
        description: "In-depth codebase and architecture inspection for venture investors, mergers, and acquisitions."
      }
    ],
    techStack: ["Enterprise Architecture", "Microservices", "Security Compliance", "Agile Methodologies", "System Auditing"],
    deliverables: [
      "Executive technical audit report with prioritized recommendations",
      "Detailed architectural diagrams and component blueprints",
      "Technology evaluation matrix with cost/effort trade-offs",
      "12-to-24 month technology roadmap and scaling plan",
      "Security and compliance gap analysis documentation"
    ],
    benefits: [
      {
        title: "Avoid Costly Architecture Mistakes",
        desc: "Save tens of thousands in engineering rework by choosing the right technical foundation early."
      },
      {
        title: "Accelerated Time to Market",
        desc: "Unblock technical bottlenecks and guide engineering teams toward rapid execution."
      },
      {
        title: "Unbiased, Independent Advice",
        desc: "We recommend what is best for your product, not what is trendy or vendor-sponsored."
      }
    ],
    faqs: [
      {
        q: "Who is technology consulting designed for?",
        a: "It is ideal for startups building their initial product architecture, growing scale-ups facing scalability bottlenecks, and established businesses seeking to modernize legacy software."
      },
      {
        q: "How does a typical consulting engagement work?",
        a: "We start with a 1-week discovery and codebase audit, followed by architectural interviews with your team. We then synthesize findings into an actionable technical roadmap with step-by-step guidance."
      },
      {
        q: "Can you assist with hiring or interviewing tech talent?",
        a: "Yes, we frequently help founders evaluate technical candidates, craft coding challenges, and conduct final technical interviews."
      }
    ]
  },
  {
    slug: "digital-growth",
    icon: LineChart,
    number: "06",
    title: "Digital Growth",
    text: "SEO-ready foundations, analytics and ongoing improvements that support growth.",
    badge: "Data Analytics & Conversion Optimization",
    tagline: "Data-driven performance optimization, technical SEO, and conversion science.",
    overview: "Building a world-class product is only half the battle—people need to discover it, understand its value, and convert into paying customers. We combine technical search engine optimization, advanced web analytics, and conversion rate optimization (CRO) to accelerate your business growth.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    keyFeatures: [
      {
        title: "Technical SEO & Core Web Vitals",
        description: "Structured data schema, crawl budget optimization, canonical auditing, and Core Web Vitals speed optimization."
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Heatmap analysis, session replay reviews, and A/B testing to turn high-intent visitors into qualified leads."
      },
      {
        title: "Advanced Analytics Architecture",
        description: "Event-based tracking with Google Analytics 4, Mixpanel, and custom conversion funnel tracking."
      },
      {
        title: "Content & Keyword Strategy",
        description: "Competitive keyword gap analysis and search-intent content clustering to dominate organic search rankings."
      }
    ],
    techStack: ["Google Analytics 4", "Search Console", "Mixpanel", "Hotjar", "SEMrush", "Google Tag Manager", "SpeedCurve"],
    deliverables: [
      "Technical SEO audit and automated issue remediation",
      "Custom analytics dashboard tracking key business KPIs",
      "Conversion funnel analysis with actionable experiment list",
      "Keyword research matrix and target ranking roadmap",
      "Bi-weekly performance reports and strategic recommendations"
    ],
    benefits: [
      {
        title: "Sustainable Organic Traffic",
        desc: "Drive recurring, high-intent traffic without constantly increasing your ad spend."
      },
      {
        title: "Higher Conversion Rates",
        desc: "Turn existing traffic into significantly more leads, sign-ups, and sales."
      },
      {
        title: "Transparent, Actionable Data",
        desc: "Clear visual dashboards so you always know exactly which channels generate ROI."
      }
    ],
    faqs: [
      {
        q: "How soon can we expect to see results from SEO and growth optimization?",
        a: "Technical fixes and conversion rate adjustments often show positive results within 2–4 weeks. Broad organic search rankings typically compound over 3–6 months."
      },
      {
        q: "How do you measure success?",
        a: "We agree on concrete business KPIs upfront: organic traffic growth, keyword ranking improvements, conversion rates, and cost per acquisition (CPA)."
      },
      {
        q: "Will we get access to our own analytics dashboards?",
        a: "Yes! We build automated, intuitive dashboards in Google Looker Studio or your tool of choice so you can monitor your key performance metrics in real time."
      }
    ]
  }
];

export const projects = [
  {
    type: "WEB PLATFORM",
    name: "Nexa Commerce",
    description: "A streamlined shopping experience designed to turn browsing into buying.",
    gradient: "from-blue-200 via-indigo-200 to-blue-300",
    tag: "E-commerce",
    index: "01"
  },
  {
    type: "SAAS DASHBOARD",
    name: "Orbit Analytics",
    description: "A clear, data-rich workspace that makes business performance easier to understand.",
    gradient: "from-violet-200 via-purple-200 to-violet-300",
    tag: "Product Design",
    index: "02"
  },
  {
    type: "BRAND WEBSITE",
    name: "Forma Studio",
    description: "A distinctive digital home for a creative brand with a story to tell.",
    gradient: "from-teal-200 via-cyan-200 to-teal-300",
    tag: "Web Design",
    index: "03"
  }
];

export const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" }
];

export const teamValues = [
  {
    icon: Globe,
    title: "Global Mindset",
    text: "We build for the world, thinking beyond boundaries and creating solutions that scale."
  },
  {
    icon: Cpu,
    title: "Tech Excellence",
    text: "We use cutting-edge technologies to deliver performant, future-ready digital products."
  },
  {
    icon: Lock,
    title: "Security First",
    text: "Security is baked in from day one, not bolted on at the end."
  },
  {
    icon: Database,
    title: "Data Driven",
    text: "Every decision is backed by data, ensuring measurable outcomes for your business."
  }
];
