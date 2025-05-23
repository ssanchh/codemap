import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import AnalogySection from "@/components/analogy-section"
import FeaturesSection from "@/components/features-section"
import FAQSection from "@/components/faq-section"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "CodeMap | Smart Context for AI Coding - Give your AI the full picture",
  description:
    "Stop AI hallucinations and broken connections. CodeMap builds a live dependency map and injects smart context into every AI prompt. Make your AI coding tools actually understand your codebase.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="analogy">
          <AnalogySection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
