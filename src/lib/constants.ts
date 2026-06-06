import type { AIAgent } from "@/types";

export const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/agent-apply", label: "Become an Agent" },
];

export const DASHBOARD_NAV = [
  { href: "/dashboard", label: "Overview", icon: "📊" },
  { href: "/dashboard/domains", label: "Domains", icon: "🌐" },
  { href: "/dashboard/hosting", label: "Hosting", icon: "🖥️" },
  { href: "/dashboard/websites", label: "Websites", icon: "🌍" },
  { href: "/dashboard/ai-assistant", label: "AI Agents", icon: "🤖" },
  { href: "/dashboard/marketing", label: "Marketing", icon: "📣" },
  { href: "/dashboard/analytics", label: "Analytics", icon: "📈" },
];

export const AGENT_NAV = [
  { href: "/agent", label: "Overview", icon: "📊" },
  { href: "/agent/clients", label: "Clients", icon: "👥" },
  { href: "/agent/leads", label: "Leads", icon: "🎯" },
  { href: "/agent/commissions", label: "Commissions", icon: "💰" },
  { href: "/agent/marketing", label: "Resources", icon: "📣" },
];

export const ADMIN_NAV = [
  { href: "/admin", label: "Overview", icon: "📊" },
  { href: "/admin/users", label: "Users", icon: "👤" },
  { href: "/admin/agents", label: "Agents", icon: "🤝" },
  { href: "/admin/domains", label: "Domains", icon: "🌐" },
  { href: "/admin/subscriptions", label: "Subscriptions", icon: "💳" },
  { href: "/admin/campaigns", label: "Campaigns", icon: "📣" },
  { href: "/admin/analytics", label: "Analytics", icon: "📈" },
];

export const PLATFORM_FEATURES = [
  {
    title: "Domain Registration",
    description: "Search, register, transfer, and manage domains via OpenSRS.",
    icon: "🌐",
  },
  {
    title: "Hosting & Deployment",
    description: "Cloud hosting with one-click website deployment on Vercel.",
    icon: "🖥️",
  },
  {
    title: "AI Business Agents",
    description: "Domain growth, marketing, lead gen, WhatsApp & Facebook agents.",
    icon: "🤖",
  },
  {
    title: "Marketing Automation",
    description: "Email campaigns, social scheduling, and landing pages.",
    icon: "📣",
  },
  {
    title: "Agent Program",
    description: "Resell platform services and earn recurring commissions.",
    icon: "🤝",
  },
  {
    title: "Analytics",
    description: "Track visitors, conversions, campaigns, and agent performance.",
    icon: "📈",
  },
];

export const AI_AGENTS: AIAgent[] = [
  {
    id: "domain-growth",
    name: "Domain Growth Agent",
    description: "Optimizes domain portfolio and renewal strategies.",
    status: "active",
  },
  {
    id: "website-health",
    name: "Website Health Agent",
    description: "Monitors uptime, performance, and security.",
    status: "active",
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    description: "Creates and schedules marketing content.",
    status: "active",
  },
  {
    id: "lead-gen",
    name: "Lead Generation Agent",
    description: "Captures and qualifies inbound leads.",
    status: "active",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Sales Agent",
    description: "Automates WhatsApp Business conversations.",
    status: "inactive",
  },
  {
    id: "facebook",
    name: "Facebook Messenger Agent",
    description: "Handles Facebook Messenger inquiries.",
    status: "inactive",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 29,
    features: ["1 Domain", "Basic Hosting", "Website Builder", "1 AI Agent"],
  },
  {
    name: "Business",
    price: 79,
    features: [
      "5 Domains",
      "Pro Hosting",
      "Marketing Tools",
      "3 AI Agents",
      "Analytics",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: 199,
    features: [
      "Unlimited Domains",
      "Premium Hosting",
      "Full AI Suite",
      "Agent Dashboard",
      "White-label Options",
    ],
  },
];
