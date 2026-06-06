import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import type { Campaign } from "@/types";

export const metadata = { title: "Campaign Monitoring" };

export default function AdminCampaignsPage() {
  return (
    <>
      <PageHeader
        title="Marketing Campaign Monitoring"
        description="Platform-wide campaign performance"
      />
      <PlaceholderTable<Campaign>
        columns={[
          { key: "name", label: "Campaign" },
          { key: "type", label: "Type", render: (v) => <span className="capitalize">{String(v)}</span> },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "reach", label: "Reach" },
        ]}
        data={[]}
        emptyMessage="No campaigns running."
      />
    </>
  );
}
