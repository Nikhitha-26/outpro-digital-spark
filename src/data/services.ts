import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    shortDescription:
      "Logo systems, color, typography and brand guidelines that make your business unforgettable.",
    icon: "Sparkles",
    includes: [
      "Logo system & wordmark",
      "Color palette & typography",
      "Brand guidelines",
      "Brand voice & messaging",
      "Stationery & social templates",
    ],
    process: [
      { step: "Discovery", description: "Workshops to define positioning and audience." },
      { step: "Strategy", description: "Brand pillars, voice, and visual direction." },
      { step: "Design", description: "Identity system crafted across touchpoints." },
      { step: "Delivery", description: "Guidelines and assets ready to deploy." },
    ],
    benefits: [
      "Instant recognition in a crowded market",
      "Consistent experience across channels",
      "Premium perception that supports pricing",
    ],
    relatedCaseStudy: "eduspark-academy",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Content calendars, campaigns and community building that turn followers into customers.",
    icon: "Share2",
    includes: [
      "Content strategy & calendars",
      "Reels & static creatives",
      "Community management",
      "Influencer collaborations",
      "Monthly performance reports",
    ],
    process: [
      { step: "Audit", description: "Channel and competitor benchmarks." },
      { step: "Plan", description: "Monthly content themes and pillars." },
      { step: "Produce", description: "On-brand creatives, weekly." },
      { step: "Optimise", description: "Iterate based on engagement data." },
    ],
    benefits: ["Higher engagement", "Stronger community", "Predictable lead flow"],
    relatedCaseStudy: "urbanbite-cafe",
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription:
      "Rank for what matters. Technical, on-page and content SEO engineered for revenue.",
    icon: "Search",
    includes: [
      "Keyword research",
      "Technical SEO audit",
      "On-page optimization",
      "Content & link strategy",
      "Monthly ranking reports",
    ],
    process: [
      { step: "Audit", description: "Technical, content and backlink review." },
      { step: "Strategy", description: "Keyword clusters mapped to intent." },
      { step: "Execution", description: "Optimise pages, fix tech issues, publish." },
      { step: "Scale", description: "Compounding traffic month over month." },
    ],
    benefits: ["2-3x organic traffic", "Lower CAC", "Compounding long-term ROI"],
    relatedCaseStudy: "stylenest-boutique",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortDescription:
      "Google, Meta and programmatic ads tuned for ROAS — not vanity metrics.",
    icon: "TrendingUp",
    includes: [
      "Google & Meta Ads",
      "Landing page strategy",
      "Conversion tracking setup",
      "A/B creative testing",
      "Weekly optimisation",
    ],
    process: [
      { step: "Setup", description: "Pixel, GA4 and conversion infrastructure." },
      { step: "Launch", description: "Multi-creative, multi-audience campaigns." },
      { step: "Optimise", description: "Daily bid and creative iteration." },
      { step: "Scale", description: "Double down on winners." },
    ],
    benefits: ["Predictable lead flow", "Improved ROAS", "Full-funnel attribution"],
    relatedCaseStudy: "fitzone-gym",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    shortDescription:
      "Copy, reels, graphics and ad creatives produced in-house at agency speed.",
    icon: "PenTool",
    includes: [
      "Copywriting",
      "Reels & short-form video",
      "Graphic design",
      "Blog & long-form content",
      "Ad creatives",
    ],
    process: [
      { step: "Brief", description: "Align on goals, channels and tone." },
      { step: "Create", description: "Produce a steady stream of assets." },
      { step: "Review", description: "Fast feedback cycles, no bottlenecks." },
      { step: "Publish", description: "Distribute and measure." },
    ],
    benefits: ["Always-on content engine", "Consistent quality", "Scalable output"],
  },
  {
    slug: "website-design-optimization",
    title: "Website Design & Optimization",
    shortDescription:
      "Conversion-focused websites and landing pages built to load fast and sell hard.",
    icon: "Monitor",
    includes: [
      "UX research & wireframes",
      "Conversion-focused design",
      "Web & landing page build",
      "Core Web Vitals optimisation",
      "Ongoing CRO experiments",
    ],
    process: [
      { step: "Discover", description: "User journeys and competitive analysis." },
      { step: "Design", description: "Wireframes to high-fidelity UI." },
      { step: "Build", description: "Responsive, fast and accessible." },
      { step: "Improve", description: "Test, learn, lift conversion." },
    ],
    benefits: ["30-60% higher conversion", "Faster load times", "Better Core Web Vitals"],
    relatedCaseStudy: "technova-solutions",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
