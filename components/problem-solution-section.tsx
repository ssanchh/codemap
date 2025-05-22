export default function ProblemSolutionSection() {
  const problems = [
    {
      title: "Hallucinated components",
      description: "AI tools invent non-existent libraries and components",
    },
    {
      title: "Broken logic chains",
      description: "Code that looks right but falls apart when connected",
    },
    {
      title: "Lost prompts and unclear structure",
      description: "No clear path from idea to implementation",
    },
    {
      title: "Lack of project direction",
      description: "Endless tweaking without a coherent plan",
    },
  ]

  const solutions = [
    {
      title: "Define your project structure",
      description: "Create a clear blueprint for your project with well-defined components and architecture.",
    },
    {
      title: "Generate documentation automatically",
      description: "Get PRDs, flows, and prompts that guide your development process from start to finish.",
    },
    {
      title: "Integrate with your favorite AI tools",
      description: "Works seamlessly with Cursor, Copilot, Claude and other AI coding assistants.",
    },
    {
      title: "Stay on track with clear direction",
      description: "Follow a structured approach that keeps your development focused and efficient.",
    },
  ]

  return (
    <section id="problem-solution" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Problem Column */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-red-700 rounded-full text-base font-medium">
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI coding feels fast, until it falls apart.</h2>
            <p className="text-xl font-normal text-black mb-8">
              You've probably used AI tools like Cursor or Windsurf. They're fast, but they often generate more chaos
              than clarity.
            </p>

            <div className="space-y-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{problem.title}</h3>
                    <p className="text-lg font-normal text-black">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-base font-medium">
              The Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">CodeMap brings clarity</h2>
            <p className="text-xl font-normal text-black mb-8">
              A structured approach to planning your AI-assisted development before writing a single line of code.
            </p>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{solution.title}</h3>
                    <p className="text-lg font-normal text-black">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
