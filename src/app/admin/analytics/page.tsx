import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/ui/card";
import { Card, CardHeader } from "@/components/ui/card";

export const metadata = { title: "Platform Analytics" };

export default function AdminAnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Platform Analytics"
        description="System-wide metrics, agent performance, and revenue reporting"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Platform Users" value="0" />
        <StatCard label="Active Agents" value="0" />
        <StatCard label="Total Revenue" value="$0" />
        <StatCard label="Churn Rate" value="0%" />
      </div>
      <Card className="mt-8">
        <CardHeader title="Agent Performance" description="Top performing agents by revenue" />
        <div className="flex h-48 items-center justify-center rounded-lg bg-slate-50 text-sm text-slate-400">
          Agent leaderboard placeholder
        </div>
      </Card>
    </>
  );
}
