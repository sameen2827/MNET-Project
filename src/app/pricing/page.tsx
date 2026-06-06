import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PricingSection } from "@/components/landing/pricing-section";
import { CTASection } from "@/components/landing/cta-section";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="mesh-bg min-h-screen">
      <Header />
      <main className="flex-1 pt-8">
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
