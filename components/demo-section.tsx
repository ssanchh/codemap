import { CheckCircle } from "lucide-react"

export default function DemoSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">See it in action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how GuardRails validates AI changes before they reach your codebase.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-gray-600">Demo Video Placeholder</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-black font-medium">GuardRails Test Results</span>
              </div>
              <div className="text-green-600 font-mono">✅ 28 / 28 tests passed</div>
            </div>
            <p className="text-gray-600 mt-2">
              Cursor proposes a patch. GuardRails validates it instantly. Click Accept with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
