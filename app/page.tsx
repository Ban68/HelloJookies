import Hero from "@/components/landing/Hero";
import StorySection from "@/components/landing/StorySection";
import ContentGrid from "@/components/landing/ContentGrid";
import MarketplacePreview from "@/components/landing/MarketplacePreview";
import NewsletterSignup from "@/components/landing/NewsletterSignup";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero: Emotional connection, inviting vibe */}
      <Hero />

      {/* 2. Philosophy: "Organic" value proposition */}
      <StorySection />

      {/* 3. Marketplace Preview: Strategically placed, visible but not aggressive */}
      <MarketplacePreview />

      {/* 4. Social Proof: Customer testimonials */}
      <TestimonialsSection />

      {/* 5. Content Hub: The "Meat" of the organic strategy (SEO, engagement) */}
      <ContentGrid />

      {/* 6. Lead Capture: Build the community */}
      <NewsletterSignup />
    </main>
  );
}
