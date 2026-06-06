import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="User Dashboard"
        description="Manage your domains, hosting, websites, and AI agents"
        action={<ButtonLink href="/dashboard/domains">Register Domain</ButtonLink>}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Domains" value="0" change="+0 this month" />
        <StatCard label="Websites Live" value="0" />
        <StatCard label="Monthly Visitors" value="0" />
        <StatCard label="AI Agents Active" value="0" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader
            title="Quick Actions"
            description="Common tasks to get started"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink href="/dashboard/domains" variant="outline" className="justify-center">
              Search Domains
            </ButtonLink>
            <ButtonLink href="/dashboard/websites" variant="outline" className="justify-center">
              Deploy Website
            </ButtonLink>
            <ButtonLink href="/dashboard/ai-assistant" variant="outline" className="justify-center">
              Launch AI Agent
            </ButtonLink>
            <ButtonLink href="/dashboard/marketing" variant="outline" className="justify-center">
              Create Campaign
            </ButtonLink>
          </div>
        </Card>
        <Card>
          <CardHeader title="Recent Activity" description="Your latest platform events" />
          <p className="text-sm text-slate-500">No activity yet. Connect your account to get started.</p>
        </Card>
      </div>
    </>
  );
}
