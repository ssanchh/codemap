"use client"

import { motion } from "framer-motion"

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Create a New Project",
      description:
        "Start with a simple description of what you want to build. CodeMap will analyze your requirements and help you structure your thoughts.",
      details:
        "Just describe your project idea in plain language. Our AI will understand your goals and start mapping out the structure you need.",
    },
    {
      number: 2,
      title: "Choose the AI tools",
      description:
        "Select which AI coding assistants you plan to use so CodeMap can optimize your documentation for your specific workflow.",
      details:
        "We support all major AI coding tools including Cursor, Copilot, Claude, and more. Your documentation will be formatted for maximum compatibility.",
    },
    {
      number: 3,
      title: "Answer some key questions",
      description:
        "Provide details about your project's requirements, features, and technical specifications to refine your project blueprint.",
      details:
        "Our guided questionnaire helps you think through important aspects of your project that AI tools often miss or assume incorrectly.",
    },
    {
      number: 4,
      title: "Download your docs",
      description:
        "Get your complete project documentation ready to use with your chosen AI coding tools and start building with confidence.",
      details:
        "Export in multiple formats including Markdown, PDF, and structured prompts that you can directly paste into your AI coding assistant.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How CodeMap Works</h2>
          <p className="text-lg md:text-xl font-normal text-black max-w-3xl mx-auto">
            Four simple steps to transform your AI coding experience
          </p>
        </div>

        {/* Desktop Stacked Cards */}
        <div className="hidden md:block relative">
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8"
                style={{
                  zIndex: steps.length - index,
                  transform: `translateY(${index * -30}px)`,
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-500">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg mb-3">{step.description}</p>
                    <p className="text-lg text-gray-700">{step.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6"
              style={{
                zIndex: steps.length - index,
                transform: `translateY(${index * -15}px)`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-500">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg mb-2">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
