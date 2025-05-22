"use client"

import { useState } from "react"
import Image from "next/image"

export default function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Array of logos with normalized heights
  const logos = [
    { name: "Logo 1", src: "/logos/logo1.svg", height: 30 },
    { name: "Replit", src: "/logos/logo2.svg", height: 30 },
    { name: "Lovable", src: "/logos/logo3.svg", height: 15 },
    { name: "Lemon.io", src: "/logos/logo4.svg", height: 30 },
    { name: "Logo 5", src: "/logos/logo5.svg", height: 30 },
    { name: "Logo 6", src: "/logos/logo6.svg", height: 22 },
  ]

  // Duplicate logos to create a seamless loop
  const allLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-12 overflow-hidden bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Works with your favorite AI tools</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          CodeMap integrates seamlessly with all major AI coding assistants
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div
          className={`flex items-center space-x-16 py-8 px-6 logo-carousel ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allLogos.map((logo, index) => (
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
      </div>

      <style jsx>{`
        .logo-carousel {
          display: flex;
          animation: scroll 60s linear infinite;
          width: max-content;
        }
        
        .paused {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-16px * 6 - 100% / 3));
          }
        }
      `}</style>
    </section>
  )
}
