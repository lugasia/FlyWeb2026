// =============================================================================
// FLYCOMM SITE CONTENT — Single source of truth
// Edit this file to add/update content across every page
// =============================================================================

export const brand = {
  name: "Flycomm",
  tagline: "See What Others Can't",
  subtitle: "AI-Powered Wireless Intelligence",
  description:
    "Real-world wireless intelligence that reveals coverage gaps, detects anomalies, and transforms spectrum data into strategic advantage.",
  fullDescription:
    "The accuracy of a Drive Test. The scale of Simulation. The intelligence of AI. All in one platform — deployed in under an hour, zero core integration.",
  email: "sales@flycomm.co",
  demoUrl: "https://flycomm.co/demo",
  platforms: {
    cloud: "https://cloud.flycomm.co",
    soc: "https://soc.flycomm.co",
    indoor: "https://indoor.flycomm.co",
  },
};

export const nav = [
  { label: "Platform", href: "/#platform" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Telecom & Networks", href: "/solutions#telecom" },
      { label: "FlycommC2 / SOC", href: "/solutions#soc" },
      { label: "Indoor Intelligence", href: "/solutions#indoor" },
      { label: "Churn Prevention", href: "/solutions#churn" },
    ],
  },
  {
    label: "Markets",
    href: "/#markets",
    children: [
      { label: "MNO & Telco", href: "/telco" },
      { label: "Defense & HLS", href: "/defense" },
      { label: "Smart Cities", href: "/smart-cities" },
      { label: "Critical Infrastructure", href: "/defense#ci" },
      { label: "Towercos & REITs", href: "/#markets" },
      { label: "Regulators", href: "/#markets" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const heroStats = [
  { value: "94%", label: "Coverage Accuracy", icon: "Target" },
  { value: "<1hr", label: "Time to Deploy", icon: "Zap" },
  { value: "3x", label: "ROI on Investments", icon: "TrendingUp" },
  { value: "40%", label: "Fewer Complaints", icon: "ArrowDownRight" },
];

// -- SOLUTIONS / PRODUCTS --

export interface Product {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  icon: string; // path to PNG
  features: string[];
  stats?: { value: string; label: string }[];
  color: string; // tailwind accent
  platformUrl?: string;
  screenshot?: string;
}

export const products: Product[] = [
  {
    id: "telecom",
    title: "Flycomm Platform",
    badge: "Cloud Platform",
    headline: "Turn Network Data Into Revenue Insight",
    description:
      "Identify coverage gaps, benchmark against competitors, and link network quality directly to customer churn and revenue impact. Make investment decisions with data, not guesswork.",
    icon: "/icons/flycomm-icon.png",
    screenshot: "/screenshots/cloud.png",
    features: [
      "Coverage gap identification with real-world measurements",
      "Competitive benchmarking down to street level",
      "Churn prediction linked to network quality",
      "ROI-driven investment prioritization",
      "Indoor & outdoor coverage analysis",
      "5G readiness assessment & validation",
      "AI-powered anomaly detection",
      "Digital Twin visualization",
    ],
    stats: [
      { value: "40%", label: "Reduction in complaint tickets" },
      { value: "60%", label: "Faster coverage analysis" },
      { value: "25%", label: "Better churn prediction" },
      { value: "3x", label: "ROI on network investments" },
    ],
    color: "brand",
    platformUrl: "https://cloud.flycomm.co",
  },
  {
    id: "soc",
    title: "FlycommC2",
    badge: "Spectral Awareness",
    headline: "Spectrum Dominance Through Intelligence",
    description:
      "Real-time spectrum awareness, AI-powered anomaly detection, and automated threat response. Command and control for your RF environment — from rogue base stations to jamming detection.",
    icon: "/icons/soc.png",
    screenshot: "/screenshots/soc.png",
    features: [
      "Real-time spectrum awareness & monitoring",
      "AI-powered anomaly & threat detection",
      "Rogue base station identification",
      "IMSI catcher & jammer detection",
      "RAT degradation attack detection",
      "Multi-sensor fusion (SDK + RSU modes)",
      "Automated incident response playbooks",
      "Compliance & audit reporting",
    ],
    stats: [
      { value: "Real-time", label: "Threat detection" },
      { value: "4-tier", label: "Severity classification" },
      { value: "SDK+RSU", label: "Dual collection modes" },
      { value: "24/7", label: "Continuous monitoring" },
    ],
    color: "danger",
    platformUrl: "https://soc.flycomm.co",
  },
  {
    id: "indoor",
    title: "Flycomm Indoor",
    badge: "In-Building Intelligence",
    headline: "Map What Happens Inside",
    description:
      "Precision indoor coverage mapping, planning, and monitoring. Understand signal behavior inside buildings — floor by floor — with crowd-sourced data and AI modeling.",
    icon: "/icons/indoor.png",
    screenshot: "/screenshots/indoor.png",
    features: [
      "Floor-by-floor coverage mapping",
      "DAS & small cell optimization",
      "Crowd-sourced indoor measurements",
      "Building penetration modeling",
      "Tenant experience scoring",
      "Indoor-outdoor handover analysis",
      "Automated report generation",
      "Multi-building portfolio management",
    ],
    color: "accent",
    platformUrl: "https://indoor.flycomm.co",
  },
  {
    id: "churn",
    title: "Churn Prevention",
    badge: "Revenue Intelligence",
    headline: "Predict. Prevent. Retain.",
    description:
      "Link network quality directly to customer behavior. Identify at-risk subscribers before they leave and trigger proactive remediation — turning network data into retention intelligence.",
    icon: "/icons/flycomm-icon.png",
    features: [
      "Churn prediction modeling",
      "Network-to-experience correlation",
      "At-risk subscriber identification",
      "Proactive network remediation triggers",
      "Revenue impact analysis per cell",
      "Campaign effectiveness tracking",
      "Competitive loss zone mapping",
      "Executive ROI dashboards",
    ],
    stats: [
      { value: "25%", label: "Better churn prediction" },
      { value: "40%", label: "Fewer complaint tickets" },
      { value: "3x", label: "Return on investment" },
    ],
    color: "success",
  },
];

// -- MARKETS --

export interface Market {
  id: string;
  title: string;
  shortDesc: string;
  icon: string; // lucide name
  href: string;
  tags: string[];
}

export const markets: Market[] = [
  {
    id: "mno",
    title: "MNO & Telco",
    shortDesc:
      "Drive network ROI with coverage analytics, competitive benchmarking, and churn prevention.",
    icon: "Signal",
    href: "/telco",
    tags: ["Coverage optimization", "Churn reduction", "CAPEX planning"],
  },
  {
    id: "towercos",
    title: "Towercos & REITs",
    shortDesc:
      "Maximize tower portfolio value with data-driven site planning and tenant analytics.",
    icon: "Building",
    href: "/#markets",
    tags: ["Site selection", "Tenant analytics", "Portfolio value"],
  },
  {
    id: "defense",
    title: "Defense & HLS",
    shortDesc:
      "Spectrum awareness, RF threat detection, and assured connectivity for mission-critical operations.",
    icon: "ShieldCheck",
    href: "/defense",
    tags: ["Spectrum awareness", "Threat detection", "Digital twin"],
  },
  {
    id: "regulators",
    title: "Regulators",
    shortDesc:
      "Verify coverage obligations with independent, real-world measurement data.",
    icon: "Scale",
    href: "/#markets",
    tags: ["Coverage verification", "Spectrum audit", "Compliance"],
  },
  {
    id: "smart-cities",
    title: "Smart Cities",
    shortDesc:
      "City-wide coverage intelligence, IoT readiness, and citizen transparency portals.",
    icon: "Landmark",
    href: "/smart-cities",
    tags: ["Citizen portal", "IoT readiness", "MNO accountability"],
  },
  {
    id: "ci",
    title: "Critical Infrastructure",
    shortDesc:
      "Continuous RF monitoring for ports, airports, utilities, and logistics operations.",
    icon: "Factory",
    href: "/defense#ci",
    tags: ["Multi-tech visibility", "Operational continuity", "Anomaly detection"],
  },
];

// -- PLATFORM STACK --

export const platformStack = [
  {
    layer: "Insights & Decisions",
    desc: "Actionable recommendations with clear ROI projections",
    icon: "Lightbulb",
  },
  {
    layer: "AI Analysis",
    desc: "Pattern recognition, prediction, and automated insights",
    icon: "Brain",
  },
  {
    layer: "Digital Twin",
    desc: "Living model of your wireless environment, continuously updated",
    icon: "Box",
  },
  {
    layer: "Real-World Data",
    desc: "Actual field measurements — devices, vehicles, drones, sensors",
    icon: "Radio",
  },
];

// -- DIFFERENTIATORS --

export const differentiators = [
  {
    title: "Real-World Grounded",
    subtitle: "Not simulations",
    desc: "Actual device measurements that reflect the true state of your wireless environment. Data you can trust.",
    icon: "MapPin",
  },
  {
    title: "AI-Powered",
    subtitle: "Intelligent analysis",
    desc: "Pattern recognition, predictive analytics, and automated insights that learn from your data.",
    icon: "Brain",
  },
  {
    title: "Instant Deployment",
    subtitle: "Zero integration",
    desc: "No network changes required. Upload data and see results immediately. Value on day one.",
    icon: "Zap",
  },
  {
    title: "Environment Agnostic",
    subtitle: "One platform for all",
    desc: "Indoor, outdoor, vehicle, aerial, drone — unified intelligence across every environment.",
    icon: "Globe",
  },
];

// -- TESTIMONIALS --

export const testimonials = [
  {
    quote:
      "Flycomm revealed coverage issues we'd been blind to for years. We cut complaint tickets by 40% in the first quarter.",
    author: "VP Network Operations",
    org: "Leading Mobile Operator",
  },
  {
    quote:
      "The SOC capabilities gave us real-time spectrum awareness we never had. Essential for protecting our critical facilities.",
    author: "CISO",
    org: "National Security Agency",
  },
  {
    quote:
      "City-wide coverage intelligence helped us prioritize connectivity investments where citizens need it most.",
    author: "CTO",
    org: "Smart City Initiative",
  },
];

// -- TRUSTED BY --

// -- BLOG POSTS --
// To add a new blog post:
// 1. Add an image to /public/blog/
// 2. Add a new entry below (newest first)
// That's it — the homepage and /blog page will update automatically.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  image: string; // path in /public/blog/
  externalUrl?: string; // link to original post on flycomm.co (optional)
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tower-colocation",
    title: "Should We Stay or Should We Move? The Art of Tower Colocation",
    excerpt:
      "Tower colocation strategy and decision-making — how data-driven insights help TowerCos optimize infrastructure sharing and maximize revenue.",
    date: "2025-07-20",
    author: "Noah Bell",
    category: "Asset Management",
    image: "/blog/tower-colocation.png",
    externalUrl: "https://www.flycomm.co/blog/should-we-stay-or-should-we-move",
  },
  {
    slug: "scaling-telecom-saas",
    title: "Scaling Your Telecom Business: How All-in-One SaaS Solutions Drive Growth",
    excerpt:
      "Platform delivers 75% faster planning and slashes costs by half for network management. Learn how unified SaaS solutions are transforming telecom operations.",
    date: "2025-05-12",
    author: "Flycomm",
    category: "Network Connectivity",
    image: "/blog/scaling-telecom.jpg",
    externalUrl:
      "https://www.flycomm.co/blog/scaling-your-telecom-business-how-all-in-one-saas-solutions-drive-growth",
  },
  {
    slug: "ai-network-planning-2025",
    title: "The Future of Mobile Networks: Why AI-Driven Network Planning Will Dominate in 2025",
    excerpt:
      "AI-powered predictive analytics and automation are reshaping the telecom sector. Explore how AI-driven planning is replacing traditional approaches.",
    date: "2025-02-12",
    author: "Flycomm",
    category: "Network Connectivity",
    image: "/blog/ai-network-planning.png",
    externalUrl:
      "https://www.flycomm.co/blog/the-future-of-mobile-networks-why-ai-driven-network-planning-will-dominate-in-2025",
  },
  {
    slug: "ai-in-telecommunications",
    title: "AI in Telecommunications: Beyond the Buzzwords",
    excerpt:
      "Moving past the hype — real AI applications in predictive analytics, network optimization, and real-time monitoring that deliver measurable telecom results.",
    date: "2024-12-09",
    author: "Flycomm",
    category: "Network Connectivity",
    image: "/blog/ai-telecom.jpg",
    externalUrl: "https://www.flycomm.co/blog/ai-in-telecommunications-beyond-the-buzzwords",
  },
  {
    slug: "cellular-coverage-regulatory",
    title:
      "Visualizing Cellular Coverage: A Key Tool for Regulatory Agencies in Closing Access Gaps",
    excerpt:
      "How regulatory agencies leverage coverage visualization to enforce Universal Access obligations and close the digital divide.",
    date: "2024-11-09",
    author: "Noah Bell",
    category: "Network Connectivity",
    image: "/blog/cellular-coverage.png",
    externalUrl:
      "https://www.flycomm.co/blog/visualizing-cellular-coverage-a-key-tool-for-regulatory-agencies-in-closing-access-gaps",
  },
  {
    slug: "colocation-flycomm",
    title: "Enhancing Colocation Processes with Flycomm Solutions",
    excerpt:
      "A guide for TowerCos on leveraging data-driven insights for successful colocation revenue optimization and smarter infrastructure decisions.",
    date: "2024-06-30",
    author: "Noah Bell",
    category: "Asset Management",
    image: "/blog/colocation.png",
    externalUrl:
      "https://www.flycomm.co/blog/enhancing-colocation-processes-with-flycomm-solutions",
  },
  {
    slug: "bts-vs-btf",
    title:
      "How Advanced Tools for Choosing Between Build to Suit (BTS) and Build to Fit (BTF) Strategies Empower TowerCos",
    excerpt:
      "AI-driven visualization tools enable TowerCos to select optimal network deployment approaches — BTS vs BTF analysis made simple.",
    date: "2024-08-30",
    author: "Noah Bell",
    category: "Asset Management",
    image: "/blog/colocation.png",
    externalUrl: "https://www.flycomm.co/blog/bts-vs-btf-for-towercos",
  },
  {
    slug: "future-of-5g",
    title: "The Future of 5G and Its Implications for Businesses",
    excerpt:
      "Discover how 5G technology is revolutionizing business operations with faster speeds, lower latency, and enhanced connectivity for IoT and beyond.",
    date: "2024-06-01",
    author: "Flycomm",
    category: "5G",
    image: "/blog/ai-network-planning.png",
    externalUrl:
      "https://www.flycomm.co/blog/future-of-5g-and-its-implications-for-businesses",
  },
];

export const trustedByLogos = [
  { name: "IHS", src: "/trusted/ihs.png" },
  { name: "TERI Engineering", src: "/trusted/teri.png" },
  { name: "M-Tel", src: "/trusted/mtel.svg" },
  { name: "Motorola", src: "/trusted/motorola.png" },
  { name: "Touchnet", src: "/trusted/touchnet.png" },
  { name: "Cellcom", src: "/trusted/cellcom.png" },
  { name: "Meritech", src: "/trusted/meritech.png" },
  { name: "Luxembourg", src: "/trusted/luxembourg.png" },
  { name: "Netivei Israel", src: "/trusted/netivei-israel.png" },
  { name: "Sensorz", src: "/trusted/sensorz.png" },
];
