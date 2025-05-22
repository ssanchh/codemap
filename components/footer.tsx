import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Image src="/codemap-logo-new.png" alt="CodeMap Logo" width={140} height={40} />
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="#" className="text-lg font-normal text-black hover:text-black/80 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-lg font-normal text-black hover:text-black/80 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-lg font-normal text-black hover:text-black/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-base font-light text-black">
          © 2025 CodeMap. Built with love for builders.
        </div>
      </div>
    </footer>
  )
}
