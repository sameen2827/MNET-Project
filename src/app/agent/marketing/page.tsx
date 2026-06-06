import { PageHeader } from "@/components/dashboard/page-header";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Marketing Resources" };

const RESOURCES = [
  { title: "Brand Assets", description: "Logos, colors, and brand guidelines" },
  { title: "Sales Deck", description: "Presentation templates for client pitches" },
  { title: "Email Templates", description: "Pre-built outreach and follow-up emails" },
  { title: "Social Media Kit", description: "Posts and graphics for social promotion" },
];

export default function AgentMarketingPage() {
  return (
    <>
      <PageHeader
        title="Marketing Resources"
        description="Downloadable assets to help you sell MNETINC services"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {RESOURCES.map((resource) => (
          <Card key={resource.title}>
            <CardHeader title={resource.title} description={resource.description} />
            <Button variant="outline" size="sm">
              Download
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
