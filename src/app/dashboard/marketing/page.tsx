import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import type { Campaign } from "@/types";

export const metadata = { title: "Marketing" };

const SAMPLE_CAMPAIGNS: Campaign[] = [
  { id: "1", name: "Welcome Email Series", type: "email", status: "draft", reach: 0 },
];

export default function MarketingPage() {
  return (
    <>
      <PageHeader
        title="Marketing Platform"
        description="Email campaigns, social scheduling, landing pages, and lead generation"
        action={<Button>Create Campaign</Button>}
      />
      <PlaceholderTable<Campaign>
        columns={[
          { key: "name", label: "Campaign" },
          { key: "type", label: "Type", render: (v) => <span className="capitalize">{String(v)}</span> },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "reach", label: "Reach" },
        ]}
        data={SAMPLE_CAMPAIGNS}
        emptyMessage="No campaigns created yet."
      />
    </>
  );
}
