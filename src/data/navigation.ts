import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export const footerNav = {
  Company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Partner Program", to: "/partners" },
    { label: "Blog", to: "/blog" },
  ],
  Services: [
    { label: "Brand Identity", to: "/services/brand-identity-design" },
    { label: "Social Media", to: "/services/social-media-marketing" },
    { label: "SEO", to: "/services/search-engine-optimization" },
    { label: "Performance Ads", to: "/services/performance-marketing" },
  ],
  Resources: [
    { label: "Portfolio", to: "/portfolio" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact", to: "/contact" },
  ],
};

export const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
];
