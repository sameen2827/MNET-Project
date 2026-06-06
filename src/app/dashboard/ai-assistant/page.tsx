import { PageHeader } from "@/components/dashboard/page-header";
import { AI_AGENTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = { title: "AI Agents" };

const AGENT_ICONS: Record<string, string> = {
  "domain-growth": "🌐",
  "website-health": "💚",
  marketing: "📣",
  "lead-gen": "🎯",
  whatsapp: "💬",
  facebook: "📘",
};

export default function AIAssistantPage() {
  return (
    <>
      <PageHeader
        title="AI Agent Suite"
        description="Automate growth, marketing, leads, and customer conversations"
        action={<Button variant="glow">Deploy All Agents</Button>}
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Active Agents</p>
          <p className="mt-1 text-3xl font-bold text-cyan-400">
            {AI_AGENTS.filter((a) => a.status === "active").length}
          </p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Tasks Completed</p>
          <p className="mt-1 text-3xl font-bold text-slate-100">0</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Leads Generated</p>
          <p className="mt-1 text-3xl font-bold text-violet-400">0</p>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AI_AGENTS.map((agent) => (
          <Card
            key={agent.id}
            glow={agent.status === "active"}
            className="relative overflow-hidden"
          >
            {agent.status === "active" && (
              <div className="absolute right-4 top-4">
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </div>
            )}
            <div className="flex items-start gap-4">
              <span className="text-3xl">{AGENT_ICONS[agent.id] ?? "🤖"}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-100">{agent.name}</h3>
                  <Badge status={agent.status} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{agent.description}</p>
                <Button
                  variant={agent.status === "active" ? "outline" : "glow"}
                  size="sm"
                  className="mt-4"
                >
                  {agent.status === "active" ? "Configure" : "Activate Agent"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader
          title="Launch Pipeline"
          description="From domain to leads — fully automated"
        />
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { step: "01", label: "Register Domain", status: "Complete", color: "text-cyan-400" },
            { step: "02", label: "Deploy Website", status: "Complete", color: "text-violet-400" },
            { step: "03", label: "Run Marketing", status: "In Progress", color: "text-amber-400" },
            { step: "04", label: "Capture Leads", status: "Pending", color: "text-slate-500" },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-center"
            >
              <p className="text-xs font-bold text-slate-600">{item.step}</p>
              <p className="mt-1 text-sm font-medium text-slate-200">{item.label}</p>
              <p className={cn("mt-1 text-xs", item.color)}>{item.status}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
