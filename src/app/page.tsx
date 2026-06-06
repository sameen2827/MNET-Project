import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { ButtonLink } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Simple Pricing</h2>
            <p className="mt-4 text-slate-500">Scale from solo entrepreneur to full agency.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PRICING_PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={plan.popular ? "ring-2 ring-indigo-600" : ""}
                >
                  {plan.popular && (
                    <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2">
                    <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500">/mo</span>
                  </p>
                  <ul className="mt-6 space-y-2 text-left text-sm text-slate-600">
                    {plan.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            <ButtonLink href="/pricing" className="mt-8" variant="outline">
              View Full Pricing
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
