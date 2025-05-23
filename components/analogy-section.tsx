import { Map, Shield } from "lucide-react"

export default function AnalogySection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What we do - The House Renovation Analogy</h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-4">
              Using AI to code with tools like Cursor is like hiring a lightning-fast handyman to renovate your house.
            </p>
            <p className="text-xl text-gray-700">He works incredibly fast, but there are two critical problems:</p>
          </div>

          {/* Problems Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Problem 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-black mb-4">1. No Complete Blueprint</h3>
              <p className="text-lg text-gray-700 mb-4">
                The handyman only sees the room you're in, not how the plumbing connects three rooms away. When he
                installs a sink, he might break a pipe elsewhere.
              </p>
              <p className="text-lg text-blue-600 italic">
                Just like AI tools that don't see all your files and break connections.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-black mb-4">2. No Inspector</h3>
              <p className="text-lg text-gray-700 mb-4">
                You assume the work is solid, but nobody checks if it's safe or if everything still works properly.
              </p>
              <p className="text-lg text-blue-600 italic">
                Just like accepting AI code without knowing if your tests still pass.
              </p>
            </div>
          </div>

          {/* Solution Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              RepoScope + GuardRails: Your Site Manager & Building Inspector
            </h3>
          </div>

          {/* Solutions Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* RepoScope */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black">RepoScope: The Site Manager</h4>
              </div>
              <p className="text-lg text-gray-700">
                Gives the AI a complete map of your codebase so it knows exactly what it's working with.
              </p>
            </div>

            {/* GuardRails */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black">GuardRails: The Inspector</h4>
              </div>
              <p className="text-lg text-gray-700">
                Automatically tests changes before they're approved, preventing broken code from shipping.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <p className="text-xl text-white font-medium">
              The result? You write prompts as usual, but now your AI has context and safety checks. Ship faster—with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
