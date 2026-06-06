import { PageHeader } from "@/components/dashboard/page-header";
import { AI_AGENTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = { title: "AI Agents" };

export default function AIAssistantPage() {
  return (
    <>
      <PageHeader
        title="AI Agent Suite"
        description="Automate growth, marketing, leads, and customer conversations"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AI_AGENTS.map((agent) => (
          <Card key={agent.id}>
            <div className="flex items-start justify-between">
              <CardHeader title={agent.name} description={agent.description} />
              <Badge status={agent.status} />
            </div>
            <Button
              variant={agent.status === "active" ? "outline" : "primary"}
              size="sm"
              className="mt-2"
            >
              {agent.status === "active" ? "Configure" : "Activate"}
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
