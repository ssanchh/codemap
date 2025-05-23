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
  title: "CodeMap | RepoScope + GuardRails - Ship AI-generated code with zero nasty surprises",
  description:
    "Stop re-prompting, start trusting. RepoScope shows your AI the right files. GuardRails runs your tests in the background. Let your AI code safely at scale.",
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
