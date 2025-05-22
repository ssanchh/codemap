"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Lightbulb, Briefcase, Zap, Users } from "lucide-react"

export default function TestimonialSection() {
  const userGroups = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI-Powered Developers",
      description:
        "Engineers who use AI coding tools like Cursor, Copilot, or Claude to accelerate their development process but need structure and clarity.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Indie Hackers",
      description:
        "Solo builders creating products who need to maximize their efficiency and avoid the common pitfalls of AI-generated code.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Prompt Engineers",
      description:
        "Specialists who craft precise instructions for AI tools and need a systematic approach to document and refine their prompts.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Startup Founders",
      description:
        "Visionaries turning ideas into products who need to communicate technical requirements clearly to their AI tools and teams.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Live Coders & Streamers",
      description:
        "Content creators who build in public and need to maintain focus and direction while engaging with their audience.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Development Teams",
      description:
        "Groups collaborating on AI-assisted projects who need consistent documentation and shared understanding of the codebase.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Uses CodeMap?</h2>
          <p className="text-lg md:text-xl font-normal text-black max-w-3xl mx-auto">
            CodeMap brings clarity to AI-assisted development for everyone building the future with code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <div className="flex flex-col items-start">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-5">{group.icon}</div>
                <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                <p className="text-lg text-gray-700">{group.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl font-medium text-blue-600">
            If you're building with AI coding tools, CodeMap is built for you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
