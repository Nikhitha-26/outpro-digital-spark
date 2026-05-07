import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "urbanbite-cafe",
    client: "UrbanBite Café",
    industry: "Food & Beverage",
    category: "Social Media",
    problem: "Low online engagement and stagnant follower growth.",
    solution: "Instagram-first content strategy and brand refresh.",
    result: "3× engagement growth in 60 days.",
    strategy:
      "We rebuilt UrbanBite's content pillars around food storytelling, behind-the-scenes reels and community spotlights to create a daily rhythm of premium, share-worthy posts.",
    execution: [
      "Visual identity refresh across all social templates",
      "Weekly reels production with the kitchen team",
      "Influencer seeding programme with local creators",
      "Community management and proactive engagement",
    ],
    kpi: [
      { label: "Engagement", value: "3×" },
      { label: "Followers (60d)", value: "+18k" },
      { label: "Reel views", value: "1.2M" },
    ],
    testimonial: {
      quote: "Our café finally feels like a brand people want to belong to.",
      author: "Riya Mehta",
      role: "Founder, UrbanBite Café",
    },
    cover: "g1",
  },
  {
    slug: "fitzone-gym",
    client: "FitZone Gym",
    industry: "Fitness",
    category: "Paid Ads",
    problem: "Low membership inquiries and high cost per lead.",
    solution: "Meta Ads campaign and dedicated landing page optimization.",
    result: "45% increase in membership leads.",
    strategy:
      "We built a full-funnel Meta Ads system with creative testing at the top and a high-conversion landing page focused on a single trial offer.",
    execution: [
      "10+ creative concepts tested weekly",
      "Custom landing page with social proof",
      "Conversion tracking via GA4 + Meta Pixel",
      "Daily optimisation against cost per lead",
    ],
    kpi: [
      { label: "Lead increase", value: "+45%" },
      { label: "CPL reduction", value: "-32%" },
      { label: "ROAS", value: "4.6×" },
    ],
    testimonial: {
      quote: "Outpro turned our ads from a cost centre into a growth engine.",
      author: "Arjun Khanna",
      role: "Owner, FitZone Gym",
    },
    cover: "g2",
  },
  {
    slug: "eduspark-academy",
    client: "EduSpark Academy",
    industry: "Education",
    category: "Branding",
    problem: "Weak brand identity and poor parent trust.",
    solution: "Complete brand identity redesign and website refresh.",
    result: "60% increase in student inquiries.",
    strategy:
      "We repositioned EduSpark as a premium learning destination through a confident identity system and a website built around trust signals and outcomes.",
    execution: [
      "New logo system, palette and typography",
      "Brand guidelines and voice document",
      "Marketing website redesign",
      "Parent-focused trust messaging",
    ],
    kpi: [
      { label: "Inquiries", value: "+60%" },
      { label: "Site time", value: "+2:40" },
      { label: "Brand recall", value: "+72%" },
    ],
    testimonial: {
      quote: "We finally look as serious about education as we actually are.",
      author: "Dr. Neha Sharma",
      role: "Director, EduSpark Academy",
    },
    cover: "g3",
  },
  {
    slug: "stylenest-boutique",
    client: "StyleNest Boutique",
    industry: "Fashion & Retail",
    category: "SEO",
    problem: "Low website visibility and almost no organic traffic.",
    solution: "Technical SEO + content strategy targeting buyer intent.",
    result: "2× organic traffic growth in 5 months.",
    strategy:
      "Keyword clusters mapped to commercial intent powered a content + technical roadmap that compounded organic visibility.",
    execution: [
      "Site-wide technical SEO fixes",
      "Category and product page optimization",
      "Editorial blog programme",
      "Internal linking and schema markup",
    ],
    kpi: [
      { label: "Organic traffic", value: "2×" },
      { label: "Top-3 keywords", value: "+84" },
      { label: "Revenue / organic", value: "+118%" },
    ],
    testimonial: {
      quote: "Organic is now our biggest revenue channel.",
      author: "Ishita Rao",
      role: "Co-founder, StyleNest",
    },
    cover: "g4",
  },
  {
    slug: "technova-solutions",
    client: "TechNova Solutions",
    industry: "B2B SaaS",
    category: "Web Design",
    problem: "Outdated website with low conversion rates.",
    solution: "Conversion-focused website redesign and CRO experiments.",
    result: "38% improvement in conversion rate.",
    strategy:
      "We rebuilt the site around a single conversion goal — qualified demos — with a modern design system, clear value proposition and frictionless flow.",
    execution: [
      "Information architecture overhaul",
      "Component-driven design system",
      "Performance + Core Web Vitals tuning",
      "A/B tests on hero, pricing and forms",
    ],
    kpi: [
      { label: "Conversion", value: "+38%" },
      { label: "Page speed", value: "1.8s" },
      { label: "Demos / mo", value: "+62%" },
    ],
    testimonial: {
      quote: "Our new site does the selling before our team even joins the call.",
      author: "Karan Patel",
      role: "CMO, TechNova Solutions",
    },
    cover: "g5",
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const caseStudyCategories: Array<"All" | CaseStudy["category"]> = [
  "All",
  "Branding",
  "Social Media",
  "SEO",
  "Paid Ads",
  "Web Design",
];
