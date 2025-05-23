import { Zap, FileText, TestTube, Shield, Code, Lock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart context injection",
      description: "Automatically includes relevant files and dependencies in AI prompts",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Token-saving prompt shaping",
      description: "Optimizes prompts to include only essential context, saving API costs",
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Pre-merge test validation",
      description: "Runs your test suite automatically before any AI changes are applied",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "License-safe change logging",
      description: "Tracks all modifications with proper attribution and compliance",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Works with Cursor & VSCode",
      description: "Seamless integration with your existing development workflow",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy-first: runs locally",
      description: "All analysis happens on your machine. Your code never leaves your system",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Everything you need for safe AI coding</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection and optimization for your AI-assisted development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors shadow-sm"
            >
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-4 w-fit">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
