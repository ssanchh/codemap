"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
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
    // Scroll to the hero section email form
    const heroSection = document.querySelector("section")
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" })
      // Focus on the email input after scrolling
      setTimeout(() => {
        const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement
        if (emailInput) {
          emailInput.focus()
        }
      }, 500)
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
          <Image src="/codemap-logo-new.png" alt="CodeMap Logo" width={180} height={50} />
        </Link>

        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#problem-solution"
              className="text-xl font-bold text-black hover:text-black/80 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("problem-solution")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Why CodeMap
            </Link>
            <Link
              href="#how-it-works"
              className="text-xl font-bold text-black hover:text-black/80 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-xl font-bold text-black hover:text-black/80 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              For Who
            </Link>
          </nav>

          <Button
            onClick={scrollToEmailForm}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base font-medium"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}
