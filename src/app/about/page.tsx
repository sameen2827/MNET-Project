import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mesh-bg min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">About Us</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-100">
          About {siteConfig.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          {siteConfig.name} is a US-based technology company backed by a UK partner
          organization. We provide an AI-powered digital business franchise platform
          that combines domain registration, hosting, website deployment, AI business
          agents, marketing automation, analytics, and a reseller ecosystem.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-slate-200">Our Mission</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Empower agencies, freelancers, consultants, IT service providers, and
          entrepreneurs to launch, automate, resell, and grow digital businesses.
        </p>
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-sm font-medium text-violet-400">Business Model</p>
          <p className="mt-2 text-2xl font-bold text-slate-100">
            MNETINC → Agents → Businesses → End Customers
          </p>
        </div>
        <div className="mt-10">
          <ButtonLink href="/register" variant="glow">
            Get Started
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}
