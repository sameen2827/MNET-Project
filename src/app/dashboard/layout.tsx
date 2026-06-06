import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DASHBOARD_NAV } from "@/lib/constants";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell title="MNETINC" navItems={DASHBOARD_NAV}>
      {children}
    </DashboardShell>
  );
}
