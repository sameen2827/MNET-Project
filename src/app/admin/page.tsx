import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/ui/card";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        description="Platform overview and system management"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Users" value="0" />
        <StatCard label="Pending Agents" value="0" />
        <StatCard label="Active Domains" value="0" />
        <StatCard label="Monthly Revenue" value="$0" />
      </div>
    </>
  );
}
