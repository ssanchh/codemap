"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface EmailFormProps {
  className?: string
  buttonText?: string
  placeholder?: string
  trustText?: string
}

export default function EmailForm({
  className,
  buttonText = "Join the Waitlist",
  placeholder = "Enter your email",
  trustText,
}: EmailFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-md", className)}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          disabled={isSubmitting || isSubmitted}
        />
        <Button
          type="submit"
          className="h-14 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 px-6 text-base"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? "Submitting..." : isSubmitted ? "Joined!" : buttonText}
        </Button>
      </div>
      {trustText && <p className="text-base text-black font-light mt-2">{trustText}</p>}
      {isSubmitted && (
        <p className="text-base text-green-600 mt-2 animate-fade-in">Thanks for joining! We'll be in touch soon.</p>
      )}
    </form>
  )
}
