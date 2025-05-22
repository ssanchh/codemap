export default function SolutionSection() {
  const features = [
    {
      icon: "📘",
      title: "Project blueprint from a short prompt",
      description: "Turn vague ideas into structured project plans in minutes",
    },
    {
      icon: "🧠",
      title: "Auto-generated docs: PRDs, flows, prompts",
      description: "Get comprehensive documentation that guides your development",
    },
    {
      icon: "⚙️",
      title: "Works with Cursor, Lovable, Windsurf, and more",
      description: "Seamlessly integrate with your favorite AI coding tools",
    },
    {
      icon: "📂",
      title: "Download structured docs or copy to your tools",
      description: "Export your project structure in multiple formats",
    },
  ]

  return (
    <section id="solution" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Compass Keeps You on Track</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It creates a clear structure before you write a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 bg-white hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative w-full max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
            <img
              src="/placeholder.svg?height=720&width=1280&query=clean project structure diagram with compass navigation elements"
              alt="Code Compass Project Structure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
