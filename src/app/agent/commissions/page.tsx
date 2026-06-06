import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { StatCard } from "@/components/ui/card";
import type { Commission } from "@/types";
import { formatCurrency } from "@/lib/utils";

export const metadata = { title: "Commissions" };

export default function AgentCommissionsPage() {
  return (
    <>
      <PageHeader
        title="Commission Management"
        description="View earnings and payout history"
      />
      <div className="mb-8 grid gap-6 sm:grid-cols-3">
        <StatCard label="Total Earned" value={formatCurrency(0)} />
        <StatCard label="Pending Payout" value={formatCurrency(0)} />
        <StatCard label="Paid Out" value={formatCurrency(0)} />
      </div>
      <PlaceholderTable<Commission>
        columns={[
          { key: "clientName", label: "Client" },
          { key: "amount", label: "Amount", render: (v) => formatCurrency(Number(v)) },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
          { key: "date", label: "Date" },
        ]}
        data={[]}
        emptyMessage="No commission records yet."
      />
    </>
  );
}
