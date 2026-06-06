import { DashboardShell } from "@/components/layout/dashboard-shell";
import { AGENT_NAV } from "@/lib/constants";
import type { ReactNode } from "react";

export default function AgentLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell title="Agent Portal" navItems={AGENT_NAV}>
      {children}
    </DashboardShell>
  );
}
