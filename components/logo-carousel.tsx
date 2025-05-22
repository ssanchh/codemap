"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Array of logos with normalized heights - making the bolt logo (3.svg) smaller
  const logos = [
    { name: "Logo 1", src: "/logos/logo1.svg", height: 30 },
    { name: "Replit", src: "/logos/logo2.svg", height: 30 },
    { name: "Lovable", src: "/logos/logo3.svg", height: 15 }, // Reduced to half height (bolt logo)
    { name: "Lemon.io", src: "/logos/logo4.svg", height: 30 },
    { name: "Logo 5", src: "/logos/logo5.svg", height: 30 },
    { name: "Logo 6", src: "/logos/logo6.svg", height: 30 },
    // Duplicate logos to create seamless loop
    { name: "Logo 1", src: "/logos/logo1.svg", height: 30 },
    { name: "Replit", src: "/logos/logo2.svg", height: 30 },
    { name: "Lovable", src: "/logos/logo3.svg", height: 15 }, // Reduced to half height (bolt logo)
    { name: "Lemon.io", src: "/logos/logo4.svg", height: 30 },
    { name: "Logo 5", src: "/logos/logo5.svg", height: 30 },
    { name: "Logo 6", src: "/logos/logo6.svg", height: 30 },
  ]

  // Replace the useEffect hook with this simplified version that ensures the animation runs properly
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animation function with increased speed
    const animate = () => {
      if (!isPaused) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += 0.5 // Increased speed to be visible
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    let animationId = requestAnimationFrame(animate)

    // Pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting && animationId) {
          cancelAnimationFrame(animationId)
          animationId = 0
        } else if (entries[0].isIntersecting && !animationId) {
          animationId = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(container)

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [isPaused])

  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Works with your favorite AI tools</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          CodeMap integrates seamlessly with all major AI coding assistants
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex items-center space-x-16 overflow-x-auto scrollbar-hide py-8 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 relative flex items-center justify-center h-[30px]">
            <div className="flex items-center justify-center">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.height * 4} // Maintain aspect ratio based on height
                height={logo.height}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
