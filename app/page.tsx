import HeroSection from '@/components/hero-section'
import PainPointsSection from '@/components/pain-points-section'
import IncludedSection from '@/components/included-section'
import PricingSection from '@/components/pricing-section'
import TestimonialsSection from '@/components/testimonials-section'
import FaqSection from '@/components/faq-section'
import FinalCtaSection from '@/components/final-cta-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <IncludedSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}
