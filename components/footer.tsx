import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="text-xl font-bold text-black">{"{CodeMap}"}</div>
            <span className="text-gray-600">RepoScope + GuardRails</span>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">© 2025 CodeMap. Let your AI code safely at scale.</div>
      </div>
    </footer>
  )
}
