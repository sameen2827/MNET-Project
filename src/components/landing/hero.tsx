import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-200">
          AI-Powered Digital Business Franchise
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/register" size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            Start Free Trial
          </ButtonLink>
          <ButtonLink href="/agent-apply" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Become an Agent
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-indigo-200">
          MNETINC → Agents → Businesses → End Customers
        </p>
      </div>
    </section>
  );
}
