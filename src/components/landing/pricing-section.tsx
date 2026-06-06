import { PRICING_PLANS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950/50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-100">
            Scale from solo to agency
          </h2>
          <p className="mt-4 text-slate-400">
            Recurring revenue from subscriptions, domains, hosting & AI services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-8 transition-all",
                plan.popular
                  ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/10"
                  : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-100">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-5xl font-bold text-gradient">${plan.price}</span>
                <span className="text-slate-500">/mo</span>
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-cyan-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/register"
                variant={plan.popular ? "glow" : "outline"}
                className="mt-8 w-full justify-center"
              >
                Get Started
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
