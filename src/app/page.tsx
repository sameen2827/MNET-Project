import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BentoFeatures } from "@/components/landing/bento-features";
import { CTASection } from "@/components/landing/cta-section";
import { Hero } from "@/components/landing/hero";
import { PricingSection } from "@/components/landing/pricing-section";

export default function HomePage() {
  return (
    <div className="mesh-bg min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <BentoFeatures />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
