import { ButtonLink } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10 p-12 text-center glow-border">
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
          Ready to launch your digital franchise?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Join agencies, freelancers, and entrepreneurs building recurring revenue
          with AI-powered domains, hosting, and automation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/register" variant="glow" size="lg">
            Start Free Trial
          </ButtonLink>
          <ButtonLink href="/agent-apply" variant="outline" size="lg">
            Apply as Agent
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
