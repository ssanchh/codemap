"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Does my code leave my machine?",
      answer:
        "No, all analysis runs locally. RepoScope builds its dependency map on your machine, and GuardRails runs your tests locally. Your code never leaves your system.",
    },
    {
      question: "Will this slow down Cursor?",
      answer:
        "Adds 1–2 ms. You won't feel it. RepoScope's indexing happens in the background, and GuardRails runs tests asynchronously without blocking your workflow.",
    },
    {
      question: "How does it work?",
      answer:
        "We index your repo locally, then augment prompts and test changes in real time. RepoScope builds a live dependency graph, while GuardRails monitors file changes and runs relevant tests automatically.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "We support all major languages including JavaScript, TypeScript, Python, Go, Rust, Java, and more. Language-specific features are continuously being added.",
    },
    {
      question: "Can I use this with GitHub Copilot?",
      answer:
        "Yes! While optimized for Cursor, RepoScope + GuardRails also works with GitHub Copilot, VSCode, and other AI coding assistants.",
    },
    {
      question: "What happens during the beta?",
      answer:
        "Beta users get free access to all features, direct feedback channels with our team, and priority support. Your feedback helps shape the final product.",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Frequently asked questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about RepoScope + GuardRails.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-black">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
