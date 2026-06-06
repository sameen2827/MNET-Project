import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">About {siteConfig.name}</h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          {siteConfig.name} is a US-based technology company backed by a UK partner
          organization. We provide an AI-powered digital business franchise platform
          that combines domain registration, hosting, website deployment, AI business
          agents, marketing automation, analytics, and a reseller ecosystem.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-slate-900">Our Mission</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Empower agencies, freelancers, consultants, IT service providers, and
          entrepreneurs to launch, automate, resell, and grow digital businesses —
          creating recurring revenue through subscriptions, domains, hosting, AI
          services, and reseller commissions.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-slate-900">Target Market</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>Digital agencies</li>
          <li>Freelancers & consultants</li>
          <li>IT service providers</li>
          <li>Entrepreneurs building online businesses</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
