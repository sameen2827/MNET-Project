import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import type { Website } from "@/types";

export const metadata = { title: "Websites" };

const SAMPLE_SITES: Website[] = [
  { id: "1", name: "My Business", domain: "mybusiness.com", status: "draft" },
];

export default function WebsitesPage() {
  return (
    <>
      <PageHeader
        title="Website Management"
        description="Build and deploy websites with one-click Vercel deployment"
        action={<Button>Deploy New Site</Button>}
      />
      <PlaceholderTable<Website>
        columns={[
          { key: "name", label: "Site Name" },
          { key: "domain", label: "Domain" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "lastDeployed", label: "Last Deployed", render: (v) => String(v ?? "—") },
        ]}
        data={SAMPLE_SITES}
        emptyMessage="No websites deployed yet."
      />
    </>
  );
}
