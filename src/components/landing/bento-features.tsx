import { AI_AGENTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import Link from "next/link";

const BENTO = [
  {
    title: "Domain Registration",
    description: "Search, register, transfer & manage DNS via OpenSRS. AI ranks domains by brand potential and SEO fit.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "from-cyan-500/20 to-transparent",
    icon: "🌐",
    href: "/dashboard/domains",
    highlight: true,
  },
  {
    title: "AI Agent Suite",
    description: "6 specialized agents for growth, marketing, leads, WhatsApp & Facebook.",
    span: "lg:col-span-2",
    accent: "from-violet-500/20 to-transparent",
    icon: "🤖",
    href: "/dashboard/ai-assistant",
  },
  {
    title: "One-Click Deploy",
    description: "Websites on Vercel in seconds.",
    span: "",
    accent: "from-emerald-500/20 to-transparent",
    icon: "🚀",
    href: "/dashboard/websites",
  },
  {
    title: "Agent Program",
    description: "Resell & earn commissions.",
    span: "",
    accent: "from-amber-500/20 to-transparent",
    icon: "🤝",
    href: "/agent-apply",
  },
  {
    title: "Marketing Automation",
    description: "Email, social, landing pages & lead gen.",
    span: "lg:col-span-2",
    accent: "from-pink-500/20 to-transparent",
    icon: "📣",
    href: "/dashboard/marketing",
  },
  {
    title: "Analytics Engine",
    description: "Visitors, conversions, campaigns & agent performance.",
    span: "",
    accent: "from-blue-500/20 to-transparent",
    icon: "📈",
    href: "/dashboard/analytics",
  },
];

export function BentoFeatures() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
            Platform Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">
            Everything to launch & scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Domains, hosting, AI agents, marketing automation, and a full B2B2B reseller ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {BENTO.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 ${item.span}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-50`}
              />
              <div className="relative">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                {item.highlight && (
                  <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/60 p-3 font-mono text-xs">
                    <p className="text-slate-500">$ opensrs lookup mybrand.com</p>
                    <p className="text-emerald-400">✓ Available — $12.99/yr</p>
                    <p className="text-emerald-400">✓ mybrand.net — $11.99/yr</p>
                    <p className="text-red-400/70">✗ mybrand.io — Taken</p>
                  </div>
                )}
                <span className="mt-4 inline-block text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-slate-200">
            AI Agent Suite
          </h3>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AI_AGENTS.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-200">{agent.name}</p>
                  <p className="text-xs text-slate-500">{agent.description}</p>
                </div>
                <Badge status={agent.status} />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <ButtonLink href="/dashboard/ai-assistant" variant="outline">
              Launch AI Agents
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
