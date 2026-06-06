import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Clients" };

interface Client {
  id: string;
  name: string;
  email: string;
  plan: string;
  since: string;
}

export default function AgentClientsPage() {
  return (
    <>
      <PageHeader
        title="Client Management"
        description="Manage your reseller clients and their subscriptions"
        action={<Button>Add Client</Button>}
      />
      <PlaceholderTable<Client>
        columns={[
          { key: "name", label: "Client" },
          { key: "email", label: "Email" },
          { key: "plan", label: "Plan" },
          { key: "since", label: "Client Since" },
        ]}
        data={[]}
        emptyMessage="No clients yet. Start acquiring clients to grow your business."
      />
    </>
  );
}
