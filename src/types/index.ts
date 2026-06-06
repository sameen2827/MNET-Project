export type UserRole = "user" | "agent" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface Domain {
  id: string;
  name: string;
  status: "active" | "pending" | "expired";
  expiresAt: string;
  autoRenew: boolean;
}

export interface HostingPlan {
  id: string;
  name: string;
  storage: string;
  bandwidth: string;
  status: "active" | "suspended";
}

export interface Website {
  id: string;
  name: string;
  domain: string;
  status: "live" | "draft" | "deploying";
  lastDeployed?: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  commissionRate: number;
  totalClients: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: "new" | "contacted" | "converted";
}

export interface Commission {
  id: string;
  amount: number;
  clientName: string;
  status: "pending" | "paid";
  date: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: "email" | "social" | "landing";
  status: "draft" | "active" | "completed";
  reach: number;
}

export interface AIAgent {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
}

export interface AnalyticsSummary {
  visitors: number;
  conversions: number;
  revenue: number;
  growth: number;
}
