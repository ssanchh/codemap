export default function AnalogySection() {
  return (
    <section id="analogy" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What we do - The House Renovation Analogy</h2>
        </div>

        {/* Clean, minimal before/after layout */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Before Side */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-black mb-6">Before CodeMap</h3>

              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <span className="font-medium">The Problem:</span> Your AI coding assistant is like a handyman who only
                  sees the room you're in.
                </p>

                <p className="text-gray-600">
                  When installing a sink, he doesn't know about the plumbing three rooms away. He works fast but often
                  breaks connections he can't see.
                </p>

                <p className="text-gray-500 italic">Just like AI tools that don't understand your entire codebase.</p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Result: Broken connections and constant fixes</p>
                </div>
              </div>
            </div>

            {/* After Side */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-black mb-6">With CodeMap</h3>

              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <span className="font-medium">The Solution:</span> Your AI now has a complete blueprint of the entire
                  house.
                </p>

                <p className="text-gray-600">
                  CodeMap acts as your site manager, showing how everything connects. It automatically provides the
                  right context for every change.
                </p>

                <p className="text-gray-500 italic">
                  Your AI now understands your project's structure and dependencies.
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-800">
                    Result: Code that fits perfectly into your project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
