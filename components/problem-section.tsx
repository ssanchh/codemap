import { AlertTriangle, FileX, Bug } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: <FileX className="w-8 h-8" />,
      title: "AI misses files it didn't see",
      description:
        "Your AI assistant only knows about files in the current context, leading to incomplete or broken code suggestions.",
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "It breaks tests silently",
      description:
        "AI changes look good but break existing functionality. You only find out after running tests manually.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "You waste time debugging after 'Accept'",
      description: "Every AI suggestion becomes a potential debugging session instead of a productivity boost.",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Why today's AI coding tools still cost you time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Even the best AI assistants have blind spots that turn productivity gains into debugging sessions.
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
