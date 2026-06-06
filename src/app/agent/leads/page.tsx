import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import type { Lead } from "@/types";

export const metadata = { title: "Leads" };

export default function AgentLeadsPage() {
  return (
    <>
      <PageHeader
        title="Lead Tracking"
        description="Track and convert leads from your marketing efforts"
        action={<Button>Add Lead</Button>}
      />
      <PlaceholderTable<Lead>
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "source", label: "Source" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
        ]}
        data={[]}
        emptyMessage="No leads tracked yet."
      />
    </>
  );
}
