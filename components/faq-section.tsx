"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Does my code leave my machine?",
      answer:
        "No, all analysis runs locally. CodeMap builds its dependency map on your machine and processes everything locally. Your code never leaves your system.",
    },
    {
      question: "Will this slow down my AI coding tools?",
      answer:
        "Adds less than 1ms. You won't feel it. CodeMap's indexing happens in the background, and context injection is nearly instantaneous.",
    },
    {
      question: "How does CodeMap work?",
      answer:
        "CodeMap indexes your repository locally, builds a live dependency graph, then automatically augments your AI prompts with the right context. It understands which files are relevant for each request.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "CodeMap supports all major languages including JavaScript, TypeScript, Python, Go, Rust, Java, and more. Language-specific dependency analysis is continuously being improved.",
    },
    {
      question: "Can I use this with GitHub Copilot?",
      answer:
        "Yes! While optimized for Cursor, CodeMap also works with GitHub Copilot, VSCode, and other AI coding assistants that accept context.",
    },
    {
      question: "What happens during the beta?",
      answer:
        "Beta users get free access to all features, direct feedback channels with our team, and priority support. Your feedback helps shape the final product.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Frequently asked questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about CodeMap.</p>
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
