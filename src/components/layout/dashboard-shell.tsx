import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

export function DashboardShell({
  title,
  navItems,
  children,
}: {
  title: string;
  navItems: NavItem[];
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar title={title} navItems={navItems} />
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-7xl p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
