import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DomainSearchHero } from "./domain-search-hero";
import { AIAgentHub } from "./ai-agent-hub";

export function Hero() {
  return (
    <section className="relative mesh-bg grid-pattern overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            Launch. Automate. Resell. Grow.
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-slate-100">Your AI-powered</span>
            <br />
            <span className="text-gradient">digital business franchise</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Domains, hosting, websites, AI agents, marketing automation — and a full reseller ecosystem for agencies & entrepreneurs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/register" variant="glow" size="lg">
              Start Free Trial
            </ButtonLink>
            <ButtonLink href="/agent-apply" variant="outline" size="lg">
              Become an Agent →
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="lg:col-span-3">
            <DomainSearchHero />
          </div>
          <div className="lg:col-span-2">
            <AIAgentHub />
          </div>
        </div>

        {/* Business model strip */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              { label: "MNETINC", sub: "Platform", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400" },
              { label: "Agents", sub: "Resellers", color: "border-violet-500/30 bg-violet-500/10 text-violet-400" },
              { label: "Businesses", sub: "Clients", color: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
              { label: "Customers", sub: "End Users", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                {i > 0 && <span className="hidden text-slate-600 sm:inline">→</span>}
                <div className={cn("rounded-xl border px-4 py-2 text-center", item.color)}>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-[10px] opacity-70">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
