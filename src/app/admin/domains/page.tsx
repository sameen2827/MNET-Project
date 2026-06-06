import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import type { Domain } from "@/types";

export const metadata = { title: "Domain Administration" };

export default function AdminDomainsPage() {
  return (
    <>
      <PageHeader
        title="Domain & Hosting Management"
        description="Platform-wide domain inventory via OpenSRS"
      />
      <PlaceholderTable<Domain>
        columns={[
          { key: "name", label: "Domain" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "expiresAt", label: "Expires" },
          { key: "autoRenew", label: "Auto-Renew", render: (v) => (v ? "Yes" : "No") },
        ]}
        data={[]}
        emptyMessage="No domains on platform."
      />
    </>
  );
}
