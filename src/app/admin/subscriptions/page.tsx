import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable, StatusBadge } from "@/components/dashboard/placeholder-table";

export const metadata = { title: "Subscriptions" };

interface Subscription {
  id: string;
  user: string;
  plan: string;
  amount: string;
  status: string;
}

export default function AdminSubscriptionsPage() {
  return (
    <>
      <PageHeader
        title="Subscription Management"
        description="Manage user subscriptions and billing"
      />
      <PlaceholderTable<Subscription>
        columns={[
          { key: "user", label: "User" },
          { key: "plan", label: "Plan" },
          { key: "amount", label: "Amount" },
          { key: "status", label: "Status", render: (v) => <StatusBadge status={String(v)} /> },
        ]}
        data={[]}
        emptyMessage="No active subscriptions."
      />
    </>
  );
}
