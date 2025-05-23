import React from "react"
import { Zap, FileText, Code, Lock, Map, Brain } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "Live dependency mapping",
      description: "Automatically builds and maintains a real-time map of your entire codebase structure",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart context injection",
      description: "Automatically includes relevant files and dependencies in AI prompts",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Token-optimized prompts",
      description: "Shapes prompts to include only essential context, saving API costs",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent file selection",
      description: "Understands which files matter for each AI request based on dependencies",
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
    <section id="features" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Everything you need for smart AI coding</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive context awareness for your AI-assisted development workflow.
          </p>
        </div>

        {/* Feature Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Feature 1 - Large */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex">
            <div className="p-4 bg-blue-50 rounded-xl text-blue-600 mr-6 h-fit">{features[0].icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">{features[0].title}</h3>
              <p className="text-gray-600">{features[0].description}</p>
            </div>
          </div>

          {/* Feature 2 - Medium */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex">
            <div className="p-4 bg-blue-50 rounded-xl text-blue-600 mr-6 h-fit">{features[1].icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">{features[1].title}</h3>
              <p className="text-gray-600">{features[1].description}</p>
            </div>
          </div>

          {/* Feature 3 - Small */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-4 w-fit">{features[2].icon}</div>
            <h3 className="text-lg font-bold mb-2 text-black">{features[2].title}</h3>
            <p className="text-gray-600 text-sm">{features[2].description}</p>
          </div>

          {/* Feature 4 - Small */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-4 w-fit">{features[3].icon}</div>
            <h3 className="text-lg font-bold mb-2 text-black">{features[3].title}</h3>
            <p className="text-gray-600 text-sm">{features[3].description}</p>
          </div>

          {/* Feature 5 - Small */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-4 w-fit">{features[4].icon}</div>
            <h3 className="text-lg font-bold mb-2 text-black">{features[4].title}</h3>
            <p className="text-gray-600 text-sm">{features[4].description}</p>
          </div>

          {/* Feature 6 - Full Width */}
          <div className="md:col-span-6 bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-sm text-white flex items-center">
            <div className="p-4 bg-white/20 rounded-xl mr-6">
              {React.cloneElement(features[5].icon, { className: "w-8 h-8 text-white" })}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{features[5].title}</h3>
              <p className="text-white/90">{features[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
