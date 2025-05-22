export default function ProblemSection() {
  const painPoints = [
    {
      icon: "💭",
      text: "Hallucinated components",
      description: "AI tools invent non-existent libraries and components",
    },
    {
      icon: "🧩",
      text: "Broken logic chains",
      description: "Code that looks right but falls apart when connected",
    },
    {
      icon: "📂",
      text: "Lost prompts and unclear structure",
      description: "No clear path from idea to implementation",
    },
    {
      icon: "⛔",
      text: "Lack of project direction",
      description: "Endless tweaking without a coherent plan",
    },
  ]

  return (
    <section id="problem" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Coding is Powerful. But It's Easy to Get Lost.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern AI coding assistants like Cursor, Gemini, and Copilot are incredible. But they often hallucinate,
            invent fake APIs, or rewrite your logic. You start fast — and end up confused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{point.text}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
