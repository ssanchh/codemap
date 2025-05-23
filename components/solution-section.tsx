import { Map, Shield } from "lucide-react"

export default function SolutionSection() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Two layers of protection for AI coding</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RepoScope + GuardRails work together to make AI coding safe and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* RepoScope */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mr-4">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black">RepoScope</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Builds a live dependency map. Adds the right code to every AI prompt so it stops guessing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Smart context injection</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Token-saving prompt shaping</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Live dependency tracking</span>
              </div>
            </div>
          </div>

          {/* GuardRails */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-50 rounded-lg text-green-600 mr-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black">GuardRails</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Runs your unit tests in the background and blocks broken patches before they hit your repo.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Pre-merge test validation</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>License-safe change logging</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Real-time safety checks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
