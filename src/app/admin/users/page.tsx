import { PageHeader } from "@/components/dashboard/page-header";
import { PlaceholderTable } from "@/components/dashboard/placeholder-table";
import { Button } from "@/components/ui/button";

export const metadata = { title: "User Management" };

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function AdminUsersPage() {
  return (
    <>
      <PageHeader
        title="User Management"
        description="Manage platform users and roles"
        action={<Button>Export Users</Button>}
      />
      <PlaceholderTable<AdminUser>
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role", render: (v) => <span className="capitalize">{String(v)}</span> },
          { key: "createdAt", label: "Joined" },
        ]}
        data={[]}
        emptyMessage="No users registered yet."
      />
    </>
  );
}
