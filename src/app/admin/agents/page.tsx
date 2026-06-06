import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import type { Agent } from "@/types";

export const metadata = { title: "Agent Administration" };

export default function AdminAgentsPage() {
  return (
    <>
      <PageHeader
        title="Agent Approval & Administration"
        description="Review applications and manage agent accounts"
      />
      <PlaceholderTable<Agent>
        columns={[
          { key: "name", label: "Agent" },
          { key: "email", label: "Email" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "commissionRate", label: "Commission", render: (v) => `${v}%` },
          { key: "totalClients", label: "Clients" },
        ]}
        data={[]}
        emptyMessage="No agent applications pending."
      />
    </>
  );
}
