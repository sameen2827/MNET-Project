import { PLATFORM_FEATURES } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Everything You Need to Launch & Grow
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Domains, hosting, AI agents, marketing, and a full reseller ecosystem.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
