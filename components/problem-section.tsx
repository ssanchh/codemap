import { FileX, Brain, AlertTriangle } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: <FileX className="w-8 h-8" />,
      title: "AI misses critical dependencies",
      description:
        "Your AI assistant only sees files in the current context, missing important connections and breaking existing functionality.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "It hallucinates components and APIs",
      description:
        "Without full codebase visibility, AI invents non-existent functions, imports, and patterns that don't match your project.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "You spend time fixing 'working' code",
      description:
        "Code looks perfect in isolation but breaks when integrated because AI didn't understand the bigger picture.",
    },
  ]

  return (
    <section id="problem" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Why AI coding tools miss the mark</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Even the best AI assistants work with incomplete information, leading to code that breaks your existing
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-300 transition-colors shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-red-50 rounded-lg text-red-600 mb-5">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
