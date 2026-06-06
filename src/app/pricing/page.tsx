import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/constants";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Pricing Plans</h1>
          <p className="mt-4 text-slate-500">
            Choose the plan that fits your business. Upgrade anytime.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
              <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
              <p className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-slate-500">/month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <ButtonLink href="/register" className="mt-8 w-full">
                Get Started
              </ButtonLink>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
