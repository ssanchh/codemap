import { Map, Zap, FileText } from "lucide-react"

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">CodeMap gives AI the full picture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A live dependency map that automatically injects the right context into every AI prompt.
          </p>
        </div>

        {/* Process Flow Layout instead of cards */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-0 md:w-1/3">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-black">1. Maps Your Codebase</h4>
              <p className="text-gray-700">
                Builds a live dependency graph of your entire project, understanding how every file connects.
              </p>
            </div>

            {/* Connector Lines (Desktop only) */}
            <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-0 md:w-1/3">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-black">2. Injects Smart Context</h4>
              <p className="text-gray-700">
                Automatically includes relevant files and dependencies in AI prompts so nothing gets missed.
              </p>
            </div>

            {/* Connector Lines (Desktop only) */}
            <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-blue-400 to-blue-300"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-black">3. Optimizes Token Usage</h4>
              <p className="text-gray-700">
                Shapes prompts to include only essential context, saving API costs while maximizing accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
