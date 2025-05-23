"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToEmailForm = () => {
    const heroSection = document.querySelector("section")
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement
        if (emailInput) {
          emailInput.focus()
        }
      }, 500)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-black">{"{CodeMap}"}</div>
        </Link>

        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-lg font-medium text-black hover:text-black/80 transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-lg font-medium text-black hover:text-black/80 transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("analogy")}
              className="text-lg font-medium text-black hover:text-black/80 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-lg font-medium text-black hover:text-black/80 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-lg font-medium text-black hover:text-black/80 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button
            onClick={scrollToEmailForm}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base font-medium"
          >
            Join Waiting List
          </Button>
        </div>
      </div>
    </header>
  )
}
