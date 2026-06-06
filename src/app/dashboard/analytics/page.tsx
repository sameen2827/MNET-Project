import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/ui/card";
import { Card, CardHeader } from "@/components/ui/card";

export const metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics & Reporting"
        description="Track visitors, conversions, and campaign performance"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Visitors" value="0" change="+0% vs last month" />
        <StatCard label="Conversions" value="0" />
        <StatCard label="Conversion Rate" value="0%" />
        <StatCard label="Revenue" value="$0" />
      </div>
      <Card className="mt-8">
        <CardHeader
          title="Traffic Overview"
          description="Visitor tracking and conversion analytics — connect analytics engine to populate"
        />
        <div className="flex h-48 items-center justify-center rounded-lg bg-slate-50 text-sm text-slate-400">
          Chart placeholder — integrate analytics SDK
        </div>
      </Card>
    </>
  );
}
