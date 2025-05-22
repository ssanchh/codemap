import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import LogoCarousel from "@/components/logo-carousel"
import ProblemSolutionSection from "@/components/problem-solution-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialSection from "@/components/testimonial-section"
import BottomCTA from "@/components/bottom-cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "CodeMap | Bring Sanity to AI Coding",
  description:
    "CodeMap helps you define your project clearly before using AI coding tools — no more hallucinations, lost logic, or messy code.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LogoCarousel />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <TestimonialSection />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
