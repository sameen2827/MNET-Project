import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/ui/card";
import { Card, CardHeader } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export const metadata = { title: "Agent Dashboard" };

export default function AgentDashboardPage() {
  return (
    <>
      <PageHeader
        title="Agent Dashboard"
        description="Manage clients, track leads, and monitor commissions"
        action={<ButtonLink href="/agent/leads">View Leads</ButtonLink>}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Clients" value="0" />
        <StatCard label="Active Leads" value="0" />
        <StatCard label="Pending Commission" value="$0" />
        <StatCard label="This Month Earnings" value="$0" />
      </div>
      <Card className="mt-8">
        <CardHeader
          title="Agent Program"
          description="MNETINC → Agents → Businesses → End Customers"
        />
        <p className="text-sm text-slate-500">
          Resell platform services and earn recurring commissions on subscriptions,
          domains, hosting, and AI services.
        </p>
      </Card>
    </>
  );
}
