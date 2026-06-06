import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";
import type { HostingPlan } from "@/types";

export const metadata = { title: "Hosting" };

const SAMPLE_PLANS: HostingPlan[] = [
  { id: "1", name: "Starter Plan", storage: "10 GB", bandwidth: "100 GB", status: "active" },
];

export default function HostingPage() {
  return (
    <>
      <PageHeader
        title="Hosting Management"
        description="Manage your cloud hosting on AWS & Vercel"
        action={<Button>Upgrade Plan</Button>}
      />
      <PlaceholderTable<HostingPlan>
        columns={[
          { key: "name", label: "Plan" },
          { key: "storage", label: "Storage" },
          { key: "bandwidth", label: "Bandwidth" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
        ]}
        data={SAMPLE_PLANS}
        emptyMessage="No hosting plans active. Subscribe to get started."
      />
    </>
  );
}
