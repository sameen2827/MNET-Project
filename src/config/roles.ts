import type { UserRole } from "@/types";

export const rolePermissions: Record<UserRole, string[]> = {
  user: [
    "domains:read",
    "domains:manage",
    "hosting:read",
    "websites:manage",
    "analytics:read",
    "ai:use",
    "marketing:read",
  ],
  agent: [
    "clients:manage",
    "leads:manage",
    "commissions:read",
    "marketing:manage",
    "resources:read",
  ],
  admin: [
    "users:manage",
    "agents:approve",
    "domains:admin",
    "subscriptions:manage",
    "campaigns:monitor",
    "analytics:admin",
  ],
};

export const roleDashboardPaths: Record<UserRole, string> = {
  user: "/dashboard",
  agent: "/agent",
  admin: "/admin",
};
