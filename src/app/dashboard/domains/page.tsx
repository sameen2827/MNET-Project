import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
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
        action={<Button>Register Domain</Button>}
      />
      <Card className="mb-6">
        <CardHeader title="Domain Search" description="Powered by OpenSRS (Reseller ID: 8849320)" />
        <form action="/api/domains/search" method="GET" className="flex gap-3">
          <input
            name="query"
            type="text"
            placeholder="Enter domain name..."
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Button type="submit">Search</Button>
        </form>
      </Card>
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
