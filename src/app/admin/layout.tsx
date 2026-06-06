import { DashboardShell } from "@/components/layout/dashboard-shell";
import { ADMIN_NAV } from "@/lib/constants";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell title="Admin" navItems={ADMIN_NAV}>
      {children}
    </DashboardShell>
  );
}
