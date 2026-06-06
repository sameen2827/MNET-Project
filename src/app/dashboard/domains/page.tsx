import { DomainSearchPanel } from "@/components/dashboard/domain-search-panel";
import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import type { Domain } from "@/types";

export const metadata = { title: "Domains" };

const SAMPLE_DOMAINS: Domain[] = [
  { id: "1", name: "example.com", status: "active", expiresAt: "2027-01-15", autoRenew: true },
];

export default function DomainsPage() {
  return (
    <>
      <PageHeader
        title="Domain Management"
        description="Search, register, transfer, and manage DNS via OpenSRS"
        action={<Button variant="glow">Register Domain</Button>}
      />
      <DomainSearchPanel />
      <PlaceholderTable<Domain>
        columns={[
          { key: "name", label: "Domain" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "expiresAt", label: "Expires" },
          { key: "autoRenew", label: "Auto-Renew", render: (v) => (v ? "Yes" : "No") },
        ]}
        data={SAMPLE_DOMAINS}
        emptyMessage="No domains registered yet."
      />
    </>
  );
}
